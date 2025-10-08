import { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import { Shield, RefreshCw, Heart, Award, Star, Tent, Bot, Sprout } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Meicon-web - 持続可能Web制作 | Meicon LLC.',
  description: 'Webサイト制作を通じてお客様の課題解決に貢献すると同時に、制作費用の一部がMeiconの地域共創活動の運営費に充てられる持続可能なWeb制作サービス。',
}

export default function MeiconWebPage() {
  return (
    <main className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="py-16 sm:py-20 md:py-24 pt-20 sm:pt-24 md:pt-28 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Meicon-web
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-100 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              持続可能Web制作
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 md:p-8 max-w-4xl mx-auto">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Webサイト制作を通じてお客様の課題解決に貢献すると同時に、制作費用の一部がMeiconの地域共創活動の運営費に充てられます。
                あなたのビジネスの成長と地域社会の発展を同時に支援する、新しい形のWeb制作サービスです。
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* サービスの特徴 */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4 sm:mb-6 px-4">サービスの特徴</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4">
              Meicon-webが選ばれる理由
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 sm:p-6 md:p-8 rounded-xl text-center">
                <Heart className="text-purple-600 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-3 sm:mb-4">社会貢献型制作</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  制作費用の一部が地域共創活動に充てられ、お客様のビジネス成長と地域社会の発展を同時に実現します。
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 sm:p-6 md:p-8 rounded-xl text-center">
                <Award className="text-blue-600 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-3 sm:mb-4">高品質な制作</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  モダンな技術とデザインを駆使し、お客様のブランドイメージを最大限に引き出すWebサイトを制作します。
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 sm:p-6 md:p-8 rounded-xl text-center">
                <RefreshCw className="text-green-600 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-3 sm:mb-4">継続的サポート</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  制作後も継続的なサイト管理とメンテナンスを提供し、長期的なパートナーシップを築きます。
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 差別化ポイント */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4 sm:mb-6 px-4">
                Meicon-webの差別化ポイント
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
                従来のWeb制作やAI制作との違い
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            <AnimatedSection>
              <div className="bg-blue-50 p-5 sm:p-6 md:p-8 rounded-xl text-center">
                <div className="mb-3 sm:mb-4 flex justify-center"><Tent size={32} className="text-blue-600 sm:w-10 sm:h-10 md:w-12 md:h-12" /></div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3">イベント連携</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  従来のWeb制作会社とは異なり、Meiconイベントと連携した宣伝効果が期待できます
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-green-50 p-5 sm:p-6 md:p-8 rounded-xl text-center">
                <div className="mb-3 sm:mb-4 flex justify-center"><Bot size={32} className="text-green-600 sm:w-10 sm:h-10 md:w-12 md:h-12" /></div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3">AIとの差別化</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  AIで自作する場合と違い、継続的な運営サポートと地域コミュニティでの宣伝効果があります
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-yellow-50 p-5 sm:p-6 md:p-8 rounded-xl text-center">
                <div className="mb-3 sm:mb-4 flex justify-center"><Sprout size={32} className="text-yellow-600 sm:w-10 sm:h-10 md:w-12 md:h-12" /></div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3">社会貢献</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  制作費用が地域課題解決活動に還元される、社会的意義のあるWeb制作サービスです
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 料金体系 */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4 sm:mb-6 px-4">料金体系</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4">
              透明性のある料金設定で安心してご依頼いただけます
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 sm:p-6 md:p-8 rounded-xl text-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-4 sm:mb-6">制作費用</h3>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 mb-3 sm:mb-4">5万円〜15万円</div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  プランとページ数に応じた制作費用。追加料金は事前にご相談し、明確にお伝えします。
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 sm:p-6 md:p-8 rounded-xl text-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-4 sm:mb-6">スポンサー費<small>（管理運営費込み）</small></h3>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-3 sm:mb-4">2万円/月</div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Meiconイベントのスポンサーとして、継続的な地域共創活動をサポートいただきます。
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ご依頼メリット */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4 sm:mb-6 px-4">ご依頼メリット</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4">
              Meicon-webにご依頼いただくことで得られるメリット
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            <AnimatedSection>
              <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-sm border border-slate-200">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Star className="text-purple-600 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-3 sm:mb-4 text-center">Meiconでの宣伝・PR</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-center">
                  Meiconイベントで、スポンサー企業として紹介され、地域での認知度向上が期待できます。
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-sm border border-slate-200">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Shield className="text-green-600 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-3 sm:mb-4 text-center">継続的なサイト管理</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-center">
                  制作後も継続的なメンテナンス、セキュリティ更新、コンテンツ更新のサポートを提供します。
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-sm border border-slate-200">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Heart className="text-blue-600 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-3 sm:mb-4 text-center">社会貢献企業イメージ</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-center">
                  地域共創活動を支援することで、社会に貢献する企業としてのブランドイメージを向上させます。
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 制作の流れ */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4 sm:mb-6 px-4">制作の流れ</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4">
              お問い合わせから公開まで、スムーズな制作プロセス
            </p>
          </AnimatedSection>

          <div className="space-y-5 sm:space-y-6 md:space-y-8">
            <AnimatedSection>
              <div className="flex items-start space-x-3 sm:space-x-4 md:space-x-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                  1
                </div>
                <div className="bg-slate-50 p-4 sm:p-5 md:p-6 rounded-xl flex-grow">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-800 mb-2">ヒアリング・企画提案</h3>
                  <p className="text-sm sm:text-base text-slate-600">お客様のビジネス目標やご要望を詳しくお聞きし、最適なWebサイトの企画をご提案します。</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="flex items-start space-x-3 sm:space-x-4 md:space-x-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                  2
                </div>
                <div className="bg-slate-50 p-4 sm:p-5 md:p-6 rounded-xl flex-grow">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-800 mb-2">デザイン・設計</h3>
                  <p className="text-sm sm:text-base text-slate-600">ワイヤーフレーム作成からデザインカンプまで、お客様と相談しながら進めていきます。</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="flex items-start space-x-3 sm:space-x-4 md:space-x-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                  3
                </div>
                <div className="bg-slate-50 p-4 sm:p-5 md:p-6 rounded-xl flex-grow">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-800 mb-2">開発・実装</h3>
                  <p className="text-sm sm:text-base text-slate-600">最新の技術を使用してWebサイトを構築し、テスト環境でお客様に確認いただきます。</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="flex items-start space-x-3 sm:space-x-4 md:space-x-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                  4
                </div>
                <div className="bg-slate-50 p-4 sm:p-5 md:p-6 rounded-xl flex-grow">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-800 mb-2">公開・運用開始</h3>
                  <p className="text-sm sm:text-base text-slate-600">最終確認後、本番環境への公開を行い、継続的な運用サポートを開始します。</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 px-4">Webサイト制作のご相談</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12">
              <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
                お客様のビジネス目標に合わせたWebサイト制作を通じて、<br className="hidden sm:block" />
                地域社会の発展にも貢献しませんか？<br className="hidden sm:block" />
                まずはお気軽にご相談ください。
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-sm sm:text-base"
              >
                制作のご相談・お見積り
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
