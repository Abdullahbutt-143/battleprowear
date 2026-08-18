import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { CategoryGrid } from '@/components/category-grid'
import { FeaturedProducts } from '@/components/featured-products'
import { WhyChoose } from '@/components/why-choose'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Page() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <WhyChoose />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
