'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/AnimatedSection'
import { Mail, MessageSquare, Clock, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'メール送信に失敗しました。')
      }

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'メール送信中にエラーが発生しました。')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section - モダンヒーロー */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
        {/* 背景エフェクト */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 pt-28">
          <AnimatedSection className="text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-full mb-8">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <span className="text-amber-400 text-sm font-semibold">Contact Us</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter">
              <span className="block mb-4">お気軽に</span>
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 bg-clip-text text-transparent">
                ご相談ください
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              イベント企画やWeb制作に関するご相談、お見積もりなど、<br className="hidden sm:block" />
              どんなことでもお気軽にお問い合わせください
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info & Form - モダンレイアウト */}
      <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
            {/* Contact Information */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                    Contact Info
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                    お問い合わせ先
                  </h2>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6">
                  <div className="group bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg flex-shrink-0">
                        <Mail className="text-white w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-slate-900 mb-2">Email</h4>
                        <a href="mailto:meicon@mei-con.jp" className="text-lg text-blue-600 hover:text-blue-700 transition-colors font-medium">
                          meicon@mei-con.jp
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg flex-shrink-0">
                        <Clock className="text-white w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-slate-900 mb-2">対応時間</h4>
                        <p className="text-lg text-slate-600">2営業日以内にご連絡いたします</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Process Flow */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-2 border-blue-200 rounded-3xl p-8 sm:p-10">
                  <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center">
                    <MessageSquare className="w-6 h-6 mr-3 text-blue-600" />
                    ご相談の流れ
                  </h3>
                  <div className="space-y-4">
                    {[
                      { num: '1', text: 'お問い合わせフォーム送信', color: 'blue' },
                      { num: '2', text: '2営業日以内にご連絡', color: 'blue' },
                      { num: '3', text: 'ヒアリング・ご提案', color: 'blue' },
                      { num: '4', text: 'お見積もり・契約', color: 'blue' }
                    ].map((step) => (
                      <div key={step.num} className="flex items-center group">
                        <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl w-10 h-10 flex items-center justify-center text-base font-black mr-4 flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-md">
                          {step.num}
                        </div>
                        <span className="text-base text-slate-700 font-medium">{step.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection>
              <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 sm:p-10 shadow-xl">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">
                  お問い合わせフォーム
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 border-2 border-emerald-300 text-emerald-800 px-5 py-4 rounded-2xl">
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-base mb-1">お問い合わせありがとうございます</p>
                          <p className="text-sm">内容を確認の上、2営業日以内にご連絡いたします。</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-300 text-red-800 px-5 py-4 rounded-2xl">
                      <p className="font-bold text-base mb-1">エラーが発生しました</p>
                      <p className="text-sm">{errorMessage}</p>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-black text-slate-900 mb-2">
                        お名前 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 text-base border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 font-medium"
                        placeholder="山田太郎"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-black text-slate-900 mb-2">
                        メールアドレス <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 text-base border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 font-medium"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-black text-slate-900 mb-2">
                      会社名・団体名（個人の方は記載不要）
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-base border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 font-medium"
                      placeholder="株式会社○○"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-black text-slate-900 mb-2">
                      お問い合わせ種類 <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-base border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 font-medium"
                    >
                      <option value="">選択してください</option>
                      <option value="event">イベント企画・運営について</option>
                      <option value="web">Web制作について</option>
                      <option value="consulting">コンサルティングについて</option>
                      <option value="partnership">協業・パートナーシップについて</option>
                      <option value="other">その他</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-black text-slate-900 mb-2">
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                      className="w-full px-4 py-3 text-base border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 font-medium"
                      placeholder="ご相談内容、ご質問などをお聞かせください。"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-xl font-black text-lg transition-all duration-300 shadow-lg ${
                      isSubmitting
                        ? 'bg-slate-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white hover:shadow-2xl hover:scale-[1.02]'
                    }`}
                  >
                    {isSubmitting ? '送信中...' : '送信する'}
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  )
}
