"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const planeRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const plane = planeRef.current;
    const trail = trailRef.current;
    if (!plane || !trail) return;

    let mouseX = -100,
      mouseY = -100,
      trailX = -100,
      trailY = -100;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      const tilt = Math.sin(mouseX / 60) * 14;
      plane.style.transform = `translate(${mouseX - 15}px, ${mouseY - 15}px) rotate(${tilt}deg)`;
    };

    const loop = () => {
      trailX += (mouseX - trailX) * 0.12;
      trailY += (mouseY - trailY) * 0.12;
      trail.style.transform = `translate(${trailX - 4}px, ${trailY - 4}px)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={trailRef}
        className="pointer-events-none fixed left-0 top-0 z-[89] hidden h-2 w-2 rounded-full md:block"
        style={{ background: "color-mix(in srgb, var(--royal) 40%, transparent)" }}
      />
      <div
        ref={planeRef}
        className="pointer-events-none fixed left-0 top-0 z-90 hidden h-[30px] w-[30px] md:block"
      >
        <svg viewBox="0 0 24 24" width="30" height="30" style={{ filter: "drop-shadow(0 2px 6px rgba(42,74,156,0.45))" }}>
          <path d="M2 12L22 2L14 22L11 13L2 12Z" fill="var(--royal)" stroke="#fff" strokeWidth="0.9" strokeLinejoin="round" />
        </svg>
      </div>
    </>
  );
}