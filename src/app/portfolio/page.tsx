import Image from 'next/image'
import { Calendar, Monitor, ArrowRight } from 'lucide-react'
import { client, Portfolio, MicroCMSListResponse } from '@/lib/microcms'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Portfolio - 実績 | 合同会社Meicon',
  description: '合同会社Meiconのイベント企画・運営、Web制作の実績一覧。これまでの活動やプロジェクトをご紹介します。',
}

export const revalidate = 60

async function getPortfolio(): Promise<Portfolio[]> {
  try {
    const data = await client.get<MicroCMSListResponse<Portfolio>>({
      endpoint: 'portfolio',
      queries: {
        limit: 100,
        orders: '-date',
      },
    })
    return data.contents
  } catch (error) {
    console.error('Failed to fetch portfolio:', error)
    return []
  }
}

export default async function PortfolioPage() {
  const portfolioItems = await getPortfolio()

  const eventItems = portfolioItems.filter(item => item.category.includes('イベント企画・運営'))
  const webItems = portfolioItems.filter(item => item.category.includes('Web制作'))

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
    })
  }

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
            <p className="text-sm text-gray-400 tracking-widest mb-6">PORTFOLIO</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              実績
            </h1>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              イベント企画・運営とWeb制作の
              <br />
              これまでの実績・事例をご紹介します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#event"
                className="inline-flex items-center px-8 py-4 bg-white text-black font-medium hover:bg-gray-200 transition-all duration-500"
              >
                イベント実績
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#web"
                className="inline-flex items-center px-8 py-4 border border-white text-white font-medium hover:bg-white hover:text-black transition-all duration-500"
              >
                Web制作実績
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Event Portfolio */}
      <section id="event" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-4">
              <Calendar className="w-6 h-6 text-gray-400 mr-3" />
              <p className="text-sm text-gray-400 tracking-widest">EVENT</p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              イベント企画・運営
            </h2>
          </div>

          {eventItems.length === 0 ? (
            <div className="text-center py-16">
              <Calendar className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">まだ投稿がありません</h3>
              <p className="text-gray-400">新しい実績をお待ちください。</p>
            </div>
          ) : (
            <div className="space-y-6">
              {eventItems.map((item) => (
                <Link key={item.id} href={`/portfolio/${item.id}`}>
                  <div className="group border border-gray-800 p-6 hover:border-gray-600 transition-all duration-500">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-sm text-gray-500">{formatDate(item.date)}</span>
                    </div>
                    {item.client && (
                      <p className="text-sm text-gray-400 mb-3">クライアント: {item.client}</p>
                    )}
                    <div
                      className="text-gray-400 mb-4 leading-relaxed line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                    <div className="flex items-center text-white group-hover:text-gray-400 transition-colors">
                      詳細を見る
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Web Portfolio */}
      <section id="web" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-4">
              <Monitor className="w-6 h-6 text-gray-400 mr-3" />
              <p className="text-sm text-gray-400 tracking-widest">WEB</p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Web制作
            </h2>
          </div>

          {webItems.length === 0 ? (
            <div className="text-center py-16">
              <Monitor className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">まだ投稿がありません</h3>
              <p className="text-gray-400">新しい実績をお待ちください。</p>
            </div>
          ) : (
            <div className="space-y-6">
              {webItems.map((item) => (
                <Link key={item.id} href={`/portfolio/${item.id}`}>
                  <div className="group border border-gray-800 p-6 hover:border-gray-600 transition-all duration-500">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-sm text-gray-500">{formatDate(item.date)}</span>
                    </div>
                    {item.client && (
                      <p className="text-sm text-gray-400 mb-3">クライアント: {item.client}</p>
                    )}
                    <div
                      className="text-gray-400 mb-4 leading-relaxed line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                    <div className="flex items-center text-white group-hover:text-gray-400 transition-colors">
                      詳細を見る
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
