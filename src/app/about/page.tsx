import AnimatedSection from '@/components/AnimatedSection'

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Company Profile</h1>
            <p className="text-lg sm:text-xl text-blue-100">会社概要</p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4 px-4">
                会社情報
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white rounded-xl p-5 sm:p-6 md:p-8 shadow-md">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-5 sm:space-y-6">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-1.5 sm:mb-2">会社名</h3>
                    <p className="text-sm sm:text-base text-gray-600">合同会社Meicon</p>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-1.5 sm:mb-2">設立</h3>
                    <p className="text-sm sm:text-base text-gray-600">2025年9月</p>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-1.5 sm:mb-2">事業内容</h3>
                    <ul className="text-sm sm:text-base text-gray-600 space-y-1.5 sm:space-y-2">
                      <li>地域共創イベント「Meicon（メイコン）」の企画・運営</li>
                      <li>Webサイト制作・開発（Meicon-web（メイコンウェブ））</li>
                      <li>地域課題解決支援・コンサルティング</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-5 sm:space-y-6">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-1.5 sm:mb-2">所在地</h3>
                    <p className="text-sm sm:text-base text-gray-600">愛知県名古屋市千種区今池 5-33-2</p>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-1.5 sm:mb-2">連絡先</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      meicon@mei-con.jp
                    </p>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-1.5 sm:mb-2">代表者</h3>
                    <p className="text-sm sm:text-base text-gray-600">寺崎充来</p>
                    <p className="text-sm sm:text-base text-gray-600">芝田悠悟</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}