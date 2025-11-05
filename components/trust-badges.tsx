import { Shield, FileText, MessageCircle, Smartphone } from "lucide-react"

const badges = [
  {
    icon: Shield,
    title: "Enfoque científico",
    delay: "0ms",
  },
  {
    icon: FileText,
    title: "Información clara",
    delay: "60ms",
  },
  {
    icon: MessageCircle,
    title: "Asesoría por WhatsApp",
    delay: "120ms",
  },
  {
    icon: Smartphone,
    title: "Optimizado para móviles",
    delay: "180ms",
  },
]

export function TrustBadges() {
  return (
    <section className="py-12 border-y border-border bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-border bg-card hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              style={{ animationDelay: badge.delay }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <badge.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm font-medium text-center text-balance">{badge.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
