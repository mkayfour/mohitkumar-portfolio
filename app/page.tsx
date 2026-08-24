import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="mx-auto max-w-4xl px-6 pb-16">
        <Hero />
        <Experience />
        <Projects />
        <Education />
        <Blog />
        <Contact />
      </main>
    </>
  );
}
