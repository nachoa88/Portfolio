import Button from "../../../ui/Button";
import { useTranslation } from "react-i18next";
import { useCardAnimation } from "../../../../hooks/useCardAnimation";

export default function ProjectCard({ index, year, title, description, image, technologies, githubLink, webLink }) {
  const { t } = useTranslation();
  const isEven = index % 2 === 0;
  const cardRef = useCardAnimation(index, isEven);

  return (
    <div
      ref={cardRef}
      className={`flex flex-col items-center gap-3 md:gap-5 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      <img
        className={`w-full h-auto md:max-w-[400px] text-secondary dark:text-secondary-dark rounded-t-2xl md:rounded-none ${
          isEven ? "md:rounded-l-2xl" : "md:rounded-r-2xl"
        }`}
        src={image}
        // src="src/assets/images/background.png"
        alt={`${title} preview`}
      />
      <div
        className={`content flex flex-col h-full p-4 bg-gray-50/50 dark:bg-cyan-900/20 rounded-b-2xl md:rounded-none ${
          isEven ? "md:rounded-r-2xl" : "md:rounded-l-2xl"
        }`}
      >
        <p className="mt-2 px-1 text-nav text-primary dark:text-primary-dark">{year}</p>
        <div className="h-0.5 mb-3 bg-sky-400/50 dark:bg-teal-600/50 rounded"></div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p className="mb-3 lg:text-3xl text-2xl font-bold tracking-tight text-primary dark:text-primary-dark">
            {title}
          </p>
          <ul className="flex flex-wrap" aria-label="Technologies used">
            {technologies.map((tech) => (
              <li key={tech} className="mr-1.5 mb-3">
                <div className="flex items-center rounded-full text-sky-600 dark:text-teal-300 bg-sky-600/20 dark:bg-teal-300/10 px-2 py-1 lg:text-sm text-xs font-medium leading-5">
                  {tech}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <p className="mb-2 lg:text-lg text-base text-secondary dark:text-secondary-dark">{t(description)}</p>
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
