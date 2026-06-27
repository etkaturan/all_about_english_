"use client";

import { useRef } from "react";

export default function PortraitCard() {
  const frameRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = frameRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${px * 10}deg) rotateX(${-py * 10}deg)`;
  };

  const onLeave = () => {
    if (frameRef.current)
      frameRef.current.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg)";
  };

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative shrink-0"
      style={{ animation: "float 6s ease-in-out infinite" }}
    >
      {/* soft glow behind the frame */}
      <div
        className="absolute -inset-6 -z-10 rounded-[2rem] opacity-60 blur-2xl"
        style={{ background: "radial-gradient(circle at 50% 40%, var(--royal), transparent 70%)" }}
      />

      <div
        ref={frameRef}
        className="relative h-[340px] w-[280px] overflow-hidden rounded-[2rem] border border-[var(--border)] transition-transform duration-200 ease-out md:h-[400px] md:w-[320px]"
        style={{ background: "var(--card)", boxShadow: "0 30px 70px rgba(26,31,46,0.25)" }}
      >
        {/* PLACEHOLDER — replace with Karyna's real photo:
            <Image src="/karyna.jpg" alt="Karyna" fill className="object-cover" /> */}
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-faint">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" />
          </svg>
          <span className="font-sans text-[10px] tracking-[2px]">KARYNA'S PHOTO</span>
        </div>

        {/* subtle royal gradient wash at the bottom for editorial depth */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3"
          style={{ background: "linear-gradient(to top, color-mix(in srgb, var(--royal) 22%, transparent), transparent)" }}
        />
      </div>

      {/* floating accent chip */}
      <div
        className="absolute -bottom-4 -left-4 rounded-2xl border border-[var(--border)] px-4 py-2 backdrop-blur-md"
        style={{ background: "var(--card)", animation: "float 5s ease-in-out infinite reverse" }}
      >
        <div className="font-serif text-lg leading-none">8+ yrs</div>
        <div className="font-sans text-[10px] tracking-wide text-faint">TEACHING</div>
      </div>
    </div>
  );
}