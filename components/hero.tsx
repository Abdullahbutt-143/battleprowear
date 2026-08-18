'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ChevronDown, ShieldCheck, Flame } from 'lucide-react'
import Image from 'next/image'
import { useRef, type MouseEvent } from 'react'

export function Hero() {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 })

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  const badgeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2 + i * 0.2,
        duration: 0.6,
        ease: 'easeOut'
      }
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.2
      }
    }
  }

  return (
    <section className="relative isolate min-h-screen flex items-center overflow-hidden pt-28 pb-16 lg:pt-24">
      {/* Base backdrop */}
      <div className="absolute inset-0 -z-30 bg-background" />

      {/* Animated ambient gradient */}
      <motion.div
        className="absolute inset-0 -z-20"
        animate={{
          background: [
            'radial-gradient(circle at 15% 30%, rgba(255, 140, 0, 0.18) 0%, transparent 55%), radial-gradient(circle at 85% 75%, rgba(255, 68, 68, 0.12) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(255, 140, 0, 0.14) 0%, transparent 55%), radial-gradient(circle at 20% 80%, rgba(255, 68, 68, 0.16) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 60%, rgba(255, 140, 0, 0.2) 0%, transparent 55%), radial-gradient(circle at 70% 30%, rgba(255, 68, 68, 0.1) 0%, transparent 50%)',
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
        { top: '70%', left: '5%', size: 2, delay: 1 },
        { top: '85%', left: '90%', size: 3, delay: 1.5 },
        { top: '45%', left: '95%', size: 2, delay: 2 },
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full"
          >
            <Flame className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-bold tracking-widest uppercase">
              Premium Athletics
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease: 'easeOut' }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-2 leading-tight drop-shadow-lg"
          >
            <span className="bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent">
              BATTLE PRO
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: 'easeOut' }}
            className="flex items-center gap-3 justify-center lg:justify-start mb-6"
          >
            <span className="h-px w-8 bg-red-500" />
            <span className="text-sm md:text-base font-semibold tracking-[0.35em] text-gray-300 uppercase">
              Sportswear
            </span>
            <span className="h-px w-8 bg-red-500" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 1.0, ease: 'easeOut' }}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0"
          >
            Where Expectations Meet Quality
          </motion.p>

          {/* Feature Badges */}
          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {['Best Quality', 'Best Price', 'Custom Made'].map((badge, i) => (
              <motion.div
                key={badge}
                custom={i}
                variants={badgeVariants}
                className="glass px-6 py-3 rounded-full border-l-2 border-primary"
              >
                <span className="text-gray-200 font-medium">{badge}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <motion.button
              className="gradient-orange text-background font-bold py-4 px-8 rounded-lg text-lg hover:shadow-xl shadow-lg transition-shadow"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 140, 0, 0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              Visit Shop
            </motion.button>
            <motion.button
              className="glass text-white font-bold py-4 px-8 rounded-lg text-lg border border-white/20 hover:border-red-500/60 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Setup
            </motion.button>
          </motion.div>
        </div>

        {/* Showcase image column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="relative mx-auto max-w-md lg:max-w-full"
          style={{ perspective: 1200 }}
        >
          {/* Animated glow border */}
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

          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
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
          </motion.div>

          {/* Floating badge chips */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{ opacity: { delay: 1.6, duration: 0.6 }, y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.6 } }}
            className="absolute -top-5 -left-5 md:-top-6 md:-left-8 glass px-4 py-3 rounded-2xl flex items-center gap-2 shadow-xl"
          >
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-white whitespace-nowrap">Premium Quality</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ opacity: { delay: 1.9, duration: 0.6 }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.9 } }}
            className="absolute -bottom-5 -right-5 md:-bottom-6 md:-right-8 glass px-4 py-3 rounded-2xl flex items-center gap-2 shadow-xl border-l-2 border-red-500"
          >
            <Flame className="w-5 h-5 text-red-500" />
            <span className="text-sm font-semibold text-white whitespace-nowrap">Custom Tactical Gear</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-primary" />
      </motion.div>
    </section>
  )
}
