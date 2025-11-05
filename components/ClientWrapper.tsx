"use client"

import { Analytics } from "@vercel/analytics/react"
import { ScrollToTop, ScrollToTopButton } from "@/components/scroll-to-top"

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollToTop />
      {children}
      <ScrollToTopButton />
      <Analytics />
    </>
  )
}
