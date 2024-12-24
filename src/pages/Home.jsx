import Hero from "../components/sections/hero/Hero";
import Projects from "../components/sections/projects/Projects";
import Contact from "../components/sections/contact/Contact";

export default function Home() {
  return (
    <div className="rounded-lg shadow-lg m-4 bg-primary dark:bg-primary-dark">
      <Hero />
      <Projects />
      {/* <About /> */}
      <Contact />
    </div>
  );
}
