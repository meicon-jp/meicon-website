'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/AnimatedSection'

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
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Contact</h1>
            <p className="text-lg sm:text-xl text-blue-100">お問い合わせ</p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4 sm:mb-6 px-4">
                お気軽にご相談ください
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
                イベント企画やWeb制作に関するご相談、お見積もりなど、<br className="hidden sm:block" />
                どんなことでもお気軽にお問い合わせください。
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
            {/* Contact Information */}
            <AnimatedSection>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 sm:mb-8">
                  お問い合わせ先
                </h3>

                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2.5 sm:p-3 rounded-lg mr-3 sm:mr-4">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-800 mb-1">Email</h4>
                      <p className="text-sm sm:text-base text-gray-600">meicon@mei-con.jp</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 sm:mt-12 p-5 sm:p-6 bg-blue-50 rounded-lg">
                  <h4 className="text-sm sm:text-base font-bold text-slate-800 mb-3">ご相談の流れ</h4>
                  <div className="space-y-2.5 sm:space-y-3">
                    <div className="flex items-center">
                      <div className="bg-blue-600 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm font-bold mr-2.5 sm:mr-3 flex-shrink-0">1</div>
                      <span className="text-xs sm:text-sm text-gray-700">お問い合わせフォーム送信</span>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-blue-600 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm font-bold mr-2.5 sm:mr-3 flex-shrink-0">2</div>
                      <span className="text-xs sm:text-sm text-gray-700">2営業日以内にご連絡</span>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-blue-600 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm font-bold mr-2.5 sm:mr-3 flex-shrink-0">3</div>
                      <span className="text-xs sm:text-sm text-gray-700">ヒアリング・ご提案</span>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-blue-600 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm font-bold mr-2.5 sm:mr-3 flex-shrink-0">4</div>
                      <span className="text-xs sm:text-sm text-gray-700">お見積もり・契約</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection>
              <div className="bg-gray-50 p-6 sm:p-8 rounded-xl">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 sm:mb-8">
                  お問い合わせフォーム
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg">
                      <p className="text-sm sm:text-base font-semibold">お問い合わせありがとうございます。</p>
                      <p className="text-xs sm:text-sm">内容を確認の上、2営業日以内にご連絡いたします。</p>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg">
                      <p className="text-sm sm:text-base font-semibold">エラーが発生しました</p>
                      <p className="text-xs sm:text-sm">{errorMessage}</p>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5 sm:mb-2">
                        お名前 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="山田太郎"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5 sm:mb-2">
                        メールアドレス <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5 sm:mb-2">
                      会社名・団体名（個人の方は記載不要）
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="株式会社○○"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5 sm:mb-2">
                      お問い合わせ種類 <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
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
                    <label htmlFor="message" className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5 sm:mb-2">
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="ご相談内容、ご質問などをお聞かせください。"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 sm:py-4 px-5 sm:px-6 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700 hover:transform hover:scale-105'
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