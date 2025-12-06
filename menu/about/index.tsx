"use client"
import { useState } from 'react'
import Image from 'next/image'
import profileImg from '../../source/profile.png'

type Skill = { label: string; value: number }
type Item = {
	id: string
	title: string
	content: string
	skills?: Skill[]
}

const items: Item[] = [
	{
		id: 'about',
		title: 'About me',
		content:
			'I am Fayed Abdul Hakim, an Information Systems student highly driven to launch a career as a Data Analyst. As an aspiring professional, I have built a solid analytical foundation, specializing in translating complex multi-indicator datasets into actionable insights. I am proficient in Python (Pandas, Scikit-learn), SQL, and statistical analysis. My capabilities in predictive modeling are validated by my project Comparison of Multiple Regression Models for US House Price Prediction, where I achieved a high accuracy of R^2=0.994 with Linear Regression. Furthermore, I am experienced in KPI Analysis and interactive data visualization using Tableau through my work on the Economic Freedom Index Analysis - Indonesia (2000-2024). I am committed to analytical storytelling and making data accessible for strategic decision-making.' + '\n\n' +
			'What sets me apart is my unique blend of analytical prowess and creativity as a Creative Front-End Developer and UI/UX Designer. I excel at bridging design (Figma) and development using modern frameworks like React.js, Next.js, and Tailwind CSS. This dual skillset allows me not only to extract crucial data insights but also to present findings and dashboards through seamless, user-friendly digital experiences. I have a proven track record of delivering measurable impact, including leading full website redesigns (e.g., Rumah Sakit Mentari) to enhance user experience and creating design solutions that contributed to a 20% increase in visitor traffic.',
	},
	{
		id: 'experience',
		title: 'Experience',
		content:
			'Web Developer - Mentari Hospital (Internship)' + '\n\n' +
			'Sep 2025 - Present | Kecamatan Kelapa Dua, Kabupaten Tangerang, Banten, Indonesia (On-site)' + '\n\n' +
			'During my internship at Mentari Hospital, I took part in the end-to-end development of a web-based hospital information system aimed at improving data management and internal operations. I contributed to both frontend and backend development - from designing intuitive UI/UX interfaces and building responsive pages using Next.js and Tailwind CSS, to managing databases and implementing secure authentication systems. My work focused on enhancing usability, ensuring data security, and optimizing system performance to support hospital staff in managing patient and operational data more efficiently.' + '\n\n' +
			'• Designed UI/UX and created wireframes using Figma as the foundation for web development.' + '\n\n' +
			'• Implemented responsive frontend pages using Next.js and Tailwind CSS.' + '\n\n' +
			'• Designed and managed databases (MySQL/PostgreSQL), including ERD and query optimization.' + '\n\n' +
			'• Developed backend features such as APIs, authentication, and database integration.' + '\n\n' +
			'• Conducted testing, debugging, and performance optimization to ensure system stability and security.' + '\n\n\n' +
		
			'UI/UX Designer - Freelance' + '\n\n' +
			'Jun 2023 - May 2024 | Indonesia' + '\n\n' +
			'As a freelance designer, I worked on diverse creative projects that combined UI/UX design, visual communication, and digital marketing materials. My work focused on crafting designs that are not only visually engaging but also effectively communicate ideas and enhance user experience.' + '\n\n' +
			'• Designed interactive and user-centered interfaces for websites and applications using Figma.' + '\n\n' +
			'• Created various visual and promotional materials including posters, banners, and social media content to strengthen brand identity.' + '\n\n' +
			'• Collaborated closely with clients to understand their goals and deliver creative design solutions that aligned with both functionality and aesthetics.'
	},
	{
		id: 'project',
		title: 'Project',
		content: `E-Learning Website “Gejur” - Research Collaboration Project

			During my time at university, I collaborated with a lecturer and two teammates on a research project to develop an e-learning web application called Gejur, aimed at improving access to education for communities in East Nusa Tenggara (NTT). The platform was designed to provide an interactive and structured learning experience for users in remote areas with limited educational resources. I was responsible for the frontend development, building an engaging and responsive interface using Next.js and Tailwind CSS. I also implemented dynamic routing, reusable components, and adaptive layouts to ensure a seamless learning experience across all devices.

			Each course within the platform is divided into modules containing videos, pre- and post-quizzes, and completion certificates. Learners must complete quizzes successfully before unlocking the next module, encouraging active engagement and mastery of the material. Beyond its technical aspects, the project emphasized accessibility and simplicity, ensuring that learners in NTT could easily navigate and benefit from the platform. Through Gejur, our goal was to empower local communities by providing a digital learning solution that supports continuous education and skill development, even in areas with limited infrastructure.

			Cendana Residential Community Website — Campus Project

			As part of a university project, I developed a community website for the Cendana residential complex to improve communication and digital interaction among residents. I was responsible for the frontend development, building a responsive and user-friendly interface using Next.js and Tailwind CSS. The website allows residents to book shared facilities, such as community halls for neighborhood meetings or discussions, directly through the platform.

			The system also includes additional features such as an internal marketplace where residents can sell and buy products within their community, and a reporting forum that enables users to submit issues like dirty water or damaged facilities. Each report automatically notifies the housing developer, ensuring quick responses and transparent communication. This project highlights my ability to transform community needs into functional and impactful web solutions through thoughtful design and development.`,
	},
	{
		id: 'education',
		title: 'Education',
		content: `Multimedia Nusantara University

			Bachelor’s Degree in Information Systems

			Aug 2022 – Present | Tangerang, Indonesia

			GPA: 3,60/4.00

			As an Information Systems student, I focus on the intersection of technology, design, and data analysis to build impactful digital solutions. My coursework covers Web Development, Database Systems, Data Warehousing, Information Systems Analysis and Design, Machine Learning, and Data Visualization — strengthening both my technical and analytical skills. Throughout my studies, I’ve worked on various academic and research projects, including the development of web-based applications and data-driven dashboards. Beyond academics, I apply my knowledge in the professional field through freelance UI/UX design, web development, and creative projects, bridging theory and real-world implementation.`
				},
	{
		id: 'skills',
		title: 'Skills',
		content: '',
		skills: [
			{ label: 'Next.js', value: 45 },
			{ label: 'React.js', value: 40 },
			{ label: 'Tailwind CSS', value: 50 },
			{ label: 'Figma (UI/UX Design)', value: 95 },
			{ label: 'HTML & CSS', value: 65 },
			{ label: 'JavaScript ', value: 40 },
			{ label: 'Python (Pandas, Seaborn, Matplotlib)', value: 75 },
			{ label: 'Tableau / Power BI', value: 80 },
			{ label: 'MySQL / PostgreSQL', value: 45 },
		]
	}
]


