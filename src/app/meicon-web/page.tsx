import { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import { Shield, RefreshCw, Heart, Award, Star, Tent, Bot, Sprout } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Meicon-web - 持続可能Web制作 | 合同会社Meicon',
  description: 'Webサイト制作を通じてお客様の課題解決に貢献すると同時に、制作費用の一部がMeiconの地域共創活動の運営費に充てられる持続可能なWeb制作サービス。',
}

export default function MeiconWebPage() {
  return (
    <main className="min-h-screen">
      {/* ヒーローセクション - モダン非対称レイアウト */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
        {/* 背景エフェクト */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/5 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 pt-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-full">
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                  <span className="text-amber-400 text-sm font-semibold">持続可能なWeb制作</span>
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter">
                  <span className="block mb-2">Meicon</span>
                  <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 bg-clip-text text-transparent">web</span>
                </h1>

                <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed">
                  ビジネスの成長と地域社会の発展を、<br />
                  <span className="text-amber-400 font-semibold">同時に実現</span>する
                  <br />新時代のWeb制作パートナー
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href="/contact" className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
                    お問い合わせ
                    <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                  <a href="#pricing" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl font-bold text-lg transition-all duration-300 text-center">
                    料金を見る
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="relative">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">社会貢献型</h3>
                        <p className="text-slate-400 text-sm">制作費の一部を地域活動に還元</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">高品質制作</h3>
                        <p className="text-slate-400 text-sm">モダンな技術とデザイン</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                        <RefreshCw className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">継続サポート</h3>
                        <p className="text-slate-400 text-sm">長期的なパートナーシップ</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 装飾的な要素 */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-500/20 rounded-2xl blur-2xl"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500/20 rounded-2xl blur-2xl"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* サービスの特徴 - Bento Box レイアウト */}
      <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-slate-100/50 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16 sm:mb-20">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              選ばれる<span className="text-amber-600">理由</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Meicon-webが提供する、他にはない価値
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-6 gap-6">
            {/* 大きなカード - 社会貢献 */}
            <AnimatedSection className="md:col-span-4">
              <div className="group relative bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-8 sm:p-10 md:p-12 h-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    社会貢献型制作
                  </h3>

                  <p className="text-lg text-amber-50 leading-relaxed mb-6">
                    制作費用の一部が地域共創活動に充てられ、<br />
                    お客様のビジネス成長と地域社会の発展を同時に実現します。<br />
                    さらに、Web制作をご依頼いただいた企業様には、Meiconイベントでの企業PR機会をご提供し、地域での認知度向上とブランディングを支援いたします。
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* 2つの小さなカード */}
            <div className="md:col-span-2 space-y-6">
              <AnimatedSection>
                <div className="group bg-white border-2 border-blue-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    高品質な制作
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    モダンな技術とデザインを駆使し、ブランドを最大限に引き出します。
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="group bg-white border-2 border-emerald-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <RefreshCw className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    継続的サポート
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    制作後も長期的なパートナーシップを築きます。
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 差別化ポイント - インタラクティブカード */}
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
              Our Advantage
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight">
              他社との<span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">違い</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Meicon-webだからこそ提供できる、3つの強み
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatedSection>
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                    <Tent className="text-white w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">イベント連携</h3>

                  <p className="text-slate-300 leading-relaxed mb-4">
                    Meiconイベントと連携した宣伝効果で、地域での認知度を向上させます。
                  </p>

                  <div className="flex items-center space-x-2 text-blue-400 font-semibold text-sm">
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    <span>地域コミュニティで認知拡大</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                    <Bot className="text-white w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">AIとの差別化</h3>

                  <p className="text-slate-300 leading-relaxed mb-4">
                    継続的な運営サポートと、人の手による細やかな対応を提供します。
                  </p>

                  <div className="flex items-center space-x-2 text-emerald-400 font-semibold text-sm">
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    <span>長期的なパートナーシップ</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                    <Sprout className="text-white w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">社会貢献</h3>

                  <p className="text-slate-300 leading-relaxed mb-4">
                    制作費用が地域課題解決活動に還元される、社会的意義のあるサービスです。
                  </p>

                  <div className="flex items-center space-x-2 text-amber-400 font-semibold text-sm">
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    <span>社会貢献企業イメージ向上</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 料金プラン - モダンデザイン */}
      <section id="pricing" className="py-20 sm:py-24 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16 sm:mb-20">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
              Pricing
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              シンプルな<span className="text-amber-600">料金体系</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              明確で分かりやすい月額プランで、安心してご利用いただけます
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* スタンダードプラン */}
            <AnimatedSection>
              <div className="group relative bg-white border-2 border-slate-300 rounded-3xl p-8 sm:p-10 hover:border-slate-400 transition-all duration-300 shadow-lg hover:shadow-2xl h-full flex flex-col">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900">スタンダード</h3>
                    <div className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-700">
                      Basic
                    </div>
                  </div>

                  <div className="flex items-baseline mb-2">
                    <span className="text-5xl sm:text-6xl font-black text-slate-900">¥5,000</span>
                    <span className="text-xl text-slate-600 ml-2">/月</span>
                  </div>

                  <p className="text-slate-600 text-sm">サイトの管理運営のみ</p>
                </div>

                <div className="flex-grow space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-slate-700">サイトの保守・メンテナンス</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-slate-700">セキュリティ更新対応</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-slate-700">コンテンツ更新サポート</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* スポンサープラン - 強調 */}
            <AnimatedSection>
              <div className="group relative bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 rounded-3xl p-8 sm:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 h-full flex flex-col overflow-hidden transform hover:scale-105">
                {/* 背景装飾 */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>

                {/* バッジ */}
                <div className="absolute top-8 right-8">
                  <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs font-black text-white border border-white/30">
                    ⭐ おすすめ
                  </div>
                </div>

                <div className="mb-8 relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl sm:text-3xl font-black text-white">スポンサー</h3>
                  </div>

                  <div className="flex items-baseline mb-2">
                    <span className="text-5xl sm:text-6xl font-black text-white">¥12,000</span>
                    <span className="text-xl text-amber-100 ml-2">/月</span>
                  </div>

                  <p className="text-amber-100 text-sm">管理運営 + スポンサー特典</p>
                </div>

                <div className="flex-grow space-y-4 mb-8 relative z-10">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-white font-medium">スタンダードプランの全機能</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-white font-medium">Meiconイベントでの企業PR</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-white font-medium">地域共創活動への貢献</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-white font-medium">社会貢献企業ブランディング</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="mt-12 text-center">
            <div className="inline-block px-6 py-3 bg-slate-100 rounded-xl">
              <p className="text-sm text-slate-600">
                <span className="font-semibold">※</span> ドメイン費用は別途お客様負担となります<br className="sm:hidden" />
                <span className="font-semibold mx-2">•</span> 初期制作費用は別途お見積りいたします
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ご依頼メリット - モダンカードグリッド */}
      <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16 sm:mb-20">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-amber-50 text-amber-700 rounded-full text-sm font-semibold mb-4">
              Benefits
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              選ばれる<span className="text-amber-600">メリット</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Meicon-webだからこそ提供できる、3つの価値
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatedSection>
              <div className="group relative bg-white border-2 border-amber-200 rounded-3xl p-8 sm:p-10 hover:border-amber-300 hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                    <Star className="text-white w-8 h-8" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">
                    イベント連携PR
                  </h3>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    Meiconイベントでスポンサー企業として紹介され、地域での認知度向上と新規顧客獲得が期待できます。
                  </p>

                  <div className="inline-flex items-center space-x-2 text-amber-600 font-semibold text-sm">
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    <span>地域コミュニティで認知拡大</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="group relative bg-white border-2 border-emerald-200 rounded-3xl p-8 sm:p-10 hover:border-emerald-300 hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                    <Shield className="text-white w-8 h-8" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">
                    安心の運用体制
                  </h3>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    制作後も継続的なメンテナンス、セキュリティ更新、コンテンツ更新を専任チームがサポートします。
                  </p>

                  <div className="inline-flex items-center space-x-2 text-emerald-600 font-semibold text-sm">
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    <span>長期的なパートナーシップ</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="group relative bg-white border-2 border-blue-200 rounded-3xl p-8 sm:p-10 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                    <Heart className="text-white w-8 h-8" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">
                    企業価値の向上
                  </h3>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    地域共創活動を支援し、社会貢献企業としてのブランドイメージとステークホルダーからの信頼を向上させます。
                  </p>

                  <div className="inline-flex items-center space-x-2 text-blue-600 font-semibold text-sm">
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    <span>ESG・SDGs対応アピール</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 制作の流れ - モダンタイムライン */}
      <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* 背景エフェクト */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16 sm:mb-20">
            <span className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-semibold mb-4">
              Process
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight">
              制作の<span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">流れ</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              お問い合わせから公開まで、4つのステップでスムーズに進行
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <AnimatedSection>
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-10 hover:bg-white/10 transition-all duration-500 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-500/20 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center font-black text-2xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                      01
                    </div>
                    <div className="h-px flex-grow bg-gradient-to-r from-slate-600 to-transparent"></div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black mb-4">
                    ヒアリング
                  </h3>

                  <p className="text-slate-300 leading-relaxed">
                    ヒアリングシートを用いてお客様のビジネス目標やご要望を詳しくお聞きし、最適なWebサイトをご提案します。
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-10 hover:bg-white/10 transition-all duration-500 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center font-black text-2xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                      02
                    </div>
                    <div className="h-px flex-grow bg-gradient-to-r from-blue-600 to-transparent"></div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black mb-4">
                    デモサイト提示
                  </h3>

                  <p className="text-slate-300 leading-relaxed">
                    ヒアリングシートの内容を参考にデモサイトを制作します。デモサイトをご覧いただき、お客様と相談しながら進めていきます。
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
                      03
                    </div>
                    <div className="h-px flex-grow bg-gradient-to-r from-emerald-600 to-transparent"></div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black mb-4">
                    開発・実装
                  </h3>

                  <p className="text-slate-300 leading-relaxed">
                    実際にWebサイトを構築し、完成後にお客様に確認いただきます。必要に応じて修正を行い、完璧な仕上がりを目指します。
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
                    公開・運用開始
                  </h3>

                  <p className="text-slate-300 leading-relaxed">
                    最終確認後、本番環境への公開を行い、継続的な運用サポートを開始します。長期的なパートナーとして伴走します。
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* お問い合わせ - インパクト重視CTA */}
      <section className="relative py-24 sm:py-32 md:py-40 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* 背景エフェクト */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 sm:mb-10 tracking-tighter">
              <span className="block mb-4">一緒に創りませんか？</span>
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 bg-clip-text text-transparent">
                未来を変える Webサイト
              </span>
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl mb-12 sm:mb-16 leading-relaxed text-slate-300 max-w-3xl mx-auto">
              お客様のビジネス目標に合わせたWebサイト制作を通じて、<br className="hidden sm:block" />
              地域社会の発展にも貢献する。<br className="hidden sm:block" />
              新しい価値創造を、今ここから。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a
                href="/contact"
                className="group px-10 sm:px-12 py-5 sm:py-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-black rounded-2xl shadow-2xl hover:shadow-amber-500/20 transform hover:scale-105 transition-all duration-300 text-lg sm:text-xl"
              >
                お問い合わせ
              </a>
              <a
                href="mailto:meicon@mei-con.jp"
                className="px-10 sm:px-12 py-5 sm:py-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold rounded-2xl transition-all duration-300 text-lg sm:text-xl"
              >
                メールで問い合わせ
              </a>
            </div>

            <div className="mt-12 sm:mt-16 grid sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="text-3xl sm:text-4xl font-black text-amber-400 mb-2">24h</div>
                <p className="text-sm text-slate-300">以内に初回返信</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="text-3xl sm:text-4xl font-black text-amber-400 mb-2">無料</div>
                <p className="text-sm text-slate-300">初回相談・見積もり</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="text-3xl sm:text-4xl font-black text-amber-400 mb-2">専任</div>
                <p className="text-sm text-slate-300">担当者がサポート</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
