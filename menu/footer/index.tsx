"use client"
import { useState } from 'react'
import Link from 'next/link'

const linkMap: Record<string, string> = {
	Home: '/',
	About: '/#about',
	Portfolio: '/#portfolio',
	Certification: '/#certification',
	Contact: '/#contact',
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
		content: ['Home', 'About', 'Portfolio', 'Certification', 'Contact'],
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

	return (
		<footer className="bg-white w-full flex flex-col md:flex-row justify-center items-stretch px-[60px] py-[80px] gap-[25px]">
			{/* Left Card */}
			<div className="bg-zinc-500 rounded-[20px] p-10 w-[360px] md:w-[380px] flex flex-col gap-6">
				<h2 className="text-white text-2xl font-semibold">Social Media</h2>
				<div className="flex gap-6">
					<div className="w-12 h-12 bg-zinc-300 rounded-full" />
					<div className="w-12 h-12 bg-zinc-300 rounded-full" />
					<div className="w-12 h-12 bg-zinc-300 rounded-full" />
					<div className="w-12 h-12 bg-zinc-300 rounded-full" />
				</div>
				<h2 className="text-white text-2xl font-semibold mt-4">Address</h2>
				<p className="text-white text-lg font-medium">
					Graha Bintaro, Tangerang Selatan, Banten
				</p>
			</div>

			{/* Right Card */}
			<div className="bg-zinc-500 rounded-[20px] p-10 w-full md:w-[1100px] lg:w-[1150px] xl:w-[1200px]">
				<ul className="divide-y divide-white/80">
					{sections.map((s) => {
						const isOpen = openId === s.id
						return (
							<li key={s.id} className="py-4">
								<button
									onClick={() => toggle(s.id)}
									className="flex w-full items-center justify-between text-left"
								>
									<span className="text-white text-2xl font-semibold">{s.title}</span>
									<span
										className="text-white text-2xl font-bold transition-transform ease-out duration-300"
										style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
									>
										+
									</span>
								</button>
								<div
									className="grid transition-[grid-template-rows] duration-300 ease-out"
									style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
								>
									<div className="overflow-hidden">
										<div className="pt-4 flex flex-wrap items-center gap-6">
											{s.content.map((c, i) => {
												const href = linkMap[c] ?? '#'
												return (
													<Link
														key={`${s.id}-${i}`}
														href={href}
														className="text-white text-lg font-medium hover:underline hover:opacity-90"
													>
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

				<p className="text-center text-white text-base mt-6">
					© {new Date().getFullYear()} Fayed Abdul Hakim. All rights reserved.
				</p>
			</div>
		</footer>
	)
}
