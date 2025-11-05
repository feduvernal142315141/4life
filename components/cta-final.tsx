import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function CTAFinal() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background animado */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 animate-breathing" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            ¿Te gustaría conocer más?
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground text-pretty">
            Escríbenos y recibe información clara desde tus redes
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-2xl text-base px-8 shadow-lg hover:shadow-xl transition-shadow animate-breathing"
          >
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Hablar por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
