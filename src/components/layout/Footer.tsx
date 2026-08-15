import { Logo } from "@/components/brand/Logo";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { footerCopy, nav } from "@/content/copy";
import { site } from "@/content/site";
import { t } from "@/lib/i18n";

type FooterProps = {
  locale: Locale;
  compact?: boolean;
};

export function Footer({ locale, compact = false }: FooterProps) {
  if (compact) {
    return (
      <footer className="bg-[#1a1416] text-gray-300 dark:bg-black/40">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <Link href="/">
              <Logo className="h-12 w-auto" />
            </Link>
            <div className="text-center text-sm md:text-right">
              <div>{t(site.addressShort, locale)}</div>
              <a href={site.phoneHref} className="hover:text-brand-pink">
                {site.phone}
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
            © {site.foundedYear}–2026 Baby Med Klinika
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-[#161113] text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-5">
              <Logo className="h-14 w-auto" />
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              {t(footerCopy.about, locale)}
            </p>
          </div>
          <div>
            <h2 className="mb-4 font-semibold text-white">{t(footerCopy.nav, locale)}</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#about" className="transition hover:text-brand-pink">
                  {t(nav.about, locale)}
                </Link>
              </li>
              <li>
                <Link href="/#services" className="transition hover:text-brand-pink">
                  {t(nav.services, locale)}
                </Link>
              </li>
              <li>
                <Link href="/uslugi" className="transition hover:text-brand-pink">
                  {t(nav.prices, locale)}
                </Link>
              </li>
              <li>
                <Link href="/#doctors" className="transition hover:text-brand-pink">
                  {t(nav.doctors, locale)}
                </Link>
              </li>
              <li>
                <Link href="/#contacts" className="transition hover:text-brand-pink">
                  {t(nav.contacts, locale)}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 font-semibold text-white">
              {t(footerCopy.contacts, locale)}
            </h2>
            <ul className="space-y-2 text-sm">
              <li>{t(site.addressShort, locale)}</li>
              <li>
                <a href={site.phoneHref} className="hover:text-brand-pink">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="hover:text-brand-pink">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          © {site.foundedYear}–2026 Baby Med Klinika. {t(footerCopy.rights, locale)}
        </div>
      </div>
    </footer>
  );
}
