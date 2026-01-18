"use client"
import Image, { type StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import ImgDibimbing from './source/Dibimbingid - Front End Developer.jpg'
import ImgGoogle from './source/Google - Foundation of User Experience.jpg'
import ImgIBM from './source/IBM - What is Data Science.jpg'
import ImgMeta from './source/Meta - Introduction to Front-End Development.jpg'
import ImgRevou from './source/Mini Course Revou - Intro to Data Analytics.jpg'
import ImgMyskill from './source/Short Class My skill - Figma for UI_UX Design.jpg'
import ImgSIC from './source/SIC - Python Programming.png'
import ImgDq1 from './source/DqLab - Fundamental SQL Using FUNCTION and GROUP BY.jpg'
import ImgDq2 from './source/DqLab - Fundamental SQL Using INNER JOIN and UNION.jpg'
import ImgDq3 from './source/DqLab - Fundamental SQL Using SELECT Statement.jpg'
import ImgDq4 from './source/DqLab - Statistics using R for Data Science.jpg'
import Samsung from './source/Samsung Innovation Campus Batch 7.png'


type CertItem = {
	id: number
	title: string
	src: StaticImageData
}

const items: CertItem[] = [
	{ id: 1, title: 'Samsung Innovation Campus Batch 7', src: Samsung },
	{ id: 2, title: 'Dibimbingid - Front End Developer', src: ImgDibimbing },
	{ id: 3, title: 'Google - Foundation of User Experience', src: ImgGoogle },
	{ id: 4, title: 'IBM - What is Data Science', src: ImgIBM },
	{ id: 5, title: 'Meta - Intro to Front-End Development', src: ImgMeta },
	{ id: 6, title: 'Revou - Intro to Data Analytics', src: ImgRevou },
	{ id: 7, title: 'My Skill - Figma for UI/UX Design', src: ImgMyskill },
	{ id: 8, title: 'SIC - Python Programming', src: ImgSIC },
	{ id: 9, title: 'Fundamental SQL Using FUNCTION and GROUP BY', src: ImgDq1 },
	{ id: 10, title: 'Fundamental SQL Using INNER JOIN and UNION', src: ImgDq2 },
	{ id: 11, title: 'Fundamental SQL Using SELECT Statement', src: ImgDq3 },
	{ id: 12, title: 'Statistics using R for Data Science', src: ImgDq4 },
]

type CertificationProps = {
	hideHeader?: boolean
 	limit?: number
}

export default function Certification({ hideHeader, limit }: CertificationProps) {
	const [openId, setOpenId] = useState<number | null>(null)
	const [isDesktop, setIsDesktop] = useState(true)
	const [currentIndex, setCurrentIndex] = useState(0)
	const opened = openId !== null ? items.find((i) => i.id === openId) : null

	useEffect(() => {
		const checkIsDesktop = () => {
			setIsDesktop(window.innerWidth >= 768) // md breakpoint
		}
		checkIsDesktop()
		window.addEventListener('resize', checkIsDesktop)
		return () => window.removeEventListener('resize', checkIsDesktop)
	}, [])

	const visibleItems = hideHeader ? items : items.slice(0, limit ?? (isDesktop ? 8 : 3))
	
	// For mobile carousel - create infinite loop
	const carouselItems = hideHeader ? items : [...items, ...items, ...items]

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setOpenId(null)
		}
		window.addEventListener('keydown', onKey)
		return () => window.removeEventListener('keydown', onKey)
	}, [])

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

	// Handle scroll for mobile carousel
	const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
		if (isDesktop) return
		const container = e.currentTarget
		const scrollLeft = container.scrollLeft
		const itemWidth = container.offsetWidth * 0.85 // card width + gap
		const index = Math.round(scrollLeft / itemWidth)
		setCurrentIndex(index % items.length)
	}

	return (
		<section className="w-full">
			{/* Title and full-width description */}
			{!hideHeader && (
			<div className="mb-8">
				<div className="flex items-start justify-between gap-4">
					<div className="min-w-0">
						{/* Header row: on mobile show the button beside the header; on md+ show the button in the right column */}
						<div className="flex items-center justify-between">
							<h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#3A5566] dark:text-zinc-100">CERTIFICATE</h2>
							{/* mobile button (visible on small screens, hidden on md+) */}
							<div className="md:hidden ml-3">
								<Link href="/certification-only" className="inline-flex items-center rounded-full bg-[#3A5566] text-white px-4 py-2 text-sm font-medium hover:brightness-95 transition dark:bg-black dark:text-white dark:hover:brightness-90">
									View more
								</Link>
							</div>
						</div>
						<p className="mt-3 text-base sm:text-lg md:text-xl text-zinc-500 dark:text-zinc-300">
							This section presents the certifications I have earned to enhance my competencies and deepen my understanding beyond academic learning. Each certification demonstrates my commitment to continuous self-improvement and my effort to expand my knowledge in web development, user experience design, and data analytics. Through these learning experiences, I strive to develop both the technical and analytical skills required to grow as a well-rounded professional.
						</p>
					</div>
					{/* desktop/md+ button: hidden on small screens, shown on md+ at the right */}
					<div className="shrink-0 mt-2 sm:mt-0 hidden md:block">
						<Link href="/certification-only" className="inline-flex items-center rounded-full bg-[#3A5566] text-white px-4 py-2 text-sm font-medium hover:brightness-95 transition dark:bg-black dark:text-white dark:hover:brightness-90">
							View more
						</Link>
					</div>
				</div>
			</div>
			)}

			{/* Mobile: Carousel (only when hideHeader is false) */}
			{!hideHeader && (
			<div className="md:hidden">
				<div 
					className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
					onScroll={handleScroll}
					style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
				>
					{carouselItems.map((p, idx) => (
						<div
							key={`${p.id}-${idx}`}
							className="flex-shrink-0 w-[85vw] snap-center"
						>
							<div className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full">
								<button
									type="button"
									onClick={() => setOpenId(p.id)}
									aria-label={`View ${p.title}`}
									className="relative w-full h-[280px] flex flex-col text-left overflow-hidden"
								>
									{/* Background Image */}
									<Image
										src={p.src}
										alt={p.title}
										fill
										className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
										sizes="85vw"
									/>

									{/* Gradient Overlay */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

									{/* Category Badge */}
									<div className="absolute left-4 top-4 z-10">
										<span className="px-4 py-1.5 rounded-full bg-[#3A5566] dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-medium shadow-md">
											Certificate
										</span>
									</div>

									{/* Content at Bottom */}
									<div className="absolute bottom-0 left-0 right-0 p-5 z-10">
										<h3 className="text-base font-bold text-white mb-2 line-clamp-2">
											{p.title}
										</h3>
										<p className="text-xs text-white/80">
											{new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
										</p>
									</div>
								</button>
							</div>
						</div>
					))}
				</div>
				
				{/* Carousel Indicators */}
				<div className="flex justify-center gap-2 mt-4">
					{items.map((_, idx) => (
						<div
							key={idx}
							className={`h-2 rounded-full transition-all duration-300 ${
								idx === currentIndex ? 'w-8 bg-[#3A5566] dark:bg-zinc-100' : 'w-2 bg-zinc-300 dark:bg-zinc-600'
							}`}
						/>
					))}
				</div>
			</div>
			)}

			{/* Grid: All platforms when hideHeader, or desktop when !hideHeader */}
			<ul className={hideHeader ? 'grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4' : 'hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6'}>
				{visibleItems.map((p) => (
					<li
						key={p.id}
						className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
					>
						<button
							type="button"
							onClick={() => setOpenId(p.id)}
							aria-label={`View ${p.title}`}
							className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] flex flex-col text-left overflow-hidden"
						>
							{/* Background Image */}
							<Image
								src={p.src}
								alt={p.title}
								fill
								className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
								sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
							/>

							{/* Gradient Overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

							{/* Category Badge */}
							<div className="absolute left-4 top-4 z-10">
								<span className="px-4 py-1.5 rounded-full bg-[#3A5566] dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs sm:text-sm font-medium shadow-md">
									Certificate
								</span>
							</div>

							{/* Content at Bottom */}
							<div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
								<h3 className="text-lg sm:text-xl font-bold text-white mb-3 line-clamp-2">
									{p.title}
								</h3>

								<p className="text-xs sm:text-sm text-white/80">
									{new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
								</p>
							</div>
						</button>
					</li>
				))}
			</ul>


			{/* Lightbox modal */}
			{opened && (
				<div
					className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4"
					role="dialog"
					aria-modal="true"
					aria-label={opened.title}
					onClick={() => setOpenId(null)}
				>
					<div
						className="w-full max-w-[900px] max-h-[90vh] overflow-hidden flex flex-col items-center gap-3"
						onClick={(e) => e.stopPropagation()}
					>
							<div className="relative w-full h-[38vh] sm:h-[44vh] md:h-auto md:aspect-[900/680] max-h-[80vh] bg-[#EFF2F9] rounded-xl overflow-hidden ring-2 ring-white/25 dark:ring-white/20 shadow-2xl p-0">
							<button
								type="button"
								aria-label="Close viewer"
								onClick={() => setOpenId(null)}
								className="absolute right-3 top-3 z-10 h-9 w-9 rounded-full bg-[#EFF2F9]/90 dark:bg-zinc-800/90 text-zinc-800 dark:text-zinc-100 grid place-items-center hover:bg-[#EFF2F9] dark:hover:bg-zinc-700 border border-zinc-300 dark:border-zinc-600"
							>
								✕
							</button>
							<Image
								src={opened.src}
								alt={opened.title}
								fill
								className="object-cover md:object-contain"
								sizes="100vw"
								priority
							/>
						</div>
						<div className="w-full rounded-xl border border-white/20 bg-[#58718D] dark:bg-zinc-700 text-white dark:text-zinc-300 p-2 text-center text-sm sm:text-base md:text-lg font-semibold backdrop-blur-sm">
							{opened.title}
						</div>
					</div>
				</div>
			)}
		</section>
	)
}

