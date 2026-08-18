'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const categories = [
  {
    id: 1,
    name: 'Martial Arts Uniforms',
    features: ['Premium Cotton Blends', 'Reinforced Stitching', 'Authentic Designs'],
    color: 'from-blue-500/20 to-transparent',
    icon: '🥋'
  },
  {
    id: 2,
    name: 'Basketball Uniforms',
    features: ['Moisture Wicking', 'Breathable Mesh', 'Ergonomic Fit'],
    color: 'from-orange-500/20 to-transparent',
    icon: '🏀'
  },
  {
    id: 3,
    name: 'Boxing Gloves',
    features: ['Hand Protection', 'Superior Grip', 'Durability'],
    color: 'from-red-500/20 to-transparent',
    icon: '🥊'
  },
  {
    id: 4,
    name: 'Mechanics Gloves',
    features: ['Heavy Duty', 'Precision Grip', 'Oil Resistant'],
    color: 'from-yellow-500/20 to-transparent',
    icon: '🧤'
  },
  {
    id: 5,
    name: 'Tactical Holsters',
    features: ['Quick Access', 'Secure Fit', 'Military Grade'],
    color: 'from-green-500/20 to-transparent',
    icon: '🎖️'
  },
  {
    id: 6,
    name: 'Tactical Patches',
    features: ['Custom Designs', 'Durable Embroidery', 'Velcro Back'],
    color: 'from-purple-500/20 to-transparent',
    icon: '⚔️'
  },
  {
    id: 7,
    name: 'Tactical Pouches',
    features: ['Multiple Compartments', 'MOLLE Compatible', 'Weatherproof'],
    color: 'from-indigo-500/20 to-transparent',
    icon: '🎒'
  },
  {
    id: 8,
    name: 'Magazine Pouches',
    features: ['Fast Draw', 'Secure Hold', 'Lightweight'],
    color: 'from-cyan-500/20 to-transparent',
    icon: '📦'
  },
  {
    id: 9,
    name: 'Fitness Leggings',
    features: ['Compression Fit', 'High Waist Design', 'Squat Proof'],
    color: 'from-pink-500/20 to-transparent',
    icon: '💪'
  },
  {
    id: 10,
    name: 'Tracksuits',
    features: ['Athletic Cut', 'Premium Fabric', 'All Weather'],
    color: 'from-teal-500/20 to-transparent',
    icon: '🏃'
  },
  {
    id: 11,
    name: 'Casual Apparel',
    features: ['Modern Designs', 'Comfortable', 'Versatile'],
    color: 'from-emerald-500/20 to-transparent',
    icon: '👕'
  },
  {
    id: 12,
    name: 'Polo Shirts',
    features: ['Breathable Cotton', 'Professional Look', 'Durable'],
    color: 'from-rose-500/20 to-transparent',
    icon: '👔'
  },
  {
    id: 13,
    name: 'Headwear',
    features: ['Embroidered Logo', 'Adjustable Strap', 'Curved Brim'],
    color: 'from-amber-500/20 to-transparent',
    icon: '🧢'
  },
  {
    id: 14,
    name: 'PVC Patches',
    features: ['Custom Molded Designs', 'Velcro Backing', 'Weatherproof'],
    color: 'from-slate-500/20 to-transparent',
    icon: '🛡️'
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  hover: {
    y: -10,
    transition: { duration: 0.3 }
  }
}

export function CategoryGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/50">
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
            Our Categories
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our premium selection of sportswear and tactical gear
          </p>
        </motion.div>

        {/* Category Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              whileHover="hover"
              className={`glass rounded-xl p-6 border border-white/10 cursor-pointer group overflow-hidden relative`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} -z-10`} />

              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{category.icon}</span>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {category.name}
              </h3>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {category.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* View Category Link */}
              <motion.button
                whileHover={{ x: 5 }}
                className="text-primary font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all"
              >
                View Category
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
