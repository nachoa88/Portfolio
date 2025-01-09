import ProjectCard from "./components/ProjectCard";
import SectionTitle from "../../ui/SectionTitle";
import { projects } from "../../../constants/projects";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  return (
    <section id="projects" className="p-2 sm:p-4 pt-8 sm:pt-20 pb-8 sm:pb-20 w-full mx-auto max-w-screen-xl">
      <SectionTitle title={t("projects.title")} />
      <div className="pt-4 pb-4 grid grid-cols-1 gap-8">
        {/*Render Project Cards from projects array*/}
        {projects.map((project, index) => (
          <ProjectCard key={project.id} index={index} {...project} />
        ))}
      </div>
    </section>
  );
}
