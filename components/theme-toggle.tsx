"use client"

import { useEffect, useState } from "react"
import { themeStorageKey } from "@/config/site"

type Theme = "system" | "light" | "dark"

const nextThemeByMode: Record<Theme, Theme> = {
  system: "light",
  light: "dark",
  dark: "system",
}

const themeIcons = {
  system: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M12 17v4m-4 0h8" />
    </>
  ),
  light: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4m0-14.2-1.4 1.4M6.3 17.7l-1.4 1.4" />
    </>
  ),
  dark: <path d="M20.9 13.3A9 9 0 0 1 10.7 3.1a9 9 0 1 0 10.2 10.2Z" />,
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    const savedTheme = document.documentElement.dataset.theme
    setTheme(savedTheme === "light" || savedTheme === "dark" ? savedTheme : "system")
  }, [])

  const currentTheme = theme ?? "system"
  const nextTheme = nextThemeByMode[currentTheme]

  function cycleTheme() {
    const root = document.documentElement

    if (nextTheme === "system") {
      delete root.dataset.theme
    } else {
      root.dataset.theme = nextTheme
    }
    setTheme(nextTheme)

    try {
      localStorage.setItem(themeStorageKey, nextTheme)
    } catch {
      // The selected theme still applies when storage is unavailable.
    }
  }

  return (
    <button
      type="button"
      className="theme-control"
      aria-label={`Color theme is ${currentTheme}. Switch to ${nextTheme}.`}
      title={`Switch to ${nextTheme} theme`}
      disabled={theme === null}
      onClick={cycleTheme}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {themeIcons[currentTheme]}
      </svg>
    </button>
  )
}
