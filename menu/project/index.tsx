"use client"
import { useEffect, useMemo, useState } from 'react'
import Image, { type StaticImageData } from 'next/image'
import ImgReWorn from './source/RE  WORN.png'
import ImgRentIn from "./source/Rent'in.png"
import ImgBellara from "./source/Bellara.png"
import ImgMentari from "./source/Mentari Hospital.png"
import ImgArticle1 from "./source/Article1.png"
import imgDatnal from "./source/Prediksi Harga Rumah di AS.png"

type ProjectItem = {
	id: number
	title: string
	category: 'All' | 'UI/UX' | 'Graphic Design' | 'Web Development' | 'Data analysis' | 'Article'
	description?: string
	src?: StaticImageData
	prototypeUrl?: string
}

const allCategories: ProjectItem['category'][] = [
	'All',
	'UI/UX',
	'Graphic Design',
	'Web Development',
	'Data analysis',
	'Article'
]

const projects: ProjectItem[] = [
// UI/UX
	{
		id: 1,
		title: 'RE:WORN – E-Magazine',
		category: 'UI/UX',
		description: 'This project is a design for an e-magazine focused on slow fashion and preloved fashion, addressing sustainability issues within the fashion industry. RE:WORN aims to educate readers about the environmental impact of fast fashion while encouraging young audiences to adopt a more eco-conscious lifestyle. Through engaging content such as articles, infographics, and visual guides, RE:WORN provides insights on choosing quality clothing, mindful thrift shopping, and creative upcycling or clothing donation techniques. With a Retro and Street Fashion visual concept, the project blends modern aesthetics with strong sustainability messages, serving as an inspiring media platform that integrates design, research, and visual communication seamlessly.',
		src: ImgReWorn,
		prototypeUrl: 'https://www.figma.com/proto/hd1UWtlmeA8rJjA1L32GD9/Fay_project?page-id=240%3A95&node-id=240-232&p=f&viewport=44%2C313%2C0.02&t=TfOafCXKmjgJGFw1-1&scaling=contain&content-scaling=fixed'
	},

	{
		id: 2,
		title: 'Rent’in – Online Costume Rental Platform',
		category: 'UI/UX',
		description: "Rent’in is a technopreneurship project that introduces an innovative idea of providing an online costume rental service. The concept was developed in response to the limited availability of accessible costume rental platforms on the internet. Rent’in aims to simplify the costume rental experience by allowing users to browse, reserve, and rent costumes easily through a digital platform. This project focuses on combining creativity, practicality, and technology to offer a modern solution for individuals and event organizers seeking costume rentals efficiently and conveniently.",
		src: ImgRentIn,
		prototypeUrl:
			'https://www.figma.com/proto/EWNGwZLVP5ERkNj2ygc1fI/Untitled?page-id=135%3A16713&node-id=135-17699&viewport=510%2C431%2C0.13&t=1D9S3jy1ccsb06v3-1&scaling=min-zoom&starting-point-node-id=135%3A17011'
	},

// Web Development
	{
		id: 3,
		title: 'Bellara – E-Commerce Fashion Store',
		category: 'Web Development',
		description: "Bellara is a comprehensive e-commerce platform developed using Next.js, with a React.js frontend and Tailwind CSS for responsive, modern styling. Designed to deliver a seamless shopping experience for fashion enthusiasts, Bellara focuses on creating an intuitive and visually engaging user interface that enhances product discovery and simplifies the purchasing process. The platform features personalized recommendations, advanced filtering options, and a clean, trend-focused layout that highlights the latest in fashion. Bellara aims to empower users to express their personal style while enjoying a smooth and efficient online shopping experience.",
		src: ImgBellara,
		prototypeUrl:
			'https://bellara.vercel.app/'
	},

	{
		id: 4,
		title: 'Mentari Hospital – Healthcare Web Platform',
		category: 'Web Development',
		description: "Mentari Hospital is a modern healthcare web platform built using Next.js, React.js, and Tailwind CSS, designed to provide users with seamless access to medical information and appointment scheduling. The platform focuses on improving the patient experience through an intuitive interface, personalized health insights, and efficient communication with healthcare professionals. By leveraging cutting-edge web technologies, Mentari Hospital ensures a responsive, accessible, and visually clean design that simplifies health management and promotes a more connected, patient-centered digital healthcare experience.",
		src: ImgMentari,
		prototypeUrl:
			'https://bellara.vercel.app/'
	},


// Data analysis
	{
		id: 5,
		title: 'USA House Price Prediction',
		category: 'Data analysis',
		description: 'This project builds and compares Multiple Linear Regression (MLR) and Decision Tree (DT) models to predict house prices in the United States. The objective is to identify the most influential features such as square footage, number of bathrooms, year built, and location and evaluate linear vs. non linear approaches for accurate price estimation.\n\nWorkflow: data collection, preprocessing, train/test split, modeling, and evaluation. Using the USA Housing dataset (≈4k records), preprocessing includes handling missing values, outlier removal with Z‑score, normalization, and one‑hot encoding to ensure consistent model inputs.\n\nKey result: MLR achieved the best overall performance with R² ≈ 0.994 and the lowest error, while DT offered strong interpretability and captured non linear patterns. Visual analysis (boxplots, heatmaps, histograms, scatter plots) helped explain feature distributions and correlations.\n\nOutcome: a reproducible analytics pipeline and actionable insight into price drivers useful for real estate analytics and data driven investment decisions.',
		src: imgDatnal,
		prototypeUrl:
			'https://proceeding.unrika.ac.id/index.php/PKM/article/view/81/79'
	},


// Article
	{
		id: 6,
		title: 'Unite for Equity – Community Empowerment Project',
		category: 'Article',
		description: 'This project, titled “Promotion of Anti-Sexual Violence and Gender Equality for Students of SMP Nusantara 1 Karawaci Tangerang,” was a community outreach initiative aimed at raising awareness of sexual violence prevention and promoting gender equality among junior high school students. The program featured educational sessions, interactive discussions, a “Safekeeper” segment for anonymous sharing, and pre- and post-tests to assess comprehension. The results showed strong impact — 98% of students reported better understanding, 97% felt more confident identifying and addressing sexual violence, and 98% stated they could apply this knowledge in daily life. By integrating religious and humanistic values, this initiative successfully built empathy, awareness, and equality among students, aligning with Sustainable Development Goal (SDG) 5: Gender Equality through education and community collaboration.',
		src: ImgArticle1,
		prototypeUrl:
			'https://proceeding.unrika.ac.id/index.php/PKM/article/view/81/79'
	},

]




