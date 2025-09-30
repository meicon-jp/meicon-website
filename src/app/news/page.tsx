import AnimatedSection from '@/components/AnimatedSection'

export default function News() {
  const newsItems = [
    {
      id: 1,
      date: "2025-09-12",
      category: "イベント",
      title: "テスト（準備中）",
      excerpt: "",
      content: "テスト"
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "イベント":
        return "bg-blue-600"
      case "制作実績":
        return "bg-green-600"
      default:
        return "bg-gray-600"
    }
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-blue-600 text-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">News</h1>
            <p className="text-xl text-blue-100">お知らせ・最新情報</p>
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                最新のお知らせ
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {newsItems.map((item, index) => (
              <AnimatedSection key={item.id}>
                <article className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <span className="text-sm text-gray-600 min-w-[100px]">
                        {item.date}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-white text-xs font-medium ${getCategoryColor(
                          item.category
                        )}`}
                      >
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {item.excerpt}
                  </p>

                  <div
                    className="prose prose-slate max-w-none text-gray-700"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        公開日: {item.date}
                      </span>
                      <button className="text-blue-600 hover:text-blue-800 font-medium">
                        詳細を見る →
                      </button>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>

          {/* Pagination */}
          <AnimatedSection>
            <div className="mt-16 flex justify-center">
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
                  前へ
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                  1
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
                  2
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
                  3
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
                  次へ
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}