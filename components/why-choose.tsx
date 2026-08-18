'use client'

import { motion } from 'framer-motion'
import { Award, TrendingDown, Sparkles } from 'lucide-react'
import { useState } from 'react'

const reasons = [
  {
    id: 1,
    title: 'Best Quality',
    description: 'Premium materials and expert craftsmanship in every product',
    icon: Award,
    color: 'from-blue-500 to-cyan-500',
    count: 99,
    suffix: '%'
  },
  {
    id: 2,
    title: 'Best Price',
    description: 'Competitive pricing without compromising on excellence',
    icon: TrendingDown,
    color: 'from-emerald-500 to-teal-500',
    count: 50,
    suffix: '%'
  },
  {
    id: 3,
    title: 'Custom Made',
    description: 'Personalized solutions tailored to your specific needs',
    icon: Sparkles,
    color: 'from-orange-500 to-pink-500',
    count: 1000,
    suffix: '+'
  },
]

export function WhyChoose() {
  const [counts, setCounts] = useState<Record<number, number>>({ 1: 0, 2: 0, 3: 0 })

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-background/50">
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
            Why Choose Battle Pro?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the difference with our commitment to excellence
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon

            return (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass rounded-xl p-8 border border-white/10 text-center relative overflow-hidden group"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`} />

                {/* Icon */}
                <motion.div
                  className="flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${reason.color} flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-300 mb-8">
                  {reason.description}
                </p>

                {/* Counter */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.15 }}
                  viewport={{ once: true }}
                  className={`inline-block bg-gradient-to-r ${reason.color} bg-clip-text text-transparent`}
                >
                  <span className="text-4xl font-bold">
                    {counts[reason.id]}
                  </span>
                  <span className="text-2xl font-bold ml-1">{reason.suffix}</span>
                </motion.div>

                {/* Reveal animation script */}
                <RevealCounter 
                  targetValue={reason.count} 
                  id={reason.id}
                  onCountChange={(count) => setCounts(prev => ({ ...prev, [reason.id]: count }))}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg mb-6">
            Join thousands of satisfied customers worldwide
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 140, 0, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="gradient-orange text-background font-bold py-3 px-8 rounded-lg shadow-lg transition-shadow"
          >
            Start Shopping Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

function RevealCounter({ targetValue, id, onCountChange }: { targetValue: number; id: number; onCountChange: (count: number) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
      onViewportEnter={() => {
        let current = 0
        const increment = targetValue / 30
        const interval = setInterval(() => {
          current += increment
          if (current >= targetValue) {
            current = targetValue
            clearInterval(interval)
          }
          onCountChange(Math.floor(current))
        }, 50)
      }}
      style={{ display: 'none' }}
    />
  )
}
