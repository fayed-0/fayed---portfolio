"use client"
import Image from 'next/image'
import ImgLight from '../../source/bg-light.png'
import ImgDark from '../../source/bg-dark.png'

type Props = {
  backgroundImage?: string
}

export default function Header({ backgroundImage }: Props) {
  return (
  <header className="relative w-screen left-1/2 -translate-x-1/2 bg-transparent sm:left-0 sm:translate-x-0 sm:w-full">
  {/* Top spacer removed to keep gaps balanced across pages */}

  {/* Hero background (full width) - +100px taller on mobile/tablet */}
  <div className="absolute left-0 top-0 w-full rounded-b-[20px] overflow-hidden z-0 h-[510px] sm:h-[630px] md:h-[750px] lg:h-[928px]">
    <div className="absolute inset-0 bg-zinc-400 dark:bg-zinc-700" />

  {/* Mobile background image - centered crop */}
    <div className="lg:hidden absolute inset-0">
      {/* Light */}
      <Image
        src={ImgLight}
        alt="Hero background mobile"
        fill
        priority
        className="object-cover object-center dark:hidden"
        sizes="100vw"
      />
      {/* Dark */}
      <Image
        src={ImgDark}
        alt="Hero background mobile dark"
        fill
        priority
        className="object-cover object-center hidden dark:block"
        sizes="100vw"
      />
    </div>

    {/* Desktop background image */}
    <div className="hidden lg:block absolute inset-0">
      {/* Light */}
      <Image
        src={ImgLight}
        alt="Hero background desktop"
        fill
        priority
        className="object-cover dark:hidden"
        sizes="100vw"
      />
      {/* Dark */}
      <Image
        src={ImgDark}
        alt="Hero background desktop dark"
        fill
        priority
        className="object-cover hidden dark:block"
        sizes="100vw"
      />
    </div>

  {/* Dark overlay on top of images to improve text contrast */}
  <div className="absolute inset-0 bg-black/50 dark:bg-black/50" />

        {/* Text overlay on image for mobile/tablet (inside image box, 5px gap) */}
  <div className="lg:hidden absolute left-0 right-0 bottom-[40px] z-20 text-white px-2 sm:left-4 md:left-5 sm:right-4 md:right-5">
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
 
