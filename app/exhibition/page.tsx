import { Navbar } from '@/components/navbar'
import { ExhibitionHero } from '@/components/exhibition-hero'
import { ExhibitionGallery } from '@/components/exhibition-gallery'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Exhibition | Battle Pro Sportswear',
  description:
    'Battle Pro Sportswear at the Italian National Softair Fair — custom PVC patches, tees, caps and gloves on display.',
}

export default function ExhibitionPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <ExhibitionHero />
      <ExhibitionGallery />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