export default function Project() {
	const [active, setActive] = useState<ProjectItem['category']>('All')
	const [openId, setOpenId] = useState<number | null>(null)
	const opened = openId !== null ? projects.find((i) => i.id === openId) : null

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

	const filtered = useMemo(() => {
		if (active === 'All') return projects
		return projects.filter((p) => p.category === active)
	}, [active])

	return (
		<section className="w-full">
			{/* Heading & subheading */}
			<div className="mb-8">
				<h2 className="text-3xl font-bold text-zinc-600 dark:text-zinc-100">Portfolio</h2>
						<p className="mt-3 max-w-none text-xl text-zinc-500 dark:text-zinc-300">
					Explore a collection of my featured projects that showcase my passion for design, technology, and problem-solving. From developing dynamic web applications with React.js and Next.js to crafting intuitive UI/UX designs and data-driven dashboards, each project reflects my ability to turn ideas into meaningful digital experiences. Every work in this portfolio represents my commitment to creating functional, visually engaging, and user-centered solutions that make an impact.
				</p>
			</div>

			{/* Filters */}
			<div className="flex flex-wrap gap-6 text-zinc-500 dark:text-zinc-300">
				{allCategories.map((c) => {
					const isActive = c === active
					return (
						<button
							key={c}
							onClick={() => setActive(c)}
							className={`text-xl font-semibold transition-colors ${
								isActive ? 'text-zinc-900 dark:text-zinc-100' : 'hover:text-zinc-700 dark:hover:text-zinc-200'
							}`}
						>
							{c}
						</button>
					)
				})}
			</div>

			{/* Grid */}
			<ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{filtered.map((p) => (
					<li key={p.id} className="rounded-[10px] bg-zinc-500 dark:bg-zinc-700 p-2 shadow-sm">
						<button
							type="button"
							onClick={() => setOpenId(p.id)}
							aria-label={`View ${p.title}`}
							className="block w-full text-left"
						>
							<div className="relative h-72 rounded-[10px] bg-stone-300 overflow-hidden">
								{p.src ? (
									<Image src={p.src} alt={p.title} fill className="object-cover" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" />
								) : (
									<div className="absolute inset-0 grid place-items-center">
										<div className="h-24 w-24 opacity-70">
											<div className="h-full w-full outline outline-1 outline-zinc-400/50" />
										</div>
									</div>
								)}
								{/* open in new icon */}
								<div className="absolute right-3 border top-3 grid h-7 w-7 place-items-center rounded-full bg-white dark:bg-zinc-800 text-zinc-700 dark:text-white">
									<svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
										<path d="M7 17L17 7M7 7h10v10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</div>
							</div>
							<div className="mt-2 rounded-[8px] bg-zinc-600 dark:bg-zinc-600 p-4">
								<p className="text-1xl font-semibold text-white dark:text-white">{p.title}</p>
							</div>
						</button>
					</li>
				))}
			</ul>

			{/* Detail modal (smaller viewer + description panel) */}
			{opened && (
				<div
					className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
					role="dialog"
					aria-modal="true"
					aria-label={opened.title}
					onClick={() => setOpenId(null)}
				>
					<div
						className="relative w-full max-w-6xl bg-zinc-900/30 rounded-xl ring-1 ring-white/15 overflow-hidden"
						onClick={(e) => e.stopPropagation()}
					>
						<button
							type="button"
							aria-label="Close viewer"
							onClick={() => setOpenId(null)}
							className="absolute right-3 top-3 z-10 h-9 w-9 rounded-full bg-white/90 dark:bg-zinc-800/90 text-zinc-800 dark:text-zinc-100 grid place-items-center hover:bg-white dark:hover:bg-zinc-700 border border-zinc-300 dark:border-zinc-600"
						>
							✕
						</button>
						<div className="grid md:grid-cols-[600px_500px] gap-4 md:gap-6 p-3 md:p-5">
							{/* Left: preview frame */}
							<div className="relative w-full md:w-[600px] aspect-[600/450] bg-zinc-900/20 rounded-lg overflow-hidden ring-2 ring-white/20">
                                {opened?.src ? (
                                    <Image src={opened.src} alt={opened.title} fill className="object-cover" sizes="(min-width: 1024px) 600px, 100vw" />
                                ) : (
                                    <div className="absolute inset-0 grid place-items-center">
                                        <div className="h-24 w-24 opacity-70">
                                            <div className="h-full w-full outline outline-1 outline-zinc-400/50" />
                                        </div>
                                    </div>
                                )}
                            </div>

							{/* Right: description panel (500x450) */}
							<div className="md:w-[500px] h-auto md:h-[450px] overflow-auto rounded-lg bg-zinc-800/60 p-5 ring-1 ring-white/10 text-zinc-100">
								<h3 className="text-2xl font-semibold">{opened.title}</h3>
								{opened.description && (
									<p className="mt-3 text-zinc-300 text-base sm:text-lg whitespace-pre-line">{opened.description}</p>
								)}
								{/* Additional details can be added here if needed */}
							</div>
						</div>

						{/* Bottom prototype button, styled like certificate bar */}
						<div className="px-3 md:px-5 pb-5">
							<a
								href={opened.prototypeUrl || '#'}
								target="_blank"
								rel="noopener noreferrer"
								className="block w-full md:w-[600px] rounded-xl border border-white/20 bg-zinc-900/70 text-white p-3 text-center text-base sm:text-lg font-semibold backdrop-blur-sm hover:bg-zinc-900/80 transition"
							>
								View Prototype
							</a>
						</div>
						</div>
					</div>
			)}
		</section>
	)
}

