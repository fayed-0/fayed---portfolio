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
	'Privacy Policy': '/legal/privacy',
	'Terms of Service': '/legal/terms',
	Cookies: '/legal/cookies',
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
		content: ['UI/UX Design', 'Web Development', 'Graphic Design', 'Data Analysis', 'Article'],
	},
	{
		id: 'legal',
		title: 'Legal & Information',
		content: ['Privacy Policy', 'Terms of Service', 'Cookies'],
	},
]

export default function Footer() {
	const [openId, setOpenId] = useState<string | null>(null)
	const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id))
	const [openSocial, setOpenSocial] = useState<boolean>(false)

	return (
		<footer className="bg-white dark:bg-zinc-800 w-full flex flex-col md:flex-row justify-center items-stretch px-[10px] lg:px-[60px] py-[80px] gap-[25px]">
			{/* Left Card (hidden on mobile) */}
			<div className="hidden md:flex bg-zinc-500 dark:bg-zinc-700 rounded-[20px] p-10 w-[360px] md:w-[380px] flex-col gap-6">
				<h2 className="text-zinc-100 dark:text-zinc-100 text-xl sm:text-2xl font-semibold">Social Media</h2>
				<div className="mt-4 flex gap-6">
					<a href="#" aria-label="LinkedIn" title="LinkedIn" className="group w-12 h-12 rounded-full bg-white/90 dark:bg-zinc-200/90 grid place-items-center text-zinc-800 hover:bg-white transition">
						<svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
							<path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.5c0-1.55-.03-3.55-2.17-3.55-2.18 0-2.51 1.7-2.51 3.45V23h-4V8.5z" />
						</svg>
					</a>
					<a href="#" aria-label="Instagram" title="Instagram" className="group w-12 h-12 rounded-full bg-white/90 dark:bg-zinc-200/90 grid place-items-center text-zinc-800 hover:bg-white transition">
						<svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
							<path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm0 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7zM18 5.5a1 1 0 110 2 1 1 0 010-2z" />
						</svg>
					</a>
					<a href="#" aria-label="Email" title="Email" className="group w-12 h-12 rounded-full bg-white/90 dark:bg-zinc-200/90 grid place-items-center text-zinc-800 hover:bg-white transition">
						<svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
							<path d="M2 4h20a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v.01L12 13 22 6.01V6H2zm0 12h20V8l-10 7L2 8v10z" />
						</svg>
					</a>
				</div>
				<h2 className="text-zinc-100 dark:text-zinc-100 text-xl sm:text-2xl font-semibold mt-4">Address</h2>
				<p className="text-zinc-100 dark:text-zinc-200 text-base sm:text-lg font-medium">Graha Bintaro, Tangerang Selatan, Banten</p>
			</div>

			{/* Right Card (contains merged content on mobile) */}
			<div className="bg-zinc-500 dark:bg-zinc-700 rounded-[20px] p-10 w-full md:w-[1100px] lg:w-[1150px] xl:w-[1200px]">
				<ul className="divide-y divide-zinc-300/50 dark:divide-zinc-600/60">
					{/* Mobile merged Social Media dropdown */}
					<li className="py-4 md:hidden">
						<button
							onClick={() => setOpenSocial((v) => !v)}
							className="flex w-full items-center justify-between text-left"
							aria-expanded={openSocial}
							aria-controls="footer-social-mobile-merged"
						>
							<span className="text-zinc-100 dark:text-zinc-100 text-xl sm:text-2xl font-semibold">Social Media</span>
							<span className="text-zinc-100 dark:text-zinc-100 text-xl sm:text-2xl font-bold transition-transform ease-out duration-300" style={{ transform: openSocial ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
						</button>
						<div
							id="footer-social-mobile-merged"
							className="grid transition-[grid-template-rows] duration-300 ease-out"
							style={{ gridTemplateRows: openSocial ? '1fr' : '0fr' }}
						>
							<div className="overflow-hidden">
								<div className="pt-4 flex gap-6">
									<a href="#" aria-label="LinkedIn" title="LinkedIn" className="group w-12 h-12 rounded-full bg-white/90 dark:bg-zinc-200/90 grid place-items-center text-zinc-800 hover:bg-white transition">
										<svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
											<path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.5c0-1.55-.03-3.55-2.17-3.55-2.18 0-2.51 1.7-2.51 3.45V23h-4V8.5z" />
										</svg>
									</a>
									<a href="#" aria-label="Instagram" title="Instagram" className="group w-12 h-12 rounded-full bg-white/90 dark:bg-zinc-200/90 grid place-items-center text-zinc-800 hover:bg-white transition">
										<svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
											<path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm0 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7zM18 5.5a1 1 0 110 2 1 1 0 010-2z" />
										</svg>
									</a>
									<a href="#" aria-label="Email" title="Email" className="group w-12 h-12 rounded-full bg-white/90 dark:bg-zinc-200/90 grid place-items-center text-zinc-800 hover:bg-white transition">
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
									<span className="text-zinc-100 dark:text-zinc-100 text-xl sm:text-2xl font-semibold">{s.title}</span>
									<span className="text-zinc-100 dark:text-zinc-100 text-xl sm:text-2xl font-bold transition-transform ease-out duration-300" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
								</button>
								<div className="grid transition-[grid-template-rows] duration-300 ease-out" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
									<div className="overflow-hidden">
										<div className="pt-4 flex flex-wrap items-center gap-6">
											{s.content.map((c, i) => {
												const href = linkMap[c] ?? '#'
												return (
													<Link key={`${s.id}-${i}`} href={href} className="text-zinc-100 dark:text-zinc-200 text-base sm:text-lg font-medium hover:underline hover:opacity-90">
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
