import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">合同会社Meicon</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>〒464-0850</p>
              <p>愛知県名古屋市千種区今池 5-33-2</p>
              <p className="pt-2">
                <a
                  href="mailto:meicon@mei-con.jp"
                  className="hover:text-white transition-colors"
                >
                  meicon@mei-con.jp
                </a>
              </p>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Menu</h3>
            <nav className="space-y-3">
              <Link
                href="/"
                className="block text-sm text-gray-400 hover:text-white transition-colors"
              >
                Top
              </Link>
              <Link
                href="/meicon"
                className="block text-sm text-gray-400 hover:text-white transition-colors"
              >
                Event
              </Link>
              <Link
                href="/meicon-web"
                className="block text-sm text-gray-400 hover:text-white transition-colors"
              >
                Web
              </Link>
                            <Link
                href="/about"
                className="block text-sm text-gray-400 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/portfolio"
                className="block text-sm text-gray-400 hover:text-white transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/news"
                className="block text-sm text-gray-400 hover:text-white transition-colors"
              >
                News
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">SNS</h3>
            <nav className="space-y-3">
              <a
                href="https://www.instagram.com/meicon0911/"
                className="block text-sm text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-sm text-gray-500 text-center">
            &copy; 2025 Meicon LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
