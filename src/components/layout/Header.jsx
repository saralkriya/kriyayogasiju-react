import Link from "next/link";

const navItems = [
  { label: "Kriya Yoga", href: "#hero" },
  { label: "Videos", href: "#videos" },
  { label: "Technique", href: "#technique" },
  { label: "Learn Kriya", href: "#learn-kriya" },
  { label: "Send Queries", href: "#contact" },
];

export function Header() {
  return (
    <header className="w-full border-b border-border/40 bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <nav className="mx-auto flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-primary-foreground/80"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 text-xs font-medium">
          <span className="rounded-full bg-primary-foreground/15 px-3 py-1">
            English
          </span>
          <span className="rounded-full bg-primary-foreground/15 px-3 py-1">
            മലയാളം
          </span>
        </div>
      </div>
    </header>
  );
}

