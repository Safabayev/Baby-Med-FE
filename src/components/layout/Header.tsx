"use client";

import { useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { nav } from "@/content/copy";
import { site } from "@/content/site";
import { t } from "@/lib/i18n";
import { LangSwitch } from "./LangSwitch";

type HeaderProps = {
  locale: Locale;
};

export function Header({ locale }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onPrices = pathname === "/uslugi";

  const links = [
    { href: "/#about", label: nav.about, hash: true },
    { href: "/#services", label: nav.services, hash: true },
    { href: "/uslugi", label: nav.prices, hash: false },
    { href: "/#doctors", label: nav.doctors, hash: true },
    { href: "/#rooms", label: nav.rooms, hash: true },
    { href: "/#contacts", label: nav.contacts, hash: true },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-pink-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="flex items-center gap-2.5">
            <img
              src="/logo.jpg"
              alt="Baby Med"
              className="h-12 w-auto object-contain md:h-14"
            />
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
            {links.map((link) => {
              const active = !link.hash && onPrices && link.href === "/uslugi";
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    active
                      ? "font-semibold text-brand-pink"
                      : "text-gray-600 transition hover:text-brand-pink"
                  }
                >
                  {t(link.label, locale)}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <LangSwitch locale={locale} />
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 rounded-full bg-brand-pink px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-pink-200/50 transition hover:bg-brand-pink-dark sm:inline-flex"
            >
              {t(nav.book, locale)}
            </a>
            <button
              type="button"
              className="rounded-lg p-2 hover:bg-pink-50 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">
                {t(open ? nav.closeMenu : nav.openMenu, locale)}
              </span>
              <svg
                className="h-6 w-6 text-gray-700"
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
          className="border-t border-pink-100 bg-white lg:hidden"
        >
          <div className="space-y-1 px-4 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 font-medium text-gray-700"
                onClick={() => setOpen(false)}
              >
                {t(link.label, locale)}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              className="mt-2 block w-full rounded-xl bg-brand-pink py-3 text-center font-semibold text-white"
            >
              {t(nav.call, locale)}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
