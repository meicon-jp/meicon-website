import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar } from 'lucide-react'
import { client, News, MicroCMSListResponse } from '@/lib/microcms'

export const metadata: Metadata = {
  title: 'News - お知らせ | 合同会社Meicon',
  description: '合同会社Meiconの最新のお知らせ・ニュース一覧。イベント情報、メディア掲載情報などをお届けします。',
}

export const revalidate = 60

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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
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
            <p className="text-sm text-gray-400 tracking-widest mb-6">NEWS</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              お知らせ
            </h1>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              合同会社Meiconからの最新情報、
              <br />
              イベント情報をお届けします。
            </p>
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-400 tracking-widest mb-4">LATEST NEWS</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              最新のお知らせ
            </h2>
          </div>

          {newsItems.length === 0 ? (
            <div className="text-center py-16">
              <Calendar className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">まだ投稿がありません</h3>
              <p className="text-gray-400">新しいお知らせをお待ちください。</p>
            </div>
          ) : (
            <div className="space-y-6">
              {newsItems.map((item) => (
                <Link key={item.id} href={`/news/${item.id}`}>
                  <div className="group border border-gray-800 p-6 hover:border-gray-600 transition-all duration-500">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-block px-3 py-1 bg-white text-black text-xs font-bold">
                          {item.category}
                        </span>
                        <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <span className="text-sm text-gray-500">{formatDate(item.publishedAt)}</span>
                    </div>
                    <div
                      className="text-gray-400 mb-4 leading-relaxed line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: item.content }}
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

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400 tracking-widest mb-4">STAY UPDATED</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            お問い合わせ
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            イベントやサービスに関するお問い合わせは、
            <br />
            お気軽にご連絡ください。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-black font-medium hover:bg-gray-200 transition-all duration-500"
          >
            お問い合わせはこちら
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
