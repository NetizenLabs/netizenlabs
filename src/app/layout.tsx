import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Netizen Labs | AI Content Studio",
    template: "%s | Netizen Labs",
  },
  description: "Netizen Labs is an AI content studio. We build short-form video channels, digital products and books — and produce AI video for brands. Our series passed 1.2M views in 30 days.",
  keywords: ["AI Content Studio", "AI Video Production", "AI UGC", "Short-Form Video", "YouTube Shorts", "Facebook Reels", "Faceless Channels", "Digital Products", "AI Video Creator"],
  authors: [{ name: "Abu Sufyan" }],
  creator: "Netizen Labs",
  metadataBase: new URL("https://netizenlabs.online"),
  openGraph: {
    title: "Netizen Labs | AI Content Studio",
    description: "We build AI content brands people actually watch — and produce AI video for brands.",
    url: "https://netizenlabs.online",
    siteName: "Netizen Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Netizen Labs | AI Content Studio",
    description: "We build AI content brands people actually watch — and produce AI video for brands.",
    creator: "@WebToolkitPro",
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

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Netizen Labs",
    "url": "https://netizenlabs.online",
    "logo": "https://netizenlabs.online/logo.png",
    "description": "AI content studio building short-form video channels, digital products and books, and producing AI video and UGC creatives for brands.",
    "sameAs": [
      "https://www.youtube.com/@orangecatchaos11",
      "https://safyan1.gumroad.com",
      "https://twitter.com/WebToolkitPro"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does Netizen Labs do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Netizen Labs is an AI content studio. We research, produce and publish our own short-form video channels and pages on YouTube and Facebook, sell digital planners, organisers and books, and produce AI video for brands."
        }
      },
      {
        "@type": "Question",
        "name": "Can Netizen Labs make videos for my brand?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We offer AI short-form video production, AI UGC and ad creatives, and channel building — using the same workflow behind our own channels, including a Facebook series that passed 1.2 million views in 30 days. Contact us through the site and we reply within 24 hours."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I buy Netizen Labs products?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our fillable planners and organisers — including the CareNest caregiver range and the Multi-Day Shaadi Planner — are sold in our Gumroad store, and our large-print puzzle and coloring books are on Amazon KDP. Every paid product has a free sample."
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
