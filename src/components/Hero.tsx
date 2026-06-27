import ContactButton from "@/components/contact/ContactButton";
import PortraitCard from "@/components/PortraitCard";

export default function Hero() {
  return (
    <section className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-12 px-6 pb-20 pt-16 md:flex-row md:gap-8 md:px-10 md:pt-20">
      <div className="max-w-xl text-center md:text-left">
        <p className="mb-6 font-sans text-[12px] tracking-[5px] text-royal">
          PRIVATE ENGLISH TUITION
        </p>
        <h1 className="mb-6 font-serif text-5xl font-medium leading-[1.02] tracking-tight md:text-7xl">
          Speak with
          <br />
          <span className="italic font-normal text-royal">confidence.</span>
        </h1>
        <p className="mx-auto mb-9 max-w-md font-sans text-base leading-relaxed text-muted md:mx-0 md:text-lg">
          One-on-one English lessons for Russian, Ukrainian and German
          speakers — taught by Karyna.
        </p>
        <div className="mb-12 flex flex-col items-center gap-4 sm:flex-row md:items-start">
          <ContactButton
            message="Hi Karyna! I'd like to book an English lesson."
            label="Book a lesson"
          />
          <a
            href="#books"
            className="border-b border-[var(--border)] px-2 py-4 font-sans text-sm tracking-wide"
          >
            Browse books →
          </a>
        </div>

        <div className="flex justify-center gap-10 md:justify-start">
          <Stat value="121K" label="FOLLOWERS" />
          <Stat value="500+" label="STUDENTS" />
          <Stat value="4.9 ★" label="RATING" />
        </div>
      </div>

      <PortraitCard />
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-3xl leading-none">{value}</div>
      <div className="mt-1 font-sans text-[11px] tracking-[2px] text-faint">{label}</div>
    </div>
  );
}