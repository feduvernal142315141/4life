import { Button } from "@/components/ui/button"
import { ArrowRight, FlaskConical, Zap, Brain, Clock } from "lucide-react"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 md:pt-28 pb-20 md:pb-28"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src="/health-supplements-with-smiling-person-corner.jpg"
          alt="Suplementos de salud con persona sonriente saludable"
          className="w-full h-full object-cover opacity-90 animate-hero-zoom"
          loading="eager"
        />

        {/* Translucent overlay with gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.90) 0%, rgba(232,250,255,0.88) 60%, rgba(224,242,254,0.82) 100%)",
          }}
        />

        {/* Grain texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Radial glow top-right (simulates sunlight) */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#0EA5E9]/20 via-transparent to-transparent blur-3xl pointer-events-none" />

        {/* Floating particles (bokeh effect) */}
        <div
          className="absolute top-[20%] right-[15%] w-3 h-3 bg-white/40 rounded-full blur-md animate-float opacity-60"
          style={{ animationDuration: "6s", animationDelay: "0s" }}
        />
        <div
          className="absolute top-[35%] right-[25%] w-2 h-2 bg-white/50 rounded-full blur-md animate-float opacity-50"
          style={{ animationDuration: "7s", animationDelay: "2s" }}
        />
        <div
          className="absolute top-[50%] right-[10%] w-2.5 h-2.5 bg-white/45 rounded-full blur-md animate-float opacity-55"
          style={{ animationDuration: "8s", animationDelay: "4s" }}
        />
        <div
          className="absolute bottom-[30%] left-[12%] w-3 h-3 bg-white/40 rounded-full blur-md animate-float opacity-60"
          style={{ animationDuration: "6.5s", animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-[50%] left-[8%] w-2 h-2 bg-white/50 rounded-full blur-md animate-float opacity-50"
          style={{ animationDuration: "7.5s", animationDelay: "3s" }}
        />

        {/* Inset shadow for depth */}
        <div className="absolute inset-0 shadow-[inset_0_4px_80px_rgba(0,0,0,0.06)]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-[1280px]">
        <div className="flex flex-col items-center text-center space-y-8 max-w-[700px] mx-auto">
          <h1 className="font-serif text-[42px] md:text-[56px] lg:text-[64px] font-bold text-balance leading-[1.1] text-[#0F172A] animate-in fade-in slide-in-from-bottom-4 duration-300">
            Bienestar que transforma tu vida
          </h1>

          <p
            className="text-lg md:text-xl text-[#334155] leading-relaxed text-pretty animate-in fade-in slide-in-from-bottom-4 duration-300"
            style={{ animationDelay: "100ms" }}
          >
            Productos con respaldo científico que promueven energía, claridad mental y un envejecimiento saludable.
          </p>

          <p
            className="text-base md:text-lg font-medium text-[#0369A1] animate-in fade-in duration-300"
            style={{ animationDelay: "200ms" }}
          >
            Vive con energía, claridad y confianza.
          </p>

          <div
            className="grid grid-cols-2 gap-3 w-full max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-300"
            style={{ animationDelay: "300ms" }}
          >
            {[
              { icon: FlaskConical, text: "Fórmulas con respaldo científico" },
              { icon: Zap, text: "Energía y vitalidad natural" },
              { icon: Brain, text: "Apoyo cognitivo y concentración" },
              { icon: Clock, text: "Bienestar y envejecimiento saludable" },
            ].map((badge, index) => (
              <div
                key={badge.text}
                className="flex items-center gap-2.5 p-4 rounded-xl border border-[#E2E8F0] bg-white/70 backdrop-blur-sm hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 animate-in fade-in slide-in-from-bottom-2 scale-95"
                style={{
                  animationDelay: `${380 + index * 80}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <badge.icon className="w-5 h-5 text-[#0369A1] flex-shrink-0" strokeWidth={1.5} />
                <span className="text-sm font-semibold text-[#0F172A] text-left">{badge.text}</span>
              </div>
            ))}
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 flex-wrap justify-center animate-in fade-in slide-in-from-bottom-4 duration-300"
            style={{ animationDelay: "700ms" }}
          >
            <Button
              asChild
              size="lg"
              className="rounded-2xl text-base font-semibold px-8 h-14 bg-[#0EA5E9] hover:bg-[#0369A1] shadow-[0_8px_16px_-6px_rgba(14,165,233,0.3)] hover:shadow-[0_12px_20px_-6px_rgba(14,165,233,0.4)] transition-all duration-200 hover:scale-[1.02] hover:-translate-y-0.5 group"
            >
              <a href="#catalogo" className="flex items-center gap-2">
                Explorar productos
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-2xl text-base font-semibold px-8 h-14 bg-white/80 backdrop-blur-sm border-2 border-white hover:bg-[#0EA5E9]/10 hover:border-[#0EA5E9] transition-all duration-200 hover:scale-[1.02] hover:-translate-y-0.5"
            >
              <a href="#beneficios">Conocer beneficios</a>
            </Button>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-in fade-in duration-500"
        style={{ animationDelay: "1000ms" }}
      >
        <div className="flex flex-col items-center gap-2 animate-bounce-slow">
          <span className="text-xs font-medium text-[#334155] uppercase tracking-wider">Descubre más</span>
          <ArrowRight className="w-4 h-4 text-[#334155] rotate-90" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[100px] md:h-[150px] pointer-events-none">
        <svg
          viewBox="0 0 1440 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#F8FAFC" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#F8FAFC" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path d="M0,60 C360,110 480,30 720,60 C960,90 1080,40 1440,70 L1440,150 L0,150 Z" fill="url(#waveGradient)" />
        </svg>
      </div>
    </section>
  )
}
