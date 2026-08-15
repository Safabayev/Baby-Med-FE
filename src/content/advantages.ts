import type { Localized } from "@/lib/i18n";

export const advantages = [
  {
    icon: "⏰",
    title: { ru: "Круглосуточный режим", uz: "Kecha-kunduz rejim" } satisfies Localized,
    text: {
      ru: "Мы работаем 24/7. Роды и экстренные ситуации не ждут утра.",
      uz: "Biz 24/7 ishlaymiz. Tug'ruq va favqulodda holatlar ertalabni kutmaydi.",
    } satisfies Localized,
  },
  {
    icon: "🏠",
    title: { ru: "Комфортные условия", uz: "Qulay sharoitlar" } satisfies Localized,
    text: {
      ru: "Уютные палаты и спокойная атмосфера для мамы и малыша.",
      uz: "Ona va chaqaloq uchun qulay palatalar va tinch muhit.",
    } satisfies Localized,
  },
  {
    icon: "👨‍⚕️",
    title: { ru: "Опытные врачи", uz: "Tajribali shifokorlar" } satisfies Localized,
    text: {
      ru: "Неонатолог со стажем 37 лет и квалифицированные гинекологи.",
      uz: "37 yillik tajribaga ega neonatolog va malakali ginekologlar.",
    } satisfies Localized,
  },
  {
    icon: "🔬",
    title: { ru: "Современная диагностика", uz: "Zamonaviy diagnostika" } satisfies Localized,
    text: {
      ru: "УЗИ-исследования на современном оборудовании.",
      uz: "Zamonaviy uskunalarda UZI tekshiruvlari.",
    } satisfies Localized,
  },
  {
    icon: "❤️",
    title: { ru: "Индивидуальный подход", uz: "Individual yondashuv" } satisfies Localized,
    text: {
      ru: "Каждая семья получает максимум внимания и заботы.",
      uz: "Har bir oila maksimal e'tibor va g'amxo'rlik oladi.",
    } satisfies Localized,
  },
  {
    icon: "📍",
    title: { ru: "Удобное расположение", uz: "Qulay joylashuv" } satisfies Localized,
    text: {
      ru: "ул. Хонка, 164B — рядом с городской прокуратурой.",
      uz: "Xonqa ko'chasi, 164B — shahar prokuraturasi yonida.",
    } satisfies Localized,
  },
];
