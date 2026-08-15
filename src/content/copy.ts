import type { Localized } from "@/lib/i18n";

export const meta = {
  homeTitle: {
    ru: "Baby Med — Частный роддом и детская клиника | Ургенч",
    uz: "Baby Med — Xususiy tug'ruqxona va bolalar klinikasi | Urganch",
  } satisfies Localized,
  homeDescription: {
    ru: "Частный родильный дом и детская клиника Baby Med в Ургенче. Комфортные роды, неонатология, гинекология, УЗИ. Круглосуточно. ул. Хонка, 164B",
    uz: "Urganchdagi xususiy tug'ruqxona va bolalar klinikasi Baby Med. Qulay tug'ruq, neonatologiya, ginekologiya, UZI. Kecha-kunduz. Xonqa ko'chasi, 164B",
  } satisfies Localized,
  pricesTitle: {
    ru: "Услуги и цены — Baby Med | Ургенч",
    uz: "Xizmatlar va narxlar — Baby Med | Urganch",
  } satisfies Localized,
  pricesDescription: {
    ru: "Прайс-лист услуг частного роддома Baby Med в Ургенче. Ведение беременности, роды, неонатология, гинекология, УЗИ.",
    uz: "Urganchdagi Baby Med xususiy tug'ruqxonasi xizmatlari narxlari. Homiladorlik, tug'ruq, neonatologiya, ginekologiya, UZI.",
  } satisfies Localized,
};

export const nav = {
  about: { ru: "О клинике", uz: "Klinika haqida" } satisfies Localized,
  services: { ru: "Услуги", uz: "Xizmatlar" } satisfies Localized,
  prices: { ru: "Цены", uz: "Narxlar" } satisfies Localized,
  doctors: { ru: "Врачи", uz: "Shifokorlar" } satisfies Localized,
  rooms: { ru: "Палаты", uz: "Palatalar" } satisfies Localized,
  contacts: { ru: "Контакты", uz: "Aloqa" } satisfies Localized,
  book: { ru: "Записаться", uz: "Yozilish" } satisfies Localized,
  call: { ru: "Позвонить", uz: "Qo'ng'iroq qilish" } satisfies Localized,
  openMenu: { ru: "Открыть меню", uz: "Menyuni ochish" } satisfies Localized,
  closeMenu: { ru: "Закрыть меню", uz: "Menyuni yopish" } satisfies Localized,
};

export const hero = {
  badge: { ru: "Работаем круглосуточно", uz: "Kecha-kunduz ishlaymiz" } satisfies Localized,
  titleBefore: { ru: "Забота о маме", uz: "Ona va chaqaloq" } satisfies Localized,
  titleAccent: { ru: "и малыше", uz: "uchun g'amxo'rlik" } satisfies Localized,
  titleAfter: { ru: "с первых дней", uz: "birinchi kunlardan" } satisfies Localized,
  lead: {
    ru: "Частный родильный дом и клиника Baby Med в Ургенче. Современные условия, опытные врачи и тёплая атмосфера для самых важных моментов вашей жизни.",
    uz: "Urganchdagi xususiy tug'ruqxona va klinika Baby Med. Zamonaviy sharoitlar, tajribali shifokorlar va hayotingizning eng muhim lahzalari uchun issiq muhit.",
  } satisfies Localized,
  book: { ru: "Записаться на приём", uz: "Qabulga yozilish" } satisfies Localized,
  prices: { ru: "Услуги и цены", uz: "Xizmatlar va narxlar" } satisfies Localized,
  stat247: { ru: "Круглосуточно", uz: "Kecha-kunduz" } satisfies Localized,
  statYears: { ru: "Лет опыта", uz: "Yillik tajriba" } satisfies Localized,
  statCare: { ru: "Внимание", uz: "E'tibor" } satisfies Localized,
  hotline: { ru: "Горячая линия", uz: "Ishonch telefoni" } satisfies Localized,
};

