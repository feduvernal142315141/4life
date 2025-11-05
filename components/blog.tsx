import { ArrowRight, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

const articles = [
  {
    category: "Guía",
    title: "Cómo elegir suplementos de forma responsable",
    excerpt: "Aprende a identificar productos de calidad y tomar decisiones informadas sobre tu salud.",
    image: "/person-reading-supplement-label-health.jpg",
  },
  {
    category: "Educación",
    title: "Guía rápida: etiquetas y porciones",
    excerpt: "Entiende la información nutricional y las dosis recomendadas en los suplementos.",
    image: "/supplement-nutrition-label-close-up.jpg",
  },
  {
    category: "FAQ",
    title: "Preguntas comunes sobre bienestar",
    excerpt: "Respuestas a las dudas más frecuentes sobre suplementación y salud integral.",
    image: "/wellness-consultation-professional.jpg",
  },
]

export function Blog() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Aprende más sobre bienestar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Artículos informativos para ayudarte a tomar mejores decisiones
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden bg-muted/30">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {article.category}
                </div>
                <h3 className="font-semibold text-xl line-clamp-2 text-balance">{article.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3 text-pretty">{article.excerpt}</p>
                <Button variant="link" className="p-0 h-auto text-primary group-hover:gap-2 transition-all">
                  Leer artículo
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
