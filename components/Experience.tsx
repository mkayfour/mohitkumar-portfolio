import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section className="pt-24">
      <SectionHeading id="experience" title="Experience" />
      <ol className="relative border-l border-border">
        {experience.map((job, i) => (
          <li key={`${job.company}-${job.start}`} className="relative pl-8 pb-10 last:pb-0">
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-foreground" />
            <Reveal delay={i * 60}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{job.company}</h3>
                  {job.current && (
                    <span className="rounded border border-border bg-card px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted">
                      Present
                    </span>
                  )}
                </div>
                <span className="text-xs uppercase tracking-wide text-muted">
                  {job.start} — {job.end}
                </span>
              </div>
              <p className="mt-0.5 text-sm text-muted">
                {job.title} · {job.location}
              </p>

              {job.summary && (
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{job.summary}</p>
              )}
              {job.highlights && job.highlights.length > 0 && (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
              {job.tags && job.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              )}
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
