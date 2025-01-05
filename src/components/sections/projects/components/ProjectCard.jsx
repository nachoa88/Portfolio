import Button from "../../../ui/Button";
import { useTranslation } from "react-i18next";

export default function ProjectCard({ index, year, title, description, image, technologies, githubLink, webLink }) {
  const { t } = useTranslation();
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col items-center gap-3 md:gap-5 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
      <img
        className={`w-full h-auto md:max-w-[400px] text-secondary dark:text-secondary-dark rounded-t-2xl md:rounded-none ${
          isEven ? "md:rounded-l-2xl" : "md:rounded-r-2xl"
        }`}
        //src={image} images should be 400x300
        src="src/assets/images/background.png"
        alt={`${title} preview`}
      />
      <div
        className={`flex flex-col h-full p-4 bg-gray-50/50 dark:bg-cyan-900/20 rounded-b-2xl md:rounded-none ${
          isEven ? "md:rounded-r-2xl" : "md:rounded-l-2xl"
        }`}
      >
        <p className="mt-2 text-nav text-primary dark:text-primary-dark">{year}</p>
        <div className="h-0.5 mb-3 bg-sky-400/50 dark:bg-teal-600/50 rounded"></div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p className="mb-3 md:text-3xl text-2xl font-bold tracking-tight text-primary dark:text-primary-dark">{title}</p>
          <ul className="flex flex-wrap" aria-label="Technologies used">
            {technologies.map((tech) => (
              <li key={tech} className="mr-1.5 mb-3">
                <div className="flex items-center rounded-full text-sky-600 dark:text-teal-300 bg-sky-600/20 dark:bg-teal-300/10 px-2 py-1 md:text-sm text-xs font-medium leading-5">
                  {tech}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <p className="mb-2 md:text-lg text-base text-secondary dark:text-secondary-dark">{t(description)}</p>
        <div className="flex justify-center gap-4 mt-2">
          {/* Check if there is a web or github Link, if not don't show the button */}
          {githubLink && (
            <Button href={githubLink} target="_blank" rel="noopener noreferrer">
              {t("projects.buttons.code")}
            </Button>
          )}
          {webLink && (
            <Button href={webLink} target="_blank" rel="noopener noreferrer">
              {t("projects.buttons.view")}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
