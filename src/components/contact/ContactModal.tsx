"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { telegramLink, whatsappLink, hasTelegram, hasWhatsApp } from "@/lib/contact";

export default function ContactModal({
  message,
  onClose,
}: {
  message: string | null;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Close on Escape key.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (message) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [message, onClose]);

  if (!mounted || message === null) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-5"
      onClick={onClose}
    >
      <div
        className="absolute inset-0"
        style={{ background: "rgba(10,16,32,0.55)", backdropFilter: "blur(4px)" }}
      />
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm rounded-3xl border border-[var(--border)] p-7 text-center"
        style={{
          background: "var(--card)",
          backdropFilter: "blur(20px)",
          animation: "contactPop 0.25s ease-out",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-muted hover:bg-[var(--border)]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <p className="mb-1 font-sans text-[11px] tracking-[3px] text-royal">GET IN TOUCH</p>
        <h3 className="mb-4 font-serif text-2xl font-medium">Message Karyna</h3>

        <div className="mb-5 rounded-2xl border border-[var(--border)] p-4 text-left">
          <p className="font-sans text-[13px] leading-relaxed text-muted">{message}</p>
        </div>

        <div className="flex flex-col gap-3">
          {hasTelegram() && (
            <a
              href={telegramLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex items-center justify-center gap-2 rounded-full bg-royal px-6 py-3.5 font-sans text-sm font-medium text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M21.94 4.6l-3.32 15.66c-.25 1.1-.9 1.38-1.83.86l-5.04-3.72-2.43 2.34c-.27.27-.5.5-1 .5l.36-5.13L18 5.4c.4-.36-.08-.56-.62-.2L6.97 12.1l-4.96-1.55c-1.08-.34-1.1-1.08.23-1.6L20.5 2.94c.9-.34 1.7.2 1.44 1.66z"/></svg>
              Telegram
            </a>
          )}
          {hasWhatsApp() && (
            <a
              href={whatsappLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex items-center justify-center gap-2 rounded-full border border-[var(--border)] px-6 py-3.5 font-sans text-sm font-medium"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM12 2a10 10 0 00-8.6 15.07L2 22l5.07-1.33A10 10 0 1012 2z"/></svg>
              WhatsApp
            </a>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}