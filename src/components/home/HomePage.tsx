import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { advantages } from "@/content/advantages";
import {
  about,
  contactsBlock,
  ctaBlock,
  doctorsBlock,
  hero,
  roomsBlock,
  servicesBlock,
  whyBlock,
} from "@/content/copy";
import { doctors } from "@/content/doctors";
import { rooms } from "@/content/rooms";
import { site } from "@/content/site";
import { t } from "@/lib/i18n";

const cardTones = {
  pink: "bg-brand-pink-light",
  teal: "bg-brand-teal-light",
  sky: "bg-sky-50",
  amber: "bg-amber-50",
  rose: "bg-pink-100",
  emerald: "bg-emerald-100",
  violet: "bg-violet-100",
};

const doctorTones = {
  pink: {
    card: "border-pink-100 from-pink-50",
    avatar: "from-brand-pink to-brand-pink-dark shadow-pink-200/50",
    role: "text-brand-pink",
  },
  teal: {
    card: "border-teal-100 from-teal-50",
    avatar: "from-brand-teal to-brand-teal-dark shadow-teal-200/50",
    role: "text-brand-teal",
  },
  sky: {
    card: "border-sky-100 from-sky-50",
    avatar: "from-sky-400 to-sky-600 shadow-sky-200/50",
    role: "text-sky-600",
  },
  violet: {
    card: "border-violet-100 from-violet-50",
    avatar: "from-violet-400 to-violet-600 shadow-violet-200/50",
    role: "text-violet-600",
  },
};

