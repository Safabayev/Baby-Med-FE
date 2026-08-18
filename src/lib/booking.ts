/**
 * Общие правила заявки на приём. Один и тот же модуль используется формой
 * в браузере и обработчиком /api/booking, чтобы проверки не разъезжались.
 */

export const BOOKING_SERVICES = [
  "pregnancy",
  "birth",
  "cesarean",
  "neonatology",
  "pediatrics",
  "gynecology",
  "ultrasound",
  "lab",
  "other",
] as const;

export type BookingService = (typeof BOOKING_SERVICES)[number];

export type BookingField = "name" | "phone" | "service" | "date" | "comment";

export type BookingErrorCode =
  | "required"
  | "nameTooShort"
  | "nameTooLong"
  | "phoneInvalid"
  | "serviceInvalid"
  | "dateInvalid"
  | "datePast"
  | "commentTooLong";

export type BookingInput = {
  name: string;
  phone: string;
  service: string;
  date: string;
  comment: string;
};

export type BookingValues = {
  name: string;
  /** Телефон в формате +998XXXXXXXXX. */
  phone: string;
  service: BookingService;
  /** Пустая строка, если дата не выбрана. */
  date: string;
  comment: string;
};

export type BookingErrors = Partial<Record<BookingField, BookingErrorCode>>;

export const emptyBooking: BookingInput = {
  name: "",
  phone: "",
  service: "",
  date: "",
  comment: "",
};

const NAME_MIN = 2;
const NAME_MAX = 80;
const COMMENT_MAX = 500;
/** Заявки принимаем не дальше, чем на год вперёд. */
const MAX_DAYS_AHEAD = 365;

/**
 * Приводит узбекский номер к виду +998XXXXXXXXX.
 * Принимает записи с пробелами, дефисами и скобками, с кодом страны и без.
 * Возвращает null, если номер не похож на узбекский мобильный/городской.
 */
export function normalizePhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");

  if (digits.length === 9) {
    return `+998${digits}`;
  }
  if (digits.length === 12 && digits.startsWith("998")) {
    return `+${digits}`;
  }
  return null;
}

/** Сегодняшняя дата в Ташкенте как YYYY-MM-DD. */
export function todayInTashkent(now: Date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Tashkent",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

/** Последняя дата, на которую можно записаться, как YYYY-MM-DD. */
export function maxBookingDate(now: Date = new Date()): string {
  const limit = new Date(now.getTime() + MAX_DAYS_AHEAD * 24 * 60 * 60 * 1000);
  return todayInTashkent(limit);
}

function isBookingService(value: string): value is BookingService {
  return (BOOKING_SERVICES as readonly string[]).includes(value);
}

export type BookingValidation =
  | { ok: true; values: BookingValues }
  | { ok: false; errors: BookingErrors };

export function validateBooking(
  input: BookingInput,
  now: Date = new Date(),
): BookingValidation {
  const errors: BookingErrors = {};

  const name = input.name.trim().replace(/\s+/g, " ");
  if (!name) {
    errors.name = "required";
  } else if (name.length < NAME_MIN) {
    errors.name = "nameTooShort";
  } else if (name.length > NAME_MAX) {
    errors.name = "nameTooLong";
  }

  const rawPhone = input.phone.trim();
  const phone = normalizePhone(rawPhone);
  if (!rawPhone) {
    errors.phone = "required";
  } else if (!phone) {
    errors.phone = "phoneInvalid";
  }

  const service = input.service.trim();
  if (!service) {
    errors.service = "required";
  } else if (!isBookingService(service)) {
    errors.service = "serviceInvalid";
  }

  const date = input.date.trim();
  if (date) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(date))) {
      errors.date = "dateInvalid";
    } else if (date < todayInTashkent(now)) {
      errors.date = "datePast";
    } else if (date > maxBookingDate(now)) {
      errors.date = "dateInvalid";
    }
  }

  const comment = input.comment.trim();
  if (comment.length > COMMENT_MAX) {
    errors.comment = "commentTooLong";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    values: {
      name,
      phone: phone as string,
      service: service as BookingService,
      date,
      comment,
    },
  };
}
