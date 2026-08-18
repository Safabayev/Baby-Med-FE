import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { pricesPage } from "@/content/copy";
import { priceGroups } from "@/content/prices";
import { priceValidFrom, site } from "@/content/site";
import { t } from "@/lib/i18n";
import { PriceGroups } from "./PriceGroups";

export function PricesPage({ locale }: { locale: Locale }) {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-pink-light via-page to-brand-teal-light py-14 dark:bg-page dark:bg-none">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <span className="text-sm font-semibold tracking-wider text-brand-pink uppercase">
            {t(pricesPage.kicker, locale)}
          </span>
          <h1 className="mt-3 mb-4 text-3xl font-bold text-ink md:text-5xl">
            {t(pricesPage.title, locale)}
          </h1>
          <p className="mx-auto max-w-2xl text-muted">{t(pricesPage.lead, locale)}</p>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-card/80 px-4 py-1.5 text-sm font-medium text-muted backdrop-blur">
            {t(pricesPage.validFrom, locale)}{" "}
            <span className="font-semibold text-ink">{priceValidFrom}</span>
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl space-y-12 px-4">
          <PriceGroups groups={priceGroups} locale={locale} />

          <div className="rounded-2xl bg-brand-pink-light p-6 text-center text-sm text-muted dark:bg-soft">
            <p>
              <strong>{t(pricesPage.noteStrong, locale)}</strong> {t(pricesPage.note, locale)}{" "}
              <a href={site.phoneHref} className="font-semibold text-brand-pink">
                {site.phone}
              </a>
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/analizy"
              className="inline-flex items-center gap-2 rounded-2xl border border-line bg-card px-7 py-3.5 font-semibold text-brand-teal transition hover:bg-soft dark:text-brand-pink"
            >
              {t(pricesPage.toLab, locale)}
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
