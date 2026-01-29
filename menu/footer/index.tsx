"use client"
import { useState } from 'react'
import Link from 'next/link'

const linkMap: Record<string, string> = {
	Home: '/',
	About: '/#about',
	Portfolio: '/#portfolio',
	Certification: '/#certification',
	'UI/UX Design': '/#portfolio',
	'Web Development': '/#portfolio',
	'Graphic Design': '/#portfolio',
	'Data Analysis': '/#portfolio',
	'Article': '/#portfolio',
	'Privacy Policy': '/#privacy',
	'Terms of Service': '/#terms',
	Cookies: '/#cookies',
}

const sections = [
	{
		id: 'menu',
		title: 'Menu',
		content: ['Home', 'About', 'Portfolio', 'Certification'],
	},
	{
		id: 'portfolio',
		title: 'Portfolio',
		content: ['UI/UX Design', 'Web Development', 'Data Analysis', 'Article'],
	},
	{
		id: 'legal',
		title: 'Legal & Information',
		content: ['Privacy Policy', 'Terms of Service', 'Cookies'],
	},
]

export default function Footer() {
	const [openId, setOpenId] = useState<string | null>(null)
	const toggle = (id: string) => {
		// close mobile social panel when opening another section
		setOpenSocial(false)
		setOpenId((prev) => (prev === id ? null : id))
	}
	const [openSocial, setOpenSocial] = useState<boolean>(false)

	return (
		<footer id="contact" className="bg-light dark:bg-zinc-900 w-full flex flex-col md:flex-row justify-center items-stretch px-[10px] lg:px-[60px] pt-[64px] md:pt-[100px] lg:pt-[180px] pb-10 gap-[25px]">
			{/* Left Card (hidden on mobile) */}
			<div className="hidden md:flex bg-accent dark:bg-zinc-700 rounded-[20px] p-10 w-[360px] md:w-[380px] flex-col gap-6 shadow-1">
			<h2 className="text-zinc-100 dark:text-zinc-100 text-xl sm:text-2xl font-semibold">Contact Info</h2>
				<div className="mt-4 flex gap-6">
					<a href="https://www.linkedin.com/in/fayedabdulhakim/" aria-label="LinkedIn" title="LinkedIn" className="group w-12 h-12 rounded-full bg-light-90 dark:bg-zinc-200/90 grid place-items-center text-zinc-800 hover-bg-light transition">
						<svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
							<path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.5c0-1.55-.03-3.55-2.17-3.55-2.18 0-2.51 1.7-2.51 3.45V23h-4V8.5z" />
						</svg>
					</a>
					<a href="https://www.instagram.com/fayed_0/" aria-label="Instagram" title="Instagram" className="group w-12 h-12 rounded-full bg-light-90 dark:bg-zinc-200/90 grid place-items-center text-zinc-800 hover-bg-light transition">
						<svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
							<path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm0 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7zM18 5.5a1 1 0 110 2 1 1 0 010-2z" />
						</svg>
					</a>
					<a href="https://wa.me/089604237378" aria-label="WhatsApp" title="WhatsApp" className="group w-12 h-12 rounded-full bg-light-90 dark:bg-zinc-200/90 grid place-items-center text-zinc-800 hover-bg-light transition">
						<svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
							<path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2.5 21l5.02-1.41C9.02 21.59 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.41 0-2.73-.35-3.88-.98l-.28-.15-2.89.81.81-2.89-.15-.28C4.35 14.73 4 13.41 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm3.97-8.65c-.22-.11-1.28-.64-1.48-.71-.2-.07-.35-.11-.49.11-.14.22-.56.71-.68.85-.12.15-.25.17-.47.05-1.33-.66-2.2-1.2-3.08-2.73-.23-.4.26-.38.79-1.28.09-.14.04-.27-.02-.38-.07-.11-.5-1.18-.68-1.62-.18-.41-.36-.35-.49-.35-.13 0-.27 0-.41 0-.14 0-.37.05-.57.27-.2.22-.77.75-.77 1.82 0 1.07.79 2.11.9 2.26.11.15 1.56 2.39 3.78 3.35 1.96.96 2.73.81 3.22.76.49-.05 1.6-.66 1.82-1.29.23-.63.23-1.17.16-1.29-.07-.12-.23-.18-.47-.29z" />
						</svg>
					</a>
					<a href="mailto:fayedabdulhakim@gmail.com" aria-label="Email" title="Email" className="group w-12 h-12 rounded-full bg-light-90 dark:bg-zinc-200/90 grid place-items-center text-zinc-800 hover-bg-light transition">
						<svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
							<path d="M2 4h20a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v.01L12 13 22 6.01V6H2zm0 12h20V8l-10 7L2 8v10z" />
						</svg>
					</a>
				</div>
				<h2 className="text-zinc-100 dark:text-zinc-100 text-1xl sm:text-2xl font-semibold mt-4">Address</h2>
				<p className="text-zinc-100 dark:text-zinc-200 text-base sm:text-lg font-medium">Graha Bintaro, Tangerang Selatan, Banten</p>
			</div>

			<div className="bg-accent dark:bg-zinc-700 rounded-[20px] p-10 w-full md:w-[1100px] lg:w-[1150px] xl:w-[1200px] shadow-1">
				<ul className="divide-y divide-zinc-300/50 dark:divide-zinc-600/60">
					<li className="py-4 md:hidden">
						<button
							onClick={() => setOpenSocial((v) => !v)}
							className="flex w-full items-center justify-between text-left"
							aria-expanded={openSocial}
							aria-controls="footer-social-mobile-merged"
						>
						<span className="text-zinc-100 dark:text-zinc-100 text-1xl sm:text-2xl font-semibold">Contact Info</span>
							<span className="text-zinc-100 dark:text-zinc-100 text-1xl sm:text-2xl font-bold transition-transform ease-out duration-300" style={{ transform: openSocial ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
						</button>
						<div
							id="footer-social-mobile-merged"
							className="grid transition-[grid-template-rows] duration-300 ease-out"
							style={{ gridTemplateRows: openSocial ? '1fr' : '0fr' }}
						>
							<div className="overflow-hidden">
								<div className="pt-4 flex gap-6">
									<a href="https://www.linkedin.com/in/fayed-abdul-hakim-492154282/" aria-label="LinkedIn" title="LinkedIn" className="group w-12 h-12 rounded-full bg-light-90 dark:bg-zinc-200/90 grid place-items-center text-zinc-800 hover-bg-light transition">
										<svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
											<path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.5c0-1.55-.03-3.55-2.17-3.55-2.18 0-2.51 1.7-2.51 3.45V23h-4V8.5z" />
										</svg>
									</a>
									<a href="https://www.instagram.com/fayed_0/" aria-label="Instagram" title="Instagram" className="group w-12 h-12 rounded-full bg-light-90 dark:bg-zinc-200/90 grid place-items-center text-zinc-800 hover-bg-light transition">
										<svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
											<path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm0 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7zM18 5.5a1 1 0 110 2 1 1 0 010-2z" />
										</svg>
									</a>
									<a href="https://wa.me/089604237378" aria-label="WhatsApp" title="WhatsApp" className="group w-12 h-12 rounded-full bg-light-90 dark:bg-zinc-200/90 grid place-items-center text-zinc-800 hover-bg-light transition">
										<svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
											<path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2.5 21l5.02-1.41C9.02 21.59 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.41 0-2.73-.35-3.88-.98l-.28-.15-2.89.81.81-2.89-.15-.28C4.35 14.73 4 13.41 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm3.97-8.65c-.22-.11-1.28-.64-1.48-.71-.2-.07-.35-.11-.49.11-.14.22-.56.71-.68.85-.12.15-.25.17-.47.05-1.33-.66-2.2-1.2-3.08-2.73-.23-.4.26-.38.79-1.28.09-.14.04-.27-.02-.38-.07-.11-.5-1.18-.68-1.62-.18-.41-.36-.35-.49-.35-.13 0-.27 0-.41 0-.14 0-.37.05-.57.27-.2.22-.77.75-.77 1.82 0 1.07.79 2.11.9 2.26.11.15 1.56 2.39 3.78 3.35 1.96.96 2.73.81 3.22.76.49-.05 1.6-.66 1.82-1.29.23-.63.23-1.17.16-1.29-.07-.12-.23-.18-.47-.29z" />
										</svg>
									</a>
									<a href="mailto:fayedabdulhakim@gmail.com" aria-label="Email" title="Email" className="group w-12 h-12 rounded-full bg-light-90 dark:bg-zinc-200/90 grid place-items-center text-zinc-800 hover-bg-light transition">
										<svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
											<path d="M2 4h20a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v.01L12 13 22 6.01V6H2zm0 12h20V8l-10 7L2 8v10z" />
										</svg>
									</a>
								</div>
							</div>
						</div>
					</li>

					{sections.map((s) => {
						const isOpen = openId === s.id
						return (
							<li key={s.id} className="py-4">
								<button
									onClick={() => toggle(s.id)}
									className="flex w-full items-center justify-between text-left"
								>
									<span className="text-zinc-100 dark:text-zinc-100 text-1xl sm:text-2xl font-semibold">{s.title}</span>
									<span className="text-zinc-100 dark:text-zinc-100 text-xl sm:text-2xl font-bold transition-transform ease-out duration-300" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
								</button>
								<div className="grid transition-[grid-template-rows] duration-300 ease-out" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
									<div className="overflow-hidden">
										<div className="pt-4 flex flex-wrap items-center gap-6">
											{s.content.map((c, i) => {
												const href = linkMap[c] ?? '#'
												return (
													<Link key={`${s.id}-${i}`} href={href} className="text-zinc-100 dark:text-zinc-200 text-1xl sm:text-lg font-medium hover:underline hover:opacity-90">
														{c}
													</Link>
												)
											})}
										</div>
									</div>
								</div>
							</li>
						)
					})}
				</ul>

				<p className="text-center text-zinc-100 dark:text-zinc-200 text-sm sm:text-base mt-6">© {new Date().getFullYear()} Fayed Abdul Hakim. All rights reserved.</p>
			</div>
		</footer>
	)
}
