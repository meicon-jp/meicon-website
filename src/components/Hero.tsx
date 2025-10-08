import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/nagoya.jpg"
          alt="名古屋の街並み"
          fill
          className="object-cover animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 bg-black/70 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 py-20 sm:py-24 md:py-32">
          <div className="text-center">
            <div className="mb-6 sm:mb-8">
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-700 text-white text-xs sm:text-sm font-medium rounded-full mb-4">
                名古屋発の地域共創コミュニティ
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight text-white px-4">
              挑戦とつながりを
              <br />
              生み出す場所
            </h1>

            <p className="text-base sm:text-lg md:text-xl mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed text-slate-200 px-4">
              名古屋で世代や立場を超えて集まり、地域課題やビジネスプランを話し合い<br />共創する市民参加型コミュニティ
            </p>

            <div>
              <Link
                href="/meicon"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                イベント詳細
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}