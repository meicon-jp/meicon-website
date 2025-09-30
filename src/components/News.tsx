export default function News() {
  const newsItems = [
    {
      date: "2025-09-12",
      category: "イベント",
      title: "テスト（準備中）",
      href: "#"
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
    <section id="news" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            お知らせ
          </h2>
        </div>

        <div className="space-y-6">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
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
              <a
                href={item.href}
                className="text-slate-800 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                {item.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}