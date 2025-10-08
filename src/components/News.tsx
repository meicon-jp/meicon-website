import { client, News as NewsType, MicroCMSListResponse } from '@/lib/microcms'
import Link from 'next/link'

async function getNews(): Promise<NewsType[]> {
  try {
    const data = await client.get<MicroCMSListResponse<NewsType>>({
      endpoint: 'news',
      queries: {
        limit: 5,
        orders: '-publishedAt',
      },
    })
    return data.contents
  } catch (error) {
    console.error('Failed to fetch news:', error)
    return []
  }
}

export default async function News() {
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
    <section id="news" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            お知らせ
          </h2>
        </div>

        {newsItems.length === 0 ? (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              まだ投稿がありません
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-4 sm:space-y-6">
              {newsItems.map((item) => (
                <Link key={item.id} href={`/news/${item.id}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 cursor-pointer">
                    <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
                      <span className="text-xs sm:text-sm text-gray-600 min-w-[80px] sm:min-w-[100px]">
                        {formatDate(item.publishedAt)}
                      </span>
                      <span
                        className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-white text-xs font-medium ${getCategoryColor(
                          item.category
                        )}`}
                      >
                        {item.category}
                      </span>
                    </div>
                    <span className="text-sm sm:text-base text-slate-800 font-medium hover:text-blue-600 transition-colors">
                      {item.title}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10 sm:mt-12">
              <Link
                href="/news"
                className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                すべてのお知らせを見る
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
