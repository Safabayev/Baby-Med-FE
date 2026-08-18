import type { Localized } from "@/lib/i18n";

export const site = {
  name: "Baby Med",
  legalName: {
    ru: "ООО «BABY MED KLINIKA»",
    uz: "«BABY MED KLINIKA» MChJ",
  } satisfies Localized,
  phone: "+998 78 333-03-03",
  phoneHref: "tel:+998783330303",
  phoneLabel: {
    ru: "Call-центр",
    uz: "Call markaz",
  } satisfies Localized,
  email: "baby_med1@mail.ru",
  emailHref: "mailto:baby_med1@mail.ru",
  instagram: "baby_med_",
  instagramUrl: "https://www.instagram.com/baby_med_",
  telegramUrl: "https://t.me/baby_med_",
  mapUrl:
    "https://yandex.com/maps/org/baby_med/111279905541?si=bv9jzk8batv2mzk4hh7vy59r9r",
  foundedYear: 2018,
  address: {
    ru: "г. Ургенч, ул. Ханкинская, 164",
    uz: "Urganch sh., Xonqa ko'chasi, 164",
  } satisfies Localized,
  addressShort: {
    ru: "Ургенч, ул. Ханкинская, 164",
    uz: "Urganch, Xonqa ko'chasi, 164",
  } satisfies Localized,
  addressStreet: {
    ru: "ул. Ханкинская, 164",
    uz: "Xonqa ko'chasi, 164",
  } satisfies Localized,
  landmark: {
    ru: "Ориентир: городская прокуратура",
    uz: "Mo'ljal: shahar prokuraturasi",
  } satisfies Localized,
  region: {
    ru: "г. Ургенч, Хорезмская область",
    uz: "Urganch sh., Xorazm viloyati",
  } satisfies Localized,
  hours: {
    ru: "Круглосуточно, 24/7",
    uz: "Kecha-kunduz, 24/7",
  } satisfies Localized,
  hoursShort: {
    ru: "Круглосуточно 24/7",
    uz: "Kecha-kunduz 24/7",
  } satisfies Localized,
};

/** Дата, на которую актуален прайс-лист (указана на официальном прайсе клиники). */
export const priceValidFrom = "01.07.2026";
