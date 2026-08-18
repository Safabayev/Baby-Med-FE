import type { Localized } from "@/lib/i18n";

export type PriceItem = {
  name: Localized;
  note?: Localized;
  /** Сумма в сумах, отформатированная по разрядам. Единица валюты добавляется при выводе. */
  price: string;
};

export type PriceGroup = {
  id: string;
  icon: string;
  tone: "pink" | "rose" | "teal" | "emerald" | "violet" | "amber";
  title: Localized;
  note?: Localized;
  items: PriceItem[];
};

const wardSeparately = {
  ru: "оплата палаты — отдельно",
  uz: "palata to'lovlari alohida",
} satisfies Localized;

export const priceGroups: PriceGroup[] = [
  {
    id: "birth",
    icon: "🏥",
    tone: "rose",
    title: { ru: "Родоразрешение", uz: "Tug'ruq" },
    items: [
      {
        name: { ru: "Естественные роды", uz: "Tabiiy tug'ruq" },
        note: wardSeparately,
        price: "1 800 000",
      },
      {
        name: {
          ru: "Первичное кесарево сечение",
          uz: "Birlamchi keser kesish amaliyoti",
        },
        note: wardSeparately,
        price: "4 500 000",
      },
      {
        name: {
          ru: "Повторное кесарево сечение",
          uz: "Ikkilamchi keser kesish amaliyoti",
        },
        note: wardSeparately,
        price: "5 500 000",
      },
    ],
  },
  {
    id: "icu",
    icon: "🫀",
    tone: "teal",
    title: { ru: "Реанимация", uz: "Reanimatsiya" },
    items: [
      {
        name: { ru: "Реанимация", uz: "Reanimatsiya" },
        note: { ru: "за сутки", uz: "bir kunga" },
        price: "300 000",
      },
    ],
  },
  {
    id: "rooms",
    icon: "🛏️",
    tone: "amber",
    title: { ru: "Палаты (за сутки)", uz: "Palatalar (bir kunga)" },
    note: {
      ru: "Обновлённые цены на палаты действуют с 01.07.2026",
      uz: "Yangilangan palata narxlari 01.07.2026 yildan amal qiladi",
    },
    items: [
      {
        name: { ru: "2-местная стандартная палата", uz: "2 kishilik standart palata" },
        note: { ru: "старый корпус", uz: "eski binoda" },
        price: "300 000",
      },
      {
        name: { ru: "2-местная стандартная палата", uz: "2 kishilik standart palata" },
        note: { ru: "новый корпус", uz: "yangi binoda" },
        price: "350 000",
      },
      {
        name: { ru: "1-местная палата «Полулюкс»", uz: "1 kishilik «Pol-lyuks» palata" },
        price: "550 000",
      },
      {
        name: { ru: "Палата «Люкс»", uz: "«Lyuks» palata" },
        price: "750 000",
      },
    ],
  },
];
