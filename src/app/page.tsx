import Hero from '@/components/Hero'
import MeiconWebSection from '@/components/MeiconWebSection'
import News from '@/components/News'
import AnimatedSection from '@/components/AnimatedSection'
import { Handshake, Megaphone, RefreshCw } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <MeiconWebSection />

      {/* 地域創生への貢献 */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                地域創生への貢献
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                スポンサー企業・団体の皆様と共に、持続可能な地域共創活動を支援しています
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Handshake className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Meiconイベント開催</h3>
                    <p className="text-slate-600">地域課題解決のための共創イベントを定期開催し、様々な立場の方々をつなげます</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Megaphone className="text-green-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">スポンサー企業のPR</h3>
                    <p className="text-slate-600">イベント内でスポンサー企業・団体の活動や取り組みを紹介し、地域での認知度向上をサポート</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <RefreshCw className="text-purple-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">持続的な活動運営</h3>
                    <p className="text-slate-600">スポンサー費用が次回イベントの開催資金となり、地域共創活動が継続的に発展</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">
                  地域創生にご協力いただける方法
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Meiconイベントスポンサー</h4>
                    <p className="text-sm text-blue-600 mt-1">地域共創イベントを支援し、企業PRの機会を得る</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800">Meicon-web制作依頼</h4>
                    <p className="text-sm text-green-600 mt-1">Webサイト制作を通じて地域共創活動を支援</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800">イベント参加・協力</h4>
                    <p className="text-sm text-purple-600 mt-1">地域課題解決のアイデア創出に参加・協力</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <News />
    </main>
  )
}