import { cn } from "@/lib/cn";

export function PillButton({
  href,
  children,
  variant = "solid",
  dot = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  dot?: boolean;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  const styles =
    variant === "solid"
      ? "bg-foreground text-background hover:opacity-90"
      : "border border-border text-foreground hover:bg-card";

  return (
    <a href={href} className={cn(base, styles)}>
      {dot && <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />}
      {children}
    </a>
  );
}
