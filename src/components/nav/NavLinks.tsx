const LINKS = [
  { href: "#lessons", label: "Lessons" },
  { href: "#books", label: "Books" },
  { href: "#social", label: "Social" },
  { href: "#about", label: "About" },
];

export default function NavLinks({
  onNavigate,
  className = "",
}: {
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <>
      {LINKS.map((link) => (
        <a key={link.href} href={link.href} onClick={onNavigate} className={className}>
          {link.label}
        </a>
      ))}
    </>
  );
}