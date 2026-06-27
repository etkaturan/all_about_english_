export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-[9px] border border-dashed border-[var(--border)] text-[7px] tracking-wider text-faint">
        LOGO
      </div>
      <span className="font-serif text-[15px] tracking-wide">All About English</span>
    </div>
  );
}