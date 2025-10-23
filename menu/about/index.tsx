"use client"
import { useState } from 'react'

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
			'I am an Information Systems student at Multimedia Nusantara University and a freelancer specializing in UI/UX Design, Web Development, and Graphic Design. For me, university life is not just about learning theories, but about turning knowledge into real-world experiences through projects and client work. In web development, I mainly use React.js with the Next.js framework and Tailwind CSS to build modern, responsive, and user-focused websites. Through my freelance journey, I’ve learned how to combine creativity with functionality, ensuring every design not only looks great but also provides an intuitive user experience.' + '\n\n' +
			'In addition, I have a strong interest and growing skill set in data analysis, developed through academic projects using Python, Tableau, and Power BI. Although I haven’t yet worked on freelance projects in this field, I enjoy exploring data, creating visualizations, and deriving meaningful insights from complex information. My combination of design, development, and analytical skills allows me to think creatively and strategically in building digital solutions that are both functional and impactful.',
	},
	{
		id: 'experience',
		title: 'Experience',
		content:
			'Web Developer — Mentari Hospital (Internship)' + '\n\n' +
			'Sep 2025 – Present | Kecamatan Kelapa Dua, Kabupaten Tangerang, Banten, Indonesia (On-site)' + '\n\n' +
			'During my internship at Mentari Hospital, I took part in the end-to-end development of a web-based hospital information system aimed at improving data management and internal operations. I contributed to both frontend and backend development — from designing intuitive UI/UX interfaces and building responsive pages using Next.js and Tailwind CSS, to managing databases and implementing secure authentication systems. My work focused on enhancing usability, ensuring data security, and optimizing system performance to support hospital staff in managing patient and operational data more efficiently.' + '\n\n' +
			'• Designed UI/UX and created wireframes using Figma as the foundation for web development.' + '\n\n' +
			'• Implemented responsive frontend pages using Next.js and Tailwind CSS.' + '\n\n' +
			'• Designed and managed databases (MySQL/PostgreSQL), including ERD and query optimization.' + '\n\n' +
			'• Developed backend features such as APIs, authentication, and database integration.' + '\n\n' +
			'• Conducted testing, debugging, and performance optimization to ensure system stability and security.' + '\n\n\n' +
		
			'UI/UX Designer — Freelance' + '\n\n' +
			'Jun 2023 – May 2024 | Indonesia' + '\n\n' +
			'As a freelance designer, I worked on diverse creative projects that combined UI/UX design, visual communication, and digital marketing materials. My work focused on crafting designs that are not only visually engaging but also effectively communicate ideas and enhance user experience.' + '\n\n' +
			'• Designed interactive and user-centered interfaces for websites and applications using Figma.' + '\n\n' +
			'• Created various visual and promotional materials including posters, banners, and social media content to strengthen brand identity.' + '\n\n' +
			'• Collaborated closely with clients to understand their goals and deliver creative design solutions that aligned with both functionality and aesthetics.'
	},
	{
		id: 'project',
		title: 'Project',
		content: `E-Learning Website “Gejur” — Research Collaboration Project

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
	const [openId, setOpenId] = useState<string | null>(null)
	const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id))

	return (
		<div className="relative w-full px-0">
			{/* Title */}
			<div className="mt-10 mb-6 sm:mt-5 sm:mb-4">
				<h2 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-bold text-zinc-600 dark:text-zinc-200">
					About
				</h2>
			</div>

			<div className="grid grid-cols-1 gap-8 lg:grid-cols-[384px_minmax(0,1fr)]">
				{/* Left image placeholder */}
				<div className="relative h-[538px] rounded-[10px] bg-zinc-400 dark:bg-zinc-700 sm:h-[280px] md:h-[380px]">
					<div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2">
						<div className="absolute left-[10.75px] top-[10.75px] h-16 w-16 outline outline-1 outline-offset-[-0.5px] outline-white" />
						<div className="absolute left-[17.92px] top-[35.84px] h-5 w-12 bg-white" />
						<div className="absolute left-[53.75px] top-[21.5px] h-2.5 w-2.5 bg-white" />
					</div>
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
										<span className="text-lg sm:text-xl md:text-xl lg:text-xl font-semibold text-zinc-600 dark:text-zinc-200">
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
										<div className="overflow-hidden">
											{(() => {
												const raw = item.content as string
												const normalized = raw.replace(/\+\s*['"]\\n\\n['"]\s*\+/g, '\n\n')

												if (item.id === 'skills' && item.skills?.length) {
													return (
														<div className="pt-4 pr-[40px] sm:pr-2">
															<ul className="space-y-4">
																{item.skills.map((s, i) => (
																	<li key={`${s.label}-${i}`}>
																		<div className="mb-1 flex items-center justify-between text-sm sm:text-xs md:text-sm">
																			<span className="text-zinc-700 dark:text-zinc-200">{s.label}</span>
																			<span className="text-zinc-500 dark:text-zinc-400">{s.value}%</span>
																		</div>
																		<div className="h-2 w-full rounded-full bg-zinc-300/80 dark:bg-zinc-700/80">
																			<div
																				className="h-2 rounded-full bg-zinc-600 dark:bg-zinc-500"
																				style={{ width: `${s.value}%` }}
																			/>
																		</div>
																	</li>
																))}
															</ul>
														</div>
													)
												}

												return normalized.split(/\n\n+/).map((para, idx) => (
													<p
														key={idx}
														className={`text-zinc-600 dark:text-zinc-300 pr-[40px] sm:pr-2 text-sm sm:text-base md:text-base ${
															idx === 0 ? 'pt-4' : 'mt-4'
														}`}
													>
														{para}
													</p>
												))
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
