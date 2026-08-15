import type { Locale } from "@/i18n/routing";

export type Localized = Record<Locale, string>;

export function t(value: Localized, locale: Locale): string {
  return value[locale];
}
