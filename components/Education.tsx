import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Education() {
  return (
    <section className="pt-24">
      <SectionHeading id="education" title="Education" />
      <div className="grid gap-4">
        {education.map((item, i) => (
          <Reveal key={`${item.institution}-${item.start}`} delay={i * 60}>
            <article className="rounded-xl border border-border bg-card p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background">
                    <GraduationCap size={18} />
                  </span>
                  <h3 className="font-semibold">{item.institution}</h3>
                </div>
                <span className="text-xs uppercase tracking-wide text-muted">
                  {item.start} — {item.end}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted">
                {item.degree} · {item.location}
              </p>
              {item.activities && (
                <p className="mt-1 text-sm text-muted">{item.activities}</p>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
