import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-10 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6 sm:mb-8">
          {/* Logo and Description */}
          <div className="mb-6 sm:mb-8 md:mb-0">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Meicon LLC.</h3>
            <p className="text-sm sm:text-base text-gray-300">社会を変えるアイデアを形に</p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-8 text-sm sm:text-base">
            <Link href="/meicon" className="text-gray-300 hover:text-white transition-colors">
              イベント概要
            </Link>
            <Link href="/meicon-web" className="text-gray-300 hover:text-white transition-colors">
              Web制作
            </Link>
            <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">
              実績
            </Link>
            <Link href="/news" className="text-gray-300 hover:text-white transition-colors">
              お知らせ
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              会社概要
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              お問い合わせ
            </Link>
          </nav>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 pt-5 sm:pt-6 text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            &copy; 2025 Meicon LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}