import type { Locale } from "@/i18n/routing";
import { pricesPage } from "@/content/copy";
import { priceGroups } from "@/content/prices";
import { site } from "@/content/site";
import { t } from "@/lib/i18n";

const headerTones = {
  pink: "border-line bg-brand-pink-light dark:bg-soft",
  rose: "border-line bg-pink-100 dark:bg-soft",
  teal: "border-line bg-brand-teal-light dark:bg-soft",
  emerald: "border-line bg-emerald-50 dark:bg-soft",
  violet: "border-line bg-violet-50 dark:bg-soft",
  amber: "border-line bg-amber-50 dark:bg-soft",
};

const priceTones = {
  pink: "text-brand-pink",
  rose: "text-brand-pink",
  teal: "text-brand-teal dark:text-brand-pink",
  emerald: "text-emerald-700 dark:text-brand-pink",
  violet: "text-violet-700 dark:text-brand-pink",
  amber: "text-amber-700 dark:text-brand-pink",
};

const rowHover = {
  pink: "hover:bg-pink-50/50 dark:hover:bg-soft",
  rose: "hover:bg-pink-50/50 dark:hover:bg-soft",
  teal: "hover:bg-teal-50/50 dark:hover:bg-soft",
  emerald: "hover:bg-emerald-50/40 dark:hover:bg-soft",
  violet: "hover:bg-violet-50/40 dark:hover:bg-soft",
  amber: "hover:bg-amber-50/40 dark:hover:bg-soft",
};

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
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl space-y-12 px-4">
          {priceGroups.map((group) => (
            <div
              key={group.id}
              className="soft-shadow overflow-hidden rounded-3xl border border-line bg-card"
            >
              <div className={`border-b px-6 py-4 ${headerTones[group.tone]}`}>
                <h2 className="flex items-center gap-3 text-xl font-bold text-ink">
                  <span className="text-2xl">{group.icon}</span>
                  {t(group.title, locale)}
                </h2>
              </div>
              <div className="divide-y divide-line">
                {group.items.map((item) => (
                  <div
                    key={item.name.ru}
                    className={`flex items-center justify-between px-6 py-4 transition ${rowHover[group.tone]}`}
                  >
                    <div>
                      <div>{t(item.name, locale)}</div>
                      {item.note ? (
                        <div className="mt-0.5 text-xs text-muted">{t(item.note, locale)}</div>
                      ) : null}
                    </div>
                    <span
                      className={`ml-4 font-bold whitespace-nowrap ${priceTones[group.tone]}`}
                    >
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="rounded-2xl bg-brand-pink-light p-6 text-center text-sm text-muted dark:bg-soft">
            <p>
              <strong>{t(pricesPage.noteStrong, locale)}</strong> {t(pricesPage.note, locale)}{" "}
              <a href={site.phoneHref} className="font-semibold text-brand-pink">
                {site.phone}
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center rounded-2xl bg-brand-pink px-10 py-4 text-lg font-bold text-white shadow-xl shadow-pink-200/50 transition hover:bg-brand-pink-dark"
          >
            {t(pricesPage.book, locale)}
          </a>
          <p className="mt-4 text-sm text-muted">{site.phone}</p>
        </div>
      </section>
    </>
  );
}
