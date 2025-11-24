import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Heart, Award, RefreshCw, Tent, Bot, Sprout, Star, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Meicon-web - 持続可能Web制作 | 合同会社Meicon',
  description: 'Webサイト制作を通じてお客様の課題解決に貢献すると同時に、制作費用の一部がMeiconの地域共創活動の運営費に充てられる持続可能なWeb制作サービス。',
}

export default function MeiconWebPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pc-user.jpg"
            alt="PCの画像"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-24">
          <div className="max-w-2xl">
            <p className="text-sm text-gray-400 tracking-widest mb-6">
              SUSTAINABLE WEB PRODUCTION
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Meicon
              <span className="block text-gray-400">web</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              ビジネスの成長と地域社会の発展を、
              <br />
              同時に実現する新時代のWeb制作パートナー
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-black font-medium hover:bg-gray-200 transition-all duration-500"
              >
                お問い合わせ
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 border border-white text-white font-medium hover:bg-white hover:text-black transition-all duration-500"
              >
                料金を見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-400 tracking-widest mb-4">WHY CHOOSE US</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              選ばれる理由
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-800 p-8">
              <Heart className="w-10 h-10 text-gray-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">社会貢献型制作</h3>
              <p className="text-gray-400 leading-relaxed">
                制作費用の一部が地域共創活動に充てられ、ビジネス成長と社会貢献を同時に実現します。
              </p>
            </div>

            <div className="border border-gray-800 p-8">
              <Award className="w-10 h-10 text-gray-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">高品質な制作</h3>
              <p className="text-gray-400 leading-relaxed">
                モダンな技術とデザインを駆使し、ブランドを最大限に引き出します。
              </p>
            </div>

            <div className="border border-gray-800 p-8">
              <RefreshCw className="w-10 h-10 text-gray-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">継続的サポート</h3>
              <p className="text-gray-400 leading-relaxed">
                制作後も長期的なパートナーシップを築き、サポートします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-400 tracking-widest mb-4">OUR ADVANTAGE</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              他社との違い
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-l-2 border-gray-700 pl-6 py-4">
              <div className="inline-block px-3 py-1 bg-white text-black text-sm font-bold mb-4">
                01
              </div>
              <Tent className="w-8 h-8 text-gray-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">イベント連携</h3>
              <p className="text-gray-400 leading-relaxed">
                Meiconイベントと連携した宣伝効果で、地域での認知度を向上させます。
              </p>
            </div>

            <div className="border-l-2 border-gray-700 pl-6 py-4">
              <div className="inline-block px-3 py-1 bg-white text-black text-sm font-bold mb-4">
                02
              </div>
              <Bot className="w-8 h-8 text-gray-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">AIとの差別化</h3>
              <p className="text-gray-400 leading-relaxed">
                継続的な運営サポートと、人の手による細やかな対応を提供します。
              </p>
            </div>

            <div className="border-l-2 border-gray-700 pl-6 py-4">
              <div className="inline-block px-3 py-1 bg-white text-black text-sm font-bold mb-4">
                03
              </div>
              <Sprout className="w-8 h-8 text-gray-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">社会貢献</h3>
              <p className="text-gray-400 leading-relaxed">
                制作費用が地域課題解決活動に還元される、社会的意義のあるサービスです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-400 tracking-widest mb-4">PRICING</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              シンプルな料金体系
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Standard Plan */}
            <div className="border border-gray-800 p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">スタンダード</h3>
                <p className="text-sm text-gray-400">サイトの管理運営のみ</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">¥5,000</span>
                <span className="text-gray-400 ml-2">/月</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-white text-black text-xs flex items-center justify-center mr-3">✓</div>
                  サイトの保守・メンテナンス
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-white text-black text-xs flex items-center justify-center mr-3">✓</div>
                  セキュリティ更新対応
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-white text-black text-xs flex items-center justify-center mr-3">✓</div>
                  コンテンツ更新サポート
                </li>
              </ul>
            </div>

            {/* Sponsor Plan */}
            <div className="border-2 border-white p-8 relative">
              <div className="absolute -top-3 right-6 px-3 py-1 bg-white text-black text-xs font-bold">
                おすすめ
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">スポンサー</h3>
                <p className="text-sm text-gray-400">管理運営 + スポンサー特典</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">¥12,000</span>
                <span className="text-gray-400 ml-2">/月</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-white text-black text-xs flex items-center justify-center mr-3">✓</div>
                  スタンダードプランの全機能
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-white text-black text-xs flex items-center justify-center mr-3">✓</div>
                  Meiconイベントでの企業PR
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-white text-black text-xs flex items-center justify-center mr-3">✓</div>
                  地域共創活動への貢献
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-white text-black text-xs flex items-center justify-center mr-3">✓</div>
                  社会貢献企業ブランディング
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              ※ ドメイン費用は別途お客様負担となります • 初期制作費用は別途お見積りいたします
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-400 tracking-widest mb-4">BENEFITS</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              選ばれるメリット
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-800 p-8">
              <Star className="w-10 h-10 text-gray-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">イベント連携PR</h3>
              <p className="text-gray-400 leading-relaxed">
                Meiconイベントでスポンサー企業として紹介され、地域での認知度向上と新規顧客獲得が期待できます。
              </p>
            </div>

            <div className="border border-gray-800 p-8">
              <Shield className="w-10 h-10 text-gray-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">安心の運用体制</h3>
              <p className="text-gray-400 leading-relaxed">
                制作後も継続的なメンテナンス、セキュリティ更新、コンテンツ更新を専任チームがサポートします。
              </p>
            </div>

            <div className="border border-gray-800 p-8">
              <Heart className="w-10 h-10 text-gray-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">企業価値の向上</h3>
              <p className="text-gray-400 leading-relaxed">
                地域共創活動を支援し、社会貢献企業としてのブランドイメージを向上させます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-400 tracking-widest mb-4">PROCESS</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              制作の流れ
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { num: '01', title: 'ヒアリング', desc: 'ヒアリングシートを用いてお客様のビジネス目標やご要望を詳しくお聞きし、最適なWebサイトをご提案します。' },
              { num: '02', title: 'デモサイト提示', desc: 'ヒアリングシートの内容を参考にデモサイトを制作します。デモサイトをご覧いただき、お客様と相談しながら進めていきます。' },
              { num: '03', title: '開発・実装', desc: '実際にWebサイトを構築し、完成後にお客様に確認いただきます。必要に応じて修正を行い、完璧な仕上がりを目指します。' },
              { num: '04', title: '公開・運用開始', desc: '最終確認後、本番環境への公開を行い、継続的な運用サポートを開始します。長期的なパートナーとして伴走します。' }
            ].map((step) => (
              <div key={step.num} className="border border-gray-800 p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-white text-black font-bold flex items-center justify-center mr-4">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            一緒に創りませんか？
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            お客様のビジネス目標に合わせたWebサイト制作を通じて、
            <br className="hidden sm:block" />
            地域社会の発展にも貢献する。新しい価値創造を、今ここから。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center px-10 py-4 bg-white text-black font-medium hover:bg-gray-200 transition-all duration-500"
            >
              お問い合わせ
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
