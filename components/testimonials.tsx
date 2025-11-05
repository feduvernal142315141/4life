"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "María G.",
    text: "Me encantó la claridad de la información y la atención por WhatsApp.",
    rating: 5,
  },
  {
    name: "Carlos R.",
    text: "Excelente catálogo, muy profesional y fácil de navegar desde el móvil.",
    rating: 5,
  },
  {
    name: "Ana L.",
    text: "La información es clara y me ayudó a entender mejor los productos.",
    rating: 5,
  },
  {
    name: "Roberto M.",
    text: "Responden rápido por WhatsApp y la web es muy completa.",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonios" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Experiencias reales de personas que confían en nosotros
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="p-8 lg:p-12 rounded-2xl border border-border bg-card shadow-sm">
                    <div className="flex gap-1 mb-6 justify-center">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-lg lg:text-xl text-center mb-6 text-balance leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <p className="text-center font-medium text-muted-foreground">— {testimonial.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-border hover:bg-border/80"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
