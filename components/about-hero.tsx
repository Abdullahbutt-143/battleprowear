'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { TiltCard } from './tilt-card'

export function AboutHero() {
  return (
    <section className="relative isolate min-h-[80vh] flex items-center overflow-hidden pt-28 pb-16">
      {/* Base backdrop */}
      <div className="absolute inset-0 -z-30 bg-background" />

      {/* Animated ambient gradient */}
      <motion.div
        className="absolute inset-0 -z-20"
        animate={{
          background: [
            'radial-gradient(circle at 15% 30%, rgba(255, 140, 0, 0.18) 0%, transparent 55%), radial-gradient(circle at 85% 75%, rgba(255, 68, 68, 0.12) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(255, 140, 0, 0.14) 0%, transparent 55%), radial-gradient(circle at 20% 80%, rgba(255, 68, 68, 0.16) 0%, transparent 50%)',
            'radial-gradient(circle at 15% 30%, rgba(255, 140, 0, 0.18) 0%, transparent 55%), radial-gradient(circle at 85% 75%, rgba(255, 68, 68, 0.12) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      {/* Floating particles */}
      {[
        { top: '15%', left: '8%', size: 3, delay: 0 },
        { top: '25%', left: '92%', size: 2, delay: 0.5 },
        { top: '75%', left: '6%', size: 2, delay: 1 },
        { top: '85%', left: '90%', size: 3, delay: 1.5 },
      ].map((p, i) => (
        <motion.span
          key={i}
          className="absolute -z-10 rounded-full bg-primary/60 blur-[1px]"
          style={{ top: p.top, left: p.left, width: p.size * 4, height: p.size * 4 }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Text column */}
        <div className="text-center lg:text-left">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center justify-center lg:justify-start gap-1 text-sm text-gray-400"
          >
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary">About Us</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mb-6 inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full"
          >
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-bold tracking-widest uppercase">
              Our Story
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg"
          >
            <span className="bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent">
              ABOUT BATTLE PRO
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
            className="text-xl text-gray-300 max-w-xl mx-auto lg:mx-0"
          >
            Built for athletes, forged for the tactical field. We craft premium
            sportswear and gear where expectations meet quality.
          </motion.p>
        </div>

        {/* Showcase image with 3D tilt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="relative mx-auto max-w-md lg:max-w-full"
        >
          <motion.div
            className="absolute -inset-2 rounded-[2rem] -z-10 blur-2xl"
            animate={{
              background: [
                'linear-gradient(135deg, rgba(255,140,0,0.5), rgba(255,68,68,0.4))',
                'linear-gradient(315deg, rgba(255,68,68,0.5), rgba(255,140,0,0.4))',
                'linear-gradient(135deg, rgba(255,140,0,0.5), rgba(255,68,68,0.4))',
              ]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />

          <TiltCard className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/products/battle-pro-booth.jpg"
              alt="Battle Pro Sportswear showroom display"
              width={1200}
              height={1200}
              priority
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
          </TiltCard>
        </motion.div>
      </div>
    </section>
  )
}
