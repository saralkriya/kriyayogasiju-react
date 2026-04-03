import { Button } from "@base-ui/react";
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
    <header className="w-full h-[88px] bg-primary text-primary-foreground">
      <div className="mx-auto flex h-[56px] max-w-6xl 
        items-center justify-between gap-10 px-4 py-3 lg:px-8">
        <nav className="mx-auto flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Button
              key={item.label}
              href={item.href}
              className="h-[40px] r-[999px] transition-colors duration-300 hover:bg-[#E55632]"
            >
              {item.label}
            </Button>
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

