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
    const preferColor = localStorage.getItem('theme')
    return preferColor
  });

  useEffect(() => {
    if (theme === "dark"){
      document.querySelector("html").classList.add("dark")
      localStorage.setItem('theme',"dark")
    }else{
      document.querySelector("html").classList.remove("dark");
      localStorage.setItem('theme', "light")
    }
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
