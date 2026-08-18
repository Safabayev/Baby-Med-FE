import type { PriceGroup } from "@/content/prices";
import { pricesPage } from "@/content/copy";
import type { Locale } from "@/i18n/routing";
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

type Props = {
  groups: PriceGroup[];
  locale: Locale;
};

export function PriceGroups({ groups, locale }: Props) {
  const currency = t(pricesPage.currency, locale);

  return (
    <div className="space-y-12">
      {groups.map((group) => (
        <div
          key={group.id}
          className="soft-shadow overflow-hidden rounded-3xl border border-line bg-card"
        >
          <div className={`border-b px-6 py-4 ${headerTones[group.tone]}`}>
            <h2 className="flex items-center gap-3 text-xl font-bold text-ink">
              <span className="text-2xl">{group.icon}</span>
              {t(group.title, locale)}
            </h2>
            {group.note ? (
              <p className="mt-1 text-sm text-muted">{t(group.note, locale)}</p>
            ) : null}
          </div>
          <div className="divide-y divide-line">
            {group.items.map((item) => (
              <div
                key={`${item.name.ru}-${item.note?.ru ?? ""}`}
                className={`flex items-center justify-between gap-4 px-6 py-4 transition ${rowHover[group.tone]}`}
              >
                <div>
                  <div>{t(item.name, locale)}</div>
                  {item.note ? (
                    <div className="mt-0.5 text-xs text-muted">{t(item.note, locale)}</div>
                  ) : null}
                </div>
                <span
                  className={`whitespace-nowrap ${priceTones[group.tone]}`}
                >
                  <span className="font-bold">{item.price}</span>{" "}
                  <span className="text-sm font-medium">{currency}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
