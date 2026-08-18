import type { Localized } from "@/lib/i18n";

/**
 * Палаты клиники. Цены — из официального прайса (в силе с 01.07.2026),
 * стоимость указана за сутки пребывания.
 */
export const rooms = [
  {
    icon: "🛏️",
    badge: { ru: "Стандарт", uz: "Standart" } satisfies Localized,
    title: {
      ru: "2-местная палата, старый корпус",
      uz: "2 kishilik palata, eski bino",
    } satisfies Localized,
    price: "300 000",
    text: {
      ru: "Двухместная стандартная палата в старом корпусе. Базовые условия для мамы и новорождённого.",
      uz: "Eski binodagi ikki kishilik standart palata. Ona va chaqaloq uchun asosiy sharoitlar.",
    } satisfies Localized,
    features: [
      { ru: "2 места", uz: "2 o'rin" },
      { ru: "Кроватка для малыша", uz: "Chaqaloq uchun karavot" },
      { ru: "Круглосуточный уход", uz: "Kecha-kunduz parvarish" },
    ] satisfies Localized[],
    tone: "teal" as const,
  },
  {
    icon: "🏨",
    badge: { ru: "Стандарт+", uz: "Standart+" } satisfies Localized,
    title: {
      ru: "2-местная палата, новый корпус",
      uz: "2 kishilik palata, yangi bino",
    } satisfies Localized,
    price: "350 000",
    text: {
      ru: "Двухместная стандартная палата в новом корпусе — более современная отделка и оснащение.",
      uz: "Yangi binodagi ikki kishilik standart palata — zamonaviyroq bezak va jihoz.",
    } satisfies Localized,
    features: [
      { ru: "Новый корпус", uz: "Yangi bino" },
      { ru: "2 места", uz: "2 o'rin" },
      { ru: "Кондиционер", uz: "Konditsioner" },
    ] satisfies Localized[],
    tone: "pink" as const,
  },
  {
    icon: "🌿",
    badge: { ru: "Полулюкс", uz: "Pol-lyuks" } satisfies Localized,
    title: {
      ru: "1-местная палата «Полулюкс»",
      uz: "1 kishilik «Pol-lyuks» palata",
    } satisfies Localized,
    price: "550 000",
    text: {
      ru: "Одноместная палата повышенной комфортности. Тишина и уединение для спокойного восстановления.",
      uz: "Yuqori qulaylikdagi bir kishilik palata. Tinch tiklanish uchun sokinlik va yolg'izlik.",
    } satisfies Localized,
    features: [
      { ru: "Одноместное размещение", uz: "Bir kishilik joylashuv" },
      { ru: "Отдельный санузел", uz: "Alohida sanuzel" },
      { ru: "Место для родственника", uz: "Qarindosh uchun joy" },
    ] satisfies Localized[],
    tone: "violet" as const,
  },
  {
    icon: "✨",
    badge: { ru: "Люкс", uz: "Lyuks" } satisfies Localized,
    title: { ru: "Палата «Люкс»", uz: "«Lyuks» palata" } satisfies Localized,
    price: "750 000",
    text: {
      ru: "Максимальный комфорт: просторная палата, отдельная зона отдыха и расширенный сервис.",
      uz: "Maksimal qulaylik: keng palata, alohida dam olish zonasi va kengaytirilgan xizmat.",
    } satisfies Localized,
    features: [
      { ru: "Зона отдыха", uz: "Dam olish zonasi" },
      { ru: "Расширенный сервис", uz: "Kengaytirilgan xizmat" },
      { ru: "Полное уединение", uz: "To'liq yolg'izlik" },
    ] satisfies Localized[],
    tone: "amber" as const,
  },
];
