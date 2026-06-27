"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="relative h-[26px] w-[46px] shrink-0 rounded-full"
      style={{ background: "color-mix(in srgb, var(--navy) 12%, transparent)" }}
    >
      <span
        className="absolute top-[3px] flex h-5 w-5 items-center justify-center rounded-full bg-royal text-white transition-all"
        style={{ left: dark ? "23px" : "3px" }}
      >
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {dark ? (
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          ) : (
            <>
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </>
          )}
        </svg>
      </span>
    </button>
  );
}