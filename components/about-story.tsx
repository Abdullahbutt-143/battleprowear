'use client'

import { motion } from 'framer-motion'
import { Flame, Award } from 'lucide-react'
import Image from 'next/image'
import { TiltCard } from './tilt-card'

export function AboutStory() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative order-2 lg:order-1"
        >
          <TiltCard intensity={8} className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/products/tactical-plate-carrier.jpg"
              alt="Battle Pro tactical gear craftsmanship"
              width={900}
              height={900}
              className="w-full h-auto object-cover aspect-square"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </TiltCard>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: [0, -10, 0] }}
            transition={{ opacity: { duration: 0.6 }, y: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }}
            viewport={{ once: true }}
            className="absolute -top-5 -left-5 md:-top-6 md:-left-8 glass px-4 py-3 rounded-2xl flex items-center gap-2 shadow-xl"
          >
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-white whitespace-nowrap">Premium Craftsmanship</span>
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <div className="mb-6 inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full">
            <Flame className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-bold tracking-widest uppercase">
              Who We Are
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Where Expectations Meet Quality
          </h2>

          <p className="text-gray-300 text-lg mb-4 leading-relaxed">
            Battle Pro Sportswear was born from a simple belief: athletes and
            professionals deserve gear that performs as hard as they do. From
            martial arts uniforms to tactical field equipment, every piece we
            make is built to hold up under real pressure.
          </p>
          <p className="text-gray-400 mb-8 leading-relaxed">
            We combine premium materials, precision stitching, and custom-made
            options so every customer — from weekend athletes to professional
            teams — gets gear that fits their exact needs.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {[
              { label: 'Premium Materials', desc: 'Sourced for durability & comfort' },
              { label: 'Custom Made', desc: 'Tailored to your specifications' },
              { label: 'Rigorous QC', desc: 'Every batch inspected before shipping' },
              { label: 'Fast Turnaround', desc: 'Built to keep you on schedule' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border-l-2 border-primary pl-4"
              >
                <h4 className="text-white font-bold mb-1">{item.label}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