export default function About() {
	// Open the 'about' panel by default when the page loads
	const [openId, setOpenId] = useState<string | null>('about')
	const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id))

	return (
		<div className="relative w-full px-0">
			{/* Title */}
			<div className="mt-10 mb-6 sm:mt-5 sm:mb-4">
				<h2 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-bold text-[#3A5566] dark:text-zinc-200">
					ABOUT ME
				</h2>
			</div>

			<div className="grid grid-cols-1 gap-8 lg:grid-cols-[384px_minmax(0,1fr)]">
				{/* Left image placeholder */}
				<div className="relative w-full rounded-[10px] bg-zinc-400 dark:bg-zinc-700 aspect-square sm:aspect-auto sm:h-[280px] md:h-[380px] lg:h-[538px] overflow-hidden">
					<Image
						src={profileImg}
						alt="Profile"
						fill
						className="object-cover w-full h-full"
					/>
				</div>

				{/* Right accordion */}
					<div className="w-full">
						<ul className="w-full divide-y divide-zinc-300/70 dark:divide-zinc-600">
						{items.map((item) => {
							const isOpen = openId === item.id
							return (
								<li key={item.id} className="py-5 sm:py-3">
									<button
										onClick={() => toggle(item.id)}
										className="flex w-full items-center justify-between text-left"
									>
										<span className="text-lg sm:text-xl md:text-xl lg:text-xl font-semibold text-[#3A5566] dark:text-zinc-200">
											{item.title}
										</span>
										<span
											className="text-xl sm:text-xl md:text-xl lg:text-xl font-semibold text-zinc-500 transition-transform ease-out duration-300"
											style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
										>
											+
										</span>
									</button>

									<div
										className="grid transition-[grid-template-rows] duration-300 ease-out"
										style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
									>
										<div className="overflow-hidden rounded-xl lg:rounded-2xl">
											{(() => {
												const raw = item.content as string
												const normalized = raw.replace(/\+\s*['"]\\n\\n['"]\s*\+/g, '\n\n')

												if (item.id === 'skills' && item.skills?.length) {
													return (
														<div className="mt-3 rounded-xl bg-light dark:bg-zinc-900 lg:bg-light lg:dark:bg-zinc-900 shadow-[inset_0_5px_24px_rgba(0,0,0,0.14),_0_8px_20px_-12px_rgba(0,0,0,0.12)] dark:shadow-[inset_0_5px_28px_rgba(148,163,184,0.38),_0_8px_20px_-12px_rgba(148,163,184,0.25)] lg:shadow-[inset_0_3px_16px_rgba(0,0,0,0.08),_0_10px_28px_-10px_rgba(0,0,0,0.18)] dark:lg:shadow-[inset_0_3px_20px_rgba(148,163,184,0.28),_0_10px_28px_-10px_rgba(148,163,184,0.22)] lg:ring-1 lg:ring-[#3A5566]/10 dark:lg:ring-zinc-700/50 p-4 sm:p-5 lg:p-8 max-h-60 overflow-y-auto scrollbar-blue pb-14 pr-3 sm:pb-0 sm:pr-0 sm:max-h-none sm:overflow-visible mx-1 sm:mx-2 lg:mx-auto lg:max-w-[1280px] xl:max-w-[1440px] transition-all duration-300">
															<ul className="space-y-4">
																{item.skills.map((s, i) => (
																	<li key={`${s.label}-${i}`}>
																		<div className="mb-1 flex items-center justify-between text-sm sm:text-xs md:text-sm">
																			<span className="text-zinc-700 dark:text-zinc-200">{s.label}</span>
																			<span className="text-zinc-500 dark:text-zinc-400">{s.value}%</span>
																		</div>
																		<div className="h-2 w-full rounded-full bg-zinc-300/80 dark:bg-zinc-700/80">
																			<div
																				className="h-2 rounded-full bg-[#58718D] dark:bg-zinc-500"
																				style={{ width: `${s.value}%` }}
																			/>
																		</div>
																	</li>
																))}
															</ul>
														</div>
													)
												}

												return (
													<div className="mt-3 rounded-xl bg-light dark:bg-zinc-900 lg:bg-light lg:dark:bg-zinc-900 shadow-[inset_0_5px_24px_rgba(0,0,0,0.14),_0_8px_20px_-12px_rgba(0,0,0,0.12)] dark:shadow-[inset_0_5px_28px_rgba(148,163,184,0.38),_0_8px_20px_-12px_rgba(148,163,184,0.25)] lg:shadow-[inset_0_3px_16px_rgba(0,0,0,0.08),_0_10px_28px_-10px_rgba(0,0,0,0.18)] dark:lg:shadow-[inset_0_3px_20px_rgba(148,163,184,0.28),_0_10px_28px_-10px_rgba(148,163,184,0.22)] lg:ring-1 lg:ring-[#3A5566]/10 dark:lg:ring-zinc-700/50 p-4 sm:p-5 lg:p-8 max-h-56 overflow-y-auto scrollbar-blue pb-16 pr-3 sm:pb-0 sm:pr-0 sm:max-h-none sm:overflow-visible mx-1 sm:mx-2 lg:mx-auto lg:max-w-[1200px] xl:max-w-[1320px] transition-all duration-300">
														{normalized.split(/\n\n+/).map((para, idx) => (
															<p
																key={idx}
																className={`text-zinc-600 dark:text-zinc-300 text-sm sm:text-base md:text-base lg:text-[15px] leading-relaxed ${
																	idx === 0 ? '' : 'mt-4'
																}`}
															>
																{para}
															</p>
														))}
													</div>
												)
											})()}
										</div>
									</div>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</div>
	)
}
