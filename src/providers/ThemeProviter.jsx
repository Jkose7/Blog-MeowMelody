import { createContext } from "react";
import { useEffect, useState, useContext } from "react";

const ThemeContext = createContext("light");
const ChangeThemeContext = createContext();

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const useChangeThemeContext = () => {
  return useContext(ChangeThemeContext);
};

// eslint-disable-next-line react/prop-types
export function ThemeProviter({ children }) {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-colors-sheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  useEffect(() => {
    theme === "dark"
      ? document.querySelector("html").classList.add("dark")
      : document.querySelector("html").classList.remove("dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <ChangeThemeContext.Provider value={toggleTheme}>
        {children}
      </ChangeThemeContext.Provider>
    </ThemeContext.Provider>
  );
}
