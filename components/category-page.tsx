'use client'

import { motion } from 'framer-motion'
import { Star, ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type { CategoryDetail } from '@/lib/categories-data'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

export function CategoryPage({ category }: { category: CategoryDetail }) {
  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Categories
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col md:flex-row md:items-center gap-6"
          >
            <span className="text-6xl md:text-7xl">{category.icon}</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {category.name}
              </h1>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
                {category.tagline}
              </p>
              <p className="text-gray-400 max-w-2xl">{category.description}</p>
              <div className="flex items-center gap-2 mt-4">
                <div className="flex items-center gap-1 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4"
                      fill={i < Math.round(category.rating) ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <span className="text-gray-300 text-sm">
                  {category.rating} · {category.products.length} designs
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {category.products.map((product) => (
              <motion.div key={product.id} variants={cardVariants} className="group">
                <div className="glass rounded-xl overflow-hidden border border-white/10 h-full flex flex-col">
                  <div className="relative w-full aspect-square bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-white mb-2">{product.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{product.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reviews */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-background/50">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-10 text-center"
          >
            Customer Reviews
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {category.reviews.map((review) => (
              <motion.div
                key={review.id}
                variants={cardVariants}
                className="glass rounded-xl border border-white/10 p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-white">{review.name}</span>
                  <span className="text-gray-500 text-xs">{review.date}</span>
                </div>
                <div className="flex items-center gap-1 text-yellow-400 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4" fill={i < review.rating ? 'currentColor' : 'none'} />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{review.comment}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
