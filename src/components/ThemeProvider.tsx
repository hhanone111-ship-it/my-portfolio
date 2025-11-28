import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  // Load saved theme OR detect system theme
  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initialTheme = saved ?? (systemDark ? "dark" : "light");
    setTheme(initialTheme);

    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  // Update theme when user toggles
  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
