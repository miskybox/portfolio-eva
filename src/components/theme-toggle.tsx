"use client";

import { useSyncExternalStore } from "react";

const THEME_EVENT = "portfolio-theme";

function subscribe(onStoreChange: () => void) {
  window.addEventListener(THEME_EVENT, onStoreChange);
  return () => window.removeEventListener(THEME_EVENT, onStoreChange);
}

function isDarkTheme() {
  const stored = localStorage.getItem("theme");
  return !stored || stored === "dark";
}

export function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, isDarkTheme, () => true);

  function toggle() {
    const next = !dark;
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
    window.dispatchEvent(new Event(THEME_EVENT));
  }

  const label = dark ? "[ light ]" : "[ dark ]";

  return (
    <button
      type="button"
      onClick={toggle}
      className="rounded border border-border px-3 py-1 text-xs text-muted-foreground transition hover:border-primary hover:text-primary"
      aria-label={`${label} switch color theme`}
    >
      {label}
    </button>
  );
}
