import type { Localized } from "@/lib/i18n";

export const rooms = [
  {
    icon: "🛏️",
    badge: { ru: "Стандарт", uz: "Standart" } satisfies Localized,
    title: { ru: "Стандартная палата", uz: "Standart palata" } satisfies Localized,
    text: {
      ru: "Уютная одноместная палата с санузлом. Комфортные условия для мамы и новорождённого.",
      uz: "Sanuzelli qulay bir kishilik palata. Ona va yangi tug'ilgan chaqaloq uchun qulay sharoitlar.",
    } satisfies Localized,
    features: [
      { ru: "Отдельный санузел", uz: "Alohida sanuzel" },
      { ru: "Кроватка для малыша", uz: "Chaqaloq uchun karavot" },
      { ru: "Кондиционер", uz: "Konditsioner" },
    ] satisfies Localized[],
    tone: "pink" as const,
  },
  {
    icon: "🏨",
    badge: { ru: "Комфорт", uz: "Komfort" } satisfies Localized,
    title: { ru: "Палата «Комфорт»", uz: "«Komfort» palatasi" } satisfies Localized,
    text: {
      ru: "Просторная палата повышенной комфортности. Идеально для спокойного послеродового периода.",
      uz: "Yuqori qulaylikdagi keng palata. Tug'ruqdan keyingi tinch davr uchun ideal.",
    } satisfies Localized,
    features: [
      { ru: "Большая площадь", uz: "Katta maydon" },
      { ru: "Холодильник, ТВ", uz: "Muzlatgich, TV" },
      { ru: "Место для родственника", uz: "Qarindosh uchun joy" },
    ] satisfies Localized[],
    tone: "teal" as const,
  },
  {
    icon: "✨",
    badge: { ru: "VIP", uz: "VIP" } satisfies Localized,
    title: { ru: "VIP-палата", uz: "VIP-palata" } satisfies Localized,
    text: {
      ru: "Максимальный комфорт. Отдельная зона отдыха, улучшенный сервис и полное уединение.",
      uz: "Maksimal qulaylik. Alohida dam olish zonasi, yaxshilangan xizmat va to'liq yolg'izlik.",
    } satisfies Localized,
    features: [
      { ru: "Отдельный вход", uz: "Alohida kirish" },
      { ru: "Расширенный сервис", uz: "Kengaytirilgan xizmat" },
      { ru: "Индивидуальный пост", uz: "Individual post" },
    ] satisfies Localized[],
    tone: "violet" as const,
  },
];
