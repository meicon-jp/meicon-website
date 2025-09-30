import AnimatedSection from '@/components/AnimatedSection'
import { Handshake, Monitor, RefreshCw } from 'lucide-react'

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-blue-600 text-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Company Profile</h1>
            <p className="text-xl text-blue-100">会社概要</p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                会社情報
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">会社名</h3>
                    <p className="text-gray-600">Meicon LLC.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">設立</h3>
                    <p className="text-gray-600">2025年9月</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">事業内容</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>地域共創イベント「Meicon」の企画・運営</li>
                      <li>Webサイト制作・開発（Meicon-web）</li>
                      <li>地域課題解決支援・コンサルティング</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">活動エリア</h3>
                    <p className="text-gray-600">名古屋市を中心とした愛知県内</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">所在地</h3>
                    <p className="text-gray-600">愛知県名古屋市千種区今池 5-33-2</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">連絡先</h3>
                    <p className="text-gray-600">
                      meicon@mei-con.jp
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">代表者</h3>
                    <p>寺崎充来</p>
                    <p>芝田優吾</p>
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