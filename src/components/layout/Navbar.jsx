import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageToggle from "../ui/LanguageToggle";

import Logo from "./Logo";

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const isActivePath = (path) => location.pathname.startsWith(path);

  const navLinks = [
    { name: "Home", sectionId: "home" },
    { name: "Projects", sectionId: "projects" },
    { name: "Contact", sectionId: "contact" },
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="rounded-lg shadow-lg m-4 bg-slate-300 dark:bg-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex sm:justify-center justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation Links */}
            <div className="hidden sm:flex sm:space-x-8 sm:ms-10">
              {navLinks.map(({ name, sectionId }) => (
                <button key={sectionId} onClick={() => scrollToSection(sectionId)} className="group relative">
                  <span className="flex items-center gap-2 px-2 text-xs uppercase tracking-widest font-semibold text-sky-950 dark:text-gray-200 group-hover:text-sky-600 dark:group-hover:text-teal-300">
                    {name}
                  </span>
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-sky-500 dark:bg-teal-300 transition-all duration-500 group-hover:w-full" />
                </button>
              ))}
              <LanguageToggle />
            </div>
          </div>

          {/* Hamburger Menu */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-sky-950 dark:text-gray-200 hover:text-sky-700 dark:hover:text-teal-400 transition duration-150 ease-in-out"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
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
        <div className="pt-2 pb-3 space-y-1 bg-slate-300 dark:bg-gray-800">
          {navLinks.map(({ name, sectionId }) => (
            <button
              key={sectionId}
              onClick={() => scrollToSection(sectionId)}
              className={`w-full text-left block pl-3 pr-4 py-2 border-l-4 text-xs uppercase tracking-widest font-semibold leading-5 ${
                isActivePath(sectionId)
                  ? "border-sky-500 text-sky-700 dark:border-teal-400 dark:text-teal-300 bg-slate-200 dark:bg-gray-700"
                  : "border-transparent text-sky-950 dark:text-gray-200 hover:text-sky-700 dark:hover:text-teal-400 hover:bg-slate-200 dark:hover:bg-gray-700 hover:border-sky-500 dark:hover:border-teal-400"
              }`}
            >
              {name}
            </button>
          ))}
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
}
