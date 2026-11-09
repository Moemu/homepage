import type { Metadata, Viewport } from "next"
import localFont from "next/font/local"
import { siteConfig, themeStorageKey } from "@/config/site"
import "./globals.css"

const quicksand = localFont({
  src: "./fonts/quicksand-latin.woff2",
  weight: "400 700",
  display: "swap",
})

export const metadata: Metadata = {
  title: siteConfig.name,
  description: `${siteConfig.name} / ${siteConfig.role}`,
  icons: { icon: "/images/favicon.ico", shortcut: "/images/favicon.ico" },
}

export const viewport: Viewport = { colorScheme: "light dark", viewportFit: "cover" }

const restoreTheme = `
  try {
    const theme = localStorage.getItem(${JSON.stringify(themeStorageKey)});
    if (theme === "light" || theme === "dark") {
      document.documentElement.dataset.theme = theme;
    }
  } catch {}
`

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="darkreader-lock" />
        <script dangerouslySetInnerHTML={{ __html: restoreTheme }} />
      </head>
      <body className={quicksand.className}>{children}</body>
    </html>
  )
}
