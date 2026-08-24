import { ArrowUpRight } from "lucide-react";
import { blog, mediumUrl } from "@/data/blog";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";

export function Blog() {
  return (
    <section className="pt-24">
      <SectionHeading
        id="blog"
        title="Blog"
        action={
          <a
            href={mediumUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
          >
            See all on Medium <ArrowUpRight size={14} />
          </a>
        }
      />

      {blog.length === 0 ? (
        <Reveal>
          <a
            href={mediumUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/30"
          >
            <span className="text-sm text-muted">
              I write about JavaScript, React, and building products on Medium.
            </span>
            <ArrowUpRight size={16} />
          </a>
        </Reveal>
      ) : (
        <div className="grid gap-4 sm:grid-cols-3">
          {blog.map((post, i) => (
            <Reveal key={post.url} delay={i * 60}>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/30"
              >
                <span className="text-xs text-muted">{post.date}</span>
                <h3 className="mt-2 font-semibold leading-snug">{post.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
