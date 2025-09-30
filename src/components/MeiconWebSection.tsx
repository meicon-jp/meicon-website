import AnimatedSection from './AnimatedSection'
import { Monitor, Circle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function MeiconWebSection() {
  return (
    <section id="meicon-web" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div>
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-lg bg-purple-100 text-purple-600 mb-8">
                <Monitor size={40} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Meicon-web
              </h2>
              <span className="inline-block px-6 py-2 bg-purple-100 text-purple-700 rounded-full text-lg font-medium mb-6">
                持続可能Web制作
              </span>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Webサイト制作を通じてお客様の課題解決に貢献すると同時に、制作費用の一部がMeiconの地域共創活動の運営費に充てられます。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-slate-50 p-8 rounded-lg bg-white p-12 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-slate-800 mb-8">
                  料金体系
                </h3>
                <div className="grid grid-cols-1 gap-6">
                  <div className="text-center p-6 bg-purple-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600">5万円〜15万円</div>
                    <div className="text-lg text-slate-600 mt-2">制作費用</div>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600">2万円/月</div>
                    <div className="text-lg text-slate-600 mt-2">スポンサー費（管理運営費込み）</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-lg bg-white p-12 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                  ご依頼メリット
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Circle className="text-green-600 w-6 h-6 mr-4 flex-shrink-0 fill-current" />
                    <span className="text-lg text-slate-700">Meiconでの宣伝・PR</span>
                  </div>
                  <div className="flex items-center">
                    <Circle className="text-green-600 w-6 h-6 mr-4 flex-shrink-0 fill-current" />
                    <span className="text-lg text-slate-700">継続的なサイト管理</span>
                  </div>
                  <div className="flex items-center">
                    <Circle className="text-green-600 w-6 h-6 mr-4 flex-shrink-0 fill-current" />
                    <span className="text-lg text-slate-700">社会貢献企業イメージ</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/meicon-web"
                className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                詳細を見る
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}