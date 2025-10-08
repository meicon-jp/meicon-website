import AnimatedSection from './AnimatedSection'
import { Users, Monitor, Check, Circle } from 'lucide-react'

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            私たちのサービス
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            地域共創と持続可能な支援システム
          </p>
        </AnimatedSection>

        <div className="space-y-16">
          {/* Meiconイベント */}
          <AnimatedSection>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-blue-100 text-blue-600 mb-6">
                  <Users size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Meicon
                </h3>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  地域共創イベント
                </span>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed text-center">
                名古屋で世代や立場を超えて集まり、地域課題やビジネスプランを話し合い共創する市民参加型コミュニティイベントです。
              </p>

              <div className="space-y-6">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">
                    参加対象者
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center text-sm">
                      <Check className="text-blue-600 w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-slate-700">ビジネスプラン保有者</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="text-blue-600 w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-slate-700">社会課題解決団体</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="text-blue-600 w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-slate-700">NPO法人</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="text-blue-600 w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-slate-700">起業予定者</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">
                    得られる価値
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Circle className="text-green-600 w-3 h-3 mr-2 mt-0.5 flex-shrink-0 fill-current" />
                      <span className="text-slate-700">発表・宣伝の場</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Circle className="text-green-600 w-3 h-3 mr-2 mt-0.5 flex-shrink-0 fill-current" />
                      <span className="text-slate-700">フィードバック・意見</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Circle className="text-green-600 w-3 h-3 mr-2 mt-0.5 flex-shrink-0 fill-current" />
                      <span className="text-slate-700">協力者とのつながり</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Meicon-web */}
          <AnimatedSection>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-purple-100 text-purple-600 mb-6">
                  <Monitor size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Meicon-web
                </h3>
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  持続可能Web制作
                </span>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed text-center">
                Webサイト制作を通じてお客様の課題解決に貢献すると同時に、制作費用の一部がMeiconの地域共創活動の運営費に充てられます。
              </p>

              <div className="space-y-6">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-4">
                    料金体系
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <div className="text-lg font-bold text-purple-600">5万円〜15万円</div>
                      <div className="text-xs text-slate-600">制作費用</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <div className="text-lg font-bold text-purple-600">2万円/月</div>
                      <div className="text-xs text-slate-600">スポンサー費</div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">
                    ご依頼メリット
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Circle className="text-green-600 w-3 h-3 mr-2 mt-0.5 flex-shrink-0 fill-current" />
                      <span className="text-slate-700">Meiconでの宣伝・PR</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Circle className="text-green-600 w-3 h-3 mr-2 mt-0.5 flex-shrink-0 fill-current" />
                      <span className="text-slate-700">継続的なサイト管理</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Circle className="text-green-600 w-3 h-3 mr-2 mt-0.5 flex-shrink-0 fill-current" />
                      <span className="text-slate-700">社会貢献企業イメージ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}