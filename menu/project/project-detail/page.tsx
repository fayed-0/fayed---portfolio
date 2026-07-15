import { Suspense } from 'react'
import ProjectDetailContent from './ProjectDetailContent' // sesuaikan path

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-zinc-600">Loading project details...</div>}>
      <ProjectDetailContent />
    </Suspense>
  )
}