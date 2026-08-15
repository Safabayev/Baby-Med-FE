import type { Localized } from "@/lib/i18n";

export const doctors = [
  {
    initials: "СН",
    nameLines: ["Собирова", "Нигора Ахмедовна"],
    role: { ru: "Неонатолог", uz: "Neonatolog" } satisfies Localized,
    experience: { ru: "Стаж 37 лет", uz: "37 yillik tajriba" } satisfies Localized,
    note: { ru: "Руководитель клиники", uz: "Klinika rahbari" } satisfies Localized,
    tone: "pink" as const,
  },
  {
    initials: "БК",
    nameLines: ["Бабаджонова", "Камила Ганиевна"],
    role: { ru: "Врач УЗИ", uz: "UZI shifokori" } satisfies Localized,
    experience: { ru: "Стаж 21 год", uz: "21 yillik tajriba" } satisfies Localized,
    tone: "teal" as const,
  },
  {
    initials: "МУ",
    nameLines: ["Матназаров", "Улугбек Худойназарович"],
    role: { ru: "Гинеколог", uz: "Ginekolog" } satisfies Localized,
    experience: { ru: "Опытный специалист", uz: "Tajribali mutaxassis" } satisfies Localized,
    tone: "sky" as const,
  },
  {
    initials: "РН",
    nameLines: ["Рхимова", "Нилуфар Юсуфбоевна"],
    role: { ru: "Гинеколог", uz: "Ginekolog" } satisfies Localized,
    experience: { ru: "Опытный специалист", uz: "Tajribali mutaxassis" } satisfies Localized,
    tone: "violet" as const,
  },
];
