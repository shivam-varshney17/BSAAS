import { HeroSection } from '@/components/hero-section'
import { ProjectsSection } from '@/components/projects-section'
import { AboutSection } from '@/components/about-section'
import { TechStackSection } from '@/components/tech-stack-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <TechStackSection />
      <ContactSection />
      <Footer />
    </main>
  )
}