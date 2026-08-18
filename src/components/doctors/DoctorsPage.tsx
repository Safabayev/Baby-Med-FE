import type { Locale } from "@/i18n/routing";
import { doctorsPage } from "@/content/copy";
import { doctorsBySpecialty, specialtyGroups } from "@/content/doctors";
import { site } from "@/content/site";
import { t } from "@/lib/i18n";
import { DoctorCard } from "./DoctorCard";

export function DoctorsPage({ locale }: { locale: Locale }) {
  const groups = specialtyGroups
    .map((group) => ({ ...group, members: doctorsBySpecialty(group.id) }))
    .filter((group) => group.members.length > 0);

  return (
    <>
      <section className="bg-gradient-to-br from-brand-pink-light via-page to-brand-teal-light py-14 dark:bg-page dark:bg-none">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <span className="text-sm font-semibold tracking-wider text-brand-pink uppercase">
            {t(doctorsPage.kicker, locale)}
          </span>
          <h1 className="mt-3 mb-4 text-3xl font-bold text-ink md:text-5xl">
            {t(doctorsPage.title, locale)}
          </h1>
          <p className="mx-auto max-w-2xl text-muted">{t(doctorsPage.lead, locale)}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl space-y-14 px-4">
          {groups.map((group) => (
            <div key={group.id}>
              <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-ink">
                <span className="text-3xl">{group.icon}</span>
                {t(group.title, locale)}
                <span className="text-base font-medium text-muted">
                  ({group.members.length})
                </span>
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {group.members.map((doctor) => (
                  <DoctorCard key={doctor.id} doctor={doctor} locale={locale} />
                ))}
              </div>
            </div>
          ))}

          <div className="rounded-2xl bg-brand-pink-light p-6 text-center text-sm text-muted dark:bg-soft">
            <p>
              {t(doctorsPage.note, locale)}{" "}
              <a href={site.phoneHref} className="font-semibold text-brand-pink">
                {site.phone}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
