import AnimatedSection from '@/components/AnimatedSection'
import { Calendar, Monitor, Check } from 'lucide-react'

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: "社会起業家フォーラム2024",
      category: "イベント企画・運営",
      description: "地域課題解決に取り組む起業家100名が参加するイベントを企画・運営",
      details: [
        "参加者数: 100名",
        "期間: 2日間",
        "会場: 東京国際フォーラム",
        "協力企業: 10社"
      ],
      technologies: [],
      results: [
        "新規ビジネスマッチング: 15件",
        "投資決定案件: 3件",
        "参加者満足度: 95%"
      ]
    },
    {
      id: 2,
      title: "NPO法人○○様 Webサイト",
      category: "Web制作",
      description: "活動内容の可視化と寄付者獲得を目的としたサイトを制作",
      details: [
        "ページ数: 15ページ",
        "制作期間: 2ヶ月",
        "レスポンシブ対応",
        "CMS導入"
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "WordPress"],
      results: [
        "月間PV数: 300%向上",
        "寄付者数: 150%増加",
        "問い合わせ: 200%増加"
      ]
    },
    {
      id: 3,
      title: "ビジネスプランコンテスト",
      category: "イベント企画・運営",
      description: "若手起業家のマッチングイベントを企画・運営",
      details: [
        "応募者数: 200名",
        "ファイナリスト: 10組",
        "審査員: 業界専門家5名",
        "賞金総額: 500万円"
      ],
      technologies: [],
      results: [
        "起業実現: 8件",
        "資金調達成功: 5件",
        "メディア掲載: 15媒体"
      ]
    },
    {
      id: 4,
      title: "地域活性化プロジェクト サイト",
      category: "Web制作",
      description: "地方自治体の地域活性化プロジェクトの情報発信サイト",
      details: [
        "多言語対応（日英中韓）",
        "イベント管理機能",
        "参加者登録システム",
        "SNS連携"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      results: [
        "観光客増加: 40%",
        "イベント参加者: 年間3,000名",
        "地域事業者登録: 150社"
      ]
    },
    {
      id: 5,
      title: "社会課題解決アイデアソン",
      category: "イベント企画・運営",
      description: "学生と社会人が協力して社会課題解決のアイデアを生み出すワークショップ",
      details: [
        "参加者数: 80名（学生・社会人混合）",
        "チーム数: 16チーム",
        "期間: 2日間集中型",
        "メンター: 企業経営者8名"
      ],
      technologies: [],
      results: [
        "実用化アイデア: 12件",
        "継続プロジェクト: 5件",
        "参加者の起業: 3件"
      ]
    },
    {
      id: 6,
      title: "スタートアップ企業 コーポレートサイト",
      category: "Web制作",
      description: "AIテクノロジーを活用したスタートアップ企業のコーポレートサイト制作",
      details: [
        "モダンなデザイン",
        "技術説明ページ",
        "投資家向け情報",
        "採用ページ"
      ],
      technologies: ["Next.js", "TypeScript", "Framer Motion", "Vercel"],
      results: [
        "資金調達成功: 2億円",
        "採用応募者: 500%増加",
        "メディア取材: 20件"
      ]
    }
  ]

  const eventItems = portfolioItems.filter(item => item.category === "イベント企画・運営")
  const webItems = portfolioItems.filter(item => item.category === "Web制作")

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-blue-600 text-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h1>
            <p className="text-xl text-blue-100">実績・事例</p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              これまでの実績
            </h2>
          </AnimatedSection>
        </div>
      </section>

      {/* Event Portfolio */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <Calendar className="text-blue-600 w-8 h-8 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                  イベント企画・運営 実績
                </h2>
              </div>
            </div>
          </AnimatedSection>

          <div className="space-y-12">
            {eventItems.map((item, index) => (
              <AnimatedSection key={item.id}>
                <div className="bg-white rounded-xl p-8 shadow-md">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-4">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-slate-800 mb-3">イベント詳細</h4>
                        <ul className="space-y-2">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center">
                              <span className="text-blue-600 font-bold mr-3">•</span>
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold text-slate-800 mb-3">成果・効果</h4>
                      <ul className="space-y-2 mb-6">
                        {item.results.map((result, idx) => (
                          <li key={idx} className="flex items-center">
                            <Check className="text-green-600 w-4 h-4 mr-3" />
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="w-12 h-12 mx-auto mb-2 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Calendar className="text-blue-600 w-6 h-6" />
                        </div>
                        <p className="text-center text-blue-800 font-medium">イベント企画・運営</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Web Portfolio */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <Monitor className="text-green-600 w-8 h-8 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                  Web制作 実績
                </h2>
              </div>
            </div>
          </AnimatedSection>

          <div className="space-y-12">
            {webItems.map((item, index) => (
              <AnimatedSection key={item.id}>
                <div className="bg-white rounded-xl p-8 shadow-md border">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-4">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-slate-800 mb-3">プロジェクト詳細</h4>
                        <ul className="space-y-2">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center">
                              <span className="text-blue-600 font-bold mr-3">•</span>
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {item.technologies.length > 0 && (
                        <div className="mb-6">
                          <h4 className="text-lg font-bold text-slate-800 mb-3">使用技術</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold text-slate-800 mb-3">成果・効果</h4>
                      <ul className="space-y-2 mb-6">
                        {item.results.map((result, idx) => (
                          <li key={idx} className="flex items-center">
                            <Check className="text-green-600 w-4 h-4 mr-3" />
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="w-12 h-12 mx-auto mb-2 bg-green-100 rounded-lg flex items-center justify-center">
                          <Monitor className="text-green-600 w-6 h-6" />
                        </div>
                        <p className="text-center text-green-800 font-medium">Web制作</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}