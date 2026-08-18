'use client'

import { motion } from 'framer-motion'
import { MessageCircle, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export function ContactHero() {
  return (
    <section className="relative isolate min-h-[50vh] flex items-center overflow-hidden pt-28 pb-16">
      {/* Base backdrop */}
      <div className="absolute inset-0 -z-30 bg-background" />

      {/* Animated ambient gradient */}
      <motion.div
        className="absolute inset-0 -z-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 40%, rgba(255, 140, 0, 0.18) 0%, transparent 55%), radial-gradient(circle at 80% 60%, rgba(255, 68, 68, 0.12) 0%, transparent 50%)',
            'radial-gradient(circle at 70% 30%, rgba(255, 140, 0, 0.14) 0%, transparent 55%), radial-gradient(circle at 30% 70%, rgba(255, 68, 68, 0.16) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 40%, rgba(255, 140, 0, 0.18) 0%, transparent 55%), radial-gradient(circle at 80% 60%, rgba(255, 68, 68, 0.12) 0%, transparent 50%)',
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
        { top: '20%', left: '10%', size: 3, delay: 0 },
        { top: '30%', left: '90%', size: 2, delay: 0.5 },
        { top: '80%', left: '15%', size: 2, delay: 1 },
        { top: '70%', left: '85%', size: 3, delay: 1.5 },
      ].map((p, i) => (
        <motion.span
          key={i}
          className="absolute -z-10 rounded-full bg-primary/60 blur-[1px]"
          style={{ top: p.top, left: p.left, width: p.size * 4, height: p.size * 4 }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center justify-center gap-1 text-sm text-gray-400"
        >
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-primary">Contact Us</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-6 inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full"
        >
          <MessageCircle className="w-4 h-4 text-primary" />
          <span className="text-primary text-sm font-bold tracking-widest uppercase">
            Get In Touch
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg"
        >
          <span className="bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent">
            CONTACT US
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
          className="text-xl text-gray-300 max-w-xl mx-auto"
        >
          Questions, custom orders, or bulk pricing — our team is ready to help.
        </motion.p>
      </div>
    </section>
  )
}
