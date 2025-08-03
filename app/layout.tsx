import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "How to Get Slime Out of Clothes - 7 Easy Methods for Fabric Stains",
  description:
    "Learn how to get slime out of clothes with 7 proven home recipes. Remove slime stains from cotton, wool, carpet and more in 3 simple steps.",
    generator: 'v0.dev',
    keywords: "slime removal, how to get slime out of clothes, remove slime stains, slime stain removal, fabric stain removal",
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
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}