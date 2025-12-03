import './globals.css'
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fayed | Portfolio',
  description: 'Portfolio built with Next.js + Tailwind'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {try {var t = localStorage.getItem('theme');var d = t ? (t === 'dark') : window.matchMedia('(prefers-color-scheme: dark)').matches;var root = document.documentElement; if (d) root.classList.add('dark'); else root.classList.remove('dark');} catch (_) {}})();`,
          }}
        />
      </head>
      <body className={`${inter.className} min-h-dvh`}>
        {children}
      </body>
    </html>
  )
}
