import { Navbar } from "@/components/navbar"
import { CatalogHero } from "@/components/catalog-hero"
import { CatalogGrid } from "@/components/catalog-grid"
import { CTAFinal } from "@/components/cta-final"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata = {
  title: "Catálogo de Productos | Bienestar con Respaldo Científico",
  description:
    "Explora nuestra selección curada de productos de bienestar con enfoque en claridad y respaldo científico. Inmunidad, visión, piel, metabolismo y más.",
}

export default function CatalogoPage() {
  return (
    <main className="relative">
      <Navbar />
      <div className="pt-20 lg:pt-24">
        <CatalogHero />
        {/* Este componente es cliente */}
        <CatalogGrid />
      </div>
      <CTAFinal />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
