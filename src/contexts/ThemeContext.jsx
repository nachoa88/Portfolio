import { createContext, useState, useEffect } from "react";

// Create a context to store the dark mode state and the function to toggle it and provide it to the components
export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Lazy initialization, when passing a function to useState, it will only be called on the initial render.
    if (typeof window !== "undefined") {
      return localStorage.theme === "dark";
    }
    return false;
  });

  // useEffect will watch for changes in the isDarkMode state and add or remove the dark class from the html element.
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]); // This effect will only run when the isDarkMode state changes.
/* The `[isDarkMode]` is called the **dependency array**:
- Empty array `[]` = effect runs only once on mount
- No array = effect runs after every render
- Array with values `[isDarkMode]` = effect runs when those values change */

  // Function to toggle the theme and save it to the local storage to persist the theme on page reloads.
  const toggleTheme = () => {
    const isDarkTheme = !isDarkMode;
    setIsDarkMode(isDarkTheme);
    localStorage.theme = isDarkTheme ? "dark" : "light";
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
