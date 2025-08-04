import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "How to Get Slime Out of Clothes - 7 Easy Methods",
  description:
    "Learn how to get slime out of clothes fast with 7 proven methods. Remove slime stains from cotton, wool, carpet and more in 3 simple steps.",
  generator: 'v0.dev',
  keywords: "slime removal, how to get slime out of clothes, remove slime stains, slime stain removal, fabric stain removal",
  authors: [{ name: "Slime Removal Guide" }],
  creator: "Slime Removal Guide",
  publisher: "Slime Removal Guide",
  metadataBase: new URL('https://yoursite.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "How to Get Slime Out of Clothes - 7 Easy Methods",
    description: "Learn how to get slime out of clothes fast with 7 proven methods. Remove slime stains from cotton, wool, carpet and more in 3 simple steps.",
    url: 'https://yoursite.com',
    siteName: 'Slime Removal Guide',
    images: [
      {
        url: 'https://yoursite.com/icon.png',
        width: 800,
        height: 600,
        alt: 'Slime Removal Guide',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Get Slime Out of Clothes - 7 Easy Methods',
    description: 'Learn how to get slime out of clothes fast with 7 proven methods. Remove slime stains from cotton, wool, carpet and more in 3 simple steps.',
    creator: '@slimeremoval',
    images: ['https://yoursite.com/icon.png'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/icon.png" />
        <meta name="google-site-verification" content="YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE" />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}