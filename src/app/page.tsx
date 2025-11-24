import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/nagoya.jpg"
            alt="名古屋の街並み"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <p className="text-sm text-gray-400 tracking-widest mb-6 animate-fadeIn">
              NAGOYA CO-CREATION COMMUNITY
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fadeIn animation-delay-100">
              地域とビジネスを
              <br />
              つなぐ共創の場
            </h1>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed animate-fadeIn animation-delay-200">
              名古屋発、持続可能な共創エコシステム。
              <br />
              ビジネス成長と社会貢献を同時に実現します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn animation-delay-300">
              <Link
                href="/meicon"
                className="inline-flex items-center px-8 py-4 bg-white text-black font-medium hover:bg-gray-200 transition-all duration-500"
              >
                イベント詳細
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-white text-white font-medium hover:bg-white hover:text-black transition-all duration-500"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Meicon-web Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pc-user.jpg"
            alt="Meicon-web"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm text-gray-400 tracking-widest mb-4">MEICON-WEB</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              社会貢献型
              <br />
              Web制作サービス
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              高品質なWebサイト制作を通じて、ビジネスの成長と地域社会への貢献を同時に実現します。
              制作費の一部は地域共創活動の運営費として活用され、イベントでの企業PR機会も提供されます。
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-white text-black text-xs font-bold flex items-center justify-center mr-4 mt-0.5">
                  1
                </div>
                <p className="text-gray-300">高品質なWebサイト制作</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-white text-black text-xs font-bold flex items-center justify-center mr-4 mt-0.5">
                  2
                </div>
                <p className="text-gray-300">制作費の一部が地域活動へ</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-white text-black text-xs font-bold flex items-center justify-center mr-4 mt-0.5">
                  3
                </div>
                <p className="text-gray-300">イベントでの企業PR機会</p>
              </div>
            </div>
            <Link
              href="/meicon-web"
              className="inline-flex items-center px-8 py-4 bg-white text-black font-medium hover:bg-gray-200 transition-all duration-500"
            >
              詳細を見る
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-400 tracking-widest mb-4">WHY MEICON</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              選ばれる理由
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="border-l-2 border-gray-700 pl-6 py-4">
              <div className="inline-block px-3 py-1 bg-white text-black text-sm font-bold mb-4">
                01
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                ビジネスと社会貢献の両立
              </h3>
              <p className="text-gray-400 leading-relaxed">
                制作費の一部が地域活動の運営費に。ビジネス成長と社会貢献を同時に実現する新しいモデルです。
              </p>
            </div>

            {/* Feature 2 */}
            <div className="border-l-2 border-gray-700 pl-6 py-4">
              <div className="inline-block px-3 py-1 bg-white text-black text-sm font-bold mb-4">
                02
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                多様なネットワーク
              </h3>
              <p className="text-gray-400 leading-relaxed">
                学生・社会人・起業家など様々な立場の方々との出会いが、新しいビジネス機会を生み出します。
              </p>
            </div>

            {/* Feature 3 */}
            <div className="border-l-2 border-gray-700 pl-6 py-4">
              <div className="inline-block px-3 py-1 bg-white text-black text-sm font-bold mb-4">
                03
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                企業PR機会の提供
              </h3>
              <p className="text-gray-400 leading-relaxed">
                イベントでの企業活動紹介により、地域での認知度向上とブランドイメージの向上を実現します。
              </p>
            </div>

            {/* Feature 4 */}
            <div className="border-l-2 border-gray-700 pl-6 py-4">
              <div className="inline-block px-3 py-1 bg-white text-black text-sm font-bold mb-4">
                04
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                持続可能な循環モデル
              </h3>
              <p className="text-gray-400 leading-relaxed">
                一過性ではなく、長期的に続く関係性と価値創造を目指す持続可能なエコシステムです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {/* <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-400 tracking-widest mb-4">GALLERY</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              実績
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="group relative aspect-square overflow-hidden border border-gray-800">
                <Image
                  src="/images/nagoya.jpg"
                  alt={`実績 ${item}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-white hover:text-gray-400 transition-colors link-hover"
            >
              すべての実績を見る
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            お気軽にご相談ください
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            イベントへの参加やWeb制作のご依頼など、
            <br className="hidden sm:block" />
            まずはお気軽にお問い合わせください。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-4 bg-white text-black font-medium hover:bg-gray-200 transition-all duration-500"
          >
            お問い合わせ
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
