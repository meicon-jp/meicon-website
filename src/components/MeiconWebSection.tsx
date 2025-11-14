import AnimatedSection from './AnimatedSection'
import { Monitor, ArrowRight, Heart, Award, RefreshCw, Check } from 'lucide-react'
import Link from 'next/link'

export default function MeiconWebSection() {
  return (
    <section id="meicon-web" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div>
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center justify-center w-18 h-18 sm:w-22 sm:h-22 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 text-white mb-6 sm:mb-8 shadow-lg">
                <Monitor size={40} className="sm:w-12 sm:h-12" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 tracking-tight">
                Meicon-web
              </h2>
              <span className="inline-block px-5 sm:px-7 py-2 sm:py-3 bg-amber-50 border border-amber-200 text-amber-700 rounded-full text-sm sm:text-base md:text-lg font-semibold mb-6 sm:mb-8">
                持続可能Web制作サービス
              </span>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto px-4">
                Webサイト制作を通じてお客様のビジネス課題を解決すると同時に、制作費用の一部がMeiconの地域共創活動の運営費に充てられます。
                企業の成長と社会貢献を両立させる、新しい時代のWeb制作パートナーです。
              </p>
            </div>

            {/* サービスの特徴 */}
            <div className="grid md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
              <div className="bg-white border border-slate-200 p-6 sm:p-7 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group">
                <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="text-amber-600 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">社会貢献型制作</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  制作費用の一部が地域共創活動に充てられ、お客様のビジネス成長と地域社会の発展を同時に実現します。
                </p>
              </div>
              <div className="bg-white border border-slate-200 p-6 sm:p-7 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group">
                <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="text-blue-600 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">高品質な制作</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  モダンな技術とデザインを駆使し、お客様のブランドイメージを最大限に引き出すWebサイトを制作します。
                </p>
              </div>
              <div className="bg-white border border-slate-200 p-6 sm:p-7 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group">
                <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <RefreshCw className="text-emerald-600 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">継続的サポート</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  制作後も継続的なサイト管理とメンテナンスを提供し、長期的なパートナーシップを築きます。
                </p>
              </div>
            </div>

            {/* 料金プラン */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-12 sm:mb-16">
              <div className="bg-white border-2 border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">スタンダードプラン</h3>
                  <div className="flex items-end justify-center mb-4">
                    <span className="text-4xl sm:text-5xl font-bold text-slate-900">¥5,000</span>
                    <span className="text-lg text-slate-600 ml-2 mb-2">/月</span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 mb-4">サイトの管理運営のみ</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-slate-700">サイトの保守・メンテナンス</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-slate-700">セキュリティ更新対応</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-slate-700">コンテンツ更新サポート</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-amber-500 text-slate-900 px-4 py-1 text-xs font-bold rounded-bl-lg">
                  おすすめ
                </div>
                <div className="text-center mb-6 relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">スポンサープラン</h3>
                  <div className="flex items-end justify-center mb-4">
                    <span className="text-4xl sm:text-5xl font-bold">¥12,000</span>
                    <span className="text-lg text-slate-300 ml-2 mb-2">/月</span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-200 mb-4">管理運営 + スポンサー</p>
                </div>
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base">スタンダードプランの全機能</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Meiconイベントでの企業PR</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base">地域共創活動への貢献</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base">社会貢献企業ブランディング</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent pointer-events-none"></div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/meicon-web"
                className="inline-flex items-center px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-base sm:text-lg"
              >
                詳細を見る
                <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
