"use client";

import { useRef } from "react";

export default function BookShowcase() {
  const innerRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = innerRef.current;
    if (!el) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `rotateY(${-28 + px * 36}deg) rotateX(${6 - py * 28}deg)`;
  };

  const onLeave = () => {
    if (innerRef.current)
      innerRef.current.style.transform = "rotateY(-28deg) rotateX(6deg)";
  };

  return (
    <section
      id="books"
      className="relative z-10 flex flex-wrap items-center justify-center gap-12 px-6 py-16 md:py-20"
    >
      <div
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ perspective: "1100px" }}
      >
        <div
          ref={innerRef}
          className="relative h-[212px] w-[148px] transition-transform duration-150 ease-out"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateY(-28deg) rotateX(6deg)",
          }}
        >
          <div
            className="absolute inset-0 flex flex-col justify-between rounded-[4px_8px_8px_4px] border border-[var(--border)] p-4"
            style={{
              background: "var(--card)",
              boxShadow: "0 22px 50px rgba(26,31,46,0.22)",
            }}
          >
            <div className="font-sans text-[9px] tracking-[3px] text-royal">
              KARYNA · 2026
            </div>
            <div>
              <div className="font-serif text-[19px] italic leading-tight">
                Fluent
                <br />
                English
              </div>
              <div className="mt-2 h-[2px] w-[26px] bg-royal" />
            </div>
            <div className="font-sans text-[8px] tracking-[2px] text-faint">
              THE COMPLETE GUIDE
            </div>
          </div>
          <div
            className="absolute right-0 top-0 h-full w-[14px]"
            style={{
              background: "color-mix(in srgb, var(--navy) 12%, var(--ivory))",
              transform: "translateX(13px) rotateY(90deg)",
              transformOrigin: "left",
            }}
          />
        </div>
      </div>

      <div className="max-w-[270px] text-left">
        <p className="mb-3 font-sans text-[12px] tracking-[3px] text-royal">
          THE BOOKSHELF
        </p>
        <h2 className="mb-3 font-serif text-2xl font-medium leading-tight">
          Learn at your own pace
        </h2>
        <p className="font-sans text-[15px] leading-relaxed text-muted">
          Preview the first chapters in 3D, then unlock the full book.
        </p>
        <button className="mt-5 rounded-full bg-royal px-6 py-3 font-sans text-[13px] font-medium text-white">
          Explore books
        </button>
      </div>
    </section>
  );
}   