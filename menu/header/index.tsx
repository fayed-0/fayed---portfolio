"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'

type Props = {
  backgroundImage?: string
}

export default function Header({ backgroundImage }: Props) {
  const [isDark, setIsDark] = useState(false)

  // Initialize theme from localStorage
  useEffect(() => {
    const pref = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
    const isDarkPref = pref === 'dark'
    setIsDark(isDarkPref)
    const root = document.documentElement
    if (isDarkPref) root.classList.add('dark')
    else root.classList.remove('dark')
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    const root = document.documentElement
    if (next) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }
  return (
  <header className="relative w-full bg-transparent">
  {/* Top spacer removed to keep gaps balanced across pages */}

  {/* Hero background (full width) */}
  <div className="absolute left-0 top-0 h-[928px] w-full rounded-b-[20px] overflow-hidden z-0">
    <div className="absolute inset-0 bg-zinc-400 dark:bg-zinc-700" />
        {backgroundImage && (
          <Image src={backgroundImage} alt="Hero background" fill priority className="object-cover" />
        )}
      </div>

      {/* Placeholder icon (only shown when no image) */}
      {!backgroundImage && (
        <div className="absolute left-1/2 -translate-x-1/2 top-[336px] w-40 h-40 overflow-hidden">
          <div className="w-28 h-28 left-[20px] top-[20px] absolute outline outline-1 outline-offset-[-0.50px] outline-white" />
          <div className="w-24 h-10 left-[33.33px] top-[66.69px] absolute bg-white" />
          <div className="w-5 h-5 left-[100px] top-[40px] absolute bg-white" />
        </div>
      )}

      {/* Bottom-left texts */}
      <div className="absolute left-[60px] top-[774px] text-white text-4xl font-medium font-['Inter']">Fayed Abdul Hakim</div>
      <div className="absolute left-[60px] top-[833px] text-white text-2xl font-normal font-['Inter']">Student of Information System student at Universitas Multimedia Nusantara</div>
  {/* Spacer to keep header height */}
  <div className="h-[1008px]" />
    </header>
  )
}
 
