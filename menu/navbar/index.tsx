"use client"
import { useEffect, useState } from 'react'

export default function Navbar() {
	const [isDark, setIsDark] = useState(false)
	const [open, setOpen] = useState(false)
    const [active, setActive] = useState<string>('home')

	useEffect(() => {
		const pref = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
		const isDarkPref = pref === 'dark'
		setIsDark(isDarkPref)
		const root = document.documentElement
		if (isDarkPref) root.classList.add('dark')
		else root.classList.remove('dark')
	}, [])

	// Scroll spy to underline active link
	useEffect(() => {
		const ids = ['home', 'about', 'portfolio', 'certification']
		const handler = () => {
			const scrollY = window.scrollY
			// Offset to account for fixed navbar height
			const offset = 120
			let current = 'home'
			for (const id of ids) {
				const el = document.getElementById(id)
				if (!el) continue
				const top = el.offsetTop
				if (scrollY + offset >= top) {
					current = id
				}
			}
			setActive(current)
		}
		handler()
		window.addEventListener('scroll', handler, { passive: true })
		window.addEventListener('resize', handler)
		return () => {
			window.removeEventListener('scroll', handler)
			window.removeEventListener('resize', handler)
		}
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
		<div className="fixed top-[5px] left-0 right-0 z-50">
			<nav className="relative mx-[5px] sm:mx-[5px] md:mx-[5px] lg:mx-[60px] h-14 md:h-[60px] lg:h-[64px] rounded-[10px] bg-[#EFF2F9]/95 dark:bg-zinc-800/90 backdrop-blur supports-[backdrop-filter]:bg-[#EFF2F9]/70 dark:supports-[backdrop-filter]:bg-zinc-800/70 flex items-center px-3 sm:px-4 md:px-6 lg:px-7 shadow-sm transition-colors duration-300 ease-out">
				{/* Left brand */}
				<div className="text-[#58718D] dark:text-zinc-200 text-base sm:text-lg md:text-xl lg:text-2xl font-bold transition-colors duration-300 ease-out">Portfolio</div>
				{/* Center links */}
				<ul className="mx-auto hidden lg:flex items-center gap-6 xl:gap-10 text-[#58718D] dark:text-zinc-200 text-lg xl:text-xl font-medium list-none transition-colors duration-300 ease-out">
					<li>
						<a href="#home" className={`pb-1 border-b-2 transition-colors ${active === 'home' ? 'border-current' : 'border-transparent hover:border-[#274060] hover:text-[#274060] dark:hover:border-zinc-300 dark:hover:text-zinc-200'}`}>Home</a>
					</li>
					<li>
						<a href="#about" className={`pb-1 border-b-2 transition-colors ${active === 'about' ? 'border-current' : 'border-transparent hover:border-[#274060] hover:text-[#274060] dark:hover:border-zinc-300 dark:hover:text-zinc-200'}`}>About</a>
					</li>
					<li>
						<a href="#portfolio" className={`pb-1 border-b-2 transition-colors ${active === 'portfolio' ? 'border-current' : 'border-transparent hover:border-[#274060] hover:text-[#274060] dark:hover:border-zinc-300 dark:hover:text-zinc-200'}`}>Portfolio</a>
					</li>
					<li>
						<a href="#certification" className={`pb-1 border-b-2 transition-colors ${active === 'certification' ? 'border-current' : 'border-transparent hover:border-[#274060] hover:text-[#274060] dark:hover:border-zinc-300 dark:hover:text-zinc-200'}`}>Certification</a>
					</li>
				</ul>
				{/* Right actions */}
				<div className="hidden lg:flex items-center gap-4">
					<a href="#contact" className="inline-flex h-10 items-center rounded-[10px] bg-[#58718D] dark:bg-zinc-600 px-4 text-white text-lg xl:text-xl font-medium hover:bg-[#274060] dark:hover:bg-zinc-500 transition-colors duration-300 ease-out">Contact</a>
                    <button
						onClick={toggleTheme}
						aria-label="Toggle theme"
						title={isDark ? 'Switch to light' : 'Switch to dark'}
					className="h-10 w-10 rounded-[10px] border border-zinc-500/40 bg-[#58718D] dark:bg-zinc-600 text-white grid place-items-center hover:bg-[#274060] dark:hover:bg-zinc-500 transition-colors duration-300 ease-out"
					>
						{isDark ? '☾' : '☀︎'}
					</button>
				</div>

				{/* Mobile/Tablet actions: hamburger only (theme inside menu) */}
				<div className="ml-auto flex items-center gap-2 sm:gap-3 lg:hidden">
					<button
						onClick={() => setOpen((v) => !v)}
						aria-label="Toggle menu"
						aria-expanded={open}
						className="group h-10 w-10 rounded-[10px] bg-[#58718D] dark:bg-zinc-600 text-white grid place-items-center hover:bg-zinc-500 dark:hover:bg-zinc-500 transition"
					>
						{/* Hamburger icon (animated to X) */}
						<span className={`relative block h-3.5 w-5`}>
							<span className={`absolute left-0 top-0 h-[2px] w-5 bg-[#EFF2F9] transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
							<span className={`absolute left-0 top-[7px] h-[2px] w-5 bg-[#EFF2F9] transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`} />
							<span className={`absolute left-0 top-[14px] h-[2px] w-5 bg-[#EFF2F9] transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
						</span>
						<span className="sr-only">Menu</span>
					</button>
				</div>

				{/* Mobile/Tablet dropdown */}
				<div className={`${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} lg:hidden absolute left-0 right-0 top-full mt-2 rounded-[14px] sm:rounded-[16px] border border-zinc-200 dark:border-zinc-700 bg-[#EFF2F9]/95 dark:bg-zinc-800/95 shadow-lg transition-opacity duration-200 ease-out transition-colors`}
				>
					<ul className="flex flex-col divide-y divide-zinc-200 dark:divide-zinc-700 text-zinc-700 dark:text-zinc-200">
						<li>
							<button
								onClick={(e) => { e.stopPropagation(); toggleTheme(); }}
								className="w-full text-left px-5 py-3 text-sm sm:text-base flex items-center justify-between"
							>
								<span>Theme</span>
								<span className="ml-4 inline-grid h-9 w-9 place-items-center rounded-[10px] border border-zinc-500/40 text-zinc-700 dark:text-zinc-200">{isDark ? '☾' : '☀︎'}</span>
							</button>
						</li>
						<li><a onClick={() => setOpen(false)} className={`block px-5 py-3 text-sm sm:text-base ${active === 'home' ? 'font-semibold' : ''}`} href="#home">Home</a></li>
						<li><a onClick={() => setOpen(false)} className={`block px-5 py-3 text-sm sm:text-base ${active === 'about' ? 'font-semibold' : ''}`} href="#about">About</a></li>
						<li><a onClick={() => setOpen(false)} className={`block px-5 py-3 text-sm sm:text-base ${active === 'portfolio' ? 'font-semibold' : ''}`} href="#portfolio">Portfolio</a></li>
						<li><a onClick={() => setOpen(false)} className={`block px-5 py-3 text-sm sm:text-base ${active === 'certification' ? 'font-semibold' : ''}`} href="#certification">Certification</a></li>
						<li className="px-5 py-3">
							<a onClick={() => setOpen(false)} href="#contact" className="inline-flex w-full justify-center h-10 items-center rounded-[10px] bg-[#58718D] dark:bg-zinc-600 px-4 text-white text-sm sm:text-base font-medium hover:bg-zinc-500 dark:hover:bg-zinc-500 transition-colors duration-300 ease-out">Contact</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}

