import { Navbar } from '@/components/navbar'
import { AboutHero } from '@/components/about-hero'
import { AboutStory } from '@/components/about-story'
import { AboutStats } from '@/components/about-stats'
import { AboutValues } from '@/components/about-values'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Battle Pro Sportswear',
  description: 'Learn about Battle Pro Sportswear — premium sportswear and tactical gear where expectations meet quality.',
}

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <AboutHero />
      <AboutStory />
      <AboutStats />
      <AboutValues />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
