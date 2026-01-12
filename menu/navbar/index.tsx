"use client"
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

export default function Navbar() {
	const [isDark, setIsDark] = useState(false)
	const [open, setOpen] = useState(false)
	const [active, setActive] = useState<string>('home')
	const [cvOpen, setCvOpen] = useState(false)
	const [mobileCvOpen, setMobileCvOpen] = useState(false)
	const router = useRouter()
	const pathname = usePathname()
	const isCertOnly = pathname === '/certification-only'

	// REF UNTUK DROPDOWN CV
	const cvDropdownRef = useRef<HTMLDivElement>(null)

	const lastInstant = useRef<string | null>(null)
	const programmatic = useRef<boolean>(false)

	// --- LOGIC CLICK OUTSIDE (Menutup jika klik di luar) ---
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (cvDropdownRef.current && !cvDropdownRef.current.contains(event.target as Node)) {
				setCvOpen(false)
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [cvDropdownRef]);
	
	const navigateTo = (id: string) => {
		// ... (kode navigateTo sama seperti sebelumnya, tidak berubah) ...
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

	return (
		<div className="fixed top-[5px] left-0 right-0 z-50">
			<nav className="relative mx-[5px] md:mx-[5px] lg:mx-[60px] h-14 md:h-[60px] lg:h-[64px] rounded-[10px] bg-[#EFF2F9]/95 dark:bg-zinc-800/90 backdrop-blur flex items-center px-3 sm:px-4 md:px-6 lg:px-7 shadow-sm">
				
				<Link href="/" className="text-[#3A5566] dark:text-white text-lg md:text-xl lg:text-2xl font-bold">Portfolio</Link>

				{/* DESKTOP LINKS */}
				<ul className="mx-auto hidden lg:flex items-center gap-8 text-[#3A5566] dark:text-white text-lg">
					{!isCertOnly && (
						<li><a href="/#home" onClick={(e) => { e.preventDefault(); navigateTo('home') }} className={`nav-link ${active === 'home' ? 'active' : ''}`}>Home</a></li>
					)}
					<li><a href="/#about" onClick={(e) => { e.preventDefault(); navigateTo('about') }} className={`nav-link ${active === 'about' ? 'active' : ''}`}>About</a></li>
					<li><a href="/#portfolio" onClick={(e) => { e.preventDefault(); navigateTo('portfolio') }} className={`nav-link ${active === 'portfolio' ? 'active' : ''}`}>Portfolio</a></li>
					<li><a href="/#certification" onClick={(e) => { e.preventDefault(); navigateTo('certification') }} className={`nav-link ${active === 'certification' ? 'active' : ''}`}>Certification</a></li>
				</ul>

				{/* DESKTOP ACTIONS */}
				<div className="hidden lg:flex items-center gap-4">

					{/* CONTACT */}
					<Link
						href="/#contact"
						className="inline-flex h-10 items-center rounded-[10px] bg-[#3A5566] dark:bg-zinc-600 px-4 text-white font-medium hover:bg-[#58718D]"
					>
						Contact
					</Link>

					{/* DOWNLOAD CV DROPDOWN (FIXED) */}
					<div 
						className="relative flex items-center h-full" 
						ref={cvDropdownRef}
						onMouseEnter={() => setCvOpen(true)}
						onMouseLeave={() => setCvOpen(false)}
					>
						<button
							onClick={() => setCvOpen((v) => !v)}
							className="inline-flex h-10 items-center rounded-[10px] bg-[#3A5566] dark:bg-zinc-600 px-4 text-white font-medium hover:bg-[#58718D]"
						>
							Download CV
						</button>

						{/* DROPDOWN MENU */}
						{cvOpen && (
							// PERUBAHAN PENTING DISINI:
							// 1. 'top-full': Menempel tepat di bawah parent
							// 2. 'pt-2': PADDING TOP (bukan margin). Ini kuncinya.
							//    Padding membuat area transparan ini tetap bagian dari elemen,
							//    sehingga mouse tidak dianggap "keluar".
							<div className="absolute right-0 top-full pt-2 w-48">
								<div className="bg-white dark:bg-zinc-700 shadow-lg rounded-lg overflow-hidden border border-zinc-300 dark:border-zinc-600">
									<a
										href="/api/cv/web-developer"
										onClick={() => setCvOpen(false)} // Tutup saat diklik
										className="block px-4 py-3 hover:bg-zinc-100 dark:hover:bg-zinc-600 text-sm text-[#3A5566] dark:text-white"
									>
										Web Developer
									</a>

									<a
										href="/api/cv/data-analyst"
										onClick={() => setCvOpen(false)} // Tutup saat diklik
										className="block px-4 py-3 hover:bg-zinc-100 dark:hover:bg-zinc-600 text-sm text-[#3A5566] dark:text-white"
									>
										Data Analyst
									</a>

							<a
								href="/api/cv/ui-ux"
								onClick={() => setCvOpen(false)} // Tutup saat diklik
								className="block px-4 py-3 hover:bg-zinc-100 dark:hover:bg-zinc-600 text-sm text-[#3A5566] dark:text-white"
							>
								UI/UX
							</a>
						</div>
					</div>
				)}
			</div>

			{/* THEME BUTTON */}
			<button
				onClick={toggleTheme}
				className="h-10 w-10 rounded-[10px] border border-zinc-500/40 bg-[#3A5566] dark:bg-zinc-600 text-white grid place-items-center hover:bg-[#58718D]"
			>
				{isDark ? '☾' : '☀︎'}
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

				{/* ... Mobile Menu Code ... (sama seperti sebelumnya) */}
				<div className="ml-auto lg:hidden">
					<button
						onClick={() => setOpen((v) => !v)}
						className={`h-10 w-10 rounded-[10px] ${isDark ? 'bg-zinc-600' : 'bg-[#58718D]'} text-white grid place-items-center`}
					>
						☰
					</button>
				</div>
				<div className={`${open ? 'opacity-100' : 'opacity-0 pointer-events-none'} lg:hidden absolute left-0 right-0 top-full mt-2 rounded-[14px] bg-[#EFF2F9]/95 dark:bg-zinc-800/95 shadow-lg`}>
					<ul className="flex flex-col divide-y divide-zinc-200 dark:divide-zinc-700 text-[#58718D] dark:text-white">
						<li><button onClick={toggleTheme} className="w-full px-5 py-3 text-left">Theme</button></li>
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
							<a href="/#contact" onClick={(e) => { e.preventDefault(); navigateTo('contact') }} className="inline-flex w-full justify-center h-10 items-center rounded-[10px] bg-[#58718D] text-white">Contact</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}