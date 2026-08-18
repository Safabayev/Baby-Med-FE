import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { labPage, pricesPage } from "@/content/copy";
import { labGroups } from "@/content/labPrices";
import { site } from "@/content/site";
import { t } from "@/lib/i18n";
import { PriceGroups } from "./PriceGroups";

export function LabPricesPage({ locale }: { locale: Locale }) {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-teal-light via-page to-brand-pink-light py-14 dark:bg-page dark:bg-none">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <span className="text-sm font-semibold tracking-wider text-brand-teal uppercase dark:text-brand-pink">
            {t(labPage.kicker, locale)}
          </span>
          <h1 className="mt-3 mb-4 text-3xl font-bold text-ink md:text-5xl">
            {t(labPage.title, locale)}
          </h1>
          <p className="mx-auto max-w-2xl text-muted">{t(labPage.lead, locale)}</p>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-card/80 px-4 py-1.5 text-sm font-medium text-muted backdrop-blur">
            {t(site.legalName, locale)}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl space-y-12 px-4">
          <PriceGroups groups={labGroups} locale={locale} />

          <div className="rounded-2xl bg-brand-teal-light p-6 text-center text-sm text-muted dark:bg-soft">
            <p>
              <strong>{t(labPage.noteStrong, locale)}</strong> {t(labPage.note, locale)}{" "}
              <a href={site.phoneHref} className="font-semibold text-brand-pink">
                {site.phone}
              </a>
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/uslugi"
              className="inline-flex items-center gap-2 rounded-2xl border border-line bg-card px-7 py-3.5 font-semibold text-brand-pink transition hover:bg-soft"
            >
              {t(labPage.toPrices, locale)}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <Link
            href="/zapis"
            className="inline-flex items-center justify-center rounded-2xl bg-brand-pink px-10 py-4 text-lg font-bold text-white shadow-xl shadow-pink-200/50 transition hover:bg-brand-pink-dark"
          >
            {t(pricesPage.book, locale)}
          </Link>
          <p className="mt-4 text-sm text-muted">{site.phone}</p>
        </div>
      </section>
    </>
  );
}
