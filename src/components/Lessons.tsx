"use client";

import { useState } from "react";
import ContactButton from "@/components/ContactButton";

const AGE = { kids: 1, teens: 1.15, adults: 1.3 } as const;
const LEN = { "30": 1, "60": 1.8, "90": 2.5 } as const;

type Age = keyof typeof AGE;
type Len = keyof typeof LEN;

const TIERS = [
  { key: "single", label: "SINGLE", base: 18, sub: "One session · Zoom", popular: false },
  { key: "pack", label: "10-LESSON PACK", base: 160, sub: "Save · progress tracking", popular: true },
  { key: "group", label: "GROUP", base: 12, sub: "Small groups", popular: false },
];

export default function Lessons() {
  const [age, setAge] = useState<Age>("kids");
  const [len, setLen] = useState<Len>("30");

  const mult = AGE[age] * LEN[len];
  const price = (base: number) => `€${Math.round(base * mult)}`;

  return (
    <section id="lessons" className="relative z-10 px-6 py-16 text-center md:py-20">
      <p className="mb-4 font-sans text-[12px] tracking-[4px] text-royal">
        PRIVATE 1-ON-1 LESSONS
      </p>
      <h2 className="mb-3 font-serif text-4xl font-medium">
        Choose your <span className="italic font-normal text-royal">path</span>
      </h2>
      <p className="mx-auto mb-9 max-w-[420px] font-sans text-[15px] leading-relaxed text-muted">
        Tailored lessons by age and length. Pick options to see pricing.
      </p>

      <div className="mb-3 flex flex-wrap justify-center gap-2">
        {(Object.keys(AGE) as Age[]).map((a) => (
          <Pill key={a} active={age === a} onClick={() => setAge(a)}>
            {a === "kids" ? "Kids (6–12)" : a === "teens" ? "Teens (13–17)" : "Adults (18+)"}
          </Pill>
        ))}
      </div>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {(Object.keys(LEN) as Len[]).map((l) => (
          <Pill key={l} active={len === l} onClick={() => setLen(l)}>
            {l} min
          </Pill>
        ))}
      </div>

<div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
        {TIERS.map((t) => (
          <div
            key={t.key}
            className={`relative rounded-2xl p-6 text-left backdrop-blur-sm ${
              t.popular ? "border-2 border-royal" : "border border-[var(--border)]"
            }`}
            style={{ background: "var(--card)" }}
          >
            {t.popular && (
              <span className="absolute -top-3 left-5 rounded-full bg-royal px-3 py-1 font-sans text-[10px] font-medium tracking-wide text-white">
                POPULAR
              </span>
            )}
            <div className={`mb-2 font-sans text-[11px] tracking-[2px] ${t.popular ? "text-royal" : "text-faint"}`}>
              {t.label}
            </div>
            <div className="font-serif text-3xl">{price(t.base)}</div>
            <div className="mt-2 font-sans text-[13px] text-muted">{t.sub}</div>
            <div className="mt-4">
              <ContactButton
                message={`Hi Karyna! I'm interested in the "${t.label}" lessons option (${age}, ${len} min). Could you tell me more?`}
                label="Enquire"
                variant="ghost"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 font-sans text-[13px] transition-colors ${
        active
          ? "bg-royal text-white"
          : "border border-[var(--border)] text-muted"
      }`}
    >
      {children}
    </button>
  );
}