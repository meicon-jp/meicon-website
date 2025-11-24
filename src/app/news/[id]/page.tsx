import { client, News, MicroCMSListResponse } from '@/lib/microcms'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

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
      title: 'お知らせが見つかりません | 合同会社Meicon',
    }
  }

  return {
    title: `${news.title} | 合同会社Meicon`,
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
      <section className="relative min-h-[60vh] flex items-center">
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
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-24">
          <div className="mb-6">
            <Link
              href="/news"
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              お知らせ一覧に戻る
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-block px-3 py-1 bg-white text-black text-xs font-bold">
              {news.category}
            </span>
            <span className="text-sm text-gray-400">
              {formatDate(news.publishedAt)}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            {news.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-invert prose-lg max-w-none">
            <div
              className="text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: news.content }}
            />
          </article>

          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-sm text-gray-500">
              <span>公開日: {formatDate(news.publishedAt)}</span>
              {news.updatedAt !== news.publishedAt && (
                <span>更新日: {formatDate(news.updatedAt)}</span>
              )}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/news"
              className="inline-flex items-center px-8 py-4 bg-white text-black font-medium hover:bg-gray-200 transition-all duration-500"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              お知らせ一覧に戻る
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
