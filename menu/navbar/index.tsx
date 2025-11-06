"use client"
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

export default function Navbar() {
	const [isDark, setIsDark] = useState(false)
	const [open, setOpen] = useState(false)
	const [active, setActive] = useState<string>('home')
	const router = useRouter()
	const pathname = usePathname()
	const isCertOnly = pathname === '/certification-only'

	// track the last nav id that should show an instant underline after clicking
	const lastInstant = useRef<string | null>(null)

	const navigateTo = (id: string) => {
		// mark that we're doing a programmatic navigation so scroll-spy ignores transient states
		programmatic.current = true

		// add 'instant' class to the desktop nav link so underline appears instantly on click
		const addInstant = (key: string) => {
			try {
				const el = document.querySelector(`a.nav-link[href="/#${key}"]`) as HTMLElement | null
				if (el) {
					el.classList.add('instant')
					lastInstant.current = key
				}
			} catch (e) {
				// ignore in non-browser environments
			}
		}

		const removeInstant = (key?: string) => {
			const k = key ?? lastInstant.current
			if (!k) return
			try {
				const el = document.querySelector(`a.nav-link[href="/#${k}"]`) as HTMLElement | null
				if (el) el.classList.remove('instant')
			} catch (e) {
				// ignore
			}
			lastInstant.current = null
		}

		// add instant underline immediately for this click
		addInstant(id)
		// if already on home, do a smooth scroll
		if (pathname === '/' || pathname === '') {
			const el = document.getElementById(id)
			if (el) {
				el.scrollIntoView({ behavior: 'smooth', block: 'start' })
				setActive(id)
				setOpen(false)
				setTimeout(() => { programmatic.current = false; removeInstant() }, 420)
				return
			}
			// fallback: still try to push hash
			router.push('/#' + id)
			setOpen(false)
			setActive(id)
			// ensure we clear programmatic lock and remove instant marker
			setTimeout(() => { programmatic.current = false; removeInstant() }, 420)
			return
		}
		// otherwise navigate to home with hash (Next will load the page)
		// set a slightly longer delay so the home page can mount and render anchors
		router.push('/#' + id)
		setTimeout(() => {
			const el = document.getElementById(id)
			if (el) {
				el.scrollIntoView({ behavior: 'smooth', block: 'start' })
			}
			setOpen(false)
			setActive(id)
			// keep programmatic lock a bit longer to avoid scroll-spy noise and then remove instant
			setTimeout(() => { programmatic.current = false; try { const k = lastInstant.current; if (k) { const e = document.querySelector(`a.nav-link[href="/#${k}"]`) as HTMLElement | null; if (e) e.classList.remove('instant') } } catch(e){} }, 420)
		}, 380)
	}

	useEffect(() => {
		const pref = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
		const isDarkPref = pref === 'dark'
		setIsDark(isDarkPref)
		const root = document.documentElement
		if (isDarkPref) root.classList.add('dark')
		else root.classList.remove('dark')
	}, [])

	// Scroll spy to underline active link
	const programmatic = useRef<boolean>(false)
	useEffect(() => {
		const ids = ['home', 'about', 'portfolio', 'certification']
		const handler = () => {
			if (programmatic.current) return // ignore while programmatic scrolling
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


	// When the URL hash changes (e.g. router.push('/#id')), perform a smooth scroll to the element.
	useEffect(() => {
		const onHashChange = () => {
			const hash = typeof window !== 'undefined' ? window.location.hash.replace('#', '') : ''
			if (!hash) return
			const el = document.getElementById(hash)
			if (el) {
				setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60)
				setActive(hash)
				setOpen(false)
			}
		}
		window.addEventListener('hashchange', onHashChange)
		return () => window.removeEventListener('hashchange', onHashChange)
	}, [])

	// If this is the standalone certification page, start with 'certification' active
	useEffect(() => {
		if (isCertOnly) setActive('certification')
	}, [isCertOnly])

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
				<Link href="/" className="text-[#58718D] dark:text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold transition-colors duration-300 ease-out">Portfolio</Link>
				{/* Center links */}
				<ul className="mx-auto hidden lg:flex items-center gap-6 xl:gap-10 text-[#58718D] dark:text-white text-lg xl:text-xl list-none transition-colors duration-300 ease-out">
					{!isCertOnly && (
						<li>
							<a href="/#home" onClick={(e) => { e.preventDefault(); navigateTo('home') }} className={`nav-link ${active === 'home' ? 'active' : ''}`}>Home</a>
						</li>
					)}
					<li>
						<a href="/#about" onClick={(e) => { e.preventDefault(); navigateTo('about') }} className={`nav-link ${active === 'about' ? 'active' : ''}`}>About</a>
					</li>
					<li>
						<a href="/#portfolio" onClick={(e) => { e.preventDefault(); navigateTo('portfolio') }} className={`nav-link ${active === 'portfolio' ? 'active' : ''}`}>Portfolio</a>
					</li>
					<li>
						<a href="/#certification" onClick={(e) => { e.preventDefault(); navigateTo('certification') }} className={`nav-link ${active === 'certification' ? 'active' : ''}`}>Certification</a>
					</li>
				</ul>
				{/* Right actions */}
				<div className="hidden lg:flex items-center gap-4">
					<Link href="/#contact" className="inline-flex h-10 items-center rounded-[10px] bg-[#58718D] dark:bg-zinc-600 px-4 text-white text-lg xl:text-xl font-medium hover:bg-[#58718D] dark:hover:bg-zinc-500 transition-colors duration-300 ease-out">Contact</Link>
                    <button
						onClick={toggleTheme}
						aria-label="Toggle theme"
						title={isDark ? 'Switch to light' : 'Switch to dark'}
					className="h-10 w-10 rounded-[10px] border border-zinc-500/40 bg-[#58718D] dark:bg-zinc-600 text-white grid place-items-center hover:bg-[#58718D] dark:hover:bg-zinc-500 transition-colors duration-300 ease-out"
					>
						{isDark ? '☾' : '☀︎'}
					</button>
				</div>

				{/* inline CSS for rounded underline and active link */}
						<style jsx global>{`
							.nav-link { position: relative; display: inline-flex; align-items: center; padding-bottom: 0.5rem; color: inherit; text-decoration: none; }
							/* underline positioned below the text using bottom so it doesn't overlap */
							.nav-link::after { content: ""; position: absolute; left: 50%; transform: translateX(-50%); bottom: -6px; height: 4px; width: 0; background: #58718D; border-radius: 9999px; transition: width .18s ease; }
							/* when a link is clicked we add .instant to remove the transition so the underline appears immediately */
							.nav-link.instant::after { transition: none; }
							.nav-link.active { font-weight: 600; color: #58718D !important; }
							.nav-link.active::after { width: 60%; }
							/* In dark mode, make the active link white to improve contrast */
							.dark .nav-link.active { color: #ffffff !important; }
							.dark .nav-link.active::after { background: #ffffff; }
						`}</style>

				{/* Mobile/Tablet actions: hamburger only (theme inside menu) */}
						<div className="ml-auto flex items-center gap-2 sm:gap-3 lg:hidden">
							<button
								onClick={() => setOpen((v) => !v)}
								aria-label="Toggle menu"
								aria-expanded={open}
								className={`group h-10 w-10 rounded-[10px] ${isDark ? 'bg-zinc-600' : 'bg-[#58718D]'} text-white grid place-items-center hover:brightness-90 transition`}
							>
								{/* Hamburger icon (animated to X) */}
								<span className={`relative block h-3.5 w-5`}>
									<span className={`absolute left-0 top-0 h-[2px] w-5 bg-white transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
									<span className={`absolute left-0 top-[7px] h-[2px] w-5 bg-white transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`} />
									<span className={`absolute left-0 top-[14px] h-[2px] w-5 bg-white transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
								</span>
								<span className="sr-only">Menu</span>
							</button>
						</div>

				{/* Mobile/Tablet dropdown */}
				<div className={`${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} lg:hidden absolute left-0 right-0 top-full mt-2 rounded-[14px] sm:rounded-[16px] border border-zinc-200 dark:border-zinc-700 bg-[#EFF2F9]/95 dark:bg-zinc-800/95 shadow-lg transition-opacity duration-200 ease-out transition-colors`}
				>
					<ul className={`flex flex-col divide-y divide-zinc-200 dark:divide-zinc-700 ${isDark ? 'text-white' : 'text-[#58718D]'}`}>
						<li>
							<button
								onClick={(e) => { e.stopPropagation(); toggleTheme(); }}
								className="w-full text-left px-5 py-3 text-sm sm:text-base flex items-center justify-between"
							>
								<span>Theme</span>
								<span className="ml-4 inline-grid h-9 w-9 place-items-center rounded-[10px] border border-zinc-500/40 text-zinc-700 dark:text-zinc-200">{isDark ? '☾' : '☀︎'}</span>
							</button>
						</li>
						{!isCertOnly && <li><a href="/#home" onClick={(e) => { e.preventDefault(); navigateTo('home') }} className={`block px-5 py-3 text-sm sm:text-base ${active === 'home' ? `font-semibold ${isDark ? 'text-white' : 'text-[#58718D]'}` : ''}`}>Home</a></li>}
						<li><a href="/#about" onClick={(e) => { e.preventDefault(); navigateTo('about') }} className={`block px-5 py-3 text-sm sm:text-base ${active === 'about' ? `font-semibold ${isDark ? 'text-white' : 'text-[#58718D]'}` : ''}`}>About</a></li>
						<li><a href="/#portfolio" onClick={(e) => { e.preventDefault(); navigateTo('portfolio') }} className={`block px-5 py-3 text-sm sm:text-base ${active === 'portfolio' ? `font-semibold ${isDark ? 'text-white' : 'text-[#58718D]'}` : ''}`}>Portfolio</a></li>
						<li><a href="/#certification" onClick={(e) => { e.preventDefault(); navigateTo('certification') }} className={`block px-5 py-3 text-sm sm:text-base ${active === 'certification' ? `font-semibold ${isDark ? 'text-white' : 'text-[#58718D]'}` : ''}`}>Certification</a></li>
						<li className="px-5 py-3">
							<a href="/#contact" onClick={(e) => { e.preventDefault(); navigateTo('contact') }} className="inline-flex w-full justify-center h-10 items-center rounded-[10px] bg-[#58718D] dark:bg-zinc-600 px-4 text-white text-sm sm:text-base font-medium hover:bg-zinc-500 dark:hover:bg-zinc-500 transition-colors duration-300 ease-out">Contact</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}

