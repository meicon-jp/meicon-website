import { createClient } from 'microcms-js-sdk'

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required')
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required')
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
})

// News型定義
export type News = {
  id: string
  title: string
  content: string
  category: 'お知らせ' | 'イベント' | 'メディア掲載' | 'その他'
  publishedAt: string
  createdAt: string
  updatedAt: string
  revisedAt: string
}

// Portfolio型定義
export type Portfolio = {
  id: string
  title: string
  description: string
  category: string[]
  date: string
  client?: string
  imageURL?: {
    url: string
    height: number
    width: number
  }
  publishedAt: string
  createdAt: string
  updatedAt: string
  revisedAt: string
}

// API Response型
export type MicroCMSListResponse<T> = {
  contents: T[]
  totalCount: number
  offset: number
  limit: number
}
