import { Navbar } from '@/components/navbar'
import { ContactHero } from '@/components/contact-hero'
import { ContactInfoCards } from '@/components/contact-info-cards'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Battle Pro Sportswear',
  description: 'Get in touch with Battle Pro Sportswear for orders, custom gear, and support.',
}

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <ContactHero />
      <ContactInfoCards />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
