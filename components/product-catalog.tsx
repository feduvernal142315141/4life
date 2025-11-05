"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

const categories = ["Todos", "Inmunidad", "Energía", "Bienestar", "Otros"]

const products = [
  {
    id: 1,
    name: "Transfer Factor Plus",
    category: "Inmunidad",
    benefit: "Apoya el sistema inmunológico",
    image: "/immune-support-supplement-bottle-white-background.jpg",
  },
  {
    id: 2,
    name: "RiteStart Men",
    category: "Energía",
    benefit: "Energía y vitalidad diaria",
    image: "/mens-multivitamin-supplement-bottle-white-backgrou.jpg",
  },
  {
    id: 3,
    name: "RiteStart Women",
    category: "Energía",
    benefit: "Nutrición completa para mujeres",
    image: "/womens-multivitamin-supplement-bottle-white-backgr.jpg",
  },
  {
    id: 4,
    name: "ProTF",
    category: "Inmunidad",
    benefit: "Proteína con factor de transferencia",
    image: "/protein-powder-supplement-white-background.jpg",
  },
  {
    id: 5,
    name: "BioEFA",
    category: "Bienestar",
    benefit: "Ácidos grasos esenciales",
    image: "/omega-3-supplement-bottle-white-background.jpg",
  },
  {
    id: 6,
    name: "Enummi",
    category: "Bienestar",
    benefit: "Salud digestiva natural",
    image: "/digestive-health-supplement-bottle-white-backgroun.jpg",
  },
]

export function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const filteredProducts =
    selectedCategory === "Todos" ? products : products.filter((p) => p.category === selectedCategory)

  return (
    <section id="catalogo" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-balance">Nuestro Catálogo</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explora nuestra selección de productos con información clara y respaldo científico
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-2xl"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Grid de productos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* Imagen */}
              <div className="aspect-square overflow-hidden bg-muted/30">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Contenido */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">{product.benefit}</p>
                </div>

                <div className="flex flex-col gap-2">
                  <Button variant="default" className="w-full rounded-xl">
                    Más información
                  </Button>
                  <Button asChild variant="outline" className="w-full rounded-xl bg-transparent">
                    <a
                      href={`https://wa.me/1234567890?text=Hola, me interesa ${product.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Consultar por WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
