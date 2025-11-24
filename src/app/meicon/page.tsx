import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, Clock, Users, Target, Heart, Lightbulb, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: '合同会社Meicon（メイコン） - 地域共創イベント',
  description: '名古屋で世代や立場を超えて集まり、地域課題やビジネスプランを話し合い共創する市民参加型コミュニティイベント「Meicon（メイコン）」の詳細情報。',
}

export default function MeiconPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/nagoya.jpg"
            alt="幾何学模様"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-24">
          <div className="max-w-2xl">
            <p className="text-sm text-gray-400 tracking-widest mb-6">CO-CREATION EVENT</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Meicon
            </h1>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              挑戦を応援し、つながりを生み出す
              <br />
              市民参加型コミュニティイベント
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-black font-medium hover:bg-gray-200 transition-all duration-500"
              >
                参加申し込み
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <div className="inline-flex items-center px-8 py-4 border border-gray-700 text-gray-300">
                現在、開催に向けて準備中です
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-300 leading-relaxed text-center">
            名古屋で世代や立場を超えて集まり、地域課題やビジネスプランを話し合い共創する市民参加型コミュニティイベントです。
            起業家、NPO、社会課題解決に取り組む団体など、様々な背景を持つ方々が集まり、アイデアを共有し、協力関係を築く場を提供しています。
          </p>
        </div>
      </section>

      {/* Event Info */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-400 tracking-widest mb-4">EVENT INFO</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              イベント概要
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-800 p-6 text-center">
              <Calendar className="w-8 h-8 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">開催頻度</h3>
              <p className="text-gray-400">2ヶ月に1回の定期開催</p>
            </div>

            <div className="border border-gray-800 p-6 text-center">
              <Clock className="w-8 h-8 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">所要時間</h3>
              <p className="text-gray-400">3時間程度</p>
            </div>

            <div className="border border-gray-800 p-6 text-center">
              <MapPin className="w-8 h-8 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">開催場所</h3>
              <p className="text-gray-400">名古屋市内</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-400 tracking-widest mb-4">WHO CAN JOIN</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              参加対象者
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-gray-800 p-6 text-center">
              <Target className="w-8 h-8 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">ビジネスプラン保有者</h3>
              <p className="text-sm text-gray-400">事業アイデアを持つ方</p>
            </div>

            <div className="border border-gray-800 p-6 text-center">
              <Heart className="w-8 h-8 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">社会課題解決団体</h3>
              <p className="text-sm text-gray-400">地域課題に取り組む団体</p>
            </div>

            <div className="border border-gray-800 p-6 text-center">
              <Users className="w-8 h-8 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">NPO法人</h3>
              <p className="text-sm text-gray-400">非営利活動法人の方々</p>
            </div>

            <div className="border border-gray-800 p-6 text-center">
              <Lightbulb className="w-8 h-8 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">起業予定者</h3>
              <p className="text-sm text-gray-400">これから起業を考える方</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-400 tracking-widest mb-4">BENEFITS</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              得られる価値
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-l-2 border-gray-700 pl-6 py-4">
              <div className="inline-block px-3 py-1 bg-white text-black text-sm font-bold mb-4">
                01
              </div>
              <h3 className="text-xl font-bold text-white mb-3">発表・宣伝の場</h3>
              <p className="text-gray-400 leading-relaxed">
                あなたのビジネスプランや活動を多くの人に知ってもらう機会を提供します。
              </p>
            </div>

            <div className="border-l-2 border-gray-700 pl-6 py-4">
              <div className="inline-block px-3 py-1 bg-white text-black text-sm font-bold mb-4">
                02
              </div>
              <h3 className="text-xl font-bold text-white mb-3">フィードバック</h3>
              <p className="text-gray-400 leading-relaxed">
                様々な業界の専門家や参加者から貴重なフィードバックを得ることができます。
              </p>
            </div>

            <div className="border-l-2 border-gray-700 pl-6 py-4">
              <div className="inline-block px-3 py-1 bg-white text-black text-sm font-bold mb-4">
                03
              </div>
              <h3 className="text-xl font-bold text-white mb-3">協力者との出会い</h3>
              <p className="text-gray-400 leading-relaxed">
                同じ志を持つ仲間や協力者との貴重なネットワークを構築できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Flow */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-400 tracking-widest mb-4">EVENT FLOW</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              イベントの流れ
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { num: '01', title: 'オープニング・自己紹介', desc: '参加者全員で自己紹介を行い、活動や課題を共有します。' },
              { num: '02', title: 'プレゼンテーション', desc: '各参加者が自身のビジネスプランや活動について発表します。' },
              { num: '03', title: 'ディスカッション', desc: 'グループに分かれて各プランについて議論し、改善案を話し合います。' },
              { num: '04', title: 'ネットワーキング', desc: '自由な交流時間を設け、具体的な協力関係について話し合います。' }
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

      {/* CTA */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            お問い合わせ
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            イベントへの参加やスポンサーシップについてなど、
            <br className="hidden sm:block" />
            お気軽にお問い合わせください。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-4 bg-white text-black font-medium hover:bg-gray-200 transition-all duration-500"
          >
            お問い合わせ
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
