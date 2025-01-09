import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "./Logo";

export default function Footer() {
  const { t } = useTranslation();
  const footerLinks = [
    // { name: "About", path: "/about" },
    { name: "LinkedIn", path: "https://www.linkedin.com/in/ignacio-albiol/" },
    { name: "GitHub", path: "https://github.com/nachoa88" },
  ];

  return (
    <footer className="rounded-lg shadow-lg m-4 bg-primary dark:bg-primary-dark bg-noisy">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center lg:flex-row lg:items-center lg:justify-between">
        <Logo />
        <span className="text-sm text-primary dark:text-primary-dark">{t("footer.copyright")}</span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium">
          {footerLinks.map(({ name, path }) => (
            <li key={path}>
              {path.startsWith("http") ? (
                <a
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex me-4 md:me-6"
                >
                  <span className="mb-2 text-primary dark:text-primary-dark text-nav text-hover--group">{name}</span>
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-sky-500 dark:bg-teal-300 transition-all duration-500 group-hover:w-full" />
                </a>
              ) : (
                <Link to={path} className="group relative inline-flex me-4 md:me-6">
                  <span className="mb-2 text-primary dark:text-primary-dark text-nav text-hover--group">{name}</span>
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-sky-500 dark:bg-teal-300 transition-all duration-500 group-hover:w-full" />
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
