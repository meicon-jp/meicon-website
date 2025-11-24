'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      {/* Header Bar - Transparent */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group" onClick={closeMenu}>
              <Image
                src="/images/icon.png"
                alt="Meicon LLC Logo"
                width={36}
                height={36}
                className="group-hover:opacity-80 transition-opacity duration-300"
              />
              <span className="text-lg font-light text-white tracking-widest">Meicon</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/meicon"
                className="text-sm text-gray-300 hover:text-white transition-colors tracking-wider"
              >
                Event
              </Link>
              <Link
                href="/meicon-web"
                className="text-sm text-gray-300 hover:text-white transition-colors tracking-wider"
              >
                Web
              </Link>
                            <Link
                href="/about"
                className="text-sm text-gray-300 hover:text-white transition-colors tracking-wider"
              >
                About
              </Link>
              <Link
                href="/portfolio"
                className="text-sm text-gray-300 hover:text-white transition-colors tracking-wider"
              >
                Portfolio
              </Link>
              <Link
                href="/news"
                className="text-sm text-gray-300 hover:text-white transition-colors tracking-wider"
              >
                News
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-300 hover:text-white transition-colors tracking-wider"
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="メニュー"
            >
              <div className="w-6 flex flex-col items-center justify-center">
                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1.5'
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'mt-1.5'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full Screen Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 overflow-hidden md:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black"
            onClick={closeMenu}
          />

          {/* Menu Content */}
          <div className="relative h-full flex flex-col">
            {/* Navigation */}
            <div className="flex-1 flex items-center justify-center overflow-y-auto pt-20">
              <nav className="w-full max-w-md px-6 py-8">
                <div className="space-y-6">
                  <Link
                    href="/meicon"
                    onClick={closeMenu}
                    className="block text-center text-white hover:text-gray-400 text-2xl font-light tracking-widest transition-colors duration-300"
                  >
                    Event
                  </Link>
                  <Link
                    href="/meicon-web"
                    onClick={closeMenu}
                    className="block text-center text-white hover:text-gray-400 text-2xl font-light tracking-widest transition-colors duration-300"
                  >
                    Web
                  </Link>
                                    <Link
                    href="/about"
                    onClick={closeMenu}
                    className="block text-center text-white hover:text-gray-400 text-2xl font-light tracking-widest transition-colors duration-300"
                  >
                    About
                  </Link>
                  <Link
                    href="/portfolio"
                    onClick={closeMenu}
                    className="block text-center text-white hover:text-gray-400 text-2xl font-light tracking-widest transition-colors duration-300"
                  >
          
                    Portfolio
                  </Link>
                  <Link
                    href="/news"
                    onClick={closeMenu}
                    className="block text-center text-white hover:text-gray-400 text-2xl font-light tracking-widest transition-colors duration-300"
                  >
                    News
                  </Link>
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="block text-center text-white hover:text-gray-400 text-2xl font-light tracking-widest transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
