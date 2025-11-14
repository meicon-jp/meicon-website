import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Calendar, Code } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <Image
                src="/images/icon.png"
                alt="Meicon LLC Logo"
                width={48}
                height={48}
                className="group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-3xl font-black text-white tracking-tight">Meicon</span>
            </Link>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed max-w-md">
              ビジネスと社会貢献の新しいカタチ。<br />
              地域共創で持続可能な未来を創る。
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:meicon@mei-con.jp" className="hover:text-blue-400 transition-colors">
                  meicon@mei-con.jp
                </a>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>愛知県名古屋市千種区今池 5-33-2</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-black text-white mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mr-3"></span>
              Services
            </h3>
            <nav className="space-y-3">
              <Link href="/meicon" className="group flex items-center text-slate-300 hover:text-blue-400 transition-colors">
                <Calendar className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                <span>Event</span>
              </Link>
              <Link href="/meicon-web" className="group flex items-center text-slate-300 hover:text-blue-400 transition-colors">
                <Code className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                <span>Web Design</span>
              </Link>
              <Link href="/portfolio" className="group flex items-center text-slate-300 hover:text-blue-400 transition-colors">
                <div className="w-4 h-4 mr-2 opacity-0 flex-shrink-0"></div>
                <span>Portfolio</span>
              </Link>
            </nav>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-black text-white mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mr-3"></span>
              Company
            </h3>
            <nav className="space-y-3">
              <Link href="/about" className="block text-slate-300 hover:text-blue-400 transition-colors">
                About
              </Link>
              <Link href="/news" className="block text-slate-300 hover:text-blue-400 transition-colors">
                News
              </Link>
              <Link href="/contact" className="block text-slate-300 hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="text-center">
            <p className="text-sm text-slate-400">
              &copy; 2025 Meicon LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
