'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export function CategoryComingSoon({ name }: { name: string }) {
  return (
    <main className="bg-background text-foreground min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <h1 className="text-3xl font-bold text-white mb-3">{name}</h1>
        <p className="text-gray-400 mb-8">
          We&apos;re still photographing this collection. Check back soon for the full lineup.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Categories
        </Link>
      </motion.div>
    </main>
  )
}
