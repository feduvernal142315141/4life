import { CheckCircle, BookOpen, Share2, Zap } from "lucide-react"

const benefits = [
  {
    icon: CheckCircle,
    title: "Información clara y confiable",
    description: "Datos verificados y presentados de forma transparente",
  },
  {
    icon: BookOpen,
    title: "Catálogo ordenado y fácil de entender",
    description: "Navegación intuitiva para encontrar lo que necesitas",
  },
  {
    icon: Share2,
    title: "Integración con WhatsApp y redes",
    description: "Comparte información directamente desde la plataforma",
  },
  {
    icon: Zap,
    title: "Diseño profesional en cualquier dispositivo",
    description: "Experiencia optimizada para móvil, tablet y escritorio",
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-balance">¿Cómo te ayudamos?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Facilitamos el acceso a información de calidad sobre productos de salud
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-card border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:rotate-3 transition-transform">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg text-balance">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
