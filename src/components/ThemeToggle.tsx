import { MoonIcon } from "@/components/icons/MoonIcon";
import { SunIcon } from "@/components/icons/SunIcon";
import { useTheme } from "@/providers/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 flex h-10 w-10 cursor-pointer items-center justify-center bg-muted transition-colors hover:bg-border sm:top-6 sm:right-6"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <MoonIcon className="h-5 w-5 text-foreground" />
      ) : (
        <SunIcon className="h-5 w-5 text-foreground" />
      )}
    </button>
  );
}
