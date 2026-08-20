'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Eye, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { categoryList as categories } from '@/lib/categories-data'

const rowVariants = {
  hidden: (isReversed: boolean) => ({ opacity: 0, x: isReversed ? 80 : -80 }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const contentVariants = {
  hidden: (isReversed: boolean) => ({ opacity: 0, x: isReversed ? -40 : 40 }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: 0.15 }
  }
}

export function CategoryGrid() {
  return (
    <section className="py-20 w-full px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/50">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our Categories
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Explore our premium selection of sportswear and tactical gear
        </p>
      </motion.div>

      {/* Category List — one category per row, full width of the screen */}
      <div className="w-full flex flex-col gap-6">
        {categories.map((category, index) => {
          const isReversed = index % 2 === 1
          return (
            <motion.div
              key={category.id}
              custom={isReversed}
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ y: -6 }}
              className={`glass rounded-xl border border-white/10 cursor-pointer group overflow-hidden flex flex-col ${
                isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              {/* Icon / preview area with hover actions */}
              <motion.div
                variants={imageVariants}
                className={`relative w-full md:w-2/5 aspect-[16/9] md:aspect-auto md:min-h-[280px] bg-gradient-to-br ${category.color} flex items-center justify-center overflow-hidden`}
              >
                <motion.span
                  className="text-7xl md:text-8xl"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.3 }}
                >
                  {category.icon}
                </motion.span>

                {/* Hover overlay: view + add to cart */}
                <motion.div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Add ${category.name} to cart`}
                    className="bg-primary text-background p-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </motion.button>
                  <Link href={`/category/${category.slug}`} aria-label={`View ${category.name}`}>
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/20 text-white p-3 rounded-full hover:bg-white/30 transition-colors flex items-center justify-center"
                    >
                      <Eye className="w-5 h-5" />
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Content */}
              <motion.div
                variants={contentVariants}
                className="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-center"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {category.name}
                </h3>

                {/* Features */}
                <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* View Category Link */}
                <Link href={`/category/${category.slug}`}>
                  <motion.span
                    whileHover={{ x: 5 }}
                    className="text-primary font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all self-start"
                  >
                    View Category
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
