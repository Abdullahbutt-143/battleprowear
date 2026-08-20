import { notFound } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { CategoryPage } from '@/components/category-page'
import { CategoryComingSoon } from '@/components/category-coming-soon'
import { categoryDetails, categoryList } from '@/lib/categories-data'

export function generateStaticParams() {
  return categoryList.map((category) => ({ slug: category.slug }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const summary = categoryList.find((category) => category.slug === slug)

  if (!summary) {
    notFound()
  }

  const detail = categoryDetails[slug]

  return (
    <>
      <Navbar />
      {detail ? <CategoryPage category={detail} /> : <CategoryComingSoon name={summary.name} />}
      <Footer />
      <WhatsAppButton />
    </>
  )
}
