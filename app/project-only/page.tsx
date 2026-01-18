"use client"

import NAVBAR from '@/menu/navbar'
import Project from '@/menu/project'
import Footer from '@/menu/footer'

export default function ProjectOnlyPage() {
	return (
		<div className="min-h-screen flex flex-col">
			<NAVBAR />

			<main className="flex-1 w-full">
				<div className="space-y-[64px] md:space-y-[100px] lg:space-y-[120px] mt-0 md:mt-0 lg:mt-0 mb-0">
					<section id="portfolio" className="mx-[10px] lg:mx-[60px] mt-[64px] md:mt-[100px] lg:mt-[180px]">
						{/* Custom centered header for this standalone page */}
						<div className="text-center">
							<h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#58718D] dark:text-zinc-100">PORTFOLIO</h2>
							<div className="mt-4 mx-auto w-20 h-1 rounded-full bg-[#58718D] dark:bg-zinc-300" />
							<p className="mt-3 text-base sm:text-lg md:text-xl text-zinc-500 dark:text-zinc-300">
								Explore a collection of my featured projects that showcase my passion for design, technology, and problem-solving. From developing dynamic web applications with React.js and Next.js to crafting intuitive UI/UX designs and data-driven dashboards, each project reflects my ability to turn ideas into meaningful digital experiences. Every work in this portfolio represents my commitment to creating functional, visually engaging, and user-centered solutions that make an impact.
							</p>
						</div>

						{/* Render the Project grid and hide its internal header */}
						<div className="mt-8">
							<Project hideHeader={true} />
						</div>
					</section>
				</div>
			</main>

			<Footer />
		</div>
	)
}
