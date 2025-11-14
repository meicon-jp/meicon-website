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
      {/* Header Bar */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-slate-900/40 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group" onClick={closeMenu}>
              <Image
                src="/images/icon.png"
                alt="Meicon LLC Logo"
                width={40}
                height={40}
                className="group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-xl sm:text-2xl font-black text-white tracking-tight">Meicon</span>
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
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

      {/* Full Screen Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 overflow-hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
            onClick={closeMenu}
          >
            {/* Background effects */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl" />
          </div>

          {/* Menu Content */}
          <div className="relative h-full flex flex-col">
            {/* Navigation */}
            <div className="flex-1 flex items-center justify-center overflow-y-auto pt-20">
              <nav className="w-full max-w-2xl px-6 py-8">
                <div className="space-y-4">
                  <Link
                    href="/meicon"
                    onClick={closeMenu}
                    className="block text-center px-6 py-4 text-white hover:text-blue-400 text-3xl sm:text-4xl md:text-5xl font-black transition-colors duration-300"
                  >
                    Event
                  </Link>
                  <Link
                    href="/meicon-web"
                    onClick={closeMenu}
                    className="block text-center px-6 py-4 text-white hover:text-purple-400 text-3xl sm:text-4xl md:text-5xl font-black transition-colors duration-300"
                  >
                    Web Design
                  </Link>
                  <Link
                    href="/portfolio"
                    onClick={closeMenu}
                    className="block text-center px-6 py-4 text-white hover:text-emerald-400 text-3xl sm:text-4xl md:text-5xl font-black transition-colors duration-300"
                  >
                    Portfolio
                  </Link>
                  <Link
                    href="/news"
                    onClick={closeMenu}
                    className="block text-center px-6 py-4 text-white hover:text-amber-400 text-3xl sm:text-4xl md:text-5xl font-black transition-colors duration-300"
                  >
                    News
                  </Link>
                  <Link
                    href="/about"
                    onClick={closeMenu}
                    className="block text-center px-6 py-4 text-white hover:text-pink-400 text-3xl sm:text-4xl md:text-5xl font-black transition-colors duration-300"
                  >
                    About
                  </Link>

                  <div className="pt-8 text-center">
                    <Link
                      href="/contact"
                      onClick={closeMenu}
                      className="inline-block px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-2xl sm:text-3xl font-black rounded-2xl shadow-2xl transition-all duration-300"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </nav>
            </div>

            {/* Footer */}
            <div className="flex-shrink-0 py-6 text-center">
              <p className="text-slate-400 text-sm">
                &copy; 2025 Meicon LLC. All rights reserved.
              </p>
            </div>
          </div>

          {/* Close Button - Top Right */}
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="閉じる"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
      )}
    </>
  )
}
