import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ isDarkMode, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActivePath = (path) => location.pathname.startsWith(path);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="rounded-lg shadow m-4 bg-slate-300 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex sm:justify-center justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <div className="shrink-0 flex items-center">
              <Link to="/">
                <span className="text-sky-950 dark:text-gray-200 text-xl tracking-widest font-semibold uppercase">
                  IAP-DEV
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden sm:flex sm:space-x-8 sm:ms-10">
              {navLinks.map(({ name, path }) => (
                <Link
                  key={path}
                  to={path}
                  className="group relative inline-flex items-center px-1 pt-1 text-xs uppercase tracking-widest font-semibold leading-5 transition duration-150 ease-in-out"
                >
                  <span
                    className={`relative ${
                      isActivePath(path)
                        ? "text-sky-700 dark:text-teal-400"
                        : "text-sky-950 dark:text-gray-200 hover:text-sky-700 dark:hover:text-teal-400"
                    }`}
                  >
                    {name}
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 ${
                      isActivePath(path)
                        ? "w-full bg-sky-500 dark:bg-teal-300"
                        : "w-0 bg-sky-500 dark:bg-teal-300 transition-all duration-200 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </div>
            <div className="hidden sm:flex sm:space-x-8 sm:ms-10">
              <button
                className="group relative inline-flex items-center px-1 pt-1 text-xs uppercase tracking-widest font-semibold leading-5 transition duration-150 ease-in-out"
                onClick={toggleTheme}
              >
                <span className="relative text-sky-950 dark:text-gray-200 hover:text-sky-700 dark:hover:text-teal-400">
                  {isDarkMode ? "Light" : "Dark"} mode
                </span>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-sky-500 dark:bg-teal-300 transition-all duration-200 group-hover:w-full"></span>
              </button>
            </div>
          </div>

          {/* Hamburger Menu */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-sky-950 dark:text-gray-200 hover:text-sky-700 dark:hover:text-teal-400 transition duration-150 ease-in-out"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
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
          {navLinks.map(({ name, path }) => (
            <Link
              key={path}
              to={path}
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                isActivePath(path)
                  ? "border-sky-500 text-sky-700 dark:border-teal-400 dark:text-teal-300 bg-slate-200 dark:bg-gray-700"
                  : "border-transparent text-sky-950 dark:text-gray-200 hover:text-sky-700 dark:hover:text-teal-400 hover:bg-slate-200 dark:hover:bg-gray-700 hover:border-sky-500 dark:hover:border-teal-400"
              }`}
            >
              {name}
            </Link>
          ))}

          {/* Add theme toggle to mobile menu */}
          <button
            onClick={toggleTheme}
            className="w-full text-left pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-sky-950 dark:text-gray-200 hover:text-sky-700 dark:hover:text-teal-400 hover:bg-slate-200 dark:hover:bg-gray-700 hover:border-sky-500 dark:hover:border-teal-400"
          >
            {isDarkMode ? "Light" : "Dark"} mode
          </button>
        </div>
      </div>
    </nav>
  );
}
