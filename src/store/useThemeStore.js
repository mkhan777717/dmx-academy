"use client";

import { create } from "zustand";

/**
 * Zustand store for global theme state.
 *
 * isDark   – true when the active theme is "theme-dark"
 * toggleTheme – flips the theme, updates <html> classList & localStorage
 * initTheme   – reads localStorage on mount and syncs the store (call once)
 */
const useThemeStore = create((set) => ({
  isDark: false,

  /** Read persisted value and apply it to the DOM + store. */
  initTheme: () => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem("academy_theme") || "theme-light";
    const dark = stored === "theme-dark";
    document.documentElement.classList.remove("theme-light", "theme-dark");
    document.documentElement.classList.add(dark ? "theme-dark" : "theme-light");
    set({ isDark: dark });
  },

  /** Toggle between light/dark and persist the new value. */
  toggleTheme: () =>
    set((state) => {
      const next = state.isDark ? "theme-light" : "theme-dark";
      if (typeof window !== "undefined") {
        document.documentElement.classList.remove("theme-light", "theme-dark");
        document.documentElement.classList.add(next);
        localStorage.setItem("academy_theme", next);
      }
      return { isDark: !state.isDark };
    }),
}));

export default useThemeStore;
