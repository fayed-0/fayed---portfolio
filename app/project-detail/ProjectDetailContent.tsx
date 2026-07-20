"use client"
import { useSearchParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { projects, getProjectImages } from '../../menu/project'
import NAVBAR from '@/menu/navbar'
import Footer from '@/menu/footer'

export default function ProjectDetailContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const id = Number(searchParams.get('id'))
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <NAVBAR />
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <p className="text-zinc-600">Project tidak ditemukan.</p>
          <button
            onClick={() => router.push('/')}
            className="text-sm underline text-[#3A5566]"
          >
            Kembali
          </button>
        </div>
        <Footer />
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
    <div className="min-h-screen flex flex-col">
      <NAVBAR />

      <main className="flex-1 w-full bg-white pb-16">
       <div className="w-full px-[10px] lg:px-[60px] mt-[100px] md:mt-[140px]">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="w-full md:w-[360px] lg:w-[400px] shrink-0">
              <div className="md:sticky md:top-[90px]">
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

            <div className="flex-1 flex flex-col gap-2 sm:gap-3">
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  className="relative w-full h-[260px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800"
                >
                  {img ? (
                    <Image
                      src={img}
                      alt={project.title + ' ' + (idx + 1)}
                      fill
                      className="object-cover"
                      sizes="(min-width:1024px) 20vw, 40vw"
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}