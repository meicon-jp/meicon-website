import AnimatedSection from './AnimatedSection'
import { Monitor, Circle, ArrowRight, Heart, Award, RefreshCw } from 'lucide-react'
import Link from 'next/link'

export default function MeiconWebSection() {
  return (
    <section id="meicon-web" className="py-12 sm:py-16 md:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div>
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-purple-100 text-purple-600 mb-6 sm:mb-8">
                <Monitor size={32} className="sm:w-10 sm:h-10" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6 px-4">
                Meicon-web
              </h2>
              <span className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 bg-purple-100 text-purple-700 rounded-full text-sm sm:text-base md:text-lg font-medium mb-4 sm:mb-6">
                持続可能Web制作
              </span>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto px-4">
                Webサイト制作を通じてお客様の課題解決に貢献すると同時に、制作費用の一部がMeiconの地域共創活動の運営費に充てられます。
                あなたのビジネスの成長と地域社会の発展を同時に支援する、新しい形のWeb制作サービスです。
              </p>
            </div>

            {/* サービスの特徴 */}
            <div className="grid md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-10 sm:mb-12">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 sm:p-6 md:p-8 rounded-xl text-center">
                <Heart className="text-purple-600 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-3 sm:mb-4">社会貢献型制作</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  制作費用の一部が地域共創活動に充てられ、お客様のビジネス成長と地域社会の発展を同時に実現します。
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 sm:p-6 md:p-8 rounded-xl text-center">
                <Award className="text-blue-600 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-3 sm:mb-4">高品質な制作</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  モダンな技術とデザインを駆使し、お客様のブランドイメージを最大限に引き出すWebサイトを制作します。
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 sm:p-6 md:p-8 rounded-xl text-center">
                <RefreshCw className="text-green-600 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-3 sm:mb-4">継続的サポート</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  制作後も継続的なサイト管理とメンテナンスを提供し、長期的なパートナーシップを築きます。
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
              <div className="bg-slate-50 p-6 sm:p-8 md:p-12 rounded-lg bg-white rounded-xl shadow-lg">
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-6 sm:mb-8 text-center">
                  差別化ポイント
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="p-4 sm:p-5 md:p-6 bg-blue-50 rounded-xl">
                    <h4 className="text-base sm:text-lg font-bold text-slate-800 mb-2">イベント連携</h4>
                    <p className="text-sm sm:text-base text-slate-600">
                      従来のWeb制作会社とは異なり、Meiconイベントと連携した宣伝効果が期待できます
                    </p>
                  </div>
                  <div className="p-4 sm:p-5 md:p-6 bg-green-50 rounded-xl">
                    <h4 className="text-base sm:text-lg font-bold text-slate-800 mb-2">AIとの差別化</h4>
                    <p className="text-sm sm:text-base text-slate-600">
                      AIで自作する場合と違い、継続的な運営サポートと地域コミュニティでの宣伝効果があります
                    </p>
                  </div>
                  <div className="p-4 sm:p-5 md:p-6 bg-yellow-50 rounded-xl">
                    <h4 className="text-base sm:text-lg font-bold text-slate-800 mb-2">社会貢献</h4>
                    <p className="text-sm sm:text-base text-slate-600">
                      制作費用が地域課題解決活動に還元される、社会的意義のあるWeb制作サービスです
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 sm:p-8 md:p-12 rounded-lg bg-white rounded-xl shadow-lg">
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-4 sm:mb-6">
                  ご依頼メリット
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start">
                    <Circle className="text-green-600 w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 flex-shrink-0 fill-current mt-1" />
                    <div>
                      <span className="text-base sm:text-lg font-semibold text-slate-800 block">Meiconでの宣伝・PR</span>
                      <span className="text-sm sm:text-base text-slate-600">Meiconイベントで、スポンサー企業として紹介され、地域での認知度向上が期待できます。</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Circle className="text-green-600 w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 flex-shrink-0 fill-current mt-1" />
                    <div>
                      <span className="text-base sm:text-lg font-semibold text-slate-800 block">継続的なサイト管理</span>
                      <span className="text-sm sm:text-base text-slate-600">制作後も継続的なメンテナンス、セキュリティ更新、コンテンツ更新のサポートを提供します。</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Circle className="text-green-600 w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 flex-shrink-0 fill-current mt-1" />
                    <div>
                      <span className="text-base sm:text-lg font-semibold text-slate-800 block">社会貢献企業イメージ</span>
                      <span className="text-sm sm:text-base text-slate-600">地域共創活動を支援することで、社会に貢献する企業としてのブランドイメージを向上させます。</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8 sm:mt-10 md:mt-12">
              <Link
                href="/meicon-web"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-sm sm:text-base"
              >
                詳細を見る
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
