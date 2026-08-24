import Image from "next/image";
import { profile } from "@/data/profile";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/ui/Reveal";
import { Socials } from "@/components/Socials";

function renderBioWithHighlights(bio: string) {
  const keywords = ["React", "Next.js", "Node.js", "Python", "FastAPI", "Django REST Framework"];
  const pattern = new RegExp(`(${keywords.map((k) => k.replace(/\./g, "\\.")).join("|")})`, "g");
  return bio.split(pattern).map((part, i) =>
    keywords.includes(part) ? (
      <strong key={i} className="font-semibold text-foreground">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export function Hero() {
  return (
    <section id="about" className="scroll-mt-24 pt-16 sm:pt-24">
      <Reveal>
        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
          <span className="text-muted">Full-Stack</span> Developer
          <br />
          building for the web.
        </h1>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-12 flex items-center gap-4">
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={56}
            height={56}
            className="rounded-full border border-border"
          />
          <div>
            <p className="font-semibold">{profile.name}</p>
            <p className="text-sm text-muted">{profile.role}</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={150}>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
          {renderBioWithHighlights(profile.bio)}
        </p>
      </Reveal>

      <Reveal delay={200}>
        <div className="mt-6">
          <Socials />
        </div>
      </Reveal>

      <Reveal delay={250}>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <PillButton href={`mailto:${profile.email}`} dot>
            Let&apos;s Talk With Me
          </PillButton>
          <PillButton href="#experience" variant="outline">
            Find Out More
          </PillButton>
        </div>
      </Reveal>
    </section>
  );
}
