'use client'

import { motion } from 'framer-motion'
import { CalendarDays, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export function ExhibitionHero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-12">
      <div className="absolute inset-0 -z-20 bg-background" />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(circle at 15% 30%, rgba(255, 140, 0, 0.18) 0%, transparent 55%), radial-gradient(circle at 85% 75%, rgba(255, 68, 68, 0.12) 0%, transparent 50%)',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center justify-center gap-1 text-sm text-gray-400"
        >
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-primary">Exhibition</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-6 inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full"
        >
          <CalendarDays className="w-4 h-4 text-primary" />
          <span className="text-primary text-sm font-bold tracking-widest uppercase">
            Exhibition
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-bold italic mb-6 leading-tight drop-shadow-lg"
        >
          <span className="bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent">
            Italian National Softair Fair
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
          className="space-y-4 text-lg text-gray-300 max-w-3xl mx-auto"
        >
          <p>
            Battle Pro Sportswear took its craftsmanship to the Italian National
            Softair Fair, a key meeting point for airsoft players, teams and
            brands. Our booth brought together everything we make for the field.
          </p>
          <p className="text-gray-400">
            Visitors explored our wall of custom PVC patches made for teams from
            around the world, along with custom-printed t-shirts, caps, tactical
            gloves and team jerseys. It was a great chance to meet the community,
            show our quality up close and talk through custom collaborations.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
