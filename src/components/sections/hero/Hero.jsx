import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { useTheme } from "../../../hooks/useTheme";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import portrait from "../../../assets/images/portrait_small.jpg";
import portrait_w from "../../../assets/images/portrait_small_w.jpg";
import resume from "../../../assets/files/cv2024.pdf";
import Button from "../../ui/Button";

export default function Hero() {
  const { t } = useTranslation();
  const { isDarkMode, toggleTheme } = useTheme();
  const [isFlipping, setIsFlipping] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");

  const handleThemeToggle = () => {
    setIsFlipping(true);
    toggleTheme();
    setTimeout(() => setIsFlipping(false), 700);
  };

  const handleHover = (e) => {
    if (isFlipping) return;
    const currentRotation = isDarkMode ? 180 : 0;
    e.currentTarget.style.transform = `rotateY(${currentRotation + (isDarkMode ? -15 : 15)}deg)`;
  };

  const handleClick = (event) => {
    window.open(resume, "_blank");
    event.currentTarget.blur(); // Remove focus after click
  };

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("nacho.albiol88@gmail.com");
    setCopyStatus(t("hero.email-copied"));
    setTimeout(() => setCopyStatus(""), 1000);
  };

  return (
    <section id="hero" className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <div className="grid md:grid-cols-2 gap-8 items-center mt-8">
        {/* Image */}
        <div className="w-full max-w-xs mx-auto">
          {/* Perspective wrapper */}
          <div className="relative" style={{ perspective: "1000px" }}>
            {/* Overlay Text */}
            <div className="text-center">
              <div className="animate-bounce">
                <span className="text-nav tracking-wider text-sky-600 dark:text-teal-400">{t("hero.theme-text")}</span>
              </div>
            </div>
            {/* Flip container */}
            <div
              className="relative aspect-[7/8] transition-all duration-700 cursor-pointer"
              style={{
                transformStyle: "preserve-3d",
                transform: isDarkMode ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
              onClick={handleThemeToggle}
              onMouseEnter={handleHover}
              onMouseLeave={(e) => {
                const baseRotation = isDarkMode ? 180 : 0;
                e.currentTarget.style.transform = `rotateY(${baseRotation}deg)`;
              }}
            >
              {/* Light mode image (front) */}
              <img
                src={portrait}
                alt="profile picture light"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
                style={{ backfaceVisibility: "hidden" }}
              />
              {/* Dark mode image (back) */}
              <img
                src={portrait_w}
                alt="profile picture dark"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              />
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="space-y-4">
          <h1 className="text-center md:text-left mb-4 text-3xl font-semibold text-primary dark:text-primary-dark md:text-4xl lg:text-5xl">
            {t("hero.title")} <span className="text-sky-600 dark:text-teal-400 font-extrabold">{t("hero.name")}</span>
          </h1>
          <p className="text-lg text-secondary dark:text-secondary-dark">
            <span className="font-bold text-secondary dark:text-secondary-dark underline decoration-2 decoration-sky-500 dark:decoration-teal-300">
              {t("hero.subtitle")}
            </span>{" "}
            {t("hero.description")}
          </p>
          <div className="flex justify-center md:justify-start gap-4 mb-4">
            <Link
              to="https://www.linkedin.com/in/ignacio-albiol/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-8 h-8 text-primary dark:text-primary-dark hover:text-sky-600 dark:hover:text-teal-300 hover:scale-110 transition-transform duration-300" />
            </Link>
            <Link
              to="https://github.com/nachoa88"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-8 h-8 text-primary dark:text-primary-dark hover:text-sky-600 dark:hover:text-teal-300 hover:scale-110 transition-transform duration-300" />
            </Link>
            <div className="relative">
              <MdEmail
                className="w-8 h-8 text-primary dark:text-primary-dark hover:text-sky-600 dark:hover:text-teal-300 hover:scale-110 transition-transform duration-300 cursor-pointer"
                onClick={handleEmailCopy}
              />
              {copyStatus && (
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 text-primary-dark dark:text-primary bg-sky-950 dark:bg-gray-200 text-sm rounded-md shadow-lg whitespace-nowrap animate-fade-in-down">
                  {copyStatus}
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center md:justify-start">
            <Button onClick={handleClick}>{t("hero.cta.download")}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
