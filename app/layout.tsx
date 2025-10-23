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
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} min-h-dvh`}>
        {children}
      </body>
    </html>
  )
}
