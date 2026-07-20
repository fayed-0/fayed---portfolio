"use client"
import { useMemo, useState } from 'react'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import ImgReWorn from './source/RE  WORN.png'
import ImgRentIn from "./source/Rent'in.png"
import ImgBellara from "./source/Bellara.png"
import ImgMentari from "./source/Mentari Hospital.png"
import ImgArticle1 from "./source/Article1.png"
import imgDatnal1 from "./source/Prediksi Harga Rumah di AS.png"
import imgDatnal2 from "./source/air pollution.png"
import imgDatnal3 from "./source/economicfreedom.png"

export type ProjectItem = {
	id: number
	title: string
	category: 'All' | 'UI/UX' | 'Web Development' | 'Data analysis' | 'Publications'
	year?: string
	description?: string
	src?: StaticImageData
	images?: StaticImageData[]
	prototypeUrl?: string
}

type ProjectProps = {
	hideHeader?: boolean
}

const allCategories: ProjectItem['category'][] = [
	'All',
	'UI/UX',
	'Web Development',
	'Data analysis',
	'Publications'
]

export const projects: ProjectItem[] = [
	// UI/UX
	{
		id: 1,
		title: 'RE:WORN – E-Magazine',
		category: 'UI/UX',
		year: '2026',
		description: 'This project is a design for an e-magazine focused on slow fashion and preloved fashion, addressing sustainability issues within the fashion industry. RE:WORN aims to educate readers about the environmental impact of fast fashion while encouraging young audiences to adopt a more eco-conscious lifestyle. Through engaging content such as articles, infographics, and visual guides, RE:WORN provides insights on choosing quality clothing, mindful thrift shopping, and creative upcycling or clothing donation techniques. With a Retro and Street Fashion visual concept, the project blends modern aesthetics with strong sustainability messages, serving as an inspiring media platform that integrates design, research, and visual communication seamlessly.',
		src: ImgReWorn,
		images: [ImgReWorn, ImgReWorn, ImgReWorn],
		prototypeUrl: 'https://www.figma.com/proto/hd1UWtlmeA8rJjA1L32GD9/Fay_project?page-id=240%3A95&node-id=240-232&p=f&viewport=44%2C313%2C0.02&t=TfOafCXKmjgJGFw1-1&scaling=contain&content-scaling=fixed'
	},
	{
		id: 2,
		title: 'Rent’in – Costume Rental Platform',
		category: 'UI/UX',
		year: '2026',
		description: "Rent’in is a technopreneurship project that introduces an innovative idea of providing an online costume rental service. The concept was developed in response to the limited availability of accessible costume rental platforms on the internet. Rent’in aims to simplify the costume rental experience by allowing users to browse, reserve, and rent costumes easily through a digital platform. This project focuses on combining creativity, practicality, and technology to offer a modern solution for individuals and event organizers seeking costume rentals efficiently and conveniently.",
		src: ImgRentIn,
		images: [ImgRentIn, ImgRentIn, ImgRentIn],
		prototypeUrl:
			'https://www.figma.com/proto/EWNGwZLVP5ERkNj2ygc1fI/Untitled?page-id=135%3A16713&node-id=135-17699&viewport=510%2C431%2C0.13&t=1D9S3jy1ccsb06v3-1&scaling=min-zoom&starting-point-node-id=135%3A17011'
	},
	// Web Development
	{
		id: 3,
		title: 'Bellara – E-Commerce Fashion',
		category: 'Web Development',
		year: '2026',
		description: "Bellara is a comprehensive e-commerce platform developed using Next.js, with a React.js frontend and Tailwind CSS for responsive, modern styling. Designed to deliver a seamless shopping experience for fashion enthusiasts, Bellara focuses on creating an intuitive and visually engaging user interface that enhances product discovery and simplifies the purchasing process. The platform features personalized recommendations, advanced filtering options, and a clean, trend-focused layout that highlights the latest in fashion. Bellara aims to empower users to express their personal style while enjoying a smooth and efficient online shopping experience.",
		src: ImgBellara,
		images: [ImgBellara, ImgBellara, ImgBellara],
		prototypeUrl: 'https://bellara.vercel.app/'
	},
	{
		id: 4,
		title: 'Mentari – Hospital Web Platform',
		category: 'Web Development',
		year: '2026',
		description: "Mentari Hospital is a modern healthcare web platform built using Next.js, React.js, and Tailwind CSS, designed to provide users with seamless access to medical information and appointment scheduling. The platform focuses on improving the patient experience through an intuitive interface, personalized health insights, and efficient communication with healthcare professionals. By leveraging cutting-edge web technologies, Mentari Hospital ensures a responsive, accessible, and visually clean design that simplifies health management and promotes a more connected, patient-centered digital healthcare experience.",
		src: ImgMentari,
		images: [ImgMentari, ImgMentari, ImgMentari],
		prototypeUrl: 'https://bellara.vercel.app/'
	},
	// Data analysis
	{
		id: 5,
		title: 'Comparison of Multiple Regression Models for US House Price Prediction',
		category: 'Data analysis',
		year: '2025',
		description: 'This project builds and compares Multiple Linear Regression (MLR) and Decision Tree (DT) models to predict house prices in the United States. The objective is to identify the most influential features such as square footage, number of bathrooms, year built, and location and evaluate linear vs. non linear approaches for accurate price estimation. \n\nWorkflow: data collection, preprocessing, train/test split, modeling, and evaluation. Using the USA Housing dataset (≈4k records), preprocessing includes handling missing values, outlier removal with Z‑score, normalization, and one‑hot encoding to ensure consistent model inputs.\n\nKey result: MLR achieved the best overall performance with R² ≈ 0.994 and the lowest error, while DT offered strong interpretability and captured non linear patterns. Visual analysis (boxplots, heatmaps, histograms, scatter plots) helped explain feature distributions and correlations.\n\nOutcome: a reproducible analytics pipeline and actionable insight into price drivers useful for real estate analytics and data driven investment decisions.',
		src: imgDatnal1,
		images: [imgDatnal1, imgDatnal1, imgDatnal1],
		prototypeUrl: 'https://drive.google.com/file/d/1MZSRSU0lFwhgP9CIaw4xHkkCjYmUYvkg/view'
	},
	{
		id: 6,
		title: 'Clustering Analysis of Air Pollution in South Korea',
		category: 'Data analysis',
		year: '2025',
		description: 'The research investigates the urgent public health issue of air pollution in South Korea by comparing the effectiveness of K-Means and Agglomerative clustering algorithms to categorize pollution levels based on key pollutants, including PM2.5, PM10, O3, NO2, SO2, and CO. The results of the analysis clearly demonstrate that agglomerative clustering is the superior algorithm for this dataset, producing clusters that are "more defined, dense, and compact" than K-Means. Model evaluation confirmed this conclusion, as agglomerative clustering yielded a significantly higher Silhouette Score (0.558 compared to 0.309 for K-Means), a preferable lower Davies-Bouldin Index (0.735 compared to 1.422), and a much higher Calinski-Harabasz Index (40242.397 compared to 12040.730). Ultimately, the study concludes that agglomerative clustering provides a more effective analytical tool to support the development of public health strategies to mitigate the impact of air pollution.',
		src: imgDatnal2,
		images: [imgDatnal2, imgDatnal2, imgDatnal2],
		prototypeUrl: 'https://drive.google.com/file/d/1-NmMw02MeNA7z04SwrQCq5SejuX1mvnk/view?usp=sharing'
	},
	{
		id: 7,
		title: 'Economic Freedom Index Analysis - Indonesia (2000-2023)',
		category: 'Data analysis',
		year: '2025',
		description: 'The research aimed to analyze Indonesia Index of Economic Freedom (IEF) score from 2000 to 2023 by employing a literature review and data visualization techniques using Python and Tableau to identify key challenges and propose solutions. The findings indicate that the main factors driving the decline in Indonesia IEF score which fell slightly from 64.4 to 63.5 in 2023 are excessive regulation, weak protection of property rights, a lack of government efficiency, and pervasive corruption and economic crimes. While a long-term positive trend in the IEF was noted, regional comparisons demonstrated that Indonesia average score (57.90) significantly trails more economically free neighbors like Australia (80.28) and is substantially behind Singapore in Rule of Law aspects. Therefore, the study recommends solutions such as implementing policy reforms to enhance business freedom, strengthening property rights protection through an improved legal system, and boosting government efficiency and transparency to strictly enforce laws against economic offenses.',
		src: imgDatnal3,
		images: [imgDatnal3, imgDatnal3, imgDatnal3],
		prototypeUrl: 'https://drive.google.com/file/d/1nJDDb59Si2g2MYK71AG3hdOC7iCg07EL/view?usp=sharing'
	},
	// Article
	{
		id: 8,
		title: 'Anti Sexual Violence and Gender Equality',
		category: 'Publications',
		year: '2024',
		description: 'This project, titled “Promotion of Anti-Sexual Violence and Gender Equality for Students of SMP Nusantara 1 Karawaci Tangerang,” was a community outreach initiative aimed at raising awareness of sexual violence prevention and promoting gender equality among junior high school students. The program featured educational sessions, interactive discussions, a “Safekeeper” segment for anonymous sharing, and pre- and post-tests to assess comprehension. The results showed strong impact — 98% of students reported better understanding, 97% felt more confident identifying and addressing sexual violence, and 98% stated they could apply this knowledge in daily life. By integrating religious and humanistic values, this initiative successfully built empathy, awareness, and equality among students, aligning with Sustainable Development Goal (SDG) 5: Gender Equality through education and community collaboration.',
		src: ImgArticle1,
		images: [ImgArticle1, ImgArticle1, ImgArticle1],
		prototypeUrl: 'https://proceeding.unrika.ac.id/index.php/PKM/article/view/81'
	},
]

