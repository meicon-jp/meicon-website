import AnimatedSection from '@/components/AnimatedSection'
import { Calendar, Monitor } from 'lucide-react'
import { client, Portfolio, MicroCMSListResponse } from '@/lib/microcms'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Portfolio - 実績 | Meicon LLC.',
  description: 'Meicon LLC.のイベント企画・運営、Web制作の実績一覧。これまでの活動やプロジェクトをご紹介します。',
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
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Portfolio</h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100">実績・事例</p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4 sm:mb-6 px-4">
              これまでの実績
            </h2>
          </AnimatedSection>
        </div>
      </section>

      {/* Event Portfolio */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <Calendar className="text-blue-600 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mr-2 sm:mr-3" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">
                  イベント企画・運営 実績
                </h2>
              </div>
            </div>
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
            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              {eventItems.map((item) => (
                <AnimatedSection key={item.id}>
                  <Link href={`/portfolio/${item.id}`}>
                    <div className="bg-white rounded-xl p-5 sm:p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 hover:text-blue-600 transition-colors">
                          {item.title}
                        </h3>
                        <span className="text-xs sm:text-sm text-gray-500">{formatDate(item.date)}</span>
                      </div>
                      {item.client && (
                        <p className="text-xs sm:text-sm text-gray-600 mb-2">クライアント: {item.client}</p>
                      )}
                      <div
                        className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                      <div className="flex justify-end">
                        <div className="flex items-center text-sm sm:text-base text-blue-600 font-medium">
                          詳細を見る
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
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

      {/* Web Portfolio */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <Monitor className="text-green-600 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mr-2 sm:mr-3" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">
                  Web制作 実績
                </h2>
              </div>
            </div>
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
            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              {webItems.map((item) => (
                <AnimatedSection key={item.id}>
                  <Link href={`/portfolio/${item.id}`}>
                    <div className="bg-gray-50 rounded-xl p-5 sm:p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 hover:text-blue-600 transition-colors">
                          {item.title}
                        </h3>
                        <span className="text-xs sm:text-sm text-gray-500">{formatDate(item.date)}</span>
                      </div>
                      {item.client && (
                        <p className="text-xs sm:text-sm text-gray-600 mb-2">クライアント: {item.client}</p>
                      )}
                      <div
                        className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                      <div className="flex justify-end">
                        <div className="flex items-center text-sm sm:text-base text-blue-600 font-medium">
                          詳細を見る
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
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
