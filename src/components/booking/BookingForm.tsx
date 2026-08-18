"use client";

import { useId, useState } from "react";
import { bookingErrors, bookingForm, bookingServices } from "@/content/booking";
import { site } from "@/content/site";
import type { Locale } from "@/i18n/routing";
import {
  emptyBooking,
  maxBookingDate,
  todayInTashkent,
  validateBooking,
  type BookingErrors,
  type BookingInput,
} from "@/lib/booking";
import { t } from "@/lib/i18n";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full rounded-xl border border-line bg-card px-4 py-3 text-ink outline-none transition placeholder:text-muted/70 focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/25";
const fieldErrorClass = "border-red-500 focus:border-red-500 focus:ring-red-500/25";

export function BookingForm({ locale }: { locale: Locale }) {
  const formId = useId();
  const [values, setValues] = useState<BookingInput>(emptyBooking);
  const [errors, setErrors] = useState<BookingErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [honeypot, setHoneypot] = useState("");

  const minDate = todayInTashkent();
  const maxDate = maxBookingDate();

  function update(field: keyof BookingInput, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
    if (status === "error") {
      setStatus("idle");
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const result = validateBooking(values);
    if (!result.ok) {
      setErrors(result.errors);
      setStatus("idle");
      const firstField = Object.keys(result.errors)[0];
      document.getElementById(`${formId}-${firstField}`)?.focus();
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...result.values, locale, company: honeypot }),
      });
      const data = (await response.json().catch(() => null)) as
        | { ok?: boolean; errors?: BookingErrors }
        | null;

      if (!response.ok || !data?.ok) {
        if (data?.errors) {
          setErrors(data.errors);
        }
        setStatus("error");
        return;
      }

      setValues(emptyBooking);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="soft-shadow rounded-3xl border border-line bg-card p-8 text-center">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand-teal-light text-3xl dark:bg-soft">
          ✓
        </div>
        <h3 className="mb-2 text-2xl font-bold text-ink">
          {t(bookingForm.successTitle, locale)}
        </h3>
        <p className="mx-auto mb-6 max-w-md text-muted">
          {t(bookingForm.successText, locale)}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="rounded-xl border border-line bg-card px-6 py-3 font-semibold text-brand-pink transition hover:bg-soft"
        >
          {t(bookingForm.successAgain, locale)}
        </button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="soft-shadow relative rounded-3xl border border-line bg-card p-6 md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field
          id={`${formId}-name`}
          label={t(bookingForm.nameLabel, locale)}
          required
          error={errors.name ? t(bookingErrors[errors.name], locale) : undefined}
        >
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={80}
            placeholder={t(bookingForm.namePlaceholder, locale)}
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${formId}-name-error` : undefined}
            className={`${fieldClass} ${errors.name ? fieldErrorClass : ""}`}
          />
        </Field>

        <Field
          id={`${formId}-phone`}
          label={t(bookingForm.phoneLabel, locale)}
          required
          hint={t(bookingForm.phoneHint, locale)}
          error={errors.phone ? t(bookingErrors[errors.phone], locale) : undefined}
        >
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            placeholder={t(bookingForm.phonePlaceholder, locale)}
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${formId}-phone-error` : undefined}
            className={`${fieldClass} ${errors.phone ? fieldErrorClass : ""}`}
          />
        </Field>

        <Field
          id={`${formId}-service`}
          label={t(bookingForm.serviceLabel, locale)}
          required
          error={errors.service ? t(bookingErrors[errors.service], locale) : undefined}
        >
          <select
            id={`${formId}-service`}
            name="service"
            required
            value={values.service}
            onChange={(event) => update("service", event.target.value)}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? `${formId}-service-error` : undefined}
            className={`${fieldClass} ${errors.service ? fieldErrorClass : ""} ${
              values.service ? "" : "text-muted"
            }`}
          >
            <option value="">{t(bookingForm.servicePlaceholder, locale)}</option>
            {bookingServices.map((service) => (
              <option key={service.id} value={service.id} className="text-ink">
                {t(service.label, locale)}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id={`${formId}-date`}
          label={t(bookingForm.dateLabel, locale)}
          hint={t(bookingForm.optional, locale)}
          error={errors.date ? t(bookingErrors[errors.date], locale) : undefined}
        >
          <input
            id={`${formId}-date`}
            name="date"
            type="date"
            min={minDate}
            max={maxDate}
            value={values.date}
            onChange={(event) => update("date", event.target.value)}
            aria-invalid={Boolean(errors.date)}
            aria-describedby={errors.date ? `${formId}-date-error` : undefined}
            className={`${fieldClass} ${errors.date ? fieldErrorClass : ""}`}
          />
        </Field>

        <div className="md:col-span-2">
          <Field
            id={`${formId}-comment`}
            label={t(bookingForm.commentLabel, locale)}
            hint={t(bookingForm.optional, locale)}
            error={errors.comment ? t(bookingErrors[errors.comment], locale) : undefined}
          >
            <textarea
              id={`${formId}-comment`}
              name="comment"
              rows={4}
              maxLength={500}
              placeholder={t(bookingForm.commentPlaceholder, locale)}
              value={values.comment}
              onChange={(event) => update("comment", event.target.value)}
              aria-invalid={Boolean(errors.comment)}
              aria-describedby={errors.comment ? `${formId}-comment-error` : undefined}
              className={`${fieldClass} resize-y ${errors.comment ? fieldErrorClass : ""}`}
            />
          </Field>
        </div>
      </div>

      {/* Ловушка для ботов: скрыта от людей, но заполняется автозаполнялками спама. */}
      <div aria-hidden="true" className="absolute h-0 w-0 overflow-hidden opacity-0">
        <label htmlFor={`${formId}-company`}>Company</label>
        <input
          id={`${formId}-company`}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      {status === "error" ? (
        <div
          role="alert"
          className="mt-6 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200"
        >
          <strong className="font-semibold">{t(bookingForm.failTitle, locale)}.</strong>{" "}
          {t(bookingForm.failText, locale)}{" "}
          <a href={site.phoneHref} className="font-semibold underline">
            {site.phone}
          </a>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 w-full rounded-2xl bg-brand-pink px-8 py-4 text-lg font-bold text-white shadow-xl shadow-pink-200/50 transition hover:bg-brand-pink-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {t(submitting ? bookingForm.submitting : bookingForm.submit, locale)}
      </button>

      <p className="mt-4 text-center text-sm text-muted">
        {t(bookingForm.callInstead, locale)}{" "}
        <a href={site.phoneHref} className="font-semibold text-brand-pink hover:underline">
          {site.phone}
        </a>
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  required = false,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required ? <span className="ml-0.5 text-brand-pink">*</span> : null}
        {hint && !error ? (
          <span className="ml-1.5 font-normal text-muted">({hint})</span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm font-medium text-red-600 dark:text-red-400">
          {error}
        </p>
      ) : null}
    </div>
  );
}
