import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://slateapparels.com"),
  title: "SLATE APPARELS | Apparel Manufacturer • Wholesaler • Exporter | New Delhi",
  description: "Slate Apparels is a high-precision apparel manufacturer, wholesaler, supplier and exporter based in Okhla, New Delhi. Specializing in hoodies, varsity jackets, puffers, streetwear, t-shirts, and private-label bulk manufacturing for global brands.",
  keywords: [
    "apparel manufacturer in Delhi",
    "clothing manufacturer Delhi",
    "apparel manufacturer India",
    "bulk clothing manufacturer India",
    "wholesale clothing manufacturer India",
    "private label clothing manufacturer",
    "hoodie manufacturer India",
    "t-shirt manufacturer India",
    "streetwear manufacturer India",
    "garment manufacturer Delhi",
    "clothing exporter India",
    "custom clothing manufacturer India"
  ],
  authors: [{ name: "Slate Apparels" }],
  creator: "Slate Apparels",
  publisher: "Slate Apparels",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "SLATE APPARELS | 3D Factory Tour & Manufacturing",
    description: "Tour the 3D manufacturing floor of Slate Apparels. High-precision bulk apparel production, private-label streetwear, and export solutions.",
    url: "https://slateapparels.com",
    siteName: "Slate Apparels",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Slate Apparels Industrial Manufacturing Floor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SLATE APPARELS | Apparel Manufacturer & Exporter",
    description: "Tour the 3D apparel factory of Slate Apparels. Quality-focused bulk apparel manufacturing in New Delhi.",
    images: ["https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&h=630&q=80"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ClothingManufacturer",
    "name": "Slate Apparels",
    "description": "High-precision bulk apparel manufacturer, wholesaler, supplier and exporter based in New Delhi.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 27, Basement, Street No. 19, Zakir Nagar, Okhla",
      "addressLocality": "New Delhi",
      "postalCode": "110025",
      "addressCountry": "IN"
    },
    "telephone": "+91-9599084873",
    "email": "slateapparels@gmail.com",
    "url": "https://slateapparels.com",
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bulk Apparel Manufacturing",
          "description": "Custom apparel cutting, stitching, finishing, and private labeling with 50,000 pieces/month capacity."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Private Label Manufacturing",
          "description": "Custom brand packaging, woven labels, neck tags, and custom cut & sew silhouettes."
        }
      }
    ]
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#050507] text-[#f8fafc] selection:bg-slate-700 selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
