import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { ClientWrapper } from "@/components/ClientWrapper"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "4Life - Bienestar con respaldo científico",
  description:
    "Catálogo informativo de productos para la salud. Información clara y profesional que acompaña tus redes sociales.",
  keywords: "productos salud, bienestar, suplementos, inmunidad, catálogo informativo",
  openGraph: {
    title: "4Life - Bienestar con respaldo científico",
    description: "Catálogo informativo de productos para la salud",
    type: "website",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white text-foreground`}
      >
        {/* 👇 Todo lo que use hooks se mueve dentro del ClientWrapper */}
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  )
}