const roomTones = {
  pink: {
    art: "from-pink-100 via-pink-50 to-rose-100",
    badge: "text-brand-pink-dark",
  },
  teal: {
    art: "from-teal-100 via-cyan-50 to-teal-50",
    badge: "text-brand-teal-dark",
  },
  violet: {
    art: "from-violet-100 via-fuchsia-50 to-pink-50",
    badge: "text-violet-700",
  },
};

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-100 bg-white/80 px-4 py-1.5 text-sm font-medium text-brand-pink backdrop-blur">
                <span className="h-2 w-2 animate-pulse rounded-full bg-teal-500" />
                {t(hero.badge, locale)}
              </div>
              <h1 className="mb-6 text-4xl leading-tight font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
                {t(hero.titleBefore, locale)}
                <br />
                <span className="text-brand-pink">{t(hero.titleAccent, locale)}</span>
                <br />
                {t(hero.titleAfter, locale)}
              </h1>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-600">
                {t(hero.lead, locale)}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center rounded-2xl bg-brand-pink px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-pink-200/60 transition hover:bg-brand-pink-dark"
                >
                  {t(hero.book, locale)}
                </a>
                <Link
                  href="/uslugi"
                  className="inline-flex items-center justify-center rounded-2xl border border-pink-200 bg-white px-8 py-4 text-lg font-semibold text-brand-pink transition hover:bg-pink-50"
                >
                  {t(hero.prices, locale)}
                </Link>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-pink-100/60 pt-8">
                <div>
                  <div className="text-3xl font-bold text-brand-pink">24/7</div>
                  <div className="mt-1 text-sm text-gray-500">{t(hero.stat247, locale)}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-teal">8+</div>
                  <div className="mt-1 text-sm text-gray-500">{t(hero.statYears, locale)}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-pink">100%</div>
                  <div className="mt-1 text-sm text-gray-500">{t(hero.statCare, locale)}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="soft-shadow relative z-10 rounded-3xl border border-pink-50 bg-white p-8">
                <div className="flex items-center justify-center py-6">
                  <img
                    src="/logo.jpg"
                    alt="Baby Med"
                    className="w-full max-w-sm object-contain"
                  />
                </div>
                <div className="mt-2 flex items-center justify-between border-t border-pink-50 pt-5">
                  <div>
                    <div className="text-sm text-gray-500">{t(hero.hotline, locale)}</div>
                    <a href={site.phoneHref} className="text-lg font-bold text-brand-pink">
                      {site.phone}
                    </a>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-pink-light">
                    <svg
                      className="h-6 w-6 text-brand-pink"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-pink-200 opacity-40 blur-3xl" />
              <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-teal-200 opacity-40 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold tracking-wider text-brand-pink uppercase">
                {t(about.kicker, locale)}
              </span>
              <h2 className="mt-3 mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                {t(about.title, locale)}
              </h2>
              <p className="mb-5 leading-relaxed text-gray-600">{t(about.p1, locale)}</p>
              <p className="mb-5 leading-relaxed text-gray-600">{t(about.p2, locale)}</p>
              <p className="leading-relaxed text-gray-600">{t(about.p3, locale)}</p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {about.cards.map((card) => (
                <div
                  key={card.title.ru}
                  className={`card-hover rounded-2xl p-6 ${cardTones[card.tone]}`}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-sm">
                    {card.icon}
                  </div>
                  <h3 className="mb-1 font-semibold text-gray-900">{t(card.title, locale)}</h3>
                  <p className="text-sm text-gray-600">{t(card.text, locale)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-gradient-to-b from-pink-50/40 to-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-sm font-semibold tracking-wider text-brand-pink uppercase">
              {t(servicesBlock.kicker, locale)}
            </span>
            <h2 className="mt-3 mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              {t(servicesBlock.title, locale)}
            </h2>
            <p className="text-gray-600">{t(servicesBlock.lead, locale)}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicesBlock.items.map((item) => (
              <div
                key={item.title.ru}
                className="card-hover soft-shadow rounded-2xl border border-pink-50 bg-white p-7"
              >
                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-3xl ${cardTones[item.tone]}`}
                >
                  {item.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {t(item.title, locale)}
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {item.points.map((point) => (
                    <li key={point.ru}>• {t(point, locale)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/uslugi"
              className="inline-flex items-center gap-2 rounded-2xl bg-brand-teal px-8 py-3.5 font-semibold text-white shadow-lg shadow-teal-200/40 transition hover:bg-brand-teal-dark"
            >
              {t(servicesBlock.allPrices, locale)}
            </Link>
          </div>
        </div>
      </section>

      <section id="doctors" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-sm font-semibold tracking-wider text-brand-pink uppercase">
              {t(doctorsBlock.kicker, locale)}
            </span>
            <h2 className="mt-3 mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              {t(doctorsBlock.title, locale)}
            </h2>
            <p className="text-gray-600">{t(doctorsBlock.lead, locale)}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {doctors.map((doctor) => {
              const tone = doctorTones[doctor.tone];
              return (
                <div
                  key={doctor.initials}
                  className={`card-hover rounded-2xl border bg-gradient-to-b to-white p-6 text-center ${tone.card}`}
                >
                  <div
                    className={`mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br text-3xl font-bold text-white shadow-lg ${tone.avatar}`}
                  >
                    {doctor.initials}
                  </div>
                  <h3 className="text-lg leading-snug font-bold text-gray-900">
                    {doctor.nameLines[0]}
                    <br />
                    {doctor.nameLines[1]}
                  </h3>
                  <p className={`mt-2 text-sm font-medium ${tone.role}`}>
                    {t(doctor.role, locale)}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">{t(doctor.experience, locale)}</p>
                  {doctor.note ? (
                    <p className="mt-3 text-xs text-gray-400">{t(doctor.note, locale)}</p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="rooms" className="bg-gradient-to-b from-teal-50/30 to-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-sm font-semibold tracking-wider text-brand-teal uppercase">
              {t(roomsBlock.kicker, locale)}
            </span>
            <h2 className="mt-3 mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              {t(roomsBlock.title, locale)}
            </h2>
            <p className="text-gray-600">{t(roomsBlock.lead, locale)}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {rooms.map((room) => {
              const tone = roomTones[room.tone];
              return (
                <div
                  key={room.title.ru}
                  className="card-hover soft-shadow overflow-hidden rounded-2xl border border-pink-50 bg-white"
                >
                  <div
                    className={`flex h-48 items-center justify-center bg-gradient-to-br ${tone.art}`}
                  >
                    <div className="text-center">
                      <div className="mb-2 text-5xl">{room.icon}</div>
                      <div
                        className={`rounded-full bg-white/70 px-3 py-1 text-sm font-medium ${tone.badge}`}
                      >
                        {t(room.badge, locale)}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-lg font-bold text-gray-900">
                      {t(room.title, locale)}
                    </h3>
                    <p className="mb-4 text-sm text-gray-600">{t(room.text, locale)}</p>
                    <ul className="space-y-1 text-sm text-gray-500">
                      {room.features.map((feature) => (
                        <li key={feature.ru}>✓ {t(feature, locale)}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-brand-pink-light via-white to-brand-teal-light py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-sm font-semibold tracking-wider text-brand-pink uppercase">
              {t(whyBlock.kicker, locale)}
            </span>
            <h2 className="mt-3 mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              {t(whyBlock.title, locale)}
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((item) => (
              <div key={item.title.ru} className="flex gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl shadow-md">
                  {item.icon}
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900">
                    {t(item.title, locale)}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {t(item.text, locale)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-pink to-brand-pink-dark p-10 text-center text-white md:p-14">
            <div className="absolute top-0 right-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10" />
            <div className="absolute bottom-0 left-0 h-48 w-48 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/10" />
            <div className="relative z-10">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t(ctaBlock.title, locale)}</h2>
              <p className="mx-auto mb-8 max-w-xl text-lg text-pink-100">
                {t(ctaBlock.lead, locale)}
              </p>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-lg font-bold text-brand-pink-dark transition hover:bg-pink-50"
              >
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-sm font-semibold tracking-wider text-brand-pink uppercase">
              {t(contactsBlock.kicker, locale)}
            </span>
            <h2 className="mt-3 mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              {t(contactsBlock.title, locale)}
            </h2>
          </div>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="soft-shadow rounded-3xl bg-white p-8">
              <div className="mb-6">
                <img src="/logo.jpg" alt="Baby Med" className="h-12 object-contain" />
              </div>
              <div className="space-y-5">
                <ContactRow
                  label={t(contactsBlock.address, locale)}
                  value={t(site.address, locale)}
                  hint={t(site.landmark, locale)}
                />
                <ContactRow
                  label={t(contactsBlock.phone, locale)}
                  value={
                    <a href={site.phoneHref} className="font-medium text-brand-pink hover:underline">
                      {site.phone}
                    </a>
                  }
                />
                <ContactRow
                  label="Email"
                  value={
                    <a href={site.emailHref} className="font-medium text-brand-pink hover:underline">
                      {site.email}
                    </a>
                  }
                />
                <ContactRow
                  label={t(contactsBlock.hours, locale)}
                  value={t(site.hours, locale)}
                />
              </div>
              <div className="mt-8 border-t border-gray-100 pt-6">
                <a
                  href={site.phoneHref}
                  className="block w-full rounded-xl bg-brand-pink py-3.5 text-center font-semibold text-white transition hover:bg-brand-pink-dark"
                >
                  {t(contactsBlock.callNow, locale)}
                </a>
              </div>
            </div>

            <div className="soft-shadow relative flex min-h-[400px] items-center justify-center overflow-hidden rounded-3xl bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-sky-50 to-teal-50" />
              <div className="relative z-10 p-8 text-center">
                <div className="mb-4 text-5xl">📍</div>
                <div className="mb-2 text-xl font-bold text-gray-800">ул. Хонка, 164B</div>
                <div className="mb-1 text-gray-600">{t(site.region, locale)}</div>
                <div className="mb-6 text-sm text-gray-500">{t(site.landmark, locale)}</div>
                <a
                  href={site.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white px-5 py-2.5 text-sm font-semibold text-brand-pink shadow-sm transition hover:bg-gray-50"
                >
                  {t(contactsBlock.openMap, locale)}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  label,
  value,
  hint,
}: {
  label: string;
  value: ReactNode;
  hint?: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-pink-light text-brand-pink">
        •
      </div>
      <div>
        <div className="text-sm text-gray-500">{label}</div>
        <div className="font-medium text-gray-900">{value}</div>
        {hint ? <div className="mt-0.5 text-sm text-gray-500">{hint}</div> : null}
      </div>
    </div>
  );
}
