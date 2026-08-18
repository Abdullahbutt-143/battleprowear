'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { TiltCard } from './tilt-card'

const cards = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: ['123 Sports Avenue', 'Athletic City, AC 12345'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+92 323 6909099'],
    href: 'tel:+923236909099',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['support@battlepro.com'],
    href: 'mailto:support@battlepro.com',
    color: 'from-orange-500 to-pink-500',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Mon - Fri: 9AM - 6PM EST'],
    color: 'from-red-500 to-orange-500',
  },
]

export function ContactInfoCards() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => {
          const Icon = card.icon
          const Wrapper = card.href ? 'a' : 'div'

          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <TiltCard intensity={12} className="glass rounded-xl p-6 border border-white/10 h-full group relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <Wrapper {...(card.href ? { href: card.href } : {})} className="relative block">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                    className="mb-4"
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${card.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                  <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                  {card.lines.map((line) => (
                    <p key={line} className="text-gray-400 text-sm">{line}</p>
                  ))}
                </Wrapper>
              </TiltCard>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
