import Image from "next/image";
import { ExternalLink, GitBranch, FileText, FolderGit2 } from "lucide-react";
import { projects } from "@/data/projects";
import type { ProjectLink } from "@/lib/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";

function LinkIcon({ label }: { label: ProjectLink["label"] }) {
  if (label === "Repository") return <GitBranch size={13} />;
  if (label === "Docs") return <FileText size={13} />;
  return <ExternalLink size={13} />;
}

export function Projects() {
  return (
    <section className="pt-24">
      <SectionHeading id="projects" title="Projects" />
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 60}>
            <article className="h-full rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/30">
              <div className="mb-3 flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-border bg-background">
                {project.icon ? (
                  <Image
                    src={project.icon}
                    alt={`${project.name} logo`}
                    width={36}
                    height={36}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <FolderGit2 size={18} />
                )}
              </div>
              <h3 className="font-semibold">{project.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              {project.links.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 text-xs font-medium text-muted transition-colors hover:text-foreground"
                    >
                      <LinkIcon label={link.label} />
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
