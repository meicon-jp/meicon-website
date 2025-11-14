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
      {/* ヒーローセクション - モダンヒーロー */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
        {/* 背景エフェクト */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 pt-28">
          <AnimatedSection className="text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-full mb-8">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-blue-400 text-sm font-semibold">地域共創イベント</span>
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
                Meicon
              </span>
            </h1>

            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-200 mb-6 max-w-4xl mx-auto leading-tight">
              挑戦を応援し、<br className="sm:hidden" />つながりを生み出す
            </p>

            <p className="text-xl sm:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto">
              市民参加型コミュニティイベント
            </p>

            <div className="max-w-5xl mx-auto mb-12">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl">
                <p className="text-lg sm:text-xl text-slate-200 leading-relaxed">
                  名古屋で世代や立場を超えて集まり、地域課題やビジネスプランを話し合い共創する市民参加型コミュニティイベントです。
                  起業家、NPO、社会課題解決に取り組む団体など、様々な背景を持つ方々が集まり、アイデアを共有し、協力関係を築く場を提供しています。
                </p>
              </div>
            </div>

            <div className="inline-block bg-gradient-to-r from-amber-500/20 to-amber-600/20 backdrop-blur-sm border-2 border-amber-400/40 text-amber-300 px-8 py-4 rounded-2xl shadow-lg">
              <p className="text-lg font-black">現在、開催に向けて準備中です</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* イベント概要 - モダンカードレイアウト */}
      <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16 sm:mb-20">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Event Info
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              イベント<span className="text-blue-600">概要</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Meiconは地域の課題解決とビジネス創出を目的とした共創プラットフォームです
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <AnimatedSection>
              <div className="group relative bg-white border-2 border-blue-200 rounded-3xl p-8 sm:p-10 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 text-center h-full overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                    <Calendar className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">開催頻度</h3>
                  <p className="text-lg text-slate-600">2ヶ月に1回の定期開催</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="group relative bg-white border-2 border-emerald-200 rounded-3xl p-8 sm:p-10 hover:border-emerald-300 hover:shadow-2xl transition-all duration-500 text-center h-full overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                    <Clock className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">所要時間</h3>
                  <p className="text-lg text-slate-600">3時間程度</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="group relative bg-white border-2 border-purple-200 rounded-3xl p-8 sm:p-10 hover:border-purple-300 hover:shadow-2xl transition-all duration-500 text-center h-full overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                    <MapPin className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">開催場所</h3>
                  <p className="text-lg text-slate-600">名古屋市内</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 参加対象者 - Bento Box グリッド */}
      <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* 背景エフェクト */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16 sm:mb-20">
            <span className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-semibold mb-4">
              Who Can Join
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight">
              参加<span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">対象者</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              以下のような方々の参加をお待ちしています
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <AnimatedSection>
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 text-center h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  <Target className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-white mb-3">ビジネスプラン<br />保有者</h3>
                <p className="text-slate-300">事業アイデアを持つ方</p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 text-center h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  <Heart className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-white mb-3">社会課題<br />解決団体</h3>
                <p className="text-slate-300">地域課題に取り組む団体</p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 text-center h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  <Users className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-white mb-3">NPO<br />法人</h3>
                <p className="text-slate-300">非営利活動法人の方々</p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 text-center h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  <Lightbulb className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-white mb-3">起業<br />予定者</h3>
                <p className="text-slate-300">これから起業を考える方</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 得られる価値 - Bento Box レイアウト */}
      <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16 sm:mb-20">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Benefits
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              得られる<span className="text-purple-600">価値</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Meiconに参加することで得られる3つのメリット
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <AnimatedSection>
              <div className="group relative bg-white border-2 border-blue-200 rounded-3xl p-8 sm:p-10 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                    <Circle className="text-white w-8 h-8 fill-current" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">
                    発表・宣伝の場
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    あなたのビジネスプランや活動を多くの人に知ってもらう機会を提供します。プレゼンテーションを通じて認知度を向上させることができます。
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="group relative bg-white border-2 border-emerald-200 rounded-3xl p-8 sm:p-10 hover:border-emerald-300 hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                    <Circle className="text-white w-8 h-8 fill-current" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">
                    フィードバック・意見
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    様々な業界・分野の専門家や参加者から貴重なフィードバックを得ることができ、アイデアの改善や新しい視点を獲得できます。
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="group relative bg-white border-2 border-purple-200 rounded-3xl p-8 sm:p-10 hover:border-purple-300 hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                    <Circle className="text-white w-8 h-8 fill-current" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">
                    協力者とのつながり
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    同じ志を持つ仲間や、あなたの活動をサポートしてくれる協力者との貴重なネットワークを構築することができます。
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* イベントの流れ - モダンタイムライン */}
      <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* 背景エフェクト */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16 sm:mb-20">
            <span className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-semibold mb-4">
              Event Flow
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight">
              イベントの<span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">流れ</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Meiconの典型的な進行スケジュール
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <AnimatedSection>
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-10 hover:bg-white/10 transition-all duration-500 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center font-black text-2xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                      01
                    </div>
                    <div className="h-px flex-grow bg-gradient-to-r from-blue-600 to-transparent"></div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black mb-4">
                    オープニング・自己紹介
                  </h3>

                  <p className="text-slate-300 leading-relaxed">
                    参加者全員で自己紹介を行い、どのような活動や課題に取り組んでいるかを共有します。
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-10 hover:bg-white/10 transition-all duration-500 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl flex items-center justify-center font-black text-2xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                      02
                    </div>
                    <div className="h-px flex-grow bg-gradient-to-r from-emerald-600 to-transparent"></div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black mb-4">
                    プレゼンテーション
                  </h3>

                  <p className="text-slate-300 leading-relaxed">
                    各参加者が自身のビジネスプランや活動について10分程度でプレゼンテーションを行います。
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-10 hover:bg-white/10 transition-all duration-500 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center font-black text-2xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                      03
                    </div>
                    <div className="h-px flex-grow bg-gradient-to-r from-purple-600 to-transparent"></div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black mb-4">
                    ディスカッション・フィードバック
                  </h3>

                  <p className="text-slate-300 leading-relaxed">
                    グループに分かれて各プランについて議論し、改善案や協力可能性について話し合います。
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-10 hover:bg-white/10 transition-all duration-500 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl flex items-center justify-center font-black text-2xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                      04
                    </div>
                    <div className="h-px flex-grow bg-gradient-to-r from-amber-600 to-transparent"></div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black mb-4">
                    ネットワーキング・クロージング
                  </h3>

                  <p className="text-slate-300 leading-relaxed">
                    自由な交流時間を設け、具体的な協力関係や次のステップについて個別に話し合います。
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  )
}