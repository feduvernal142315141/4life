"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Shield, Brain, Heart, Zap, Leaf, Sun, Droplets } from "lucide-react"
import Link from "next/link"

const productLines = [
  {
    id: 1,
    title: "Sistema Inmune",
    description: "Fortalece tus defensas naturales con fórmulas respaldadas científicamente",
    image: "/immune-support-supplement-bottle-white-background.jpg",
    icon: Shield,
  },
  {
    id: 2,
    title: "Energía y Vitalidad",
    description: "Impulsa tu rendimiento diario con nutrición completa y equilibrada",
    image: "/mens-multivitamin-supplement-bottle-white-backgrou.jpg",
    icon: Zap,
  },
  {
    id: 3,
    title: "Salud Cognitiva",
    description: "Apoya tu claridad mental, concentración y función cerebral óptima",
    image: "/brain-health-supplement-bottle-white-background.jpg",
    icon: Brain,
  },
  {
    id: 4,
    title: "Bienestar Cardiovascular",
    description: "Cuida tu corazón con ácidos grasos esenciales y nutrientes clave",
    image: "/omega-3-supplement-bottle-white-background.jpg",
    icon: Heart,
  },
  {
    id: 5,
    title: "Salud Digestiva",
    description: "Equilibra tu sistema digestivo para una mejor absorción de nutrientes",
    image: "/digestive-health-supplement-bottle-white-backgroun.jpg",
    icon: Leaf,
  },
  {
    id: 6,
    title: "Piel y Belleza",
    description: "Nutrición desde dentro para una piel radiante y saludable",
    image: "/skin-health-supplement-bottle-white-background.jpg",
    icon: Sparkles,
  },
  {
    id: 7,
    title: "Envejecimiento Saludable",
    description: "Mantén tu vitalidad y bienestar en cada etapa de la vida",
    image: "/anti-aging-supplement-bottle-white-background.jpg",
    icon: Sun,
  },
  {
    id: 8,
    title: "Hidratación y Recuperación",
    description: "Optimiza tu recuperación y mantén el equilibrio de tu cuerpo",
    image: "/hydration-supplement-bottle-white-background.jpg",
    icon: Droplets,
  },
]

export function ProductLines() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#ECFEFF] to-[#E0F2FE]">
      {/* Decorative blob */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Inset shadow for depth */}
      <div className="absolute inset-0 shadow-[inset_0_2px_8px_rgba(0,0,0,0.03)] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6 max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 text-balance">
            Explora nuestras líneas de bienestar respaldadas por la ciencia
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-pretty">
            Cada producto está diseñado para cuidar aspectos esenciales de tu salud —desde la energía y el sistema
            inmune, hasta la vitalidad, la piel y el envejecimiento saludable.
          </p>
          <p className="text-base text-slate-500">
            Conoce nuestras principales líneas de bienestar y elige la que más se adapte a ti.
          </p>
        </div>

        {/* Grid de líneas de productos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {productLines.map((line, index) => {
            const Icon = line.icon
            return (
              <div
                key={line.id}
                className="group bg-white rounded-2xl border border-slate-100 hover:border-primary/40 p-6 md:p-8 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_-8px_rgba(14,165,233,0.25)] hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-out"
                style={{
                  animation: "fadeInUp 0.6s ease-out forwards",
                  animationDelay: `${index * 80}ms`,
                  opacity: 0,
                }}
              >
                {/* Imagen */}
                <div className="aspect-square rounded-xl overflow-hidden mb-6 bg-slate-50">
                  <img
                    src={line.image || "/placeholder.svg"}
                    alt={line.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Contenido */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-lg text-slate-900">{line.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{line.description}</p>

                  {/* Flecha que aparece en hover */}
                  <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Explorar</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Badge informativo */}
        <div className="text-center mb-8">
          <p className="inline-flex items-center gap-2 text-sm text-slate-500 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200">
            <Sparkles className="w-4 h-4 text-primary" />
            Conoce más de cada línea y sus beneficios específicos
          </p>
        </div>

        {/* CTA final */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="rounded-full h-14 px-8 text-base shadow-[0_8px_24px_-4px_rgba(14,165,233,0.4)] hover:shadow-[0_12px_32px_-4px_rgba(14,165,233,0.5)] hover:-translate-y-0.5 transition-all duration-200"
          >
            <Link href="/catalogo" className="flex items-center gap-2">
              Ver catálogo completo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
