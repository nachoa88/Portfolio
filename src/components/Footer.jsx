import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-300 rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-sky-950 dark:text-gray-200 sm:text-center">
          © 2025{" "}
          <Link to="https://flowbite.com/" className="hover:underline">
            IAP-Dev
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-sky-950 dark:text-gray-200 sm:mt-0">
          <li>
          <Link to="#" className="group relative inline-flex me-4 md:me-6">
              <span className="hover:text-sky-700 dark:hover:text-teal-400">
                About
              </span>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-sky-500 dark:bg-teal-300 transition-all duration-200 group-hover:w-full" />
            </Link>
          </li>
          <li>
            <Link to="#" className="group relative inline-flex me-4 md:me-6">
              <span className="hover:text-sky-700 dark:hover:text-teal-400">
                Projects
              </span>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-sky-500 dark:bg-teal-300 transition-all duration-200 group-hover:w-full" />
            </Link>
          </li>
          <li>
          <Link to="#" className="group relative inline-flex me-4 md:me-6">
              <span className="hover:text-sky-700 dark:hover:text-teal-400">
                Licensing
              </span>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-sky-500 dark:bg-teal-300 transition-all duration-200 group-hover:w-full" />
            </Link>
          </li>
          <li>
          <Link to="#" className="group relative inline-flex me-4 md:me-6">
              <span className="hover:text-sky-700 dark:hover:text-teal-400">
                Contact
              </span>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-sky-500 dark:bg-teal-300 transition-all duration-200 group-hover:w-full" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
