import type { PriceGroup } from "./prices";

/**
 * Прайскурант лабораторных анализов, выполняемых в ООО «BABY MED KLINIKA».
 */
export const labGroups: PriceGroup[] = [
  {
    id: "blood",
    icon: "🩸",
    tone: "rose",
    title: { ru: "Анализы крови", uz: "Qon tahlili" },
    items: [
      {
        name: { ru: "Общий анализ крови", uz: "Umumiy qon tahlili" },
        price: "80 000",
      },
      {
        name: { ru: "Время свёртывания крови", uz: "Qon ivish vaqti" },
        price: "25 000",
      },
      {
        name: { ru: "Определение группы крови", uz: "Qon guruhini aniqlash" },
        price: "30 000",
      },
    ],
  },
  {
    id: "biochemistry",
    icon: "🧪",
    tone: "violet",
    title: { ru: "Биохимические анализы", uz: "Biokimyoviy tahlillar" },
    items: [
      {
        name: { ru: "Глюкоза натощак", uz: "Och qoringa glyukoza" },
        price: "25 000",
      },
      { name: { ru: "АЛТ", uz: "ALT" }, price: "25 000" },
      { name: { ru: "АСТ", uz: "AST" }, price: "25 000" },
      {
        name: { ru: "Билирубин (общий, прямой)", uz: "Bilirubin (jami, bevosita)" },
        price: "35 000",
      },
      { name: { ru: "Общий белок", uz: "Umumiy oqsil" }, price: "25 000" },
      { name: { ru: "Креатинин", uz: "Kreatinin" }, price: "25 000" },
      { name: { ru: "Мочевина", uz: "Mochevina" }, price: "25 000" },
      { name: { ru: "Кальций", uz: "Kalsiy" }, price: "25 000" },
      { name: { ru: "Натрий", uz: "Natriy" }, price: "25 000" },
      { name: { ru: "Калий", uz: "Kaliy" }, price: "25 000" },
      { name: { ru: "Гепатит B", uz: "Gepatit B" }, price: "70 000" },
      { name: { ru: "Гепатит C", uz: "Gepatit S" }, price: "70 000" },
      {
        name: { ru: "RW (реакция Вассермана)", uz: "RW (Vasserman reaksiyasi)" },
        price: "35 000",
      },
    ],
  },
  {
    id: "urine",
    icon: "🧫",
    tone: "amber",
    title: { ru: "Анализы мочи", uz: "Siydik tahlili" },
    items: [
      {
        name: { ru: "Общий анализ мочи", uz: "Umumiy siydik tahlili" },
        price: "25 000",
      },
      {
        name: {
          ru: "Моча на жёлчные пигменты",
          uz: "Safro pigmentlari uchun siydik",
        },
        price: "25 000",
      },
    ],
  },
  {
    id: "coagulation",
    icon: "🧬",
    tone: "teal",
    title: { ru: "Коагулограмма", uz: "Koagulogramma" },
    items: [
      { name: { ru: "Коагулограмма [ACT]", uz: "Koagulogramma [ACT]" }, price: "45 000" },
      { name: { ru: "Фибриноген", uz: "Fibrinogen" }, price: "45 000" },
      { name: { ru: "ПТИ", uz: "PTI" }, price: "60 000" },
      { name: { ru: "МНО", uz: "MNO" }, price: "60 000" },
      {
        name: {
          ru: "АЧТВ (активированное частичное тромбопластиновое время)",
          uz: "Faollashgan qon tromboplastilining qisman vaqti",
        },
        price: "45 000",
      },
    ],
  },
];
