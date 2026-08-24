import { Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { navItems } from "@/data/site";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PillButton } from "@/components/ui/PillButton";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <a href="#top" className="text-lg font-bold tracking-tight">
          MK
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted sm:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-sm transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <PillButton href={`mailto:${profile.email}`}>Let&apos;s Connect ↗</PillButton>
          </div>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email me"
            className="flex items-center justify-center rounded-full border border-border p-2 text-foreground transition-colors hover:bg-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:hidden"
          >
            <Mail size={16} />
          </a>
          <ThemeToggle />
        </div>
      </div>
      <nav className="flex gap-6 overflow-x-auto whitespace-nowrap border-t border-border px-6 py-2 text-sm text-muted sm:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-sm transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
