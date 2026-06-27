import Section from "@/components/Section";

export default function About() {
  return (
    <Section id="about">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="mx-auto flex h-[280px] w-full max-w-[340px] items-center justify-center rounded-3xl border border-[var(--border)] font-sans text-[10px] tracking-[2px] text-faint" style={{ background: "var(--card)" }}>
          KARYNA'S PHOTO
        </div>
        <div className="text-center md:text-left">
          <p className="mb-4 font-sans text-[12px] tracking-[4px] text-royal">ABOUT</p>
          <h2 className="mb-5 font-serif text-4xl font-medium md:text-5xl">
            Meet <span className="italic font-normal text-royal">Karyna</span>
          </h2>
          <p className="font-sans text-base leading-relaxed text-muted md:text-lg">
            English teacher to over 121,000 followers. For years she has helped
            Russian, Ukrainian and German speakers find their voice in English —
            through lessons, books, and a growing community of confident
            speakers.
          </p>
        </div>
      </div>
    </Section>
  );
}