"use client"
import Image, { type StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'
import ImgDibimbing from './source/Dibimbingid - Front End Developer.jpg'
import ImgGoogle from './source/Google - Foundation of User Experience.jpg'
import ImgIBM from './source/IBM - What is Data Science.jpg'
import ImgMeta from './source/Meta - Introduction to Front-End Development.jpg'
import ImgRevou from './source/Mini Course Revou - Intro to Data Analytics.jpg'
import ImgMyskill from './source/Short Class My skill - Figma for UI_UX Design.jpg'

type CertItem = {
	id: number
	title: string
	src: StaticImageData
}

// Source images live under /menu/certification/source; use relative paths from public root via /menu/...
const items: CertItem[] = [
	{ id: 1, title: 'Dibimbingid - Front End Developer', src: ImgDibimbing },
	{ id: 2, title: 'Google - Foundation of User Experience', src: ImgGoogle },
	{ id: 3, title: 'IBM - What is Data Science', src: ImgIBM },
	{ id: 4, title: 'Meta - Introduction to Front-End Development', src: ImgMeta },
	{ id: 5, title: 'Mini Course Revou - Intro to Data Analytics', src: ImgRevou },
	{ id: 6, title: 'Short Class My skill - Figma for UI/UX Design', src: ImgMyskill },
]

export default function Certification() {
	const [openId, setOpenId] = useState<number | null>(null)
	const opened = openId !== null ? items.find((i) => i.id === openId) : null

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setOpenId(null)
		}
		window.addEventListener('keydown', onKey)
		return () => window.removeEventListener('keydown', onKey)
	}, [])

	// Lock body scroll when lightbox is open, restore on close
	useEffect(() => {
		if (!opened) return

		const originalOverflow = document.body.style.overflow
		const originalPaddingRight = document.body.style.paddingRight
		const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
		document.body.style.overflow = 'hidden'
		if (scrollbarWidth > 0) {
			document.body.style.paddingRight = `${scrollbarWidth}px`
		}

		return () => {
			document.body.style.overflow = originalOverflow
			document.body.style.paddingRight = originalPaddingRight
		}
	}, [opened])

	return (
		<section className="w-full">
			{/* Title and full-width description */}
			<div className="mb-8">
				<h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-zinc-600 dark:text-zinc-100">Certificate</h2>
				<p className="mt-3 text-base sm:text-lg md:text-xl text-zinc-500 dark:text-zinc-300">
					This section presents the certifications I have earned to enhance my competencies and deepen my understanding beyond academic learning. Each certification demonstrates my commitment to continuous self-improvement and my effort to expand my knowledge in web development, user experience design, and data analytics. Through these learning experiences, I strive to develop both the technical and analytical skills required to grow as a well-rounded professional.
				</p>
			</div>

			{/* Grid 2 cols on mobile/tablet, 3 on desktop */}
<ul className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:grid-cols-3">
	{items.map((p) => (
		<li
			key={p.id}
			className="rounded-[10px] bg-zinc-500 dark:bg-zinc-700 p-2 shadow-sm transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg"
		>
			<button
				type="button"
				onClick={() => setOpenId(p.id)}
				aria-label={`View ${p.title}`}
				className="block w-full text-left"
			>
				<div className="relative h-32 sm:h-40 md:h-60 lg:h-72 rounded-[10px] bg-white overflow-hidden p-1 sm:p-1.5 transition-all duration-500 ease-in-out">
					{/* certificate image */}
					<Image
						src={p.src}
						alt={p.title}
						fill
						sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
						className="object-cover rounded-[8px] transition-transform duration-700 ease-in-out hover:scale-105"
						priority={false}
					/>

					{/* open icon */}
					<div className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-white transition-all duration-300 ease-in-out hover:scale-110">
						<svg
							viewBox="0 0 24 24"
							className="h-4 w-4"
							aria-hidden="true"
						>
							<path
								d="M7 17L17 7M7 7h10v10"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
				</div>

				{/* text section */}
				<div className="mt-2 rounded-[8px] bg-zinc-600 dark:bg-zinc-600 p-3 sm:p-4 transition-colors duration-500 ease-in-out hover:bg-zinc-700">
					<p className="text-sm sm:text-base md:text-lg font-semibold text-white dark:text-white transition-colors duration-300 ease-in-out">
						{p.title}
					</p>
				</div>
			</button>
		</li>
	))}
</ul>


			{/* Lightbox modal */}
			{opened && (
				<div
					className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
					role="dialog"
					aria-modal="true"
					aria-label={opened.title}
					onClick={() => setOpenId(null)}
				>
					<div
						className="w-full max-w-[900px] max-h-[90vh] overflow-hidden flex flex-col items-center gap-3"
						onClick={(e) => e.stopPropagation()}
					>
							<div className="relative w-full h-[58vh] sm:h-[62vh] md:h-auto md:aspect-[900/680] bg-white rounded-xl overflow-hidden ring-2 ring-white/25 dark:ring-white/20 shadow-2xl p-2 sm:p-3">
							<button
								type="button"
								aria-label="Close viewer"
								onClick={() => setOpenId(null)}
								className="absolute right-3 top-3 z-10 h-9 w-9 rounded-full bg-white/90 dark:bg-zinc-800/90 text-zinc-800 dark:text-zinc-100 grid place-items-center hover:bg-white dark:hover:bg-zinc-700 border border-zinc-300 dark:border-zinc-600"
							>
								✕
							</button>
							<Image
								src={opened.src}
								alt={opened.title}
								fill
									className="object-contain"
								sizes="100vw"
								priority
							/>
						</div>
						<div className="w-full rounded-xl border border-white/20 bg-zinc-900/70 text-white p-3 text-center text-sm sm:text-base md:text-lg font-semibold backdrop-blur-sm">
							{opened.title}
						</div>
					</div>
				</div>
			)}
		</section>
	)
}

