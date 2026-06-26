export default function Hero() {
  return (
    <section className="relative z-10 mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-6 pb-20 pt-12 md:flex-row md:px-10">
      <div className="max-w-[58%] pt-6">
        <p className="mb-6 font-sans text-[12px] tracking-[5px] text-royal">
          FROM LONDON TO NEW YORK
        </p>
        <h1 className="mb-6 font-serif text-5xl font-medium leading-[1.02] tracking-tight md:text-6xl">
          Speak with
          <br />
          <span className="italic font-normal text-royal">confidence.</span>
        </h1>
        <p className="mb-9 max-w-[390px] font-sans text-base leading-relaxed text-muted">
          One-on-one English lessons for Russian, Ukrainian and German
          speakers — taught by Karyna.
        </p>
        <div className="flex items-center gap-4">
          <button className="rounded-full bg-royal px-8 py-4 font-sans text-sm font-medium tracking-wide text-white">
            Book a lesson
          </button>
          <a
            href="#books"
            className="border-b border-[var(--border)] px-2 py-4 font-sans text-sm tracking-wide"
          >
            Browse books →
          </a>
        </div>
      </div>

      <div className="mt-8 flex min-w-[160px] flex-col gap-3">
        <StatCard value="121K" label="FOLLOWERS" />
        <StatCard value="500+" label="STUDENTS" />
        <StatCard value="4.9 ★" label="RATING" accent />
      </div>
    </section>
  );
}

function StatCard({
  value,
  label,
  accent = false,
}: {
  value: string;
  label: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-4 backdrop-blur-md ${
        accent ? "border-royal/35" : "border-[var(--border)]"
      }`}
      style={{
        background: accent
          ? "color-mix(in srgb, var(--royal) 12%, transparent)"
          : "var(--card)",
      }}
    >
      <div className="font-serif text-3xl leading-none">{value}</div>
      <div className="mt-1 font-sans text-[11px] tracking-[2px] text-faint">
        {label}
      </div>
    </div>
  );
}