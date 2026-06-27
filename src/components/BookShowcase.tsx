"use client";

import { useRef } from "react";
import ContactButton from "@/components/contact/ContactButton";
import Section from "@/components/Section";

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
    <Section id="books">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="flex justify-center">
          <div onMouseMove={onMove} onMouseLeave={onLeave} style={{ perspective: "1100px" }}>
            <div
              ref={innerRef}
              className="relative h-[300px] w-[210px] transition-transform duration-150 ease-out"
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateY(-28deg) rotateX(6deg)",
              }}
            >
              <div
                className="absolute inset-0 flex flex-col justify-between rounded-[4px_10px_10px_4px] border border-[var(--border)] p-6"
                style={{ background: "var(--card)", boxShadow: "0 30px 60px rgba(26,31,46,0.25)" }}
              >
                <div className="font-sans text-[10px] tracking-[3px] text-royal">KARYNA · 2026</div>
                <div>
                  <div className="font-serif text-2xl italic leading-tight">
                    Fluent
                    <br />
                    English
                  </div>
                  <div className="mt-3 h-[2px] w-[32px] bg-royal" />
                </div>
                <div className="font-sans text-[9px] tracking-[2px] text-faint">THE COMPLETE GUIDE</div>
              </div>
              <div
                className="absolute right-0 top-0 h-full w-[18px]"
                style={{
                  background: "color-mix(in srgb, var(--navy) 12%, var(--ivory))",
                  transform: "translateX(17px) rotateY(90deg)",
                  transformOrigin: "left",
                }}
              />
            </div>
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className="mb-3 font-sans text-[12px] tracking-[3px] text-royal">THE BOOKSHELF</p>
          <h2 className="mb-4 font-serif text-4xl font-medium leading-tight md:text-5xl">
            Learn at your own pace
          </h2>
          <p className="mx-auto mb-7 max-w-md font-sans text-base leading-relaxed text-muted md:mx-0 md:text-lg">
            Preview the first chapters in interactive 3D, then unlock the full
            book. Move your cursor over the cover.
          </p>
          <ContactButton
            message="Hi Karyna! I'd like to know more about your books."
            label="Explore books"
          />
        </div>
      </div>
    </Section>
  );
}