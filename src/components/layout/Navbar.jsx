import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageToggle from "../ui/LanguageToggle";
import { navLinks } from "../../constants/navlinks";
import { useActiveSection } from "../../hooks/useActiveSection";
import Logo from "./Logo";

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const activeSection = useActiveSection(navLinks);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`m-4 sticky top-0 z-50 
      ${
        hasScrolled
          ? "shadow-[0px_2px_#94a3b8] dark:shadow-[0px_2px_#0f172a] bg-secondary dark:bg-secondary-dark"
          : "rounded-lg shadow-lg bg-primary dark:bg-primary-dark"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex sm:justify-center justify-between h-16">
          <div className="flex">
            <Logo />
            {/* Desktop Navigation Links */}
            <div className="hidden sm:flex sm:space-x-8 sm:ms-10">
              {navLinks.map(({ name, sectionId }) => (
                <button
                  key={sectionId}
                  onClick={() => scrollToSection(sectionId)}
                  className={`group relative exclude-transition ${
                    activeSection === sectionId
                      ? "text-sky-600 dark:text-teal-400 active-nav-bg"
                      : "text-primary dark:text-primary-dark"
                  }`}
                >
                  <span className={`flex items-center gap-2 px-2 text-nav text-hover--group`}>{t(name)}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-sky-500 dark:bg-teal-300 transition-all duration-500 ${
                      activeSection === sectionId ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              ))}
              <LanguageToggle isMobile={false} />
            </div>
          </div>

          {/* Hamburger Menu */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary dark:text-primary-dark text-hover transition duration-150 ease-in-out"
              type="button"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  className={isOpen ? "hidden" : "inline-flex"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={isOpen ? "inline-flex" : "hidden"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1 bg-primary dark:bg-primary-dark">
          {navLinks.map(({ name, sectionId }) => (
            <button
              key={sectionId}
              onClick={() => scrollToSection(sectionId)}
              className={`w-full text-left px-3 py-2 border-l-4 border-l-sky-500 dark:border-l-teal-300 text-nav leading-5 ${
                activeSection === sectionId
                  ? "text-sky-600 dark:text-teal-400 active-nav-bg"
                  : "text-primary dark:text-primary-dark"
              }`}
            >
              {t(name)}
            </button>
          ))}
          <div className="w-full flex text-left mt-1 px-3 py-2 border-l-4 border-l-sky-500 dark:border-l-teal-300 leading-5">
            <LanguageToggle isMobile={true} />
          </div>
        </div>
      </div>
    </nav>
  );
}
