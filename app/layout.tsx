import type { Metadata, Viewport } from 'next'
import { Quicksand, Noto_Sans_SC } from 'next/font/google'
import { siteConfig } from '@/config/site'
import { ThemeProvider } from '@/components/theme-provider'

import './globals.css'

const _quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
  weight: ['300', '400', '500', '600', '700'],
})

const _notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  variable: '--font-noto-sc',
  weight: ['300', '400', '500', '700'],
})

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: {
    icon: [
      { url: '/images/favicon.ico', type: 'image/x-icon' },
    ],
    shortcut: ['/images/favicon.ico'],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#eaf0f7' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1220' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${_quicksand.variable} ${_notoSansSC.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
