import { useTheme } from "../../hooks/useTheme";
import { useState, useEffect } from "react";

export default function Logo() {
  const { isDarkMode } = useTheme();
  const [opacity, setOpacity] = useState(1);
  const [currentSrc, setCurrentSrc] = useState("./logo.png");
  // When isDarkMode changes, fade out the logo, change the src, and fade in the logo
  useEffect(() => {
    setOpacity(0);
    const timer = setTimeout(() => {
      setCurrentSrc(isDarkMode ? "./logo_w.png" : "./logo.png");
      setOpacity(1);
    }, 250);

    return () => clearTimeout(timer);
  }, [isDarkMode]);

  return (
    <div className="flex items-center">
      <div className="flex flex-col justify-center items-end mr-2">
        <span className="text-sky-950 dark:text-gray-200 text-xs tracking-widest uppercase">Ignacio</span>
        <span className="text-sky-950 dark:text-gray-200 text-xs tracking-widest uppercase">Albiol Paradeda</span>
      </div>
      <img
        src={currentSrc}
        alt="IAP-Dev logo"
        className="h-16 p-3 transition-opacity duration-700"
        style={{ opacity }}
      />
    </div>
  );
}
