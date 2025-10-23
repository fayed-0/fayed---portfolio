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

  {/* Hero background (full width) - +100px taller on mobile/tablet */}
  <div className="absolute left-0 top-0 w-full rounded-b-[20px] overflow-hidden z-0 h-[510px] sm:h-[630px] md:h-[750px] lg:h-[928px]">
    <div className="absolute inset-0 bg-zinc-400 dark:bg-zinc-700" />
        {backgroundImage && (
          <Image src={backgroundImage} alt="Hero background" fill priority className="object-cover" />
        )}

        {/* Text overlay on image for mobile/tablet (inside image box, 5px gap) */}
        <div className="lg:hidden absolute left-3 sm:left-4 md:left-5 right-3 sm:right-4 md:right-5 bottom-[40px] z-10 text-white">
          <h1 className="font-['Inter'] font-semibold leading-tight text-2xl sm:text-3xl md:text-4xl">Fayed Abdul Hakim</h1>
          <p className="mt-2 font-['Inter'] font-normal leading-snug text-sm sm:text-base md:text-lg">Student of Information System student at Universitas Multimedia Nusantara</p>
        </div>
      </div>

      {/* Placeholder icon (only shown when no image) */}
      {!backgroundImage && (
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:top-[336px] lg:translate-y-0 w-40 h-40 overflow-hidden">
          <div className="w-28 h-28 left-[20px] top-[20px] absolute outline outline-1 outline-offset-[-0.50px] outline-white" />
          <div className="w-24 h-10 left-[33.33px] top-[66.69px] absolute bg-white" />
          <div className="w-5 h-5 left-[100px] top-[40px] absolute bg-white" />
        </div>
      )}


      {/* Original desktop placement (unchanged) */}
      <div className="hidden lg:block absolute left-[60px] top-[774px] text-white text-4xl font-medium font-['Inter']">Fayed Abdul Hakim</div>
      <div className="hidden lg:block absolute left-[60px] top-[833px] text-white text-2xl font-normal font-['Inter']">Student of Information System student at Universitas Multimedia Nusantara</div>
  {/* Spacer to keep header height (maintain ~80px over hero) */}
  <div className="h-[590px] sm:h-[710px] md:h-[830px] lg:h-[1008px]" />
    </header>
  )
}
 
