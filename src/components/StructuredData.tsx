export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "合同会社Meicon",
    alternateName: "合同会社Meicon",
    url: "https://www.mei-con.jp",
    logo: "https://www.mei-con.jp/icon.png",
    description:
      "名古屋で世代や立場を超えて集まり、地域課題やビジネスプランを話し合い共創する市民参加型コミュニティ「Meicon」。イベント企画とWeb制作で挑戦とつながりを生み出します。",
    address: {
      "@type": "PostalAddress",
      addressLocality: "名古屋市",
      addressRegion: "愛知県",
      addressCountry: "JP",
    },
    areaServed: {
      "@type": "City",
      name: "名古屋市",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["Japanese"],
    },
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "名古屋市",
        addressRegion: "愛知県",
        addressCountry: "JP",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
