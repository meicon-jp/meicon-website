import AnimatedSection from '@/components/AnimatedSection'
import { client, Portfolio, MicroCMSListResponse } from '@/lib/microcms'
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, Monitor } from 'lucide-react'

type Props = {
  params: Promise<{
    id: string
  }>
}

export const revalidate = 60

// 静的パスを生成
export async function generateStaticParams() {
  const data = await client.get<MicroCMSListResponse<Portfolio>>({
    endpoint: 'portfolio',
    queries: {
      limit: 100,
    },
  })

  return data.contents.map((portfolio) => ({
    id: portfolio.id,
  }))
}

// メタデータを生成
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const portfolio = await client.get<Portfolio>({
    endpoint: 'portfolio',
    contentId: id,
  }).catch(() => null)

  if (!portfolio) {
    return {
      title: '実績が見つかりません | 合同会社Meicon',
    }
  }

  return {
    title: `${portfolio.title} | 合同会社Meicon`,
    description: portfolio.description,
  }
}

async function getPortfolio(id: string): Promise<Portfolio | null> {
  try {
    const portfolio = await client.get<Portfolio>({
      endpoint: 'portfolio',
      contentId: id,
    })
    return portfolio
  } catch (error) {
    console.error('Failed to fetch portfolio:', error)
    return null
  }
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { id } = await params
  const portfolio = await getPortfolio(id)

  if (!portfolio) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
    })
  }

  const categoryName = portfolio.category[0] || ''
  const CategoryIcon = categoryName === 'イベント企画・運営' ? Calendar : Monitor
  const categoryColor = categoryName === 'イベント企画・運営' ? 'blue' : 'green'

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="mb-4 sm:mb-6">
              <Link
                href="/portfolio"
                className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                実績一覧に戻る
              </Link>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <CategoryIcon className={`w-5 h-5 sm:w-6 sm:h-6 text-${categoryColor}-400`} />
              <span className={`px-2 sm:px-3 py-1 rounded-full bg-${categoryColor}-600 text-white text-xs sm:text-sm font-medium`}>
                {categoryName}
              </span>
              <span className="text-xs sm:text-sm text-gray-300">
                {formatDate(portfolio.date)}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              {portfolio.title}
            </h1>
            {portfolio.client && (
              <p className="text-base sm:text-lg text-blue-200">
                クライアント: {portfolio.client}
              </p>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            {portfolio.imageURL && (
              <div className="mb-8 sm:mb-10 md:mb-12 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={portfolio.imageURL.url}
                  alt={portfolio.title}
                  className="w-full h-auto"
                />
              </div>
            )}

            <div className="prose prose-slate prose-sm sm:prose-base md:prose-lg max-w-none">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">プロジェクト概要</h2>
              <div
                className="text-base sm:text-lg leading-relaxed text-gray-700"
                dangerouslySetInnerHTML={{ __html: portfolio.description }}
              />
            </div>

            <div className="mt-10 sm:mt-12 md:mt-16 pt-6 sm:pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-2">カテゴリー</h3>
                  <p className="text-sm sm:text-base text-gray-600">{categoryName}</p>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-2">実施時期</h3>
                  <p className="text-sm sm:text-base text-gray-600">{formatDate(portfolio.date)}</p>
                </div>
                {portfolio.client && (
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-2">クライアント</h3>
                    <p className="text-sm sm:text-base text-gray-600">{portfolio.client}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 sm:mt-10 md:mt-12 text-center">
              <Link
                href="/portfolio"
                className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                実績一覧に戻る
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
