"use client";

import { useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { nav } from "@/content/copy";
import { site } from "@/content/site";
import { t } from "@/lib/i18n";
import { Logo } from "@/components/brand/Logo";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { LangSwitch } from "./LangSwitch";

type HeaderProps = {
  locale: Locale;
};

export function Header({ locale }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/#about", label: nav.about, hash: true },
    { href: "/#services", label: nav.services, hash: true },
    { href: "/uslugi", label: nav.prices, hash: false },
    { href: "/analizy", label: nav.labs, hash: false },
    { href: "/vrachi", label: nav.doctors, hash: false },
    { href: "/#rooms", label: nav.rooms, hash: true },
    { href: "/#contacts", label: nav.contacts, hash: true },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-page/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="flex items-center gap-2.5">
            <Logo className="h-12 w-auto md:h-14" />
          </Link>

          <nav className="hidden items-center gap-5 text-sm font-medium lg:flex xl:gap-7">
            {links.map((link) => {
              const active = !link.hash && pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    active
                      ? "font-semibold text-brand-pink"
                      : "text-muted transition hover:text-brand-pink"
                  }
                >
                  {t(link.label, locale)}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle locale={locale} />
            <LangSwitch locale={locale} />
            <Link
              href="/zapis"
              className="hidden items-center gap-2 rounded-full bg-brand-pink px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-pink-200/50 transition hover:bg-brand-pink-dark sm:inline-flex"
            >
              {t(nav.book, locale)}
            </Link>
            <button
              type="button"
              className="rounded-lg p-2 hover:bg-soft lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">
                {t(open ? nav.closeMenu : nav.openMenu, locale)}
              </span>
              <svg
                className="h-6 w-6 text-ink"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-line bg-page lg:hidden"
        >
          <div className="space-y-1 px-4 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 font-medium text-ink"
                onClick={() => setOpen(false)}
              >
                {t(link.label, locale)}
              </Link>
            ))}
            <Link
              href="/zapis"
              className="mt-2 block w-full rounded-xl bg-brand-pink py-3 text-center font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              {t(nav.book, locale)}
            </Link>
            <a
              href={site.phoneHref}
              className="mt-2 block w-full rounded-xl border border-line py-3 text-center font-semibold text-brand-pink"
            >
              {t(nav.call, locale)}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
