"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  durations,
  extraPrograms,
  journeys,
  methods,
  prices,
  tiers,
  together,
  togetherPerksAr,
  togetherPerksEn,
  type DurationId,
  type MethodId,
  type TierId
} from "@/lib/content";
import { useLocale } from "@/lib/locale";
import { Referral } from "@/components/Referral";
import { FaqList } from "@/components/FaqList";
import { SiteCta } from "@/components/SiteCta";
import { gsap, useGsap } from "@/lib/useGsap";

function formatPrice(n: number) {
  return n.toLocaleString("en-US");
}

export function ProgramsPage() {
  const { t, locale } = useLocale();
  const [journey, setJourney] = useState<(typeof journeys)[number]["id"]>(journeys[0].id);
  const [method, setMethod] = useState<MethodId>("ems");
  const [duration, setDuration] = useState<DurationId>("foundation");
  const [tier, setTier] = useState<TierId>("signature");
  const hero = useRef<HTMLElement>(null);
  const extras = useRef<HTMLElement>(null);

  const price = prices[method][duration][tier];
  const selectedJourney = journeys.find((j) => j.id === journey)!;
  const selectedMethod = methods.find((m) => m.id === method)!;
  const selectedDuration = durations.find((d) => d.id === duration)!;
  const selectedTier = tiers.find((item) => item.id === tier)!;

  const perks = locale === "ar" ? togetherPerksAr : togetherPerksEn;

  useEffect(() => {
    const id = window.location.hash;
    if (!id) return;
    const timer = window.setTimeout(() => {
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => window.clearTimeout(timer);
  }, []);

  useGsap(hero, () => {
    gsap.from(".page-hero .line", { yPercent: 110, duration: 1, stagger: 0.1, ease: "power4.out" });
    gsap.from(".page-hero .lead, .builder", { y: 24, opacity: 0, duration: 0.8, delay: 0.25 });
  }, [t.stepsTitle]);

  useGsap(extras, () => {
    gsap.from(".split-card", {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.85,
      ease: "power3.out",
      scrollTrigger: { trigger: extras.current, start: "top 78%" }
    });
  }, [locale]);

  const summary = useMemo(
    () => [
      locale === "ar" ? selectedJourney.titleAr : selectedJourney.titleEn,
      locale === "ar" ? selectedMethod.titleAr : selectedMethod.title,
      `${selectedDuration.sessions} ${t.sessions}`,
      selectedTier.title
    ],
    [locale, selectedDuration.sessions, selectedJourney, selectedMethod, selectedTier.title, t.sessions]
  );

  return (
    <main>
      <section className="page-hero" ref={hero}>
        <div className="wrap">
          <p className="eyebrow">Like A Model</p>
          <h1>
            <span>
              <span className="line">{t.stepsTitle}</span>
            </span>
          </h1>
          <p className="lead">{t.pricingLead}</p>
        </div>
      </section>

      <section className="pricing" id="pricing">
        <div className="wrap builder">
          <div>
            <Chooser
              label={`01 · ${t.journeysTitle}`}
              options={journeys.map((j) => ({
                id: j.id,
                label: locale === "ar" ? j.titleAr : j.titleEn
              }))}
              value={journey}
              onChange={(id) => setJourney(id as typeof journey)}
            />
            <Chooser
              label={`02 · ${t.methodsTitle}`}
              options={methods.map((m) => ({
                id: m.id,
                label: `${locale === "ar" ? m.titleAr : m.title} · ${m.minutes} ${t.minutes}`
              }))}
              value={method}
              onChange={(id) => setMethod(id as MethodId)}
            />
            <Chooser
              label={`03 · ${t.durationsTitle}`}
              options={durations.map((d) => ({
                id: d.id,
                label: `${d.title} · ${d.sessions} ${t.sessions} / ${d.weeks} ${t.weeks}`
              }))}
              value={duration}
              onChange={(id) => setDuration(id as DurationId)}
            />
            <Chooser
              label={`04 · ${t.tiersTitle}`}
              options={tiers.map((item) => ({
                id: item.id,
                label: item.title
              }))}
              value={tier}
              onChange={(id) => setTier(id as TierId)}
            />
          </div>
          <aside className="price-card">
            <p className="eyebrow">{t.start}</p>
            <div className="amount">
              {formatPrice(price)} <small>{t.sar}</small>
            </div>
            <ul>
              {summary.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <p className="lead" style={{ marginTop: "1rem", fontSize: "0.95rem" }}>
              {locale === "ar" ? selectedTier.bodyAr : selectedTier.bodyEn}
            </p>
          </aside>
        </div>

        <div className="wrap tables">
          {methods.map((m) => (
            <PriceTable
              key={m.id}
              title={locale === "ar" ? m.titleAr : m.title}
              methodId={m.id}
            />
          ))}
          <div>
            <h3 style={{ margin: "2rem 0 0.8rem" }}>{t.extrasTitle}</h3>
            <table>
              <thead>
                <tr>
                  <th>{t.extrasTitle}</th>
                  {durations.map((d) => (
                    <th key={d.id}>{d.title}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {extraPrograms.map((p) => (
                  <tr key={p.id}>
                    <td>{locale === "ar" ? p.titleAr : p.titleEn}</td>
                    {durations.map((d) => (
                      <td key={d.id}>{formatPrice(p.prices[d.id])}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="methods">
        <div className="wrap">
          <p className="eyebrow">01</p>
          <h2 className="section-title">{t.journeysTitle}</h2>
          <p className="lead">{t.journeysLead}</p>
          <div className="journey-grid">
            {journeys.map((j) => (
              <article className="journey-card" key={j.id}>
                <img src={j.image} alt="" />
                <div>
                  <h3>{locale === "ar" ? j.titleAr : j.titleEn}</h3>
                  <ul>
                    {(locale === "ar" ? j.pointsAr : j.pointsEn).map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="methods">
        <div className="wrap">
          <p className="eyebrow">02</p>
          <h2 className="section-title">{t.methodsTitle}</h2>
          <div className="method-grid">
            {methods.map((m) => (
              <article className="method" key={m.id}>
                <img src={m.image} alt="" />
                <div className="method-shade" />
                <div className="method-body">
                  <h3>{locale === "ar" ? m.titleAr : m.title}</h3>
                  <p>{locale === "ar" ? m.bodyAr : m.bodyEn}</p>
                  <div className="method-mins">
                    {m.minutes}
                    <small>{t.minutes}</small>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="durations">
        <div className="wrap">
          <p className="eyebrow">03</p>
          <h2 className="section-title">{t.durationsTitle}</h2>
          <div className="dur-grid">
            {durations.map((d) => (
              <article className="dur-card" key={d.id}>
                <p className="eyebrow">{d.title}</p>
                <p className="big">{d.sessions}</p>
                <p>
                  {t.sessions} · {d.weeks} {t.weeks}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tiers">
        <div className="wrap">
          <p className="eyebrow">04</p>
          <h2 className="section-title">{t.tiersTitle}</h2>
          <div className="tier-grid">
            {tiers.map((item, i) => (
              <article className={`tier${i === 1 ? " is-mid" : ""}`} key={item.id}>
                <h3>{item.title}</h3>
                <p className="sub">{locale === "ar" ? item.subtitleAr : item.subtitleEn}</p>
                <p>{locale === "ar" ? item.bodyAr : item.bodyEn}</p>
                {item.id === "signature" ? (
                  <ul>
                    {(locale === "ar" ? item.includesAr : item.includesEn).map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                ) : (
                  <>
                    <p className="eyebrow" style={{ marginTop: "1rem" }}>
                      {item.id === "elite" ? t.plusSignature : t.plusElite}
                    </p>
                    <ul>
                      {(locale === "ar" ? item.extraAr : item.extraEn).map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="extras" ref={extras}>
        <div className="wrap">
          <p className="eyebrow">{t.extrasLead}</p>
          <h2 className="section-title">{t.extrasTitle}</h2>
          <div className="card-grid">
            {extraPrograms.map((p) => (
              <article className="split-card" key={p.id}>
                <img src={p.image} alt="" />
                <div>
                  <h3>{locale === "ar" ? p.titleAr : p.titleEn}</h3>
                  <p>{locale === "ar" ? p.bodyAr : p.bodyEn}</p>
                  <ul>
                    {(locale === "ar" ? p.pointsAr : p.pointsEn).map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="together" id="together">
        <div className="wrap">
          <p className="eyebrow">{t.togetherDiscount}</p>
          <h2 className="section-title">{t.togetherTitle}</h2>
          <p className="lead">{t.togetherLead}</p>
          <div className="together-grid">
            {together.map((item) => (
              <article className="together-card" key={item.id}>
                <h3>{locale === "ar" ? item.titleAr : item.titleEn}</h3>
                <p>{locale === "ar" ? item.bodyAr : item.bodyEn}</p>
                <ul>
                  {(locale === "ar" ? item.pointsAr : item.pointsEn).map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <h3 style={{ marginTop: "2.5rem" }}>{t.togetherPerksTitle}</h3>
          <ul className="perks">
            {perks.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <p style={{ marginTop: "1.5rem" }}>{t.togetherCta}</p>
        </div>
      </section>

      <Referral />
      <FaqList />
      <SiteCta />
    </main>
  );
}

function Chooser({label, options, value, onChange}: {
  label: string;
  options: { id: string; label: string }[];
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="chooser">
      <p className="eyebrow">{label}</p>
      <div className="chips">
        {options.map((opt) => (
          <button key={opt.id} type="button" className={`chip${opt.id === value ? " is-on" : ""}`} onClick={() => onChange(opt.id)}>
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function PriceTable({ title, methodId }: { title: string; methodId: MethodId }) {
  const { t } = useLocale();
  return (
    <div>
      <h3 style={{ margin: "1.5rem 0 0.8rem" }}>{title}</h3>
      <table>
        <thead>
          <tr>
            <th>{t.programWeeks}</th>
            {tiers.map((tier) => (
              <th key={tier.id}>{tier.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {durations.map((d) => (
            <tr key={d.id}>
              <td>
                {d.title} · {d.sessions} / {d.weeks} {t.weeks}
              </td>
              {tiers.map((tier) => (
                <td key={tier.id}>{formatPrice(prices[methodId][d.id][tier.id])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}