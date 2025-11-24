import Link from 'next/link'
import Image from 'next/image'
import { Building2, Calendar, MapPin, Mail, Users, Target, ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/geometric.jpg"
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
            <p className="text-sm text-gray-400 tracking-widest mb-6">ABOUT US</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              会社概要
            </h1>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              地域と企業をつなぐ共創プラットフォーム。
              <br />
              持続可能なコミュニティ創造を目指します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-black font-medium hover:bg-gray-200 transition-all duration-500"
              >
                お問い合わせ
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-400 tracking-widest mb-4">MISSION & VISION</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              私たちの想い
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="border-l-2 border-gray-700 pl-6 py-4">
              <div className="inline-flex items-center mb-4">
                <Target className="w-6 h-6 text-white mr-3" />
                <h3 className="text-xl font-bold text-white">ミッション</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                地域の課題を地域の力で解決し、持続可能なコミュニティを創造する。
                Webサイト制作と地域共創イベントを通じて、企業と地域社会をつなぎます。
              </p>
            </div>

            {/* Vision */}
            <div className="border-l-2 border-gray-700 pl-6 py-4">
              <div className="inline-flex items-center mb-4">
                <Users className="w-6 h-6 text-white mr-3" />
                <h3 className="text-xl font-bold text-white">ビジョン</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                名古屋を起点に、日本全国へ地域共創の輪を広げ、誰もが挑戦できる社会を実現します。
                ビジネスと社会貢献を両立させる新しいモデルを創ります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-400 tracking-widest mb-4">COMPANY INFO</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              会社情報
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-800 p-6">
              <div className="flex items-center mb-4">
                <Building2 className="w-5 h-5 text-gray-400 mr-3" />
                <h3 className="text-sm text-gray-400">会社名</h3>
              </div>
              <p className="text-white">合同会社Meicon</p>
            </div>

            <div className="border border-gray-800 p-6">
              <div className="flex items-center mb-4">
                <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                <h3 className="text-sm text-gray-400">設立</h3>
              </div>
              <p className="text-white">2025年9月</p>
            </div>

            <div className="border border-gray-800 p-6">
              <div className="flex items-center mb-4">
                <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                <h3 className="text-sm text-gray-400">所在地</h3>
              </div>
              <p className="text-white">愛知県名古屋市千種区今池 5-33-2</p>
            </div>

            <div className="border border-gray-800 p-6">
              <div className="flex items-center mb-4">
                <Mail className="w-5 h-5 text-gray-400 mr-3" />
                <h3 className="text-sm text-gray-400">連絡先</h3>
              </div>
              <a href="mailto:meicon@mei-con.jp" className="text-white hover:text-gray-400 transition-colors">
                meicon@mei-con.jp
              </a>
            </div>

            <div className="border border-gray-800 p-6">
              <div className="flex items-center mb-4">
                <Users className="w-5 h-5 text-gray-400 mr-3" />
                <h3 className="text-sm text-gray-400">代表者</h3>
              </div>
              <p className="text-white">寺崎充来 / 芝田悠悟</p>
            </div>

            <div className="border border-gray-800 p-6">
              <div className="flex items-center mb-4">
                <Target className="w-5 h-5 text-gray-400 mr-3" />
                <h3 className="text-sm text-gray-400">事業内容</h3>
              </div>
              <ul className="text-white space-y-1 text-sm">
                <li>・地域共創イベント企画・運営</li>
                <li>・Webサイト制作・開発</li>
                <li>・地域課題解決支援</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            サービス詳細
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Meiconが提供するサービスについて詳しく知りたい方はこちら
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/meicon"
              className="inline-flex items-center px-8 py-4 bg-white text-black font-medium hover:bg-gray-200 transition-all duration-500"
            >
              イベント詳細
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/meicon-web"
              className="inline-flex items-center px-8 py-4 border border-white text-white font-medium hover:bg-white hover:text-black transition-all duration-500"
            >
              Web制作詳細
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
