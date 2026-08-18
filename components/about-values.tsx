'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Heart, ShieldCheck } from 'lucide-react'
import { TiltCard } from './tilt-card'

const values = [
  {
    title: 'Our Mission',
    description: 'To equip athletes and professionals with gear that performs as hard as they train — no compromises on quality.',
    icon: Target,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Our Vision',
    description: 'To become the most trusted name in sportswear and tactical gear worldwide, known for craftsmanship and reliability.',
    icon: Eye,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Our Passion',
    description: 'Every stitch is made by people who care about performance — because we are athletes and builders ourselves.',
    icon: Heart,
    color: 'from-orange-500 to-pink-500',
  },
  {
    title: 'Our Promise',
    description: 'Every product goes through rigorous quality control before it ever reaches your hands.',
    icon: ShieldCheck,
    color: 'from-red-500 to-orange-500',
  },
]

export function AboutValues() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Drives Us
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The principles behind everything we make
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                viewport={{ once: true }}
              >
                <TiltCard intensity={12} className="glass rounded-xl p-6 border border-white/10 h-full group relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                    className="mb-5"
                  >
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
