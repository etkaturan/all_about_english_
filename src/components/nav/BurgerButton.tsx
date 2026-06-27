"use client";

export default function BurgerButton({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle menu"
      aria-expanded={open}
      className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
    >
      <span
        className="block h-[2px] w-5 bg-[var(--foreground)] transition-all duration-300"
        style={{ transform: open ? "translateY(7px) rotate(45deg)" : "none" }}
      />
      <span
        className="block h-[2px] w-5 bg-[var(--foreground)] transition-all duration-300"
        style={{ opacity: open ? 0 : 1 }}
      />
      <span
        className="block h-[2px] w-5 bg-[var(--foreground)] transition-all duration-300"
        style={{ transform: open ? "translateY(-7px) rotate(-45deg)" : "none" }}
      />
    </button>
  );
}