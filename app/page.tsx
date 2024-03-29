import { LINKS } from "./lib/constants";

import SectionLayout from "./components/Layout/SectionLayout";
import NavDots from "./components/NavDots/NavDots";
import Navbar from "./components/Navbar/Navbar";
import Work from "./components/Sections/Work/Work";
import About from "./components/Sections/About/About";
import Skills from "./components/Sections/Skills/Skills";
import Hero from "./components/Sections/Hero/Hero";
import Contact from "./components/Sections/Contact/Contact";

export default function Home() {
  return (
    <main className="home-container" id="home">
      <Navbar />

      <NavDots sections={LINKS} />

      <SectionLayout heading="home" hero>
        <Hero />
      </SectionLayout>

      <SectionLayout heading="about" left>
        <About />
      </SectionLayout>

      <SectionLayout heading="work">
        <Work />
      </SectionLayout>

      <SectionLayout heading="skills" left>
        <Skills />
      </SectionLayout>

      <SectionLayout hero heading="contact">
        <Contact />
      </SectionLayout>
    </main>
  );
}
