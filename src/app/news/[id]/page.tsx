import AnimatedSection from '@/components/AnimatedSection'
import { client, News, MicroCMSListResponse } from '@/lib/microcms'
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{
    id: string
  }>
}

export const revalidate = 60

// 静的パスを生成
export async function generateStaticParams() {
  const data = await client.get<MicroCMSListResponse<News>>({
    endpoint: 'news',
    queries: {
      limit: 100,
    },
  })

  return data.contents.map((news) => ({
    id: news.id,
  }))
}

// メタデータを生成
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const news = await client.get<News>({
    endpoint: 'news',
    contentId: id,
  }).catch(() => null)

  if (!news) {
    return {
      title: 'お知らせが見つかりません | Meicon LLC.',
    }
  }

  return {
    title: `${news.title} | Meicon LLC.`,
    description: news.content.substring(0, 100).replace(/<[^>]*>/g, ''),
  }
}

async function getNews(id: string): Promise<News | null> {
  try {
    const news = await client.get<News>({
      endpoint: 'news',
      contentId: id,
    })
    return news
  } catch (error) {
    console.error('Failed to fetch news:', error)
    return null
  }
}

export default async function NewsDetailPage({ params }: Props) {
  const { id } = await params
  const news = await getNews(id)

  if (!news) {
    notFound()
  }

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
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="mb-4 sm:mb-6">
              <Link
                href="/news"
                className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                お知らせ一覧に戻る
              </Link>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm text-gray-300">
                {formatDate(news.publishedAt)}
              </span>
              <span
                className={`px-2 sm:px-3 py-1 rounded-full text-white text-xs font-medium ${getCategoryColor(
                  news.category
                )}`}
              >
                {news.category}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              {news.title}
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <article className="prose prose-slate prose-sm sm:prose-base md:prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: news.content }} />
            </article>

            <div className="mt-10 sm:mt-12 md:mt-16 pt-6 sm:pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs sm:text-sm text-gray-500">
                <span>公開日: {formatDate(news.publishedAt)}</span>
                {news.updatedAt !== news.publishedAt && (
                  <span>更新日: {formatDate(news.updatedAt)}</span>
                )}
              </div>
            </div>

            <div className="mt-8 sm:mt-10 md:mt-12 text-center">
              <Link
                href="/news"
                className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                お知らせ一覧に戻る
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
