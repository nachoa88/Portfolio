import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// Custom hook to use the theme context, this hook will throw an error if used outside of the ThemeProvider component.
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
