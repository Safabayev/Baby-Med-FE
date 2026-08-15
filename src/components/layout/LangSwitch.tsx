"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

type LangSwitchProps = {
  locale: Locale;
};

export function LangSwitch({ locale }: LangSwitchProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex overflow-hidden rounded-full border border-line text-xs font-semibold">
      {routing.locales.map((item) => {
        const active = item === locale;
        return (
          <button
            key={item}
            type="button"
            className={
              active
                ? "bg-brand-pink px-3 py-1.5 text-white"
                : "px-3 py-1.5 text-muted hover:bg-soft"
            }
            aria-pressed={active}
            onClick={() => router.replace(pathname, { locale: item })}
          >
            {item.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
