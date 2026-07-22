"use client"
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import Logo from '../../source/footer.png'

export default function Navbar() {
	const [isDark, setIsDark] = useState(false)
	const [open, setOpen] = useState(false)
	const [active, setActive] = useState<string>('home')
	const [cvOpen, setCvOpen] = useState(false)
	const [mobileCvOpen, setMobileCvOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)
	const [isScrolling, setIsScrolling] = useState(false)
	const router = useRouter()
	const pathname = usePathname()
	const isCertOnly = pathname === '/certification-only'

	const cvDropdownRef = useRef<HTMLDivElement>(null)
	const lastInstant = useRef<string | null>(null)
	const programmatic = useRef<boolean>(false)
	const scrollStopTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (cvDropdownRef.current && !cvDropdownRef.current.contains(event.target as Node)) {
				setCvOpen(false)
			}
		}
		document.addEventListener("mousedown", handleClickOutside)
		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [cvDropdownRef])

	const lastScrollY = useRef(0)

	useEffect(() => {
		lastScrollY.current = window.scrollY
		const onScroll = () => {
			const currentY = window.scrollY
			const delta = Math.abs(currentY - lastScrollY.current)

			setScrolled(currentY > 40)

			if (delta > 8) {
				setOpen(false)
				setIsScrolling(true)
				if (scrollStopTimer.current) clearTimeout(scrollStopTimer.current)
				scrollStopTimer.current = setTimeout(() => {
					setIsScrolling(false)
				}, 250)
			}

			lastScrollY.current = currentY
		}
		window.addEventListener('scroll', onScroll, { passive: true })
		return () => {
			window.removeEventListener('scroll', onScroll)
			if (scrollStopTimer.current) clearTimeout(scrollStopTimer.current)
		}
	}, [])

	const navigateTo = (id: string) => {
		programmatic.current = true
		const addInstant = (key: string) => {
			try {
				const el = document.querySelector(`a.nav-link[href="/#${key}"]`) as HTMLElement | null
				if (el) {
					el.classList.add('instant')
					lastInstant.current = key
				}
			} catch {}
		}
		const removeInstant = (key?: string) => {
			const k = key ?? lastInstant.current
			if (!k) return
			try {
				const el = document.querySelector(`a.nav-link[href="/#${k}"]`) as HTMLElement | null
				if (el) el.classList.remove('instant')
			} catch {}
			lastInstant.current = null
		}

		addInstant(id)

		if (pathname === '/' || pathname === '') {
			const el = document.getElementById(id)
			if (el) {
				el.scrollIntoView({ behavior: 'smooth', block: 'start' })
				setActive(id)
				setOpen(false)
				setTimeout(() => { programmatic.current = false; removeInstant() }, 420)
				return
			}
			router.push('/#' + id)
			setOpen(false)
			setActive(id)
			setTimeout(() => { programmatic.current = false; removeInstant() }, 420)
			return
		}

		router.push('/#' + id)
		setTimeout(() => {
			const el = document.getElementById(id)
			if (el) {
				el.scrollIntoView({ behavior: 'smooth', block: 'start' })
			}
			setOpen(false)
			setActive(id)
			setTimeout(() => {
				programmatic.current = false
				try {
					const k = lastInstant.current
					if (k) {
						const e = document.querySelector(`a.nav-link[href="/#${k}"]`) as HTMLElement | null
						if (e) e.classList.remove('instant')
					}
				} catch {}
			}, 420)
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

	useEffect(() => {
		const ids = ['home', 'about', 'portfolio', 'certification']
		const handler = () => {
			if (programmatic.current) return
			const scrollY = window.scrollY
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

	const collapsed = isScrolling && scrolled

	return (
		<div className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-out ${scrolled ? 'top-0' : 'top-[5px]'}`}>
			<nav
				className={`
					relative flex items-center overflow-hidden backdrop-blur-xl shadow-lg
					border border-white/30 dark:border-white/10
					bg-white/40 dark:bg-zinc-800/40
					transition-all duration-500 ease-in-out
					${collapsed
						? 'w-[128px] md:w-[152px] h-12 md:h-14 rounded-full mx-0 px-4 mt-0 justify-between'
						: scrolled
							? 'w-full md:w-[92%] lg:w-[70%] h-12 md:h-14 rounded-none md:rounded-full mx-0 px-4 md:px-6 mt-0'
							: 'w-full md:w-[95%] lg:w-[calc(100%-120px)] h-14 md:h-[60px] lg:h-[64px] rounded mx-[5px] md:mx-[5px] lg:mx-[60px] px-3 sm:px-4 md:px-6 lg:px-7'}
				`}
			>

				<Link href="/" className="flex items-center gap-2 shrink-0">
					<Image
						src={Logo}
						alt="Logo"
						className={`w-auto transition-all duration-500 ease-out object-contain ${scrolled ? 'h-9 md:h-10' : 'h-12 md:h-13'}`}
						priority
					/>
				</Link>

				{!collapsed && (
				<ul className="mx-auto hidden lg:flex items-center gap-8 text-[#3A5566] dark:text-white text-lg transition-opacity duration-700 ease-in-out opacity-100">
					{!isCertOnly && (
						<li><a href="/#home" onClick={(e) => { e.preventDefault(); navigateTo('home') }} className={`nav-link ${active === 'home' ? 'active' : ''}`}>Home</a></li>
					)}
					<li><a href="/#about" onClick={(e) => { e.preventDefault(); navigateTo('about') }} className={`nav-link ${active === 'about' ? 'active' : ''}`}>About</a></li>
					<li><a href="/#portfolio" onClick={(e) => { e.preventDefault(); navigateTo('portfolio') }} className={`nav-link ${active === 'portfolio' ? 'active' : ''}`}>Portfolio</a></li>
					<li><a href="/#certification" onClick={(e) => { e.preventDefault(); navigateTo('certification') }} className={`nav-link ${active === 'certification' ? 'active' : ''}`}>Certification</a></li>
				</ul>
				)}

				{!collapsed && (
				<div className="hidden lg:flex items-center gap-4 ml-auto transition-opacity duration-700 ease-in-out opacity-100">

					<Link
						href="/#contact"
						className={`inline-flex items-center rounded-full bg-[#3A5566]/90 dark:bg-zinc-600/90 text-white font-medium hover:bg-[#58718D] transition-all duration-500 ${scrolled ? 'h-8 px-3 text-sm' : 'h-10 px-4'}`}
					>
						Contact
					</Link>

					<div
						className="relative flex items-center h-full"
						ref={cvDropdownRef}
						onMouseEnter={() => setCvOpen(true)}
						onMouseLeave={() => setCvOpen(false)}
					>
						<button
							onClick={() => setCvOpen((v) => !v)}
							className={`inline-flex items-center rounded-full bg-[#3A5566]/90 dark:bg-zinc-600/90 text-white font-medium hover:bg-[#58718D] transition-all duration-500 ${scrolled ? 'h-8 px-3 text-sm' : 'h-10 px-4'}`}
						>
							Download CV
						</button>

						{cvOpen && (
							<div className="absolute right-0 top-full pt-2 w-48">
								<div className="bg-white/90 dark:bg-zinc-700/90 backdrop-blur-xl shadow-lg rounded-lg overflow-hidden border border-white/30 dark:border-zinc-600">
									<a
										href="/api/cv/web-developer"
										onClick={() => setCvOpen(false)}
										className="block px-4 py-3 hover:bg-zinc-100 dark:hover:bg-zinc-600 text-sm text-[#3A5566] dark:text-white"
									>
										Web Developer
									</a>
									<a
										href="/api/cv/data-analyst"
										onClick={() => setCvOpen(false)}
										className="block px-4 py-3 hover:bg-zinc-100 dark:hover:bg-zinc-600 text-sm text-[#3A5566] dark:text-white"
									>
										Data Analyst
									</a>
									<a
										href="/api/cv/ui-ux"
										onClick={() => setCvOpen(false)}
										className="block px-4 py-3 hover:bg-zinc-100 dark:hover:bg-zinc-600 text-sm text-[#3A5566] dark:text-white"
									>
										UI/UX
									</a>
								</div>
							</div>
						)}
					</div>

					<button
						onClick={toggleTheme}
						className={`rounded-full border border-white/30 dark:border-zinc-500/40 bg-[#3A5566]/90 dark:bg-zinc-600/90 text-white grid place-items-center hover:bg-[#58718D] transition-all duration-500 ${scrolled ? 'h-8 w-8' : 'h-10 w-10'}`}
					>
						{isDark ? '☾' : '☀︎'}
					</button>
				</div>
				)}

				{collapsed && (
					<button
						onClick={toggleTheme}
						className={`
							hidden lg:grid rounded-full border border-white/30 dark:border-zinc-500/40 bg-[#3A5566]/90 dark:bg-zinc-600/90 text-white place-items-center hover:bg-[#58718D] shrink-0
							h-8 w-8 md:h-9 md:w-9
						`}
					>
						{isDark ? '☾' : '☀︎'}
					</button>
				)}

				{/* Hamburger + theme toggle (mobile) */}
				<div className="ml-auto lg:hidden flex items-center gap-2">
					{!collapsed && (
						<button
							onClick={toggleTheme}
							className={`h-9 w-9 rounded-full ${isDark ? 'bg-zinc-600/90' : 'bg-[#58718D]/90'} text-white grid place-items-center shrink-0`}
						>
							{isDark ? '☾' : '☀︎'}
						</button>
					)}
					<button
						type="button"
						aria-label="Toggle menu"
						aria-expanded={open}
						onClick={() => setOpen((v) => !v)}
						className={`h-9 w-9 rounded-full ${isDark ? 'bg-zinc-600/90' : 'bg-[#58718D]/90'} text-white grid place-items-center transition-all duration-500 shrink-0 relative z-[60]`}
					>
						☰
					</button>
				</div>

				<style jsx global>{`
					.nav-link { position: relative; padding-bottom: 0.5rem; }
					.nav-link::after { content: ""; position: absolute; left: 50%; transform: translateX(-50%); bottom: -6px; height: 4px; width: 0; background: #3A5566; border-radius: 9999px; transition: width .18s ease; }
					.nav-link.active { font-weight: 600; color: #3A5566 !important; }
					.nav-link.active::after { width: 60%; }
					.dark .nav-link.active { color: #fff !important; }
					.dark .nav-link.active::after { background: #fff; }
				`}</style>
			</nav>

			{/* Panel menu mobile — diletakkan di LUAR <nav> karena <nav> punya
			    overflow-hidden (untuk animasi pill saat scroll) yang akan
			    meng-clip isi dropdown ini kalau ditaruh di dalamnya. */}
			<div
				className={`
					${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}
					lg:hidden absolute left-0 right-0
					top-[calc(100%+8px)] mx-3
					rounded-2xl bg-white/90 dark:bg-zinc-800/90 backdrop-blur-xl
					border border-white/30 dark:border-white/10 shadow-lg
					transition-all duration-300 z-50
				`}
			>
				<ul className="flex flex-col divide-y divide-white/20 dark:divide-zinc-700 text-[#58718D] dark:text-white">
					{!isCertOnly && <li><a href="/#home" onClick={(e) => { e.preventDefault(); navigateTo('home') }} className="block px-5 py-3">Home</a></li>}
					<li><a href="/#about" onClick={(e) => { e.preventDefault(); navigateTo('about') }} className="block px-5 py-3">About</a></li>
					<li><a href="/#portfolio" onClick={(e) => { e.preventDefault(); navigateTo('portfolio') }} className="block px-5 py-3">Portfolio</a></li>
					<li><a href="/#certification" onClick={(e) => { e.preventDefault(); navigateTo('certification') }} className="block px-5 py-3">Certification</a></li>
					<li className="px-5 py-3">
						<button onClick={() => setMobileCvOpen((v) => !v)} className="w-full text-left font-semibold mb-2">Download CV {mobileCvOpen ? '▾' : '▸'}</button>
						{mobileCvOpen && (
							<div className="pl-2">
								<a href="/api/cv/web-developer" className="block mb-2 text-sm">• Web Developer</a>
								<a href="/api/cv/data-analyst" className="block mb-2 text-sm">• Data Analyst</a>
								<a href="/api/cv/ui-ux" className="block text-sm">• UI/UX</a>
							</div>
						)}
					</li>
					<li className="px-5 py-3">
						<a href="/#contact" onClick={(e) => { e.preventDefault(); navigateTo('contact') }} className="inline-flex w-full justify-center h-10 items-center rounded-full bg-[#58718D]/90 text-white">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	)
}