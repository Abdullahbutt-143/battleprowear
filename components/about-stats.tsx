'use client'

import { motion } from 'framer-motion'
import { Users, Globe2, Package, Star } from 'lucide-react'
import { useState } from 'react'
import { TiltCard } from './tilt-card'

const stats = [
  { id: 1, icon: Users, label: 'Happy Customers', count: 10000, suffix: '+' },
  { id: 2, icon: Package, label: 'Products Delivered', count: 25000, suffix: '+' },
  { id: 3, icon: Globe2, label: 'Countries Served', count: 30, suffix: '+' },
  { id: 4, icon: Star, label: 'Average Rating', count: 4.9, suffix: '', decimals: 1 },
]

export function AboutStats() {
  const [counts, setCounts] = useState<Record<number, number>>({ 1: 0, 2: 0, 3: 0, 4: 0 })

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-background/50">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          const value = stat.decimals ? counts[stat.id]?.toFixed(stat.decimals) ?? '0.0' : Math.floor(counts[stat.id] ?? 0)

          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              viewport={{ once: true }}
            >
              <TiltCard intensity={12} className="glass rounded-2xl p-6 border border-white/10 text-center h-full">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-14 h-14 rounded-full gradient-orange flex items-center justify-center">
                    <Icon className="w-7 h-7 text-background" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {value}{stat.suffix}
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>

                <RevealCounter
                  targetValue={stat.count}
                  onCountChange={(v) => setCounts((prev) => ({ ...prev, [stat.id]: v }))}
                />
              </TiltCard>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

function RevealCounter({ targetValue, onCountChange }: { targetValue: number; onCountChange: (count: number) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      onViewportEnter={() => {
        let current = 0
        const increment = targetValue / 40
        const interval = setInterval(() => {
          current += increment
          if (current >= targetValue) {
            current = targetValue
            clearInterval(interval)
          }
          onCountChange(current)
        }, 40)
      }}
      style={{ display: 'none' }}
    />
  )
}
