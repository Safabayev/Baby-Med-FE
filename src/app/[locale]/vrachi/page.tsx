import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { DoctorsPage } from "@/components/doctors/DoctorsPage";
import { meta } from "@/content/copy";
import { routing, type Locale } from "@/i18n/routing";
import { t } from "@/lib/i18n";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = hasLocale(routing.locales, locale)
    ? locale
    : routing.defaultLocale;

  return {
    title: t(meta.doctorsTitle, safeLocale),
    description: t(meta.doctorsDescription, safeLocale),
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <DoctorsPage locale={locale as Locale} />;
}
