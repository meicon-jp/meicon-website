import { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import { Users, Circle, Calendar, MapPin, Clock, Target, Heart, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: '合同会社Meicon（メイコン） - 地域共創イベント',
  description: '名古屋で世代や立場を超えて集まり、地域課題やビジネスプランを話し合い共創する市民参加型コミュニティイベント「Meicon（メイコン）」の詳細情報。',
}

export default function MeiconPage() {
  return (
    <main className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="py-16 pt-24 sm:py-20 sm:pt-28 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Meicon
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              地域共創イベント
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 md:p-8 max-w-4xl mx-auto">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                名古屋で世代や立場を超えて集まり、地域課題やビジネスプランを話し合い共創する市民参加型コミュニティイベントです。
                起業家、NPO、社会課題解決に取り組む団体など、様々な背景を持つ方々が集まり、アイデアを共有し、協力関係を築く場を提供しています。
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* イベント概要 */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4 sm:mb-6 px-4">イベント概要</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto mb-4 px-4">
              Meicon（メイコン）は地域の課題解決とビジネス創出を目的とした共創プラットフォームです
            </p>
            <div className="inline-block bg-yellow-100 border border-yellow-300 text-yellow-800 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg mx-4">
              <p className="text-sm sm:text-base font-semibold">現在、開催に向けて準備中です</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <AnimatedSection>
              <div className="bg-blue-50 p-6 sm:p-8 rounded-xl text-center">
                <Calendar className="text-blue-600 w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-1.5 sm:mb-2">開催頻度</h3>
                <p className="text-sm sm:text-base text-slate-600">2ヶ月に1回の定期開催</p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-blue-50 p-6 sm:p-8 rounded-xl text-center">
                <Clock className="text-blue-600 w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-1.5 sm:mb-2">所要時間</h3>
                <p className="text-sm sm:text-base text-slate-600">3時間程度</p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-blue-50 p-6 sm:p-8 rounded-xl text-center">
                <MapPin className="text-blue-600 w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-1.5 sm:mb-2">開催場所</h3>
                <p className="text-sm sm:text-base text-slate-600">名古屋市内</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 参加対象者 */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4 sm:mb-6 px-4">参加対象者</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4">
              以下のような方々の参加をお待ちしています
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            <AnimatedSection>
              <div className="bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-slate-200 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Target className="text-blue-600 w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-1.5 sm:mb-2">ビジネスプラン保有者</h3>
                <p className="text-xs sm:text-sm text-slate-600">事業アイデアを持つ方</p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-slate-200 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Heart className="text-green-600 w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-1.5 sm:mb-2">社会課題解決団体</h3>
                <p className="text-xs sm:text-sm text-slate-600">地域課題に取り組む団体</p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-slate-200 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Users className="text-purple-600 w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-1.5 sm:mb-2">NPO法人</h3>
                <p className="text-xs sm:text-sm text-slate-600">非営利活動法人の方々</p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-slate-200 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Lightbulb className="text-orange-600 w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-1.5 sm:mb-2">起業予定者</h3>
                <p className="text-xs sm:text-sm text-slate-600">これから起業を考える方</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 得られる価値 */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4 sm:mb-6 px-4">得られる価値</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4">
              Meicon（メイコン）に参加することで得られるメリット
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 rounded-xl">
                <Circle className="text-blue-600 w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 fill-current" />
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-3 sm:mb-4">発表・宣伝の場</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  あなたのビジネスプランや活動を多くの人に知ってもらう機会を提供します。プレゼンテーションを通じて認知度を向上させることができます。
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 sm:p-8 rounded-xl">
                <Circle className="text-green-600 w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 fill-current" />
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-3 sm:mb-4">フィードバック・意見</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  様々な業界・分野の専門家や参加者から貴重なフィードバックを得ることができ、アイデアの改善や新しい視点を獲得できます。
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 sm:p-8 rounded-xl">
                <Circle className="text-purple-600 w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 fill-current" />
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-3 sm:mb-4">協力者とのつながり</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  同じ志を持つ仲間や、あなたの活動をサポートしてくれる協力者との貴重なネットワークを構築することができます。
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* イベントの流れ */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4 sm:mb-6 px-4">イベントの流れ</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4">
              Meicon（メイコン）の典型的な進行スケジュール
            </p>
          </AnimatedSection>

          <div className="space-y-6 sm:space-y-8">
            <AnimatedSection>
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-base sm:text-lg font-bold">
                  1
                </div>
                <div className="bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-slate-200 flex-grow">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-800 mb-1.5 sm:mb-2">オープニング・自己紹介</h3>
                  <p className="text-sm sm:text-base text-slate-600">参加者全員で自己紹介を行い、どのような活動や課題に取り組んでいるかを共有します。</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-base sm:text-lg font-bold">
                  2
                </div>
                <div className="bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-slate-200 flex-grow">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-800 mb-1.5 sm:mb-2">プレゼンテーション</h3>
                  <p className="text-sm sm:text-base text-slate-600">各参加者が自身のビジネスプランや活動について10分程度でプレゼンテーションを行います。</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-base sm:text-lg font-bold">
                  3
                </div>
                <div className="bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-slate-200 flex-grow">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-800 mb-1.5 sm:mb-2">ディスカッション・フィードバック</h3>
                  <p className="text-sm sm:text-base text-slate-600">グループに分かれて各プランについて議論し、改善案や協力可能性について話し合います。</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-base sm:text-lg font-bold">
                  4
                </div>
                <div className="bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-slate-200 flex-grow">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-800 mb-1.5 sm:mb-2">ネットワーキング・クロージング</h3>
                  <p className="text-sm sm:text-base text-slate-600">自由な交流時間を設け、具体的な協力関係や次のステップについて個別に話し合います。</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  )
}