import { profile } from "@/data/profile";
import { site } from "@/data/site";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/ui/Reveal";
import { Socials } from "@/components/Socials";
import { ContactForm } from "@/components/ContactForm";
import { CurrentYear } from "@/components/ui/CurrentYear";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 pt-24">
      <Reveal>
        <div className="rounded-2xl border border-border bg-card p-8 text-center sm:p-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{site.contactHeading}</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">{site.contactBlurb}</p>

          <div className="mx-auto mt-8 max-w-xl">
            <ContactForm />
          </div>

          <div className="mx-auto mt-8 flex max-w-xl items-center gap-4">
            <span className="h-px flex-1 bg-border" />
            <span className="text-xs uppercase tracking-wide text-muted">or</span>
            <span className="h-px flex-1 bg-border" />
          </div>

          <div className="mt-8 flex justify-center">
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
        © <CurrentYear /> {profile.name}. {site.footerNote}
      </footer>
    </section>
  );
}
