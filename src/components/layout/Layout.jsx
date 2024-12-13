import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-700 transition-colors duration-700">
      <Navbar />
      <div className="flex-1 container mx-auto px-4">
        <main>
          {/* Outlet: is a dynamic placeholedr that will render the child routes */}
          <Outlet />
        </main>
      </div>
      <Footer/>
    </div>
  );
}
