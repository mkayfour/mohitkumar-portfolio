import { profile } from "@/data/profile";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/ui/Reveal";
import { Socials } from "@/components/Socials";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 pt-24">
      <Reveal>
        <div className="rounded-2xl border border-border bg-card p-8 text-center sm:p-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Let&apos;s work together</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
          <div className="mt-6 flex justify-center">
            <PillButton href={`mailto:${profile.email}`} dot>
              {profile.email}
            </PillButton>
          </div>
          <div className="mt-6 flex justify-center">
            <Socials />
          </div>
        </div>
      </Reveal>

      <footer className="mt-12 border-t border-border py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js.
      </footer>
    </section>
  );
}
