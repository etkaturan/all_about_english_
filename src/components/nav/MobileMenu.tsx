"use client";

import NavLinks from "@/components/nav/NavLinks";
import ContactButton from "@/components/contact/ContactButton";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className="overflow-hidden px-5 transition-all duration-300 md:hidden"
      style={{
        maxHeight: open ? "320px" : "0px",
        opacity: open ? 1 : 0,
      }}
    >
      <div
        className="mt-2 flex flex-col gap-1 rounded-2xl border border-[var(--border)] p-4 backdrop-blur-md"
        style={{ background: "var(--card)" }}
      >
        <NavLinks
          onNavigate={onClose}
          className="rounded-xl px-4 py-3 font-sans text-[15px] text-muted hover:bg-royal hover:text-white"
        />
        <div className="mt-2 px-1">
          <ContactButton
            message="Hi Karyna! I'd like to book an English lesson."
            label="Book now"
          />
        </div>
      </div>
    </div>
  );
}