import type { Localized } from "@/lib/i18n";

export type DoctorTone = "pink" | "teal" | "sky" | "violet" | "emerald" | "amber";

export type SpecialtyId =
  | "chief"
  | "gynecology"
  | "anesthesiology"
  | "ultrasound"
  | "neonatology"
  | "pediatrics"
  | "obstetrics"
  | "staff";

export type Doctor = {
  id: string;
  initials: string;
  name: Localized;
  role: Localized;
  specialty: SpecialtyId;
  phone: string;
  phoneHref: string;
  tone: DoctorTone;
  /** Показывается на главной странице в блоке «Наши врачи». */
  featured?: boolean;
  note?: Localized;
};

export const specialtyGroups: {
  id: SpecialtyId;
  icon: string;
  title: Localized;
  tone: DoctorTone;
}[] = [
  {
    id: "chief",
    icon: "🏥",
    tone: "pink",
    title: { ru: "Руководство", uz: "Rahbariyat" },
  },
  {
    id: "gynecology",
    icon: "👩‍⚕️",
    tone: "violet",
    title: { ru: "Гинекологи", uz: "Ginekologlar" },
  },
  {
    id: "neonatology",
    icon: "👶",
    tone: "teal",
    title: { ru: "Неонатологи", uz: "Neonatologlar" },
  },
  {
    id: "pediatrics",
    icon: "🧸",
    tone: "sky",
    title: { ru: "Педиатры", uz: "Pediatrlar" },
  },
  {
    id: "ultrasound",
    icon: "📡",
    tone: "emerald",
    title: { ru: "Врачи УЗД", uz: "UZD shifokorlari" },
  },
  {
    id: "anesthesiology",
    icon: "💉",
    tone: "amber",
    title: { ru: "Анестезиология", uz: "Anesteziologiya" },
  },
  {
    id: "obstetrics",
    icon: "🤱",
    tone: "pink",
    title: { ru: "Акушерство", uz: "Akusherlik" },
  },
  {
    id: "staff",
    icon: "📋",
    tone: "teal",
    title: { ru: "Служба статистики", uz: "Statistika xizmati" },
  },
];

export const roles = {
  chief: { ru: "Главный врач", uz: "Bosh shifokor" } satisfies Localized,
  gynecologist: { ru: "Гинеколог", uz: "Ginekolog" } satisfies Localized,
  anesthesiologist: { ru: "Анестезиолог", uz: "Anesteziolog" } satisfies Localized,
  ultrasound: { ru: "Врач УЗД", uz: "UZD shifokori" } satisfies Localized,
  neonatologist: { ru: "Неонатолог", uz: "Neonatolog" } satisfies Localized,
  pediatrician: { ru: "Педиатр", uz: "Pediatr" } satisfies Localized,
  midwife: { ru: "Акушерка", uz: "Akusherka" } satisfies Localized,
  statistician: { ru: "Статистик", uz: "Statist" } satisfies Localized,
};

export const doctors: Doctor[] = [
  {
    id: "matnazarov-ulugbek",
    initials: "МУ",
    name: { ru: "Матназаров Улугбек", uz: "Matnazarov Ulug'bek" },
    role: roles.chief,
    specialty: "chief",
    phone: "+998 99 506-16-06",
    phoneHref: "tel:+998995061606",
    tone: "pink",
    featured: true,
    note: { ru: "Руководитель клиники", uz: "Klinika rahbari" },
  },
  {
    id: "rahmonova-nigora",
    initials: "РН",
    name: { ru: "Рахмонова Нигора", uz: "Rahmonova Nigora" },
    role: roles.gynecologist,
    specialty: "gynecology",
    phone: "+998 90 719-16-59",
    phoneHref: "tel:+998907191659",
    tone: "violet",
    featured: true,
  },
  {
    id: "salayeva-shoira",
    initials: "СШ",
    name: { ru: "Салаева Шоира", uz: "Salayeva Shoira" },
    role: roles.gynecologist,
    specialty: "gynecology",
    phone: "+998 99 963-86-34",
    phoneHref: "tel:+998999638634",
    tone: "violet",
  },
  {
    id: "rajabova-rohatoy",
    initials: "РР",
    name: { ru: "Ражабова Рохатой", uz: "Rajabova Rohatoy" },
    role: roles.gynecologist,
    specialty: "gynecology",
    phone: "+998 97 510-58-41",
    phoneHref: "tel:+998975105841",
    tone: "violet",
  },
  {
    id: "rahimova-nilufar",
    initials: "РН",
    name: { ru: "Рахимова Нилуфар", uz: "Rahimova Nilufar" },
    role: roles.gynecologist,
    specialty: "gynecology",
    phone: "+998 97 790-45-59",
    phoneHref: "tel:+998977904559",
    tone: "violet",
  },
  {
    id: "ibragimova-dilfuza",
    initials: "ИД",
    name: { ru: "Ибрагимова Дилфуза", uz: "Ibragimova Dilfuza" },
    role: roles.gynecologist,
    specialty: "gynecology",
    phone: "+998 97 203-11-13",
    phoneHref: "tel:+998972031113",
    tone: "violet",
  },
  {
    id: "rahimjonova-shahzoda",
    initials: "РШ",
    name: { ru: "Рахимжонова Шахзода", uz: "Rahimjonova Shahzoda" },
    role: roles.gynecologist,
    specialty: "gynecology",
    phone: "+998 91 092-22-04",
    phoneHref: "tel:+998910922204",
    tone: "violet",
  },
  {
    id: "jabbarov-ruslan",
    initials: "ЖР",
    name: { ru: "Жаббаров Руслан", uz: "Jabbarov Ruslan" },
    role: roles.anesthesiologist,
    specialty: "anesthesiology",
    phone: "+998 97 363-07-04",
    phoneHref: "tel:+998973630704",
    tone: "amber",
  },
  {
    id: "bobojonova-komila",
    initials: "БК",
    name: { ru: "Бобожонова Комила", uz: "Bobojonova Komila" },
    role: roles.ultrasound,
    specialty: "ultrasound",
    phone: "+998 90 719-01-14",
    phoneHref: "tel:+998907190114",
    tone: "emerald",
    featured: true,
  },
  {
    id: "rahmonova-sohiba",
    initials: "РС",
    name: { ru: "Рахмонова Сохиба", uz: "Rahmonova Sohiba" },
    role: roles.ultrasound,
    specialty: "ultrasound",
    phone: "+998 88 048-93-92",
    phoneHref: "tel:+998880489392",
    tone: "emerald",
  },
  {
    id: "jumamuratov-ulugbek",
    initials: "ЖУ",
    name: { ru: "Жумамуратов Улугбек", uz: "Jumamuratov Ulug'bek" },
    role: roles.neonatologist,
    specialty: "neonatology",
    phone: "+998 94 238-55-33",
    phoneHref: "tel:+998942385533",
    tone: "teal",
    featured: true,
  },
  {
    id: "abdrimov-ruslan",
    initials: "АР",
    name: { ru: "Абдримов Руслан", uz: "Abdrimov Ruslan" },
    role: roles.neonatologist,
    specialty: "neonatology",
    phone: "+998 91 093-23-09",
    phoneHref: "tel:+998910932309",
    tone: "teal",
  },
  {
    id: "qabulov-bekzod",
    initials: "КБ",
    name: { ru: "Кабулов Бекзод", uz: "Qabulov Bekzod" },
    role: roles.pediatrician,
    specialty: "pediatrics",
    phone: "+998 93 887-96-66",
    phoneHref: "tel:+998938879666",
    tone: "sky",
  },
  {
    id: "egamov-asadbek",
    initials: "ЭА",
    name: { ru: "Эгамов Асадбек", uz: "Egamov Asadbek" },
    role: roles.pediatrician,
    specialty: "pediatrics",
    phone: "+998 99 963-35-99",
    phoneHref: "tel:+998999633599",
    tone: "sky",
  },
  {
    id: "mominov-izzatbek",
    initials: "МИ",
    name: { ru: "Муминов Иззатбек", uz: "Mo'minov Izzatbek" },
    role: roles.pediatrician,
    specialty: "pediatrics",
    phone: "+998 97 453-04-08",
    phoneHref: "tel:+998974530408",
    tone: "sky",
  },
  {
    id: "ruzmetov-norbek",
    initials: "РН",
    name: { ru: "Рузметов Норбек", uz: "Ruzmetov Norbek" },
    role: roles.pediatrician,
    specialty: "pediatrics",
    phone: "+998 97 859-04-12",
    phoneHref: "tel:+998978590412",
    tone: "sky",
  },
  {
    id: "jumanazarov-nurali",
    initials: "ЖН",
    name: { ru: "Жуманазаров Нурали", uz: "Jumanazarov Nurali" },
    role: roles.pediatrician,
    specialty: "pediatrics",
    phone: "+998 93 446-26-96",
    phoneHref: "tel:+998934462696",
    tone: "sky",
  },
  {
    id: "abdrimov-xursand",
    initials: "АХ",
    name: { ru: "Абдримов Хурсанд", uz: "Abdrimov Xursand" },
    role: roles.pediatrician,
    specialty: "pediatrics",
    phone: "+998 99 968-09-81",
    phoneHref: "tel:+998999680981",
    tone: "sky",
  },
  {
    id: "quronboyev-asadbek",
    initials: "КА",
    name: { ru: "Куронбоев Асадбек", uz: "Quronboyev Asadbek" },
    role: roles.pediatrician,
    specialty: "pediatrics",
    phone: "+998 95 211-16-13",
    phoneHref: "tel:+998952111613",
    tone: "sky",
  },
  {
    id: "matnazarova-malohat",
    initials: "ММ",
    name: { ru: "Матназарова Малохат", uz: "Matnazarova Malohat" },
    role: roles.midwife,
    specialty: "obstetrics",
    phone: "+998 99 942-16-06",
    phoneHref: "tel:+998999421606",
    tone: "pink",
  },
  {
    id: "mullayeva-gulnora",
    initials: "МГ",
    name: { ru: "Муллаева Гулнора", uz: "Mullayeva Gulnora" },
    role: roles.statistician,
    specialty: "staff",
    phone: "+998 97 360-72-25",
    phoneHref: "tel:+998973607225",
    tone: "teal",
  },
];

export const featuredDoctors = doctors.filter((doctor) => doctor.featured);

export function doctorsBySpecialty(specialty: SpecialtyId): Doctor[] {
  return doctors.filter((doctor) => doctor.specialty === specialty);
}
