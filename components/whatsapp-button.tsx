'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useState } from 'react'

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      {/* Chat Menu */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          scale: isOpen ? 1 : 0.8,
          pointerEvents: isOpen ? 'auto' : 'none'
        }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-20 right-0 glass rounded-lg p-4 w-64 shadow-xl border border-white/10"
      >
        <p className="text-white font-semibold mb-3">Chat with us!</p>
        <p className="text-gray-300 text-sm mb-4">
          Have questions? Our team is here to help you find the perfect gear.
        </p>
        <motion.a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="block w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-2 px-4 rounded-lg text-center text-sm"
        >
          Message on WhatsApp
        </motion.a>
      </motion.div>

      {/* Main Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            '0 0 0 0 rgba(34, 197, 94, 0.7)',
            '0 0 0 10px rgba(34, 197, 94, 0)'
          ]
        }}
        transition={{
          boxShadow: { duration: 2, repeat: Infinity }
        }}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Floating Label */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-6 right-20 glass px-3 py-2 rounded-full text-xs text-white font-medium whitespace-nowrap"
        >
          Need Help?
        </motion.div>
      )}
    </motion.div>
  )
}
