import type { Doctor } from "@/content/doctors";
import type { Locale } from "@/i18n/routing";
import { t } from "@/lib/i18n";

const doctorTones = {
  pink: {
    card: "border-pink-100 from-pink-50 dark:border-line dark:from-card",
    avatar: "from-brand-pink to-brand-pink-dark shadow-pink-200/50 dark:shadow-none",
    role: "text-brand-pink",
  },
  teal: {
    card: "border-teal-100 from-teal-50 dark:border-line dark:from-card",
    avatar: "from-brand-teal to-brand-teal-dark shadow-teal-200/50 dark:shadow-none",
    role: "text-brand-teal dark:text-brand-pink",
  },
  sky: {
    card: "border-sky-100 from-sky-50 dark:border-line dark:from-card",
    avatar:
      "from-sky-400 to-sky-600 shadow-sky-200/50 dark:from-brand-pink dark:to-brand-pink-dark dark:shadow-none",
    role: "text-sky-600 dark:text-brand-pink",
  },
  violet: {
    card: "border-violet-100 from-violet-50 dark:border-line dark:from-card",
    avatar:
      "from-violet-400 to-violet-600 shadow-violet-200/50 dark:from-brand-pink dark:to-brand-pink-dark dark:shadow-none",
    role: "text-violet-600 dark:text-brand-pink",
  },
  emerald: {
    card: "border-emerald-100 from-emerald-50 dark:border-line dark:from-card",
    avatar:
      "from-emerald-400 to-emerald-600 shadow-emerald-200/50 dark:from-brand-pink dark:to-brand-pink-dark dark:shadow-none",
    role: "text-emerald-700 dark:text-brand-pink",
  },
  amber: {
    card: "border-amber-100 from-amber-50 dark:border-line dark:from-card",
    avatar:
      "from-amber-400 to-amber-600 shadow-amber-200/50 dark:from-brand-pink dark:to-brand-pink-dark dark:shadow-none",
    role: "text-amber-700 dark:text-brand-pink",
  },
};

type Props = {
  doctor: Doctor;
  locale: Locale;
};

export function DoctorCard({ doctor, locale }: Props) {
  const tone = doctorTones[doctor.tone];

  return (
    <div
      className={`card-hover flex flex-col rounded-2xl border bg-gradient-to-b to-card p-6 text-center ${tone.card}`}
    >
      <div
        className={`mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br text-2xl font-bold text-white shadow-lg ${tone.avatar}`}
      >
        {doctor.initials}
      </div>
      <h3 className="text-lg leading-snug font-bold text-ink">{t(doctor.name, locale)}</h3>
      <p className={`mt-2 text-sm font-medium ${tone.role}`}>{t(doctor.role, locale)}</p>
      {doctor.note ? (
        <p className="mt-1 text-xs text-muted">{t(doctor.note, locale)}</p>
      ) : null}
      <a
        href={doctor.phoneHref}
        className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-card/70 px-4 py-2 text-sm font-semibold text-brand-pink transition hover:bg-soft"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        {doctor.phone}
      </a>
    </div>
  );
}