export const about = {
  kicker: { ru: "О клинике", uz: "Klinika haqida" } satisfies Localized,
  title: {
    ru: "Baby Med — место, где начинается жизнь",
    uz: "Baby Med — hayot boshlanadigan joy",
  } satisfies Localized,
  p1: {
    ru: "Частный родильный комплекс Baby Med работает в Ургенче с 2018 года. Мы создали комфортное и безопасное пространство для будущих мам и новорождённых.",
    uz: "Xususiy tug'ruq majmuasi Baby Med 2018-yildan beri Urganchda faoliyat yuritadi. Biz bo'lajak onalar va yangi tug'ilgan chaqaloqlar uchun qulay va xavfsiz muhit yaratdik.",
  } satisfies Localized,
  p2: {
    ru: "В нашей клинике работают опытные специалисты: гинекологи, неонатологи и врачи УЗИ. Руководит клиникой Собирова Нигора Ахмедовна — неонатолог с 37-летним стажем.",
    uz: "Klinikamizda tajribali mutaxassislar ishlaydi: ginekologlar, neonatologlar va UZI shifokorlari. Klinikani Sobirova Nigora Axmedovna — 37 yillik tajribaga ega neonatolog boshqaradi.",
  } satisfies Localized,
  p3: {
    ru: "Мы принимаем роды, ведём беременность, оказываем помощь новорождённым и проводим гинекологические консультации в тёплой, спокойной атмосфере.",
    uz: "Biz tug'ruqlarni qabul qilamiz, homiladorlikni kuzatamiz, yangi tug'ilgan chaqaloqlarga yordam beramiz va issiq, tinch muhitda ginekologik maslahatlar o'tkazamiz.",
  } satisfies Localized,
  cards: [
    {
      icon: "🤰",
      tone: "pink" as const,
      title: { ru: "Ведение беременности", uz: "Homiladorlikni kuzatish" } satisfies Localized,
      text: { ru: "Полное наблюдение на всех сроках", uz: "Barcha muddatlarda to'liq kuzatuv" } satisfies Localized,
    },
    {
      icon: "👶",
      tone: "teal" as const,
      title: { ru: "Роды", uz: "Tug'ruq" } satisfies Localized,
      text: { ru: "Комфортные и безопасные условия", uz: "Qulay va xavfsiz sharoitlar" } satisfies Localized,
    },
    {
      icon: "🩺",
      tone: "sky" as const,
      title: { ru: "Неонатология", uz: "Neonatologiya" } satisfies Localized,
      text: { ru: "Забота о малыше с первых часов", uz: "Chaqaloqqa birinchi soatlardan g'amxo'rlik" } satisfies Localized,
    },
    {
      icon: "🔬",
      tone: "amber" as const,
      title: { ru: "УЗИ-диагностика", uz: "UZI diagnostikasi" } satisfies Localized,
      text: { ru: "Современное оборудование", uz: "Zamonaviy uskunalar" } satisfies Localized,
    },
  ],
};

export const servicesBlock = {
  kicker: { ru: "Услуги", uz: "Xizmatlar" } satisfies Localized,
  title: {
    ru: "Всё для здоровья мамы и ребёнка",
    uz: "Ona va bola salomatligi uchun hamma narsa",
  } satisfies Localized,
  lead: {
    ru: "Мы оказываем полный спектр услуг в сфере акушерства, гинекологии и неонатологии",
    uz: "Biz akusherlik, ginekologiya va neonatologiya sohasida to'liq xizmatlar spektrini taqdim etamiz",
  } satisfies Localized,
  allPrices: {
    ru: "Смотреть все услуги и цены →",
    uz: "Barcha xizmatlar va narxlarni ko'rish →",
  } satisfies Localized,
  items: [
    {
      icon: "🤰",
      tone: "pink" as const,
      title: { ru: "Ведение беременности", uz: "Homiladorlikni kuzatish" } satisfies Localized,
      points: [
        { ru: "Регулярные осмотры гинеколога", uz: "Ginekologning muntazam ko'riklari" },
        { ru: "УЗИ на всех сроках", uz: "Barcha muddatlarda UZI" },
        { ru: "Анализы и мониторинг", uz: "Tahlillar va monitoring" },
        { ru: "Подготовка к родам", uz: "Tug'ruqqa tayyorgarlik" },
      ] satisfies Localized[],
    },
    {
      icon: "🏥",
      tone: "rose" as const,
      title: { ru: "Роды", uz: "Tug'ruq" } satisfies Localized,
      points: [
        { ru: "Физиологические роды", uz: "Fiziologik tug'ruq" },
        { ru: "Индивидуальные родовые залы", uz: "Individual tug'ruq zallari" },
        { ru: "Партнёрские роды", uz: "Hamkorlikdagi tug'ruq" },
        { ru: "Послеродовое наблюдение", uz: "Tug'ruqdan keyingi kuzatuv" },
      ] satisfies Localized[],
    },
    {
      icon: "👶",
      tone: "teal" as const,
      title: { ru: "Неонатология", uz: "Neonatologiya" } satisfies Localized,
      points: [
        { ru: "Осмотр новорождённых", uz: "Yangi tug'ilganlarni ko'rik" },
        { ru: "Первичный уход за малышом", uz: "Chaqaloqqa birlamchi parvarish" },
        { ru: "Консультации по грудному вскармливанию", uz: "Ko'krak suti bilan ovqatlantirish bo'yicha maslahat" },
        { ru: "Наблюдение в первые дни жизни", uz: "Hayotning dastlabki kunlarida kuzatuv" },
      ] satisfies Localized[],
    },
    {
      icon: "👩‍⚕️",
      tone: "emerald" as const,
      title: { ru: "Гинекология", uz: "Ginekologiya" } satisfies Localized,
      points: [
        { ru: "Консультации гинеколога", uz: "Ginekolog maslahati" },
        { ru: "Лечение гинекологических заболеваний", uz: "Ginekologik kasalliklarni davolash" },
        { ru: "Профилактические осмотры", uz: "Profilaktik ko'riklar" },
        { ru: "Планирование беременности", uz: "Homiladorlikni rejalashtirish" },
      ] satisfies Localized[],
    },
    {
      icon: "📡",
      tone: "violet" as const,
      title: { ru: "УЗИ-диагностика", uz: "UZI diagnostikasi" } satisfies Localized,
      points: [
        { ru: "УЗИ органов малого таза", uz: "Kichik tos a'zolari UZIsi" },
        { ru: "Акушерское УЗИ", uz: "Akusherlik UZIsi" },
        { ru: "УЗИ плода", uz: "Homila UZIsi" },
        { ru: "Допплерометрия", uz: "Dopplerometriya" },
      ] satisfies Localized[],
    },
    {
      icon: "💝",
      tone: "amber" as const,
      title: { ru: "Послеродовой период", uz: "Tug'ruqdan keyingi davr" } satisfies Localized,
      points: [
        { ru: "Наблюдение за мамой", uz: "Onani kuzatish" },
        { ru: "Восстановление после родов", uz: "Tug'ruqdan keyin tiklanish" },
        { ru: "Консультации по уходу", uz: "Parvarish bo'yicha maslahatlar" },
        { ru: "Поддержка в первые недели", uz: "Dastlabki haftalarda qo'llab-quvvatlash" },
      ] satisfies Localized[],
    },
  ],
};

