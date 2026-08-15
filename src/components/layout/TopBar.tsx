import type { Locale } from "@/i18n/routing";
import { site } from "@/content/site";
import { t } from "@/lib/i18n";

export function TopBar({ locale }: { locale: Locale }) {
  return (
    <div className="bg-brand-pink text-sm text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-2 sm:flex-row">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
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
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {t(site.addressShort, locale)}
          </span>
          <span className="hidden sm:inline">• {t(site.hoursShort, locale)}</span>
        </div>
        <a href={site.phoneHref} className="font-medium hover:underline">
          {site.phone}
        </a>
      </div>
    </div>
  );
}
