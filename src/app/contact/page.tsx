'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Mail, Clock, CheckCircle2, ArrowRight } from 'lucide-react'

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
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/geometric.jpg"
            alt="幾何学模様"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-24">
          <div className="max-w-2xl">
            <p className="text-sm text-gray-400 tracking-widest mb-6">CONTACT US</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              お問い合わせ
            </h1>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              イベント企画やWeb制作に関するご相談など、
              <br />
              お気軽にお問い合わせください。
            </p>
            <a
              href="#form"
              className="inline-flex items-center px-8 py-4 bg-white text-black font-medium hover:bg-gray-200 transition-all duration-500"
            >
              フォームへ
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section id="form" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">お問い合わせ先</h2>

              <div className="space-y-6 mb-12">
                <div className="border border-gray-800 p-6">
                  <div className="flex items-center mb-3">
                    <Mail className="w-5 h-5 text-gray-400 mr-3" />
                    <h3 className="text-sm text-gray-400">Email</h3>
                  </div>
                  <a href="mailto:meicon@mei-con.jp" className="text-white hover:text-gray-400 transition-colors">
                    meicon@mei-con.jp
                  </a>
                </div>

                <div className="border border-gray-800 p-6">
                  <div className="flex items-center mb-3">
                    <Clock className="w-5 h-5 text-gray-400 mr-3" />
                    <h3 className="text-sm text-gray-400">対応時間</h3>
                  </div>
                  <p className="text-white">2営業日以内にご連絡いたします</p>
                </div>
              </div>

              <div className="border border-gray-800 p-6">
                <h3 className="text-lg font-bold text-white mb-6">ご相談の流れ</h3>
                <div className="space-y-4">
                  {[
                    'お問い合わせフォーム送信',
                    '2営業日以内にご連絡',
                    'ヒアリング・ご提案',
                    'お見積もり・契約'
                  ].map((step, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-8 h-8 bg-white text-black text-sm font-bold flex items-center justify-center mr-4">
                        {index + 1}
                      </div>
                      <span className="text-gray-300">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">お問い合わせフォーム</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="border border-green-600 bg-green-900/20 text-green-400 px-5 py-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold mb-1">お問い合わせありがとうございます</p>
                        <p className="text-sm">内容を確認の上、2営業日以内にご連絡いたします。</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="border border-red-600 bg-red-900/20 text-red-400 px-5 py-4">
                    <p className="font-bold mb-1">エラーが発生しました</p>
                    <p className="text-sm">{errorMessage}</p>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-800 text-white focus:border-white focus:outline-none transition-colors"
                      placeholder="山田太郎"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-800 text-white focus:border-white focus:outline-none transition-colors"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm text-gray-400 mb-2">
                    会社名・団体名
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-800 text-white focus:border-white focus:outline-none transition-colors"
                    placeholder="株式会社○○"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm text-gray-400 mb-2">
                    お問い合わせ種類 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-800 text-white focus:border-white focus:outline-none transition-colors"
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
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-800 text-white focus:border-white focus:outline-none transition-colors resize-none"
                    placeholder="ご相談内容、ご質問などをお聞かせください。"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 font-medium transition-all duration-500 flex items-center justify-center ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-white text-black hover:bg-gray-200'
                  }`}
                >
                  {isSubmitting ? '送信中...' : (
                    <>
                      送信する
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
