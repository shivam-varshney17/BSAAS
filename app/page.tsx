import { HeroSection } from '@/components/hero-section'
import { ProjectsSection } from '@/components/projects-section'
import { AboutSection } from '@/components/about-section'
import { TechStackSection } from '@/components/tech-stack-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* AI Neural Network Background Effect */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <TechStackSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}