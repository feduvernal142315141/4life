"use client"

import { ChevronRight } from "lucide-react"
import Link from "next/link"

export function CatalogHero() {
  return (
    <section className="relative min-h-[40vh] lg:min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#ECFEFF] to-[#E0F2FE]">
      {/* Grain overlay */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none grain-texture" />

      {/* Blob decorativo */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#0EA5E9] rounded-full blur-[120px] opacity-[0.08] pointer-events-none" />

      {/* Sombra radial blanca central */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6)_0%,transparent_70%)] pointer-events-none" />

      {/* Onda superior SVG */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z" fill="#F8FAFC" opacity="0.5" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 py-16 lg:py-20">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-slate-600 mb-8 justify-center" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#0EA5E9] transition-colors">
            Inicio
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900 font-medium">Catálogo</span>
        </nav>

        {/* Contenido central */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 text-balance">
            Catálogo de productos
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-pretty max-w-2xl mx-auto">
            Selección curada con enfoque en bienestar, claridad y respaldo científico.
          </p>

          {/* Badge legal discreto */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-slate-200/50 text-xs text-slate-500">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Información con fines informativos. No sustituye consejo médico.
          </div>
        </div>
      </div>

      {/* Onda inferior SVG */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0 C150,60 350,80 600,70 C850,60 1050,40 1200,20 L1200,120 L0,120 Z"
            fill="white"
            className="drop-shadow-sm"
          />
        </svg>
      </div>
    </section>
  )
}
