import { useTheme } from "../hooks/useTheme";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-900 transition-colors duration-700">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <div className="flex-1 container mx-auto px-4">
        <main>
          {/* Outlet: is a dynamic placeholedr that will render the child routes */}
          <Outlet />
        </main>
      </div>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default Layout;
