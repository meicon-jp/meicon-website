import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.mei-con.jp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "合同会社Meicon（メイコン）| 名古屋の地域共創コミュニティ",
    template: "%s | 合同会社Meicon（メイコン）",
  },
  description: "名古屋で世代や立場を超えて集まり、地域課題やビジネスプランを話し合い共創する市民参加型コミュニティ「Meicon（メイコン）」。イベント企画とWeb制作で挑戦とつながりを生み出します。",
  keywords: ["Meicon", "メイコン", "名古屋", "地域共創", "コミュニティ", "イベント企画", "Web制作", "名古屋市"],
  authors: [{ name: "合同会社Meicon（メイコン）" }],
  creator: "合同会社Meicon（メイコン）",
  publisher: "合同会社Meicon（メイコン）",
  formatDetection: {
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "合同会社Meicon（メイコン）",
    title: "合同会社Meicon（メイコン）| 名古屋の地域共創コミュニティ",
    description: "名古屋で世代や立場を超えて集まり、地域課題やビジネスプランを話し合い共創する市民参加型コミュニティ「Meicon」。イベント企画とWeb制作で挑戦とつながりを生み出します。",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "合同会社Meicon（メイコン）",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Google Search Console の確認が必要な場合はここに追加
    // google: "your-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className={`${notoSansJP.className} antialiased bg-black text-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}