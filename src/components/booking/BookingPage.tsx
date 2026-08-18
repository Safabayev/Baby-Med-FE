import type { Locale } from "@/i18n/routing";
import { bookingForm } from "@/content/booking";
import { contactsBlock } from "@/content/copy";
import { site } from "@/content/site";
import { t } from "@/lib/i18n";
import { BookingForm } from "./BookingForm";

export function BookingPage({ locale }: { locale: Locale }) {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-pink-light via-page to-brand-teal-light py-14 dark:bg-page dark:bg-none">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <span className="text-sm font-semibold tracking-wider text-brand-pink uppercase">
            {t(bookingForm.kicker, locale)}
          </span>
          <h1 className="mt-3 mb-4 text-3xl font-bold text-ink md:text-5xl">
            {t(bookingForm.title, locale)}
          </h1>
          <p className="mx-auto max-w-2xl text-muted">{t(bookingForm.lead, locale)}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[minmax(0,1fr)_320px]">
          <BookingForm locale={locale} />

          <aside className="space-y-5">
            <div className="rounded-2xl border border-line bg-card p-6">
              <h2 className="mb-4 font-bold text-ink">{t(contactsBlock.title, locale)}</h2>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-muted">{t(contactsBlock.phone, locale)}</dt>
                  <dd>
                    <a
                      href={site.phoneHref}
                      className="font-semibold text-brand-pink hover:underline"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-muted">{t(contactsBlock.address, locale)}</dt>
                  <dd className="font-medium text-ink">{t(site.address, locale)}</dd>
                </div>
                <div>
                  <dt className="text-muted">{t(contactsBlock.hours, locale)}</dt>
                  <dd className="font-medium text-ink">{t(site.hours, locale)}</dd>
                </div>
              </dl>
              <a
                href={site.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block rounded-xl border border-line bg-card py-2.5 text-center text-sm font-semibold text-brand-pink transition hover:bg-soft"
              >
                {t(contactsBlock.openMap, locale)}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
