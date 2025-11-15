import AnimatedSection from '@/components/AnimatedSection'
import News from '@/components/News'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Users, Rocket, Heart, TrendingUp, Globe, Zap, Shield, Award, CheckCircle, Sparkles, Calendar, Code, Handshake } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - 圧倒的なインパクト */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/nagoya.jpg"
            alt="名古屋の街並み"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-slate-950/95 to-purple-950/90"></div>
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-bold tracking-wider">NAGOYA&apos;S CO-CREATION PLATFORM</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tighter">
              <span className="block text-white mb-4">ビジネスと</span>
              <span className="block text-white mb-4">社会貢献の</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                新しいカタチ
              </span>
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-slate-300 mb-12 max-w-4xl mx-auto font-medium leading-relaxed">
              地域課題を解決しながら、あなたのビジネスを成長させる。<br className="hidden md:block" />
              名古屋発、持続可能な共創エコシステム。
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/meicon"
                className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-black rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  イベントに参加
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </Link>
              <Link
                href="/meicon-web"
                className="px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 text-white text-lg font-black rounded-2xl shadow-xl transition-all duration-300 hover:scale-105"
              >
                Web制作を依頼
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
            <div className="w-1 h-3 bg-white/50 rounded-full mx-auto animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-24 sm:py-32 md:py-40 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-bold mb-6">
              THE CHALLENGE
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">
              こんな<span className="text-red-600">課題</span>ありませんか？
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-20">
            <AnimatedSection>
              <div className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-8 hover:border-red-300 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">地域とつながりたい</h3>
                <p className="text-slate-600 leading-relaxed">
                  地域貢献をしたいが、どう関わればいいかわからない。CSR活動を効果的に展開したい。
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-8 hover:border-red-300 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                  <Rocket className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">事業成長と社会貢献</h3>
                <p className="text-slate-600 leading-relaxed">
                  ビジネスの成長と社会貢献を両立させたい。でも、どちらかを犠牲にしている。
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-8 hover:border-red-300 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">認知度を高めたい</h3>
                <p className="text-slate-600 leading-relaxed">
                  地域での企業認知度を高め、ブランドイメージを向上させたい。
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mt-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-12 shadow-lg">
              <ArrowRight className="w-10 h-10 text-white rotate-90" />
            </div>
            <div className="mb-6">
              <span className="inline-block px-6 py-3 bg-blue-100 text-blue-700 text-sm font-black border-2 border-blue-200 rounded-full">
                MEICON&apos;S SOLUTION
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Meicon</span>が解決します
            </h2>
            <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              地域共創イベントとWeb制作サービスを通じて、<br className="hidden md:block" />
              ビジネス成長と社会貢献を同時に実現する新しいモデル
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Two Core Services */}
      <section className="py-24 sm:py-32 md:py-40 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-6">
              OUR SERVICES
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">
              2つの<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">サービス</span>
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Meicon Event */}
            <AnimatedSection>
              <div className="group relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-10 sm:p-12 overflow-hidden shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center space-x-3 mb-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-4xl font-black text-white">Meicon</h3>
                  </div>

                  <p className="text-xl text-blue-50 mb-8 leading-relaxed">
                    地域課題解決のための共創イベント
                  </p>

                  <div className="space-y-4 mb-10">
                    {[
                      '学生・社会人・起業家が集う場',
                      '実践的な課題解決ワークショップ',
                      'スポンサー企業の活動紹介',
                      'ネットワーキング機会の提供'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-blue-200 flex-shrink-0 mt-0.5" />
                        <span className="text-white font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/meicon"
                    className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-black rounded-xl hover:bg-blue-50 transition-all duration-300 group-hover:shadow-xl"
                  >
                    詳細を見る
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Meicon-web */}
            <AnimatedSection>
              <div className="group relative bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-10 sm:p-12 overflow-hidden shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center space-x-3 mb-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-4xl font-black text-white">Meicon-web</h3>
                  </div>

                  <p className="text-xl text-purple-50 mb-8 leading-relaxed">
                    社会貢献型Web制作サービス
                  </p>

                  <div className="space-y-4 mb-10">
                    {[
                      '高品質なWebサイト制作',
                      '制作費の一部が地域活動へ',
                      'イベントでの企業PR機会',
                      '継続的な保守・サポート'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-purple-200 flex-shrink-0 mt-0.5" />
                        <span className="text-white font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/meicon-web"
                    className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-black rounded-xl hover:bg-purple-50 transition-all duration-300 group-hover:shadow-xl"
                  >
                    詳細を見る
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How It Works - Circular Model */}
      <section className="py-24 sm:py-32 md:py-40 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-bold mb-6">
              SUSTAINABLE MODEL
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 tracking-tight">
              持続可能な<span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">循環モデル</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              あなたのビジネスが、地域社会を豊かにし、<br className="hidden md:block" />
              その活動が次の成長につながる。好循環を生み出します。
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-4 gap-6 relative">
            {/* Step 1 */}
            <AnimatedSection>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:from-white/20 hover:to-white/10 transition-all duration-300">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center font-black text-2xl shadow-xl">
                  1
                </div>
                <Handshake className="w-12 h-12 text-blue-400 mb-6 mt-4" />
                <h3 className="text-2xl font-black mb-4">参加 / 依頼</h3>
                <p className="text-slate-300 leading-relaxed">
                  イベント参加またはWeb制作を依頼
                </p>
              </div>
            </AnimatedSection>

            {/* Step 2 */}
            <AnimatedSection>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:from-white/20 hover:to-white/10 transition-all duration-300">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center font-black text-2xl shadow-xl">
                  2
                </div>
                <Heart className="w-12 h-12 text-purple-400 mb-6 mt-4" />
                <h3 className="text-2xl font-black mb-4">社会貢献</h3>
                <p className="text-slate-300 leading-relaxed">
                  収益の一部が地域共創活動の運営費に
                </p>
              </div>
            </AnimatedSection>

            {/* Step 3 */}
            <AnimatedSection>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:from-white/20 hover:to-white/10 transition-all duration-300">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center font-black text-2xl shadow-xl">
                  3
                </div>
                <Award className="w-12 h-12 text-emerald-400 mb-6 mt-4" />
                <h3 className="text-2xl font-black mb-4">PR機会</h3>
                <p className="text-slate-300 leading-relaxed">
                  イベントで企業活動を紹介、認知度向上
                </p>
              </div>
            </AnimatedSection>

            {/* Step 4 */}
            <AnimatedSection>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:from-white/20 hover:to-white/10 transition-all duration-300">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center font-black text-2xl shadow-xl">
                  4
                </div>
                <TrendingUp className="w-12 h-12 text-amber-400 mb-6 mt-4" />
                <h3 className="text-2xl font-black mb-4">成長促進</h3>
                <p className="text-slate-300 leading-relaxed">
                  ブランド価値向上、新たなビジネス機会創出
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Circular arrow */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/30 rounded-full">
              <Zap className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-bold">この循環が持続的な成長を生み出します</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Benefits */}
      <section className="py-24 sm:py-32 md:py-40 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold mb-6">
              WHY MEICON
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">
              選ばれる<span className="text-emerald-600">理由</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection>
              <div className="group bg-slate-50 border-2 border-slate-200 rounded-3xl p-8 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">信頼性</h3>
                <p className="text-slate-600 leading-relaxed">地域密着で実績のある運営体制。安心してご参加・ご依頼いただけます。</p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="group bg-slate-50 border-2 border-slate-200 rounded-3xl p-8 hover:border-purple-300 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">多様性</h3>
                <p className="text-slate-600 leading-relaxed">様々な業界・立場の方々との出会いが、新しい価値を生み出します。</p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="group bg-slate-50 border-2 border-slate-200 rounded-3xl p-8 hover:border-emerald-300 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">実践的</h3>
                <p className="text-slate-600 leading-relaxed">理論だけでなく、実際の課題に取り組み、具体的な成果を生み出します。</p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="group bg-slate-50 border-2 border-slate-200 rounded-3xl p-8 hover:border-rose-300 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">社会貢献</h3>
                <p className="text-slate-600 leading-relaxed">ビジネスを通じて地域社会に貢献。CSR活動としても最適です。</p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="group bg-slate-50 border-2 border-slate-200 rounded-3xl p-8 hover:border-amber-300 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">成長機会</h3>
                <p className="text-slate-600 leading-relaxed">新しいネットワーク、知識、スキルの獲得で、継続的な成長を実現。</p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="group bg-slate-50 border-2 border-slate-200 rounded-3xl p-8 hover:border-indigo-300 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">持続可能性</h3>
                <p className="text-slate-600 leading-relaxed">一過性ではなく、長期的に続く関係性と価値創造を目指します。</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* News Section */}
      <News />
    </main>
  )
}
