import Header from '@/menu/header'
import Navbar from '@/menu/navbar'
import About from '@/menu/about'
import Project from '@/menu/project'
import Certification from '@/menu/certification'
import Footer from '@/menu/footer'

export default function HomePage() {
  return (
    <main id="home">
      <Navbar />
      <Header />
  {/* Konsisten gap antar section: 160px */}
  <div className="space-y-[180px] mt-[120px] mb-[120px]">
        <section id="about" className="mx-[60px]">
          <About />
        </section>
        <section id="portfolio" className="mx-[60px]">
          <Project />
        </section>
        <section id="certification" className="mx-[60px]">
          <Certification />
        </section>
        <section id="contact" className="mx-[60px]">
          <div className="rounded-2xl border bg-white dark:bg-zinc-800 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="mt-2 text-gray-600">Silakan isi nanti sesuai kebutuhan.</p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
