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
			<nav className="relative mx-[60px] h-[64px] rounded-[20px] bg-white/95 dark:bg-zinc-800/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-zinc-800/70 flex items-center px-7 shadow-sm">
				{/* Left brand */}
				<div className="text-zinc-500 dark:text-zinc-200 text-2xl font-bold">Portfolio</div>
				{/* Center links */}
				<ul className="mx-auto hidden md:flex items-center gap-10 text-zinc-500 dark:text-zinc-200 text-xl font-medium list-none">
					<li>
						<a href="#home" className={`pb-1 border-b-2 transition-colors ${active === 'home' ? 'border-current' : 'border-transparent hover:border-zinc-400 dark:hover:border-zinc-300'}`}>Home</a>
					</li>
					<li>
						<a href="#about" className={`pb-1 border-b-2 transition-colors ${active === 'about' ? 'border-current' : 'border-transparent hover:border-zinc-400 dark:hover:border-zinc-300'}`}>About</a>
					</li>
					<li>
						<a href="#portfolio" className={`pb-1 border-b-2 transition-colors ${active === 'portfolio' ? 'border-current' : 'border-transparent hover:border-zinc-400 dark:hover:border-zinc-300'}`}>Portfolio</a>
					</li>
					<li>
						<a href="#certification" className={`pb-1 border-b-2 transition-colors ${active === 'certification' ? 'border-current' : 'border-transparent hover:border-zinc-400 dark:hover:border-zinc-300'}`}>Certification</a>
					</li>
				</ul>
				{/* Right actions */}
				<div className="hidden md:flex items-center gap-4">
					<a href="#contact" className="inline-flex h-10 items-center rounded-[10px] bg-zinc-600 dark:bg-zinc-600 px-4 text-white text-xl font-medium hover:bg-zinc-500 dark:hover:bg-zinc-500 transition">Contact</a>
					<button
						onClick={toggleTheme}
						aria-label="Toggle theme"
						title={isDark ? 'Switch to light' : 'Switch to dark'}
						className="h-10 w-10 rounded-[10px] bg-zinc-600 dark:bg-zinc-600 text-white grid place-items-center hover:bg-zinc-500 dark:hover:bg-zinc-500 transition"
					>
						{isDark ? '☾' : '☀︎'}
					</button>
				</div>

				{/* Mobile actions: theme + hamburger */}
				<div className="ml-auto flex items-center gap-3 md:hidden">
					<button
						onClick={toggleTheme}
						aria-label="Toggle theme"
						title={isDark ? 'Switch to light' : 'Switch to dark'}
						className="h-10 w-10 rounded-[10px] bg-zinc-600 dark:bg-zinc-600 text-white grid place-items-center hover:bg-zinc-500 dark:hover:bg-zinc-500 transition"
					>
						{isDark ? '☾' : '☀︎'}
					</button>
					<button
						onClick={() => setOpen((v) => !v)}
						aria-label="Toggle menu"
						aria-expanded={open}
						className="h-10 w-10 rounded-[10px] bg-zinc-600 dark:bg-zinc-600 text-white grid place-items-center hover:bg-zinc-500 dark:hover:bg-zinc-500 transition"
					>
						{/* Hamburger icon */}
						<span className="block h-[2px] w-5 bg-white transition-all" />
						<span className="sr-only">Menu</span>
					</button>
				</div>

				{/* Mobile dropdown */}
				<div className={`${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} md:hidden absolute left-0 right-0 top-full mt-2 rounded-[16px] border border-zinc-200 dark:border-zinc-700 bg-white/95 dark:bg-zinc-800/95 shadow-lg transition-opacity duration-200`}
					onClick={() => setOpen(false)}
				>
					<ul className="flex flex-col divide-y divide-zinc-200 dark:divide-zinc-700 text-zinc-700 dark:text-zinc-200">
						<li><a className={`block px-5 py-3 ${active === 'home' ? 'font-semibold' : ''}`} href="#home">Home</a></li>
						<li><a className={`block px-5 py-3 ${active === 'about' ? 'font-semibold' : ''}`} href="#about">About</a></li>
						<li><a className={`block px-5 py-3 ${active === 'portfolio' ? 'font-semibold' : ''}`} href="#portfolio">Portfolio</a></li>
						<li><a className={`block px-5 py-3 ${active === 'certification' ? 'font-semibold' : ''}`} href="#certification">Certification</a></li>
						<li className="px-5 py-3">
							<a href="#contact" className="inline-flex w-full justify-center h-10 items-center rounded-[10px] bg-zinc-600 dark:bg-zinc-600 px-4 text-white text-base font-medium hover:bg-zinc-500 dark:hover:bg-zinc-500 transition">Contact</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}

