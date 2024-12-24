import Button from "../../../ui/Button";
import { useTranslation } from "react-i18next";

export default function ProjectCard({ title, description, image, technologies, githubLink, webLink }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row items-center bg-sky-100/70 dark:bg-cyan-900/70 border border-sky-800 dark:border-teal-600 rounded-lg shadow-lg">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-64 md:w-auto md:rounded-none md:rounded-s-lg text-secondary dark:text-secondary-dark"
        src={image}
        alt={`${t(title)} preview`}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <p className="mb-2 text-2xl font-bold tracking-tight text-primary dark:text-primary-dark">{t(title)}</p>
        <ul className="mb-2 flex flex-wrap" aria-label="Technologies used">
          {technologies.map((tech) => (
            <li key={tech} className="mr-1.5">
              <div className="flex items-center rounded-full text-sky-600 dark:text-teal-300 bg-sky-600/10 dark:bg-teal-300/10 px-2 py-1 text-xs font-medium leading-5">
                {tech}
              </div>
            </li>
          ))}
        </ul>
        <p className="mb-2 text-sm md:text-lg lg:text-sm text-secondary dark:text-secondary-dark">{t(description)}</p>
        <div className="flex justify-center gap-4 mt-2">
          {/* Check if there is a web or github Link, if not don't show the button */}
          {githubLink && (
            <Button size="small" href={githubLink} target="_blank" rel="noopener noreferrer">
              {t("projects.buttons.code")}
            </Button>
          )}
          {webLink && (
            <Button size="small" href={webLink} target="_blank" rel="noopener noreferrer">
              {t("projects.buttons.view")}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
