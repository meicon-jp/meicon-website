import { client, News as NewsType, MicroCMSListResponse } from '@/lib/microcms'
import Link from 'next/link'
import AnimatedSection from './AnimatedSection'
import { Calendar, Tag, ArrowRight, Newspaper } from 'lucide-react'

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
        return 'from-blue-500 to-blue-600'
      case 'お知らせ':
        return 'from-emerald-500 to-emerald-600'
      case 'メディア掲載':
        return 'from-purple-500 to-purple-600'
      default:
        return 'from-slate-500 to-slate-600'
    }
  }

  const getCategoryBorderColor = (category: string) => {
    switch (category) {
      case 'イベント':
        return 'border-blue-200 hover:border-blue-400'
      case 'お知らせ':
        return 'border-emerald-200 hover:border-emerald-400'
      case 'メディア掲載':
        return 'border-purple-200 hover:border-purple-400'
      default:
        return 'border-slate-200 hover:border-slate-400'
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
    <section id="news" className="py-24 sm:py-32 md:py-40 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16 sm:mb-20">
          <span className="inline-block px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-bold mb-6">
            LATEST NEWS
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            最新<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">お知らせ</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            イベント情報や最新ニュースをお届けします
          </p>
        </AnimatedSection>

        {newsItems.length === 0 ? (
          <AnimatedSection>
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-16 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 mb-6">
                <Newspaper className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">まだ投稿がありません</h3>
              <p className="text-slate-600">
                近日中に最新のニュースを公開予定です。お楽しみに！
              </p>
            </div>
          </AnimatedSection>
        ) : (
          <>
            <div className="space-y-4 sm:space-y-6 mb-12">
              {newsItems.map((item, index) => (
                <AnimatedSection key={item.id}>
                  <Link href={`/news/${item.id}`}>
                    <div className={`group bg-white border-2 ${getCategoryBorderColor(item.category)} rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl cursor-pointer`}>
                      <div className="flex flex-col lg:flex-row lg:items-center gap-4 sm:gap-6">
                        {/* Date and Category */}
                        <div className="flex items-center gap-4 flex-shrink-0">
                          <div className="flex items-center space-x-2 text-slate-600 min-w-[120px]">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm font-semibold">
                              {formatDate(item.publishedAt)}
                            </span>
                          </div>
                          <div className={`px-4 py-1.5 bg-gradient-to-r ${getCategoryColor(item.category)} text-white rounded-full text-xs font-black shadow-md flex items-center space-x-1.5`}>
                            <Tag className="w-3 h-3" />
                            <span>{item.category}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-relaxed">
                            {item.title}
                          </h3>
                        </div>

                        {/* Arrow */}
                        <div className="hidden lg:block flex-shrink-0">
                          <div className="w-10 h-10 bg-slate-100 group-hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300">
                            <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection className="text-center">
              <Link
                href="/news"
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-black rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                すべてのお知らせを見る
                <ArrowRight className="ml-2 w-6 h-6" />
              </Link>
            </AnimatedSection>
          </>
        )}
      </div>
    </section>
  )
}
