import ProjectCard from "./components/ProjectCard";
import SectionTitle from "../../ui/SectionTitle";
import { projects } from "../../../constants/projects";

export default function Projects() {
  return (
    <section id="projects" className="pt-20 pb-20 p-4 w-full mx-auto max-w-screen-xl">
      <SectionTitle title="My Projects" />
      <div className="pt-4 pb-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/*Render Project Cards from projects array*/}
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
