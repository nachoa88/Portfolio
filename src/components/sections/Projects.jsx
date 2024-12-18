import ProjectCard from "../others/ProjectCard";
import { projects } from "../../constants/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="pt-20 pb-20 p-4 w-full mx-auto max-w-screen-xl"
    >
      {/*Title Option 1*/}
      <h2 className="mb-4 text-xl font-semibold text-sky-950 dark:text-gray-200 md:text-2xl lg:text-3xl">
        <mark className="px-2 text-sky-950 dark:text-gray-200 bg-sky-400 rounded dark:bg-teal-600">
          My Projects
        </mark>
      </h2>
      {/*Title Option 2*/}
      <h2 className="mb-4 text-lg uppercase tracking-wide font-semibold text-sky-950 dark:text-gray-200 md:text-xl lg:text-2xl">
        <span className="text-sky-950 dark:text-gray-200 underline underline-offset-3 decoration-4 decoration-sky-500 dark:decoration-teal-300">
          My Projects
        </span>
      </h2>
      <div className="pt-4 pb-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/*Render Project Cards from projects array*/}
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