export const doctorsBlock = {
  kicker: { ru: "Команда", uz: "Jamoa" } satisfies Localized,
  title: { ru: "Наши врачи", uz: "Bizning shifokorlarimiz" } satisfies Localized,
  lead: {
    ru: "Опытные специалисты, которым можно доверить самое дорогое",
    uz: "Eng qimmat narsani ishonib topshirish mumkin bo'lgan tajribali mutaxassislar",
  } satisfies Localized,
};

export const roomsBlock = {
  kicker: { ru: "Палаты", uz: "Palatalar" } satisfies Localized,
  title: { ru: "Комфорт для мамы и малыша", uz: "Ona va chaqaloq uchun qulaylik" } satisfies Localized,
  lead: {
    ru: "Уютные палаты, созданные для спокойного восстановления",
    uz: "Tinch tiklanish uchun yaratilgan qulay palatalar",
  } satisfies Localized,
};

export const whyBlock = {
  kicker: { ru: "Почему мы", uz: "Nima uchun biz" } satisfies Localized,
  title: { ru: "Преимущества Baby Med", uz: "Baby Med afzalliklari" } satisfies Localized,
};

export const ctaBlock = {
  title: {
    ru: "Готовы доверить нам самое важное?",
    uz: "Eng muhim narsani bizga ishonib topshirishga tayyormisiz?",
  } satisfies Localized,
  lead: {
    ru: "Позвоните прямо сейчас — мы ответим на все вопросы и запишем вас на удобное время.",
    uz: "Hozir qo'ng'iroq qiling — barcha savollarga javob beramiz va qulay vaqtga yozib qo'yamiz.",
  } satisfies Localized,
};

export const contactsBlock = {
  kicker: { ru: "Контакты", uz: "Aloqa" } satisfies Localized,
  title: { ru: "Как нас найти", uz: "Bizni qanday topish mumkin" } satisfies Localized,
  address: { ru: "Адрес", uz: "Manzil" } satisfies Localized,
  phone: { ru: "Телефон", uz: "Telefon" } satisfies Localized,
  hours: { ru: "Режим работы", uz: "Ish vaqti" } satisfies Localized,
  callNow: { ru: "Позвонить сейчас", uz: "Hozir qo'ng'iroq qilish" } satisfies Localized,
  openMap: { ru: "Открыть на карте", uz: "Xaritada ochish" } satisfies Localized,
};

export const footerCopy = {
  about: {
    ru: "Частный родильный комплекс и клиника. Забота о маме и малыше с 2018 года.",
    uz: "Xususiy tug'ruq majmuasi va klinika. 2018-yildan beri ona va chaqaloq uchun g'amxo'rlik.",
  } satisfies Localized,
  nav: { ru: "Навигация", uz: "Navigatsiya" } satisfies Localized,
  contacts: { ru: "Контакты", uz: "Aloqa" } satisfies Localized,
  rights: { ru: "Все права защищены.", uz: "Barcha huquqlar himoyalangan." } satisfies Localized,
};

export const pricesPage = {
  kicker: { ru: "Прайс-лист", uz: "Narxlar ro'yxati" } satisfies Localized,
  title: { ru: "Услуги и цены", uz: "Xizmatlar va narxlar" } satisfies Localized,
  lead: {
    ru: "Актуальные цены на услуги клиники Baby Med. Окончательная стоимость уточняется при записи.",
    uz: "Baby Med klinikasi xizmatlarining joriy narxlari. Yakuniy narx yozilishda aniqlashtiriladi.",
  } satisfies Localized,
  note: {
    ru: "Цены указаны ориентировочно и могут отличаться в зависимости от индивидуальных особенностей. Точную стоимость уточняйте по телефону.",
    uz: "Narxlar taxminiy ko'rsatilgan va individual xususiyatlarga qarab farq qilishi mumkin. Aniq narxni telefon orqali aniqlashtiring.",
  } satisfies Localized,
  noteStrong: { ru: "Важно:", uz: "Muhim:" } satisfies Localized,
  book: { ru: "Записаться / Уточнить цену", uz: "Yozilish / Narxni aniqlashtirish" } satisfies Localized,
};
