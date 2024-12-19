import Hero from "../components/sections/hero/Hero";
import Projects from "../components/sections/projects/Projects";

export default function Home() {
  return (
    <div className="rounded-lg shadow-lg m-4 bg-slate-300 dark:bg-gray-800">
      <Hero />
      <Projects />
      {/* <About /> */}
      {/* <Contact /> */}
    </div>
  );
}
