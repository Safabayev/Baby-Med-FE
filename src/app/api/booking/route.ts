import { validateBooking, type BookingInput } from "@/lib/booking";

/** Заявки обрабатываем на лету — кешировать ответы нельзя. */
export const dynamic = "force-dynamic";

const WEBHOOK_URL = process.env.BOOKING_SHEET_WEBHOOK_URL;
const WEBHOOK_TOKEN = process.env.BOOKING_SHEET_TOKEN;
const WEBHOOK_TIMEOUT_MS = 10_000;

function asString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, reason: "badRequest" }, { status: 400 });
  }

  const raw = (body ?? {}) as Record<string, unknown>;

  // Скрытое поле, которое человек не видит: заполнено — значит это бот.
  // Отвечаем успехом, чтобы не подсказывать спамеру, что его отсекли.
  if (asString(raw.company).trim()) {
    return Response.json({ ok: true });
  }

  const input: BookingInput = {
    name: asString(raw.name),
    phone: asString(raw.phone),
    service: asString(raw.service),
    date: asString(raw.date),
    comment: asString(raw.comment),
  };

  const result = validateBooking(input);
  if (!result.ok) {
    return Response.json({ ok: false, reason: "invalid", errors: result.errors }, { status: 422 });
  }

  if (!WEBHOOK_URL) {
    console.error(
      "BOOKING_SHEET_WEBHOOK_URL не задан — заявка не записана в таблицу.",
    );
    return Response.json({ ok: false, reason: "notConfigured" }, { status: 503 });
  }

  const locale = asString(raw.locale) === "uz" ? "uz" : "ru";
  const row = {
    ...result.values,
    locale,
    submittedAt: new Date().toISOString(),
    token: WEBHOOK_TOKEN ?? "",
  };

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(row),
      signal: AbortSignal.timeout(WEBHOOK_TIMEOUT_MS),
      // Apps Script отвечает редиректом на googleusercontent.com — идём за ним.
      redirect: "follow",
    });

    if (!response.ok) {
      console.error(
        `Google Sheets отклонил заявку: ${response.status} ${await response.text()}`,
      );
      return Response.json({ ok: false, reason: "sheetRejected" }, { status: 502 });
    }
  } catch (error) {
    console.error("Не удалось передать заявку в Google Sheets:", error);
    return Response.json({ ok: false, reason: "sheetUnreachable" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
