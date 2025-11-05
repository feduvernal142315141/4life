import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿La web reemplaza mis redes sociales?",
    answer:
      "No, este catálogo está diseñado para acompañar y complementar tus redes sociales, proporcionando un espacio organizado donde tus contactos pueden encontrar información detallada de los productos.",
  },
  {
    question: "¿Cómo puedo pedir más información sobre un producto?",
    answer:
      "Puedes contactarnos directamente por WhatsApp haciendo clic en los botones de consulta, o a través de nuestras redes sociales. Estamos disponibles para resolver todas tus dudas.",
  },
  {
    question: "¿Puedo ver fichas técnicas de los productos?",
    answer:
      "Sí, en la sección de Ciencia & Seguridad encontrarás enlaces a las fichas técnicas y documentación oficial del fabricante para cada producto.",
  },
  {
    question: "¿El sitio funciona bien en dispositivos móviles?",
    answer:
      "Absolutamente. El sitio está diseñado con un enfoque mobile-first, lo que significa que está optimizado para ofrecer la mejor experiencia en smartphones y tablets.",
  },
  {
    question: "¿Los productos tienen respaldo científico?",
    answer:
      "Compartimos información y referencias generales proporcionadas por el fabricante. Siempre recomendamos consultar con un profesional de la salud antes de iniciar cualquier suplementación.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-balance">Preguntas frecuentes</h2>
            <p className="text-lg text-muted-foreground text-pretty">Resolvemos tus dudas más comunes</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-2xl px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-base pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
