import AnimatedSection from './AnimatedSection'
import { Users, Check, Circle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function MeiconSection() {
  return (
    <section id="meicon" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="bg-white p-12 rounded-xl shadow-lg border border-slate-200">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-lg bg-blue-100 text-blue-600 mb-8">
                <Users size={40} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Meicon
              </h2>
              <span className="inline-block px-6 py-2 bg-blue-100 text-blue-700 rounded-full text-lg font-medium mb-6">
                地域共創イベント
              </span>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                名古屋で世代や立場を超えて集まり、地域課題やビジネスプランを話し合い共創する市民参加型コミュニティイベントです。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-slate-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                  参加対象者
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center">
                    <Check className="text-blue-600 w-6 h-6 mr-4 flex-shrink-0" />
                    <span className="text-lg text-slate-700">ビジネスプラン保有者</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-blue-600 w-6 h-6 mr-4 flex-shrink-0" />
                    <span className="text-lg text-slate-700">社会課題解決団体</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-blue-600 w-6 h-6 mr-4 flex-shrink-0" />
                    <span className="text-lg text-slate-700">NPO法人</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-blue-600 w-6 h-6 mr-4 flex-shrink-0" />
                    <span className="text-lg text-slate-700">起業予定者</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                  得られる価値
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Circle className="text-green-600 w-6 h-6 mr-4 flex-shrink-0 fill-current" />
                    <span className="text-lg text-slate-700">発表・宣伝の場</span>
                  </div>
                  <div className="flex items-center">
                    <Circle className="text-green-600 w-6 h-6 mr-4 flex-shrink-0 fill-current" />
                    <span className="text-lg text-slate-700">フィードバック・意見</span>
                  </div>
                  <div className="flex items-center">
                    <Circle className="text-green-600 w-6 h-6 mr-4 flex-shrink-0 fill-current" />
                    <span className="text-lg text-slate-700">協力者とのつながり</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/meicon"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
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