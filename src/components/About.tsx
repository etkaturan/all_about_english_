export default function About() {
  return (
    <section id="about" className="relative z-10 px-6 py-16 text-center md:py-20">
      <div className="mx-auto mb-6 flex h-[90px] w-[90px] items-center justify-center rounded-full border border-[var(--border)] font-sans text-[9px] tracking-wide text-faint" style={{ background: "var(--card)" }}>
        PHOTO
      </div>
      <h2 className="mb-4 font-serif text-3xl font-medium">
        Meet <span className="italic font-normal text-royal">Karyna</span>
      </h2>
      <p className="mx-auto max-w-[460px] font-sans text-[15px] leading-relaxed text-muted">
        English teacher to over 121,000 followers. For years she has helped
        Russian, Ukrainian and German speakers find their voice in English —
        through lessons, books, and a growing community.
      </p>
    </section>
  );
}