"use client"

import Link from "next/link"
import Image from "next/image"
import Logo from "../../source/footer.png"

const linkMap: Record<string, string> = {
	Home: "/",
	Project: "/#portfolio",
	About: "/#about",
	Certificate: "/#certification",
	Contact: "/#contact",
	"Download CV": "/cv.pdf",
}

const navItems = [
	"Home",
	"Project",
	"About",
	"Certificate",
	"Contact",
	"Download CV",
]

const socials = [
	{
		label: "Instagram",
		href: "https://www.instagram.com/fayed_0/",
		icon: (
			<svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
				<rect x="3" y="3" width="18" height="18" rx="5" />
				<circle cx="12" cy="12" r="3.5" />
				<circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
			</svg>
		),
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/fayedabdulhakim/",
		icon: (
			<svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
				<path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.5c0-1.55-.03-3.55-2.17-3.55-2.18 0-2.51 1.7-2.51 3.45V23h-4V8.5z" />
			</svg>
		),
	},
	{
		label: "WhatsApp",
		href: "https://wa.me/6289604237378",
		icon: (
			<svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
				<path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2.5 21l5.02-1.41C9.02 21.59 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.41 0-2.73-.35-3.88-.98l-.28-.15-2.89.81.81-2.89-.15-.28C4.35 14.73 4 13.41 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm3.97-8.65c-.22-.11-1.28-.64-1.48-.71-.2-.07-.35-.11-.49.11-.14.22-.56.71-.68.85-.12.15-.25.17-.47.05-1.33-.66-2.2-1.2-3.08-2.73-.23-.4.26-.38.79-1.28.09-.14.04-.27-.02-.38-.07-.11-.5-1.18-.68-1.62-.18-.41-.36-.35-.49-.35-.13 0-.27 0-.41 0-.14 0-.37.05-.57.27-.2.22-.77.75-.77 1.82 0 1.07.79 2.11.9 2.26.11.15 1.56 2.39 3.78 3.35 1.96.96 2.73.81 3.22.76.49-.05 1.6-.66 1.82-1.29.23-.63.23-1.17.16-1.29-.07-.12-.23-.18-.47-.29z" />
			</svg>
		),
	},
	{
		label: "Email",
		href: "mailto:fayedabdulhakim@gmail.com",
		icon: (
			<svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
				<path d="M2 4h20a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v.01L12 13 22 6.01V6H2zm0 12h20V8l-10 7L2 8v10z" />
			</svg>
		),
	},
]

export default function Footer() {
	return (
		<footer
			id="contact"
			className="w-full border-t border-zinc-200 dark:border-zinc-800"
		>
			{/* MOBILE */}
			<div className="flex md:hidden flex-col items-center gap-6 px-4 pt-10 pb-8">
				<Link href="/" aria-label="Home">
					<Image
						src={Logo}
						alt="Fayed Logo"
						width={56}
						height={56}
						className="object-contain"
						priority
					/>
				</Link>

				<nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
					{navItems.slice(0, 4).map((item) => (
						<Link
							key={item}
							href={linkMap[item]}
							className="text-zinc-500 dark:text-zinc-400 text-sm font-medium uppercase tracking-wide hover:opacity-70 transition"
						>
							{item}
						</Link>
					))}
				</nav>

				<div className="flex items-center gap-6">
					{socials.map((s) => (
						<a
							key={s.label}
							href={s.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={s.label}
							className="text-zinc-500 dark:text-zinc-400 hover:opacity-70 transition"
						>
							{s.icon}
						</a>
					))}
				</div>

				<p className="text-zinc-400 dark:text-zinc-500 text-xs uppercase tracking-wide">
					© {new Date().getFullYear()} Fayed Abdul Hakim
				</p>
			</div>

			{/* DESKTOP */}
			<div className="hidden md:flex mx-3 lg:mx-16 py-4 justify-between items-center">
				<div className="flex items-center gap-5">
					<Link href="/" aria-label="Home">
						<Image
							src={Logo}
							alt="Fayed Logo"
							width={42}
							height={42}
							className="object-contain transition-transform duration-300 hover:scale-105"
							priority
						/>
					</Link>

					{navItems.map((item) => (
						<Link
							key={item}
							href={linkMap[item]}
							className="text-[10px] uppercase tracking-wider text-zinc-600 dark:text-zinc-400 hover:opacity-70 transition"
						>
							{item}
						</Link>
					))}
				</div>

				<div className="flex items-center gap-3">
					{socials.map((s) => (
						<a
							key={s.label}
							href={s.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={s.label}
							className="text-zinc-600 dark:text-zinc-400 hover:opacity-70 transition"
						>
							{s.icon}
						</a>
					))}

					<span className="ml-2 text-[10px] uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
						© {new Date().getFullYear()} Fayed Abdul Hakim
					</span>
				</div>
			</div>
		</footer>
	)
}