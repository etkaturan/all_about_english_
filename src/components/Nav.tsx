"use client";

import { useState } from "react";
import ContactButton from "@/components/ContactButton";


export default function Nav() {
  const [dark, setDark] = useState(false);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <div className="sticky top-0 z-50 px-5 pt-4">
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-3 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-[9px] border border-dashed border-[var(--border)] text-[7px] tracking-wider text-faint">
            LOGO
          </div>
          <span className="font-serif text-[15px] tracking-wide">All About English</span>
        </div>

        <div className="hidden gap-5 font-sans text-[13px] text-muted md:flex">
          <a href="#lessons">Lessons</a>
          <a href="#books">Books</a>
          <a href="#social">Social</a>
          <a href="#about">About</a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="relative h-[26px] w-[46px] rounded-full"
            style={{ background: "color-mix(in srgb, var(--navy) 12%, transparent)" }}
          >
            <span
              className="absolute top-[3px] flex h-5 w-5 items-center justify-center rounded-full bg-royal text-[10px] transition-all"
              style={{ left: dark ? "23px" : "3px" }}
            >
              {dark ? "☾" : "☀"}
            </span>
          </button>
            <ContactButton
            message="Hi Karyna! I'd like to book an English lesson."
            label="Book now"
            />
        </div>
      </nav>
    </div>
  );
}