import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TrustBadges } from "@/components/trust-badges"
import { ProductLines } from "@/components/product-lines"
import { Benefits } from "@/components/benefits"
import { Science } from "@/components/science"
import { Testimonials } from "@/components/testimonials"
import { Blog } from "@/components/blog"
import { FAQ } from "@/components/faq"
import { CTAFinal } from "@/components/cta-final"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TrustBadges />
      <ProductLines />
      <Benefits />
      <Science />
      <Testimonials />
      <Blog />
      <FAQ />
      <CTAFinal />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
