import AnimatedSection from '@/components/AnimatedSection'

export default function News() {
  const newsItems = [
    {
      id: 1,
      date: "2024.03.15",
      category: "イベント",
      title: "社会起業家フォーラム2024開催のお知らせ",
      excerpt: "地域課題解決に取り組む起業家の皆様にお集まりいただき、ビジネスマッチングと情報交換の場を提供いたします。",
      content: `
        <p>この度、社会起業家フォーラム2024を開催することになりました。</p>
        <p>本フォーラムでは、地域課題解決に取り組む起業家100名にお集まりいただき、ビジネスマッチングと情報交換の場を提供いたします。</p>

        <h3>開催概要</h3>
        <ul>
          <li>日時：2024年4月20日（土）〜21日（日）</li>
          <li>会場：東京国際フォーラム</li>
          <li>参加費：無料</li>
          <li>定員：100名</li>
        </ul>

        <h3>プログラム</h3>
        <ul>
          <li>基調講演</li>
          <li>パネルディスカッション</li>
          <li>ピッチセッション</li>
          <li>ネットワーキング</li>
        </ul>

        <p>参加申し込みは3月末日まで受け付けております。</p>
      `
    },
    {
      id: 2,
      date: "2024.03.01",
      category: "制作実績",
      title: "NPO法人○○様のWebサイトを制作いたしました",
      excerpt: "子どもの貧困問題に取り組むNPO法人○○様のWebサイトを制作させていただきました。",
      content: `
        <p>子どもの貧困問題に取り組むNPO法人○○様のWebサイトを制作させていただきました。</p>

        <h3>プロジェクト概要</h3>
        <ul>
          <li>活動内容の可視化</li>
          <li>寄付者獲得のための仕組み構築</li>
          <li>ボランティア募集機能</li>
          <li>イベント情報の発信</li>
        </ul>

        <h3>主な機能</h3>
        <ul>
          <li>レスポンシブデザイン</li>
          <li>CMSによるコンテンツ管理</li>
          <li>オンライン寄付システム</li>
          <li>多言語対応</li>
        </ul>

        <p>サイト公開後、月間PV数が300%向上し、寄付者数も150%増加しました。</p>
      `
    },
    {
      id: 3,
      date: "2024.02.20",
      category: "お知らせ",
      title: "年末年始の営業についてのお知らせ",
      excerpt: "年末年始の営業時間についてお知らせいたします。",
      content: `
        <p>平素は格別のご高配を賜り、厚く御礼申し上げます。</p>
        <p>年末年始の営業について、下記の通りお知らせいたします。</p>

        <h3>年末年始休業期間</h3>
        <p>2023年12月29日（金）〜 2024年1月4日（木）</p>

        <h3>営業開始</h3>
        <p>2024年1月5日（金）より通常営業いたします。</p>

        <p>休業期間中にいただいたお問い合わせにつきましては、営業開始日以降に順次ご回答させていただきます。</p>
        <p>ご迷惑をおかけいたしますが、何卒ご理解のほどよろしくお願いいたします。</p>
      `
    },
    {
      id: 4,
      date: "2024.02.10",
      category: "イベント",
      title: "ビジネスプランコンテスト結果発表",
      excerpt: "2024年ビジネスプランコンテストの結果を発表いたします。",
      content: `
        <p>2024年1月に開催いたしましたビジネスプランコンテストの結果を発表いたします。</p>

        <h3>最優秀賞</h3>
        <p>株式会社○○様「AIを活用した地域見守りサービス」</p>

        <h3>優秀賞</h3>
        <ul>
          <li>NPO法人○○様「子ども食堂ネットワーク事業」</li>
          <li>○○大学チーム「学生起業家支援プラットフォーム」</li>
        </ul>

        <p>ご参加いただいた皆様、誠にありがとうございました。</p>
      `
    },
    {
      id: 5,
      date: "2024.01.25",
      category: "制作実績",
      title: "地域活性化プロジェクトサイトを公開しました",
      excerpt: "地方自治体の地域活性化プロジェクトのWebサイトを制作・公開いたしました。",
      content: `
        <p>地方自治体の地域活性化プロジェクトのWebサイトを制作・公開いたしました。</p>

        <h3>サイトの特徴</h3>
        <ul>
          <li>多言語対応（日英中韓）</li>
          <li>イベント管理機能</li>
          <li>参加者登録システム</li>
          <li>SNS連携</li>
        </ul>

        <p>地域の魅力を国内外に発信し、観光客誘致と地域経済活性化に貢献します。</p>
      `
    },
    {
      id: 6,
      date: "2024.01.15",
      category: "お知らせ",
      title: "新サービス「社会課題解決コンサルティング」開始",
      excerpt: "社会課題解決に特化したコンサルティングサービスを開始いたします。",
      content: `
        <p>この度、社会課題解決に特化したコンサルティングサービスを開始することになりました。</p>

        <h3>サービス内容</h3>
        <ul>
          <li>社会課題の分析・可視化</li>
          <li>解決策の立案・実行支援</li>
          <li>ステークホルダーとの連携支援</li>
          <li>効果測定・改善提案</li>
        </ul>

        <p>詳細については、お気軽にお問い合わせください。</p>
      `
    }
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