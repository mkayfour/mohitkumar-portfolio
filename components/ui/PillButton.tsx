import { cn } from "@/lib/cn";

export function PillButton({
  href,
  children,
  variant = "solid",
  dot = false,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  dot?: boolean;
  external?: boolean;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors";
  const styles =
    variant === "solid"
      ? "bg-foreground text-background hover:opacity-90"
      : "border border-border text-foreground hover:bg-card";

  return (
    <a
      href={href}
      className={cn(base, styles)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {dot && <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />}
      {children}
    </a>
  );
}
