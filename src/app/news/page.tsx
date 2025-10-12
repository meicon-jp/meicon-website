import AnimatedSection from '@/components/AnimatedSection'
import { client, News, MicroCMSListResponse } from '@/lib/microcms'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'News - お知らせ | 合同会社Meicon',
  description: '合同会社Meiconの最新のお知らせ・ニュース一覧。イベント情報、メディア掲載情報などをお届けします。',
}

export const revalidate = 60 // 60秒ごとに再検証

async function getNews(): Promise<News[]> {
  try {
    const data = await client.get<MicroCMSListResponse<News>>({
      endpoint: 'news',
      queries: {
        limit: 100,
        orders: '-publishedAt',
      },
    })
    return data.contents
  } catch (error) {
    console.error('Failed to fetch news:', error)
    return []
  }
}

export default async function NewsPage() {
  const newsItems = await getNews()

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'イベント':
        return 'bg-blue-600'
      case 'お知らせ':
        return 'bg-green-600'
      case 'メディア掲載':
        return 'bg-purple-600'
      default:
        return 'bg-gray-600'
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">News</h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100">お知らせ・最新情報</p>
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4 sm:mb-6 px-4">
                最新のお知らせ
              </h2>
            </div>
          </AnimatedSection>

          {newsItems.length === 0 ? (
            <AnimatedSection>
              <div className="text-center py-12 sm:py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-100 mb-4 sm:mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">
                  まだ投稿がありません
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  新しいお知らせをお待ちください。
                </p>
              </div>
            </AnimatedSection>
          ) : (
            <div className="space-y-5 sm:space-y-6 md:space-y-8">
              {newsItems.map((item) => (
                <AnimatedSection key={item.id}>
                  <Link href={`/news/${item.id}`}>
                    <article className="bg-gray-50 rounded-xl p-5 sm:p-6 md:p-8 hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
                          <span className="text-xs sm:text-sm text-gray-600 min-w-[90px] sm:min-w-[100px]">
                            {formatDate(item.publishedAt)}
                          </span>
                          <span
                            className={`px-2 sm:px-3 py-1 rounded-full text-white text-xs font-medium ${getCategoryColor(
                              item.category
                            )}`}
                          >
                            {item.category}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-3 sm:mb-4 hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>

                      <div
                        className="prose prose-slate max-w-none text-sm sm:text-base text-gray-700 line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      />

                      <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200 flex items-center justify-between">
                        <span className="text-xs sm:text-sm text-gray-500">
                          公開日: {formatDate(item.publishedAt)}
                        </span>
                        <span className="text-sm sm:text-base text-blue-600 font-medium flex items-center">
                          詳細を見る
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </article>
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
