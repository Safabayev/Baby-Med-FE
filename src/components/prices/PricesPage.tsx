import type { Locale } from "@/i18n/routing";
import { pricesPage } from "@/content/copy";
import { priceGroups } from "@/content/prices";
import { site } from "@/content/site";
import { t } from "@/lib/i18n";

const headerTones = {
  pink: "border-pink-100 bg-brand-pink-light",
  rose: "border-pink-100 bg-pink-100",
  teal: "border-teal-100 bg-brand-teal-light",
  emerald: "border-emerald-100 bg-emerald-50",
  violet: "border-violet-100 bg-violet-50",
  amber: "border-amber-100 bg-amber-50",
};

const priceTones = {
  pink: "text-brand-pink",
  rose: "text-brand-pink",
  teal: "text-brand-teal",
  emerald: "text-emerald-700",
  violet: "text-violet-700",
  amber: "text-amber-700",
};

const rowHover = {
  pink: "hover:bg-pink-50/50",
  rose: "hover:bg-pink-50/50",
  teal: "hover:bg-teal-50/50",
  emerald: "hover:bg-emerald-50/40",
  violet: "hover:bg-violet-50/40",
  amber: "hover:bg-amber-50/40",
};

export function PricesPage({ locale }: { locale: Locale }) {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-pink-light via-white to-brand-teal-light py-14">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <span className="text-sm font-semibold tracking-wider text-brand-pink uppercase">
            {t(pricesPage.kicker, locale)}
          </span>
          <h1 className="mt-3 mb-4 text-3xl font-bold text-gray-900 md:text-5xl">
            {t(pricesPage.title, locale)}
          </h1>
          <p className="mx-auto max-w-2xl text-gray-600">{t(pricesPage.lead, locale)}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl space-y-12 px-4">
          {priceGroups.map((group) => (
            <div
              key={group.id}
              className="soft-shadow overflow-hidden rounded-3xl border border-pink-50 bg-white"
            >
              <div className={`border-b px-6 py-4 ${headerTones[group.tone]}`}>
                <h2 className="flex items-center gap-3 text-xl font-bold text-gray-900">
                  <span className="text-2xl">{group.icon}</span>
                  {t(group.title, locale)}
                </h2>
              </div>
              <div className="divide-y divide-gray-100">
                {group.items.map((item) => (
                  <div
                    key={item.name.ru}
                    className={`flex items-center justify-between px-6 py-4 transition ${rowHover[group.tone]}`}
                  >
                    <div>
                      <div>{t(item.name, locale)}</div>
                      {item.note ? (
                        <div className="mt-0.5 text-xs text-gray-500">{t(item.note, locale)}</div>
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

          <div className="rounded-2xl bg-brand-pink-light p-6 text-center text-sm text-gray-600">
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
          <p className="mt-4 text-sm text-gray-500">{site.phone}</p>
        </div>
      </section>
    </>
  );
}
