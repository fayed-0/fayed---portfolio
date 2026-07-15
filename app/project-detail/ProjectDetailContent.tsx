"use client"
import { useSearchParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { projects, getProjectImages } from '../../menu/project'

export default function ProjectDetailContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const id = Number(searchParams.get('id'))
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-zinc-600">Project tidak ditemukan.</p>
        <button
          onClick={() => router.push('/')}
          className="text-sm underline text-[#3A5566]"
        >
          Kembali
        </button>
      </div>
    )
  }

  const images = getProjectImages(project)
  const galleryImages = [
    images[0],
    images[1] ?? images[0],
    images[2] ?? images[0],
    images[0]
  ]

  return (
    <div className="w-full min-h-screen bg-white pb-16">
      <div className="w-full pt-7 pb-2 flex justify-center">
        <div className="p-5 bg-stone-200/50 rounded-[5px] flex gap-3.5">
          <Link href="/project-only" className="text-zinc-600 text-[10px] font-bold uppercase tracking-wide">
            Project
          </Link>
          <Link href="/about" className="text-zinc-600 text-[10px] font-bold uppercase tracking-wide">
            about
          </Link>
          <Link href="/certificate" className="text-zinc-600 text-[10px] font-bold uppercase tracking-wide">
            certivicate
          </Link>
          <Link href="/contact" className="text-zinc-600 text-[10px] font-bold uppercase tracking-wide">
            contact
          </Link>
          <Link href="/cv" className="text-zinc-600 text-[10px] font-bold uppercase tracking-wide">
            download cv
          </Link>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 mt-6">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <div className="w-full md:w-[478px] shrink-0">
            <div className="md:sticky md:top-10">
              <div className="flex flex-col gap-[5px] py-4">
                <div className="flex justify-between text-zinc-600 text-xs font-normal uppercase">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>

                <h1 className="text-zinc-600 text-2xl font-bold uppercase tracking-[3.6px]">
                  {project.title}
                </h1>

                <p className="text-zinc-600 text-sm whitespace-pre-line">
                  {project.description}
                </p>

                <a
                  href={project.prototypeUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 text-zinc-600 text-xs font-medium hover:opacity-80"
                >
                  <span>VISIT PROJECT</span>
                  <span className="inline-block h-2 w-2 border-t border-r border-zinc-600 rotate-45"></span>
                </a>

                <button
                  onClick={() => router.back()}
                  className="mt-4 text-left text-zinc-500 text-xs underline underline-offset-2 hover:opacity-80"
                >
                  Kembali
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-[5px]">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className={
                  idx % 3 === 0
                    ? "relative w-full h-96 rounded-[5px] overflow-hidden bg-neutral-300"
                    : "relative w-full h-60 rounded-[5px] overflow-hidden bg-neutral-300"
                }
              >
                {img ? (
                  <Image
                    src={img}
                    alt={project.title + ' ' + (idx + 1)}
                    fill
                    className="object-cover"
                    sizes="(min-width:1024px) 60vw, 100vw"
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 mt-10">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 py-4">
          <div className="flex flex-wrap justify-center gap-3.5">
            <span className="text-zinc-600 text-[10px] font-bold uppercase">portfolio</span>
            <Link href="/project-only" className="text-zinc-600 text-[10px] font-medium uppercase">
              Project
            </Link>
            <Link href="/about" className="text-zinc-600 text-[10px] font-medium uppercase">
              about
            </Link>
            <Link href="/certificate" className="text-zinc-600 text-[10px] font-medium uppercase">
              certivicate
            </Link>
            <Link href="/contact" className="text-zinc-600 text-[10px] font-medium uppercase">
              contact
            </Link>
            <Link href="/cv" className="text-zinc-600 text-[10px] font-medium uppercase">
              download cv
            </Link>
          </div>
          <span className="text-zinc-600 text-[10px] font-medium uppercase">© 2026 Fayed Abdul Hakim</span>
        </div>
      </div>
    </div>
  )
}
