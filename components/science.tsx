import { FileText, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Science() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-4">
              <FileText className="w-8 h-8 text-accent" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
              Transparencia y responsabilidad
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto">
              Compartimos información clara y referencias generales del fabricante. Consulta siempre con un profesional
              de la salud antes de iniciar cualquier suplementación.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Fichas técnicas</h3>
                  <p className="text-sm text-muted-foreground">Información detallada de cada producto</p>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Ver documentos
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Referencias científicas</h3>
                  <p className="text-sm text-muted-foreground">Estudios y respaldo del fabricante</p>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Ver referencias
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
