"use client";

import { useState } from "react";
import { telegramLink, whatsappLink, hasTelegram, hasWhatsApp } from "@/lib/contact";

export default function ContactButton({
  message,
  label = "Book a lesson",
  variant = "solid",
}: {
  message: string;
  label?: string;
  variant?: "solid" | "ghost";
}) {
  const [open, setOpen] = useState(false);
  const tg = hasTelegram();
  const wa = hasWhatsApp();

  const base =
    variant === "solid"
      ? "rounded-full bg-royal px-8 py-4 font-sans text-sm font-medium tracking-wide text-white"
      : "rounded-full border border-[var(--border)] px-6 py-3 font-sans text-sm tracking-wide";

  // If only one channel is configured, link straight to it (no menu).
  if (tg !== wa) {
    const href = tg ? telegramLink(message) : whatsappLink(message);
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
        {label}
      </a>
    );
  }

  // Both configured → small chooser.
  return (
    <div className="relative inline-block">
      <button onClick={() => setOpen((v) => !v)} className={base}>
        {label}
      </button>
      {open && (
        <div
          className="absolute left-0 top-full z-50 mt-2 flex flex-col overflow-hidden rounded-2xl border border-[var(--border)]"
          style={{ background: "var(--card)", backdropFilter: "blur(12px)" }}
        >
          <a
            href={telegramLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 font-sans text-sm hover:bg-royal hover:text-white"
          >
            Telegram
          </a>
          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 font-sans text-sm hover:bg-royal hover:text-white"
          >
            WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}