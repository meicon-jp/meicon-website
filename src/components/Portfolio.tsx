import { Calendar, Monitor } from 'lucide-react'

export default function Portfolio() {
  const portfolioItems = [
    {
      title: "社会起業家フォーラム2024",
      description: "地域課題解決に取り組む起業家100名が参加するイベントを企画・運営",
      type: "イベント"
    },
    {
      title: "NPO法人○○様 Webサイト",
      description: "活動内容の可視化と寄付者獲得を目的としたサイトを制作",
      type: "Web制作"
    },
    {
      title: "ビジネスプランコンテスト",
      description: "若手起業家のマッチングイベントを企画・運営",
      type: "イベント"
    }
  ]

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            実績・事例
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="h-48 bg-gradient-to-br from-blue-600 to-slate-800 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="mb-2">
                    {item.type === "イベント" ? <Calendar size={48} /> : <Monitor size={48} />}
                  </div>
                  <span className="text-sm font-medium">{item.type}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}