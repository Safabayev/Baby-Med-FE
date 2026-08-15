import type { Localized } from "@/lib/i18n";

export const site = {
  name: "Baby Med",
  phone: "+998 78 333-03-03",
  phoneHref: "tel:+998783330303",
  email: "babymed_klinika@mail.ru",
  emailHref: "mailto:babymed_klinika@mail.ru",
  mapUrl:
    "https://yandex.com/maps/org/baby_med/111279905541?si=bv9jzk8batv2mzk4hh7vy59r9r",
  foundedYear: 2018,
  address: {
    ru: "г. Ургенч, ул. Хонка, 164B",
    uz: "Urganch sh., Xonqa ko'chasi, 164B",
  } satisfies Localized,
  addressShort: {
    ru: "Ургенч, ул. Хонка, 164B",
    uz: "Urganch, Xonqa ko'chasi, 164B",
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
