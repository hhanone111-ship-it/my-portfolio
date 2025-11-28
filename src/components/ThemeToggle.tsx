import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="h-9 w-9 relative"
    >
      {/* Sun Icon */}
      <Sun
        className={`h-4 w-4 transition-all
          ${theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"}
        `}
      />

      {/* Moon Icon */}
      <Moon
        className={`absolute h-4 w-4 transition-all
          ${theme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"}
        `}
      />

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
