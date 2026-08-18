'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Eye } from 'lucide-react'
import Image from 'next/image'

const products = [
  // Newly uploaded
  {
    id: 7,
    name: 'Performance Tee & Hoodie Set',
    category: 'Casual',
    images: ['/products/activewear-tee-hoodie.jpg'],
    rating: 4.8
  },
  {
    id: 8,
    name: 'Tactical Plate Carrier Vest',
    category: 'Tactical',
    images: ['/products/tactical-plate-carrier.jpg'],
    rating: 4.9
  },
  {
    id: 9,
    name: 'Signature Snapback Collection',
    category: 'Headwear',
    images: ['/products/headwear-collection.jpg'],
    rating: 4.7
  },
  {
    id: 10,
    name: 'PVC Patch Collection',
    category: 'PVC Patches',
    images: ['/products/pvc-patches.jpg'],
    rating: 4.8
  },
  // Original catalog
  {
    id: 1,
    name: 'Pro Karate Uniform',
    category: 'Martial Arts',
    images: ['/products/karate-uniform.jpg'],
    rating: 4.8
  },
  {
    id: 2,
    name: 'Elite Basketball Jersey',
    category: 'Basketball',
    images: ['/products/basketball.jpg'],
    rating: 4.9
  },
  {
    id: 3,
    name: 'Pro Boxing Gloves',
    category: 'Boxing',
    images: ['/products/boxing-gloves.jpg'],
    rating: 4.7
  },
  {
    id: 4,
    name: 'Tactical Combat Boots',
    category: 'Tactical',
    images: ['/products/tactical-boots-tan.jpg', '/products/tactical-boots-black.jpg'],
    rating: 4.8
  },
  {
    id: 5,
    name: 'Performance Leggings',
    category: 'Fitness',
    images: ['/products/performance-leggings.jpg'],
    rating: 4.9
  },
  {
    id: 6,
    name: 'Premium Polo Shirt',
    category: 'Casual',
    images: ['/products/polo-shirt.jpg'],
    rating: 4.6
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

export function FeaturedProducts() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Products
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Handpicked bestsellers from our premium collection
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              className="group"
            >
              {/* Product Card */}
              <div className="glass rounded-xl overflow-hidden border border-white/10 h-full flex flex-col">

                {/* Image Area */}
                <motion.div
                  className="relative w-full aspect-square bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image reveal: photo fades/scales in first */}
                  <motion.div
                    className="absolute inset-0 flex"
                    initial={{ opacity: 0, scale: 1.15 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    viewport={{ once: true, margin: '-50px' }}
                  >
                    {product.images.map((src, i) => (
                      <div key={src} className="relative h-full" style={{ width: `${100 / product.images.length}%` }}>
                        <Image
                          src={src}
                          alt={`${product.name}${product.images.length > 1 ? ` ${i + 1}` : ''}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                    ))}
                  </motion.div>

                  {/* Name slides in over the image after it appears */}
                  <motion.div
                    className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 pt-10"
                    initial={{ x: '-100%', opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.55, ease: 'easeOut' }}
                    viewport={{ once: true, margin: '-50px' }}
                  >
                    <span className="text-white font-bold text-lg drop-shadow-md">
                      {product.name}
                    </span>
                  </motion.div>

                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-primary text-background p-3 rounded-full hover:shadow-lg shadow-md transition-shadow"
                    >
                      <ShoppingCart className="w-6 h-6" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/20 text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Eye className="w-6 h-6" />
                    </motion.button>
                  </motion.div>
                </motion.div>

                {/* Product Info */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-primary text-xs font-bold uppercase tracking-wider">
                      {product.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-2 mb-4 text-balance">
                      {product.name}
                    </h3>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-end pt-4 border-t border-white/10">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-gray-300 text-sm">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 140, 0, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="gradient-orange text-background font-bold py-3 px-8 rounded-lg shadow-lg transition-shadow"
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
