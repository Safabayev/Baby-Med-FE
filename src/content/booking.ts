import type { Localized } from "@/lib/i18n";
import type { BookingErrorCode, BookingService } from "@/lib/booking";

export const bookingServices: { id: BookingService; label: Localized }[] = [
  {
    id: "pregnancy",
    label: { ru: "Ведение беременности", uz: "Homiladorlikni kuzatish" },
  },
  { id: "birth", label: { ru: "Роды", uz: "Tug'ruq" } },
  {
    id: "cesarean",
    label: { ru: "Кесарево сечение", uz: "Keser kesish amaliyoti" },
  },
  { id: "neonatology", label: { ru: "Неонатология", uz: "Neonatologiya" } },
  { id: "pediatrics", label: { ru: "Педиатрия", uz: "Pediatriya" } },
  { id: "gynecology", label: { ru: "Гинекология", uz: "Ginekologiya" } },
  { id: "ultrasound", label: { ru: "УЗД-диагностика", uz: "UZD diagnostikasi" } },
  {
    id: "lab",
    label: { ru: "Лабораторные анализы", uz: "Laboratoriya tahlillari" },
  },
  { id: "other", label: { ru: "Другое / не знаю", uz: "Boshqa / bilmayman" } },
];

export const bookingForm = {
  kicker: { ru: "Запись на приём", uz: "Qabulga yozilish" } satisfies Localized,
  title: { ru: "Записаться в клинику", uz: "Klinikaga yozilish" } satisfies Localized,
  lead: {
    ru: "Заполните форму — администратор перезвонит и подтвердит удобное время. Поля со звёздочкой обязательны.",
    uz: "Formani to'ldiring — administrator qo'ng'iroq qilib, qulay vaqtni tasdiqlaydi. Yulduzcha bilan belgilangan maydonlar majburiy.",
  } satisfies Localized,
  nameLabel: { ru: "Имя и фамилия", uz: "Ism va familiya" } satisfies Localized,
  namePlaceholder: { ru: "Например: Дилноза Юсупова", uz: "Masalan: Dilnoza Yusupova" } satisfies Localized,
  phoneLabel: { ru: "Телефон", uz: "Telefon" } satisfies Localized,
  phonePlaceholder: { ru: "+998 90 123-45-67", uz: "+998 90 123-45-67" } satisfies Localized,
  phoneHint: {
    ru: "Узбекский номер, можно без кода страны",
    uz: "O'zbekiston raqami, mamlakat kodisiz ham bo'ladi",
  } satisfies Localized,
  serviceLabel: { ru: "Направление", uz: "Yo'nalish" } satisfies Localized,
  servicePlaceholder: { ru: "Выберите направление", uz: "Yo'nalishni tanlang" } satisfies Localized,
  dateLabel: { ru: "Желаемая дата", uz: "Istalgan sana" } satisfies Localized,
  commentLabel: { ru: "Комментарий", uz: "Izoh" } satisfies Localized,
  commentPlaceholder: {
    ru: "Срок беременности, жалобы, удобное время звонка…",
    uz: "Homiladorlik muddati, shikoyatlar, qo'ng'iroq uchun qulay vaqt…",
  } satisfies Localized,
  optional: { ru: "необязательно", uz: "ixtiyoriy" } satisfies Localized,
  submit: { ru: "Отправить заявку", uz: "Arizani yuborish" } satisfies Localized,
  submitting: { ru: "Отправляем…", uz: "Yuborilmoqda…" } satisfies Localized,
  successTitle: { ru: "Заявка отправлена", uz: "Ariza yuborildi" } satisfies Localized,
  successText: {
    ru: "Мы получили вашу заявку. Администратор перезвонит в ближайшее время и подтвердит запись.",
    uz: "Arizangizni qabul qildik. Administrator tez orada qo'ng'iroq qilib, yozuvni tasdiqlaydi.",
  } satisfies Localized,
  successAgain: { ru: "Отправить ещё одну заявку", uz: "Yana ariza yuborish" } satisfies Localized,
  failTitle: { ru: "Не удалось отправить", uz: "Yuborib bo'lmadi" } satisfies Localized,
  failText: {
    ru: "Что-то пошло не так. Попробуйте ещё раз или позвоните нам напрямую:",
    uz: "Nimadir noto'g'ri ketdi. Qayta urinib ko'ring yoki bevosita qo'ng'iroq qiling:",
  } satisfies Localized,
  callInstead: {
    ru: "Не хотите заполнять форму? Позвоните:",
    uz: "Formani to'ldirishni xohlamaysizmi? Qo'ng'iroq qiling:",
  } satisfies Localized,
};

export const bookingErrors: Record<BookingErrorCode, Localized> = {
  required: { ru: "Заполните это поле", uz: "Bu maydonni to'ldiring" },
  nameTooShort: { ru: "Слишком короткое имя", uz: "Ism juda qisqa" },
  nameTooLong: { ru: "Слишком длинное имя", uz: "Ism juda uzun" },
  phoneInvalid: {
    ru: "Введите номер в формате +998 90 123-45-67",
    uz: "Raqamni +998 90 123-45-67 ko'rinishida kiriting",
  },
  serviceInvalid: { ru: "Выберите направление из списка", uz: "Ro'yxatdan yo'nalishni tanlang" },
  dateInvalid: { ru: "Проверьте дату", uz: "Sanani tekshiring" },
  datePast: { ru: "Дата уже прошла", uz: "Bu sana o'tib ketgan" },
  commentTooLong: { ru: "Не больше 500 символов", uz: "500 belgidan oshmasin" },
};
