import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  const footerLinks = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Licensing", path: "/licensing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-slate-300 rounded-lg shadow-lg m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <Logo />
        <span className="text-sm text-sky-950 dark:text-gray-200 sm:text-center">
          © 2025. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
          {footerLinks.map(({ name, path }) => (
            <li key={path}>
              <Link
                to={path}
                className="group relative inline-flex me-4 md:me-6"
              >
                <span className="text-xs uppercase tracking-widest font-semibold text-sky-950 dark:text-gray-200 hover:text-sky-700 dark:hover:text-teal-400 hover:transition-none">
                  {name}
                </span>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-sky-500 dark:bg-teal-300 transition-all duration-200 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
