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
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/70 to-slate-800/80 z-10"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 py-20 sm:py-24 md:py-32">
          <div className="text-center">
            <div className="mb-6 sm:mb-8">
              <span className="inline-block px-4 sm:px-5 py-2 sm:py-2.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs sm:text-sm font-semibold rounded-full mb-4 backdrop-blur-sm">
                名古屋発の地域共創コミュニティ
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 leading-tight px-4 tracking-tight">
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent">
                挑戦とつながりを
                <br />
                生み出す場所
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed text-slate-300 px-4">
              名古屋で世代や立場を超えて集まり、地域課題やビジネスプランを話し合い<br className="hidden sm:block" />共創する市民参加型コミュニティ
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/meicon"
                className="inline-flex items-center px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-base sm:text-lg font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                イベント詳細
              </Link>
              <Link
                href="/meicon-web"
                className="inline-flex items-center px-8 sm:px-10 py-4 sm:py-5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white text-base sm:text-lg font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Web制作サービス
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}