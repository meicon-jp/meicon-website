import AnimatedSection from '@/components/AnimatedSection'
import { Building2, Calendar, MapPin, Mail, Users, Target } from 'lucide-react'

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - モダンヒーロー */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
        {/* 背景エフェクト */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 pt-28">
          <AnimatedSection className="text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-full mb-8">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <span className="text-amber-400 text-sm font-semibold">Company Profile</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter">
              <span className="block mb-4">地域と企業をつなぐ</span>
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 bg-clip-text text-transparent">
                共創プラットフォーム
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
              地域社会の課題解決と持続可能な発展に貢献する、<br className="hidden sm:block" />
              名古屋発の新しいコミュニティ
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/meicon" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl">
                Meiconについて
              </a>
              <a href="/meicon-web" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl font-bold text-lg transition-all duration-300">
                Meicon-webについて
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ミッション・ビジョン - Bento Box レイアウト */}
      <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16 sm:mb-20">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Mission & Vision
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              私たちの<span className="text-blue-600">想い</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              地域共創を通じて、持続可能な社会の実現を目指します
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
            {/* ミッション - 大きなカード (3列分) */}
            <AnimatedSection className="lg:col-span-3">
              <div className="group relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-10 sm:p-12 h-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    <Target className="text-white w-8 h-8" />
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-black text-white mb-6">
                    ミッション
                  </h3>

                  <p className="text-lg text-blue-50 leading-relaxed mb-8">
                    地域の課題を地域の力で解決し、持続可能なコミュニティを創造する。Webサイト制作と地域共創イベントを通じて、企業と地域社会をつなぎます。
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-white/30 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-white font-medium">地域課題の解決</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-white/30 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-white font-medium">企業と地域の架け橋</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-white/30 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-white font-medium">持続可能な共創モデル</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* ビジョン - 小さなカード (2列分) */}
            <AnimatedSection className="lg:col-span-2">
              <div className="group relative bg-white border-2 border-amber-200 rounded-3xl p-8 sm:p-10 h-full hover:border-amber-300 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                    <Users className="text-white w-8 h-8" />
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6">
                    ビジョン
                  </h3>

                  <p className="text-lg text-slate-600 leading-relaxed">
                    名古屋を起点に、日本全国へ地域共創の輪を広げ、誰もが挑戦できる社会を実現します。ビジネスと社会貢献を両立させる新しいモデルを創ります。
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Company Overview - モダングリッドレイアウト */}
      <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* 背景エフェクト */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16 sm:mb-20">
            <span className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-semibold mb-4">
              Company Info
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight">
              会社<span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">情報</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatedSection>
              <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  <Building2 className="text-white w-7 h-7" />
                </div>
                <h3 className="text-xl font-black text-white mb-3">会社名</h3>
                <p className="text-lg text-slate-300">合同会社Meicon</p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  <Calendar className="text-white w-7 h-7" />
                </div>
                <h3 className="text-xl font-black text-white mb-3">設立</h3>
                <p className="text-lg text-slate-300">2025年9月</p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  <MapPin className="text-white w-7 h-7" />
                </div>
                <h3 className="text-xl font-black text-white mb-3">所在地</h3>
                <p className="text-lg text-slate-300">愛知県名古屋市千種区今池 5-33-2</p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  <Mail className="text-white w-7 h-7" />
                </div>
                <h3 className="text-xl font-black text-white mb-3">連絡先</h3>
                <a href="mailto:meicon@mei-con.jp" className="text-lg text-amber-400 hover:text-amber-300 transition-colors">
                  meicon@mei-con.jp
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  <Users className="text-white w-7 h-7" />
                </div>
                <h3 className="text-xl font-black text-white mb-3">代表者</h3>
                <p className="text-lg text-slate-300">寺崎充来</p>
                <p className="text-lg text-slate-300">芝田悠悟</p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="md:col-span-2 lg:col-span-1">
              <div className="group bg-gradient-to-br from-amber-500/20 to-amber-600/20 backdrop-blur-sm border border-amber-500/30 rounded-3xl p-8 hover:from-amber-500/30 hover:to-amber-600/30 transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  <Target className="text-white w-7 h-7" />
                </div>
                <h3 className="text-xl font-black text-white mb-4">事業内容</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <span className="text-amber-400 mt-1">•</span>
                    <span className="text-lg text-slate-200">地域共創イベント「Meicon」の企画・運営</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-amber-400 mt-1">•</span>
                    <span className="text-lg text-slate-200">Webサイト制作・開発「Meicon-web」</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-amber-400 mt-1">•</span>
                    <span className="text-lg text-slate-200">地域課題解決支援・コンサルティング</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  )
}