"use client";

import { useState } from "react";
import Logo from "@/components/nav/Logo";
import NavLinks from "@/components/nav/NavLinks";
import ThemeToggle from "@/components/nav/ThemeToggle";
import BurgerButton from "@/components/nav/BurgerButton";
import MobileMenu from "@/components/nav/MobileMenu";
import ContactButton from "@/components/contact/ContactButton";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 px-5 pt-4">
      <nav className="mx-auto max-w-5xl rounded-3xl border border-[var(--border)] bg-[var(--card)] backdrop-blur-md">
        <div className="flex items-center justify-between px-4 py-3">
          <Logo />

          <div className="hidden gap-5 font-sans text-[13px] text-muted md:flex">
            <NavLinks />
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <div className="hidden md:block">
              <ContactButton
                message="Hi Karyna! I'd like to book an English lesson."
                label="Book now"
              />
            </div>
            <BurgerButton open={menuOpen} onClick={() => setMenuOpen((v) => !v)} />
          </div>
        </div>

        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      </nav>
    </div>
  );
}