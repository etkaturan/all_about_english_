"use client";

import { useContact } from "@/components/contact/ContactProvider";

export default function ContactButton({
  message,
  label = "Book a lesson",
  variant = "solid",
}: {
  message: string;
  label?: string;
  variant?: "solid" | "ghost";
}) {
  const { open } = useContact();

  const base =
    variant === "solid"
      ? "rounded-full bg-royal px-8 py-4 font-sans text-sm font-medium tracking-wide text-white"
      : "rounded-full border border-[var(--border)] px-6 py-3 font-sans text-sm tracking-wide";

  return (
    <button onClick={() => open(message)} className={base}>
      {label}
    </button>
  );
}