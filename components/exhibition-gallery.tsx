'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'

const photos = [
  { src: '/exhibition/exhibition-9.jpg', alt: 'Battle Pro booth with patches, tees, caps and gloves' },
  { src: '/exhibition/exhibition-5.jpg', alt: 'Battle Pro PVC patch wall' },
  { src: '/exhibition/exhibition-1.jpg', alt: 'Italian National Softair Fair sign' },
  { src: '/exhibition/exhibition-2.jpg', alt: 'Battle Pro at the Italian National Softair Fair' },
  { src: '/exhibition/exhibition-3.jpg', alt: 'Battle Pro at the Italian National Softair Fair' },
  { src: '/exhibition/exhibition-4.jpg', alt: 'Battle Pro at the Italian National Softair Fair' },
  { src: '/exhibition/exhibition-6.jpg', alt: 'Battle Pro at the Italian National Softair Fair' },
  { src: '/exhibition/exhibition-7.jpg', alt: 'Battle Pro at the Italian National Softair Fair' },
  { src: '/exhibition/exhibition-8.jpg', alt: 'Battle Pro at the Italian National Softair Fair' },
]

export function ExhibitionGallery() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section className="py-12 pb-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((p, i) => (
          <motion.button
            key={p.src}
            type="button"
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-xl"
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute top-4 right-4 p-2 text-white hover:text-primary"
              onClick={() => setActive(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative w-full max-w-5xl h-[80vh]" onClick={(e) => e.stopPropagation()}>
              <Image
                src={photos[active].src}
                alt={photos[active].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