export function getProjectImages(p: ProjectItem): StaticImageData[] {
	if (p.images && p.images.length > 0) return p.images
	if (p.src) return [p.src]
	return []
}

export default function Project({ hideHeader }: ProjectProps) {
	const router = useRouter()
	const [active, setActive] = useState<ProjectItem['category']>('All')

	const visibleProjects = useMemo(() => {
		if (active === 'All') return projects
		return projects.filter((p) => p.category === active)
	}, [active])

	const listedProjects = useMemo(() => {
		if (hideHeader) return visibleProjects
		return visibleProjects.slice(0, 4)
	}, [visibleProjects, hideHeader])

	const hasMore = visibleProjects.length > listedProjects.length

	const goToDetail = (id: number) => {
	router.push(`/project-detail?id=${id}`)   // ✅ benar
	}

	return (
		<section className="w-full">
			{/* Heading & subheading */}
			{!hideHeader && (
			<div className="mb-8">
				<div className="flex items-start justify-between gap-4">
					<div className="min-w-0">
						<div className="flex items-center justify-between">
							<h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#3A5566] dark:text-zinc-100">PORTFOLIO</h2>
							<div className="md:hidden ml-3">
								<Link href="/project-only" className="inline-flex items-center rounded-full bg-[#3A5566] text-white px-4 py-2 text-sm font-medium hover:brightness-95 transition dark:bg-black dark:text-white dark:hover:brightness-90">
									View more
								</Link>
							</div>
						</div>
						<p className="mt-3 max-w-none text-base sm:text-lg md:text-xl text-zinc-500 dark:text-zinc-300">
							Explore a collection of my featured projects that showcase my passion for design, technology, and problem-solving. 
						</p>
					</div>
					<div className="shrink-0 mt-2 sm:mt-0 hidden md:block">
						<Link href="/project-only" className="inline-flex items-center rounded-full bg-[#3A5566] text-white px-4 py-2 text-sm font-medium hover:brightness-95 transition dark:bg-black dark:text-white dark:hover:brightness-90">
							View more
						</Link>
					</div>
				</div>
			</div>
			)}

			{/* Filters */}
			<div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 mb-4 text-zinc-500 dark:text-zinc-300">
				{allCategories.map((c) => {
					const isActive = c === active
					return (
						<button
							key={c}
							onClick={() => setActive(c)}
							className={`px-5 py-2 rounded-full text-sm sm:text-base transition-all ${
								isActive
									? 'bg-[#3A5566] dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold'
									: 'bg-zinc-100 dark:bg-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-600'
							}`}
						>
							{c}
						</button>
					)
				})}
			</div>

			{/* Project list */}
			<ul className="mt-4 divide-y divide-zinc-200 dark:divide-zinc-700">
				{listedProjects.map((p) => {
					const images = getProjectImages(p)
					return (
						<li key={p.id} className="py-8 md:py-10 flex flex-col md:flex-row gap-5 md:gap-10">
							{/* Left: info column */}
							<div className="md:w-[260px] lg:w-[300px] shrink-0">
								<div className="flex items-center justify-between text-[11px] sm:text-xs uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
									<span>{p.category}</span>
									{p.year && <span>{p.year}</span>}
								</div>
								<h3 className="mt-2 text-xl sm:text-2xl font-bold text-[#3A5566] dark:text-zinc-100">
									{p.title}
								</h3>
								{p.description && (
									<p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400 line-clamp-4">
										{p.description}
									</p>
								)}
								<button
									type="button"
									onClick={() => goToDetail(p.id)}
									className="mt-3 text-sm font-medium text-[#3A5566] dark:text-zinc-100 underline underline-offset-2 hover:opacity-80"
								>
									Read more
								</button>
							</div>

							{/* Right: image slider */}
							<div className="flex-1 flex gap-2 sm:gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
								{images.map((img, idx) => (
									<button
										key={idx}
										type="button"
										onClick={() => goToDetail(p.id)}
										aria-label={`View ${p.title}`}
										className="relative shrink-0 snap-start h-[260px] sm:h-[300px] md:h-[400px] w-[60%] min-w-[290px] rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800 group"
									>
										<Image
											src={img}
											alt={p.title}
											fill
											className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
											sizes="(min-width:1024px) 20vw, 40vw"
										/>
									</button>
								))}
							</div>
						</li>
					)
				})}
			</ul>

			{!hideHeader && hasMore && (
				<div className="mt-4 flex justify-center md:hidden">
					<Link href="/project-only" className="inline-flex items-center rounded-full bg-[#3A5566] text-white px-4 py-2 text-sm font-medium hover:brightness-95 transition dark:bg-black dark:text-white dark:hover:brightness-90">
						View more
					</Link>
				</div>
			)}
		</section>
	)
}