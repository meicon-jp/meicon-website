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
      {/* Hero Section - モダンヒーロー */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
        {/* 背景エフェクト */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 pt-28 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full mb-8">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-purple-400 text-sm font-semibold">Latest News & Updates</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-300 bg-clip-text text-transparent">
              News
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto mb-8">
            お知らせ・最新情報
          </p>
        </div>
      </section>

      {/* News List - モダンカードレイアウト */}
      <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16 sm:mb-20">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Latest Updates
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
              最新の<span className="text-purple-600">お知らせ</span>
            </h2>
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
            <div className="space-y-6 sm:space-y-8">
              {newsItems.map((item) => (
                <AnimatedSection key={item.id}>
                  <Link href={`/news/${item.id}`}>
                    <article className="group relative bg-white border-2 border-purple-200 rounded-3xl p-6 sm:p-8 md:p-10 hover:border-purple-300 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
                          <span className="text-sm text-slate-500 font-semibold">
                            {formatDate(item.publishedAt)}
                          </span>
                          <span
                            className={`inline-block px-4 py-1.5 rounded-full text-white text-xs font-bold ${getCategoryColor(
                              item.category
                            )}`}
                          >
                            {item.category}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 group-hover:text-purple-600 transition-colors">
                          {item.title}
                        </h3>

                        <div
                          className="prose prose-slate max-w-none text-base text-slate-600 line-clamp-3 leading-relaxed mb-6"
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        />

                        <div className="flex items-center justify-end">
                          <span className="text-purple-600 font-bold flex items-center group-hover:translate-x-2 transition-transform duration-300">
                            詳細を見る
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
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
