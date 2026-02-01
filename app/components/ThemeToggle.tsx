"use client";

import { useTheme } from "@/app/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      className={[
        "rounded-full border px-3 py-2 text-sm shadow-sm",
        "border-neutral-200 bg-white/90 hover:bg-white",
        "dark:border-white/15 dark:bg-neutral-900/70 dark:hover:bg-neutral-900",
      ].join(" ")}
      aria-label="Cambiar tema"
      title="Cambiar tema"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
