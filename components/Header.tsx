import { profile } from "@/data/profile";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PillButton } from "@/components/ui/PillButton";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <a href="#top" className="text-lg font-bold tracking-tight">
          MK
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted sm:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <PillButton href={`mailto:${profile.email}`}>Let&apos;s Connect ↗</PillButton>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
