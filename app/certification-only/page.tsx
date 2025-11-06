"use client"

import NAVBAR from '../../menu/navbar'
import Certification from '../../menu/certification'
import Footer from '../../menu/footer'

export default function CertificationOnlyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NAVBAR />

      <main className="flex-1 w-full">
        {/* Mirror the home page section layout so margins align exactly on desktop */}
        <div className="space-y-[64px] md:space-y-[100px] lg:space-y-[120px] mt-0 md:mt-0 lg:mt-0 mb-0">
          <section id="certification" className="mx-[10px] lg:mx-[60px] mt-[64px] md:mt-[100px] lg:mt-[180px]">
            {/* Custom centered header for this standalone page (hide the component's header via CSS below) */}
            <div className="text-center">
                <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#58718D] dark:text-zinc-100">CERTIFICATE</h2>
              <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-[#58718D] dark:bg-zinc-300" />
              <p className="mt-3 text-base sm:text-lg md:text-xl text-zinc-500 dark:text-zinc-300">
                This section presents the certifications I have earned to enhance my competencies and deepen my understanding beyond academic learning. Each certification demonstrates my commitment to continuous self-improvement and my effort to expand my knowledge in web development, user experience design, and data analytics. Through these learning experiences, I strive to develop both the technical and analytical skills required to grow as a well-rounded professional.
              </p>
            </div>

            {/* Render the Certification grid and hide its internal header (we rendered our own above) */}
            <div className="cert-only mt-8">
              <Certification hideHeader />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
