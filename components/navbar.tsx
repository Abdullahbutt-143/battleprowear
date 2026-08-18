'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from './logo'

const categories = [
  'Martial Arts Uniforms',
  'Basketball Uniforms',
  'Boxing Gloves',
  'Mechanics Gloves',
  'Tactical Holsters',
  'Tactical Patches',
  'Tactical Pouches',
  'Magazine Pouches',
  'Fitness Leggings',
  'Tracksuits',
  'Casual Apparel',
  'Polo Shirts'
]

export function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isShopOpen, setIsShopOpen] = useState(false)

  const navLink = (href: string) =>
    pathname === href
      ? 'text-primary font-semibold transition-colors'
      : 'text-gray-300 hover:text-white transition-colors'

  const mobileNavLink = (href: string) =>
    pathname === href
      ? 'block text-primary font-semibold transition-colors py-2'
      : 'block text-gray-300 hover:text-primary transition-colors py-2'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Navbar */}
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'glass' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/">
                <Logo />
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className={navLink('/')}>
                Home
              </Link>

              {/* Shop Dropdown */}
              <div className="relative group">
                <button className="text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                  Shop
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>

                {/* Mega Menu */}
                <div className="absolute left-0 mt-0 w-80 glass rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {categories.map((cat) => (
                        <a
                          key={cat}
                          href={`#${cat}`}
                          className="text-gray-300 hover:text-primary transition-colors text-sm"
                        >
                          {cat}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/about" className={navLink('/about')}>
                About
              </Link>
              <Link href="/contact" className={navLink('/contact')}>
                Contact
              </Link>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-6">
              {/* Social Icons - Desktop */}
              <div className="hidden lg:flex items-center gap-4">
                <motion.a href="#facebook" whileHover={{ scale: 1.2 }} className="text-gray-400 hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.128 22 16.991 22 12z"/></svg>
                </motion.a>
                <motion.a href="#instagram" whileHover={{ scale: 1.2 }} className="text-gray-400 hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
                </motion.a>
                <motion.a href="#twitter" whileHover={{ scale: 1.2 }} className="text-gray-400 hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.003 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
                </motion.a>
              </div>

              {/* Cart Icon */}
              <motion.button
                className="relative p-2 text-gray-300 hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-primary text-background text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden p-2 text-gray-300 hover:text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed top-16 left-0 right-0 glass md:hidden z-40 ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : -20,
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="px-4 py-4 space-y-3">
          <Link href="/" className={mobileNavLink('/')}>
            Home
          </Link>
          <button
            onClick={() => setIsShopOpen(!isShopOpen)}
            className="w-full text-left text-gray-300 hover:text-primary transition-colors py-2 flex items-center justify-between"
          >
            Shop
            <svg
              className={`w-4 h-4 transition-transform ${isShopOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
          {isShopOpen && (
            <div className="pl-4 space-y-2">
              {categories.slice(0, 6).map((cat) => (
                <a
                  key={cat}
                  href={`#${cat}`}
                  className="block text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  {cat}
                </a>
              ))}
              <button className="text-sm text-gray-400 hover:text-primary transition-colors">
                View All →
              </button>
            </div>
          )}
          <Link href="/about" className={mobileNavLink('/about')}>
            About
          </Link>
          <Link href="/contact" className={mobileNavLink('/contact')}>
            Contact
          </Link>
        </div>
      </motion.div>
    </>
  )
}
