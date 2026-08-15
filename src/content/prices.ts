import type { Localized } from "@/lib/i18n";

export type PriceItem = {
  name: Localized;
  note?: Localized;
  price: string;
};

export type PriceGroup = {
  id: string;
  icon: string;
  tone: "pink" | "rose" | "teal" | "emerald" | "violet" | "amber";
  title: Localized;
  items: PriceItem[];
};

export const priceGroups: PriceGroup[] = [
  {
    id: "pregnancy",
    icon: "🤰",
    tone: "pink",
    title: { ru: "Ведение беременности", uz: "Homiladorlikni kuzatish" },
    items: [
      {
        name: { ru: "Первичная консультация гинеколога", uz: "Ginekologning birlamchi maslahati" },
        price: "от 180 000 сум",
      },
      {
        name: { ru: "Повторная консультация гинеколога", uz: "Ginekologning takroriy maslahati" },
        price: "от 120 000 сум",
      },
      {
        name: {
          ru: "Программа ведения беременности (полный цикл)",
          uz: "Homiladorlikni kuzatish dasturi (to'liq sikl)",
        },
        price: "от 4 500 000 сум",
      },
      {
        name: { ru: "Подготовка к родам (индивидуальная)", uz: "Tug'ruqqa tayyorgarlik (individual)" },
        price: "от 350 000 сум",
      },
    ],
  },
  {
    id: "birth",
    icon: "🏥",
    tone: "rose",
    title: { ru: "Роды", uz: "Tug'ruq" },
    items: [
      {
        name: { ru: "Физиологические роды (стандарт)", uz: "Fiziologik tug'ruq (standart)" },
        note: {
          ru: "включает палату «Стандарт» до 3 суток",
          uz: "«Standart» palatasini 3 kungacha o'z ichiga oladi",
        },
        price: "от 8 500 000 сум",
      },
      {
        name: { ru: "Физиологические роды (Комфорт)", uz: "Fiziologik tug'ruq (Komfort)" },
        note: { ru: "палата «Комфорт» до 3 суток", uz: "«Komfort» palatasi 3 kungacha" },
        price: "от 11 500 000 сум",
      },
      {
        name: { ru: "Физиологические роды (VIP)", uz: "Fiziologik tug'ruq (VIP)" },
        note: {
          ru: "VIP-палата до 3 суток + расширенный сервис",
          uz: "VIP-palata 3 kungacha + kengaytirilgan xizmat",
        },
        price: "от 15 000 000 сум",
      },
      {
        name: { ru: "Партнёрские роды (доплата)", uz: "Hamkorlikdagi tug'ruq (qo'shimcha)" },
        price: "от 800 000 сум",
      },
    ],
  },
  {
    id: "neo",
    icon: "👶",
    tone: "teal",
    title: { ru: "Неонатология", uz: "Neonatologiya" },
    items: [
      {
        name: { ru: "Осмотр неонатолога (новорождённый)", uz: "Neonatolog ko'rigi (yangi tug'ilgan)" },
        price: "от 150 000 сум",
      },
      {
        name: {
          ru: "Консультация по грудному вскармливанию",
          uz: "Ko'krak suti bilan ovqatlantirish bo'yicha maslahat",
        },
        price: "от 120 000 сум",
      },
      {
        name: { ru: "Наблюдение новорождённого (1 сутки)", uz: "Yangi tug'ilganni kuzatish (1 kun)" },
        price: "от 400 000 сум",
      },
    ],
  },
  {
    id: "gyn",
    icon: "👩‍⚕️",
    tone: "emerald",
    title: { ru: "Гинекология", uz: "Ginekologiya" },
    items: [
      {
        name: { ru: "Консультация гинеколога", uz: "Ginekolog maslahati" },
        price: "от 150 000 сум",
      },
      {
        name: { ru: "Профилактический осмотр", uz: "Profilaktik ko'rik" },
        price: "от 180 000 сум",
      },
      {
        name: {
          ru: "Планирование беременности (консультация)",
          uz: "Homiladorlikni rejalashtirish (maslahat)",
        },
        price: "от 200 000 сум",
      },
    ],
  },
  {
    id: "uzi",
    icon: "📡",
    tone: "violet",
    title: { ru: "УЗИ-диагностика", uz: "UZI diagnostikasi" },
    items: [
      {
        name: { ru: "УЗИ органов малого таза", uz: "Kichik tos a'zolari UZIsi" },
        price: "от 150 000 сум",
      },
      {
        name: { ru: "Акушерское УЗИ (1 триместр)", uz: "Akusherlik UZIsi (1 trimestr)" },
        price: "от 180 000 сум",
      },
      {
        name: { ru: "Акушерское УЗИ (2–3 триместр)", uz: "Akusherlik UZIsi (2–3 trimestr)" },
        price: "от 200 000 сум",
      },
      {
        name: { ru: "Допплерометрия", uz: "Dopplerometriya" },
        price: "от 170 000 сум",
      },
    ],
  },
  {
    id: "stay",
    icon: "🛏️",
    tone: "amber",
    title: { ru: "Пребывание в палате (сутки)", uz: "Palatada qolish (sutka)" },
    items: [
      {
        name: { ru: "Стандартная палата", uz: "Standart palata" },
        price: "от 650 000 сум",
      },
      {
        name: { ru: "Палата «Комфорт»", uz: "«Komfort» palatasi" },
        price: "от 950 000 сум",
      },
      {
        name: { ru: "VIP-палата", uz: "VIP-palata" },
        price: "от 1 400 000 сум",
      },
    ],
  },
];
