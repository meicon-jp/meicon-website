'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/icon.png"
                alt="Meicon LLC Logo"
                width={40}
                height={40}
                className="mt-1"
              />
              <span className="text-2xl font-bold text-white">Meicon</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/meicon" className="text-white hover:text-blue-300 transition-colors font-medium">
              イベント概要
            </Link>
            <Link href="/meicon-web" className="text-white hover:text-blue-300 transition-colors font-medium">
              Web制作
            </Link>
            <Link href="/portfolio" className="text-white hover:text-blue-300 transition-colors font-medium">
              実績
            </Link>
            <Link href="/news" className="text-white hover:text-blue-300 transition-colors font-medium">
              お知らせ
            </Link>
            <Link href="/about" className="text-white hover:text-blue-300 transition-colors font-medium">
              会社概要
            </Link>
            <Link href="/contact" className="text-white hover:text-blue-300 transition-colors font-medium">
              お問い合わせ
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            aria-label="メニューを開く"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-black/50 backdrop-blur-sm border-t border-white/20`}
      >
        <nav className="px-4 py-4 space-y-4">
            <Link
              href="/meicon"
              onClick={closeMenu}
              className="block text-white hover:text-blue-300 transition-colors font-medium py-2">
              イベント概要
            </Link>
            <Link href="/meicon-web" onClick={closeMenu} className="block text-white hover:text-blue-300 transition-colors font-medium">
              Web制作
            </Link>
            <Link href="/portfolio" onClick={closeMenu} className="block text-white hover:text-blue-300 transition-colors font-medium">
              実績
            </Link>
            <Link href="/news" onClick={closeMenu} className="block text-white hover:text-blue-300 transition-colors font-medium">
              お知らせ
            </Link>
            <Link href="/about" onClick={closeMenu} className="block text-white hover:text-blue-300 transition-colors font-medium">
              会社概要
            </Link>
            <Link href="/contact" onClick={closeMenu} className="block text-white hover:text-blue-300 transition-colors font-medium">
              お問い合わせ
            </Link>
        </nav>
      </div>
    </header>
  )
}