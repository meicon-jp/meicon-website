import AnimatedSection from '@/components/AnimatedSection'
import { Calendar, Monitor } from 'lucide-react'
import { client, Portfolio, MicroCMSListResponse } from '@/lib/microcms'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Portfolio - 実績 | 合同会社Meicon',
  description: '合同会社Meiconのイベント企画・運営、Web制作の実績一覧。これまでの活動やプロジェクトをご紹介します。',
}

export const revalidate = 60 // 60秒ごとに再検証

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
    <main className="min-h-screen">
      {/* Hero Section - モダンヒーロー */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
        {/* 背景エフェクト */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 pt-28 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-500/20 rounded-full mb-8">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-400 text-sm font-semibold">Portfolio & Case Studies</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter">
            <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-300 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto mb-8">
            これまでの実績・事例
          </p>
        </div>
      </section>

      {/* Event Portfolio - モダンレイアウト */}
      <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg mb-6">
              <Calendar className="text-white w-8 h-8" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
              イベント企画・運営 <span className="text-blue-600">実績</span>
            </h2>
          </AnimatedSection>

          {eventItems.length === 0 ? (
            <AnimatedSection>
              <div className="text-center py-12 sm:py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-100 mb-4 sm:mb-6">
                  <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">
                  まだ投稿がありません
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  新しい実績をお待ちください。
                </p>
              </div>
            </AnimatedSection>
          ) : (
            <div className="space-y-6 sm:space-y-8">
              {eventItems.map((item) => (
                <AnimatedSection key={item.id}>
                  <Link href={`/portfolio/${item.id}`}>
                    <div className="group relative bg-white border-2 border-blue-200 rounded-3xl p-6 sm:p-8 md:p-10 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-5">
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </h3>
                          <span className="text-sm text-slate-500 font-semibold">{formatDate(item.date)}</span>
                        </div>
                        {item.client && (
                          <p className="text-sm text-blue-600 font-semibold mb-3">クライアント: {item.client}</p>
                        )}
                        <div
                          className="text-base text-slate-600 mb-5 leading-relaxed line-clamp-3"
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                        <div className="flex justify-end">
                          <div className="flex items-center text-blue-600 font-bold group-hover:translate-x-2 transition-transform duration-300">
                            詳細を見る
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Web Portfolio - モダンレイアウト */}
      <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl shadow-lg mb-6">
              <Monitor className="text-white w-8 h-8" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
              Web制作 <span className="text-emerald-600">実績</span>
            </h2>
          </AnimatedSection>

          {webItems.length === 0 ? (
            <AnimatedSection>
              <div className="text-center py-12 sm:py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-100 mb-4 sm:mb-6">
                  <Monitor className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">
                  まだ投稿がありません
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  新しい実績をお待ちください。
                </p>
              </div>
            </AnimatedSection>
          ) : (
            <div className="space-y-6 sm:space-y-8">
              {webItems.map((item) => (
                <AnimatedSection key={item.id}>
                  <Link href={`/portfolio/${item.id}`}>
                    <div className="group relative bg-white border-2 border-emerald-200 rounded-3xl p-6 sm:p-8 md:p-10 hover:border-emerald-300 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-5">
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors">
                            {item.title}
                          </h3>
                          <span className="text-sm text-slate-500 font-semibold">{formatDate(item.date)}</span>
                        </div>
                        {item.client && (
                          <p className="text-sm text-emerald-600 font-semibold mb-3">クライアント: {item.client}</p>
                        )}
                        <div
                          className="text-base text-slate-600 mb-5 leading-relaxed line-clamp-3"
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                        <div className="flex justify-end">
                          <div className="flex items-center text-emerald-600 font-bold group-hover:translate-x-2 transition-transform duration-300">
                            詳細を見る
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
