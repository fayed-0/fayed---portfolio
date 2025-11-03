"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ImgDesktop from '../../source/header1.png'
import ImgMobile from '../../source/header2.jpeg'

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

  {/* Mobile background image - centered crop */}
    <div className="lg:hidden absolute inset-0">
      <Image
        src={ImgMobile}
        alt="Hero background mobile"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
    </div>

    {/* Desktop background image */}
    <div className="hidden lg:block absolute inset-0">
      <Image
        src={ImgDesktop}
        alt="Hero background desktop"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
    </div>

  {/* Dark overlay on top of images to improve text contrast */}
  <div className="absolute inset-0 bg-black/50 dark:bg-black/50" />

        {/* Text overlay on image for mobile/tablet (inside image box, 5px gap) */}
        <div className="lg:hidden absolute left-3 sm:left-4 md:left-5 right-3 sm:right-4 md:right-5 bottom-[40px] z-20 text-white">
          <h1 className="font-['Inter'] font-semibold leading-tight text-1xl sm:text-3xl md:text-4xl">Fayed Abdul Hakim</h1>
          <p className="mt-2 font-['Inter'] font-normal leading-snug text-xs sm:text-base md:text-lg">Information Systems Student at Universitas Multimedia Nusantara</p>
        </div>
      </div>



      {/* Original desktop placement (unchanged) */}
  <div className="hidden lg:block absolute left-[60px] top-[774px] text-white text-4xl font-medium font-['Inter'] z-20">Fayed Abdul Hakim</div>
  <div className="hidden lg:block absolute left-[60px] top-[833px] text-white text-2xl font-normal font-['Inter'] z-20">Information Systems Student at Universitas Multimedia Nusantara</div>
  {/* Spacer to match hero height so following content sits tight under header */}
  <div className="h-[510px] sm:h-[630px] md:h-[750px] lg:h-[928px]" />
    </header>
  )
}
 
