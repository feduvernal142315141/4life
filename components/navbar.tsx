"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  MessageCircle,
  Home,
  ShoppingBag,
  Heart,
  MessageSquare,
  HelpCircle,
  Mail,
  X,
} from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Fondo del navbar al scrollear (no tocamos desktop)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 28)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Cerrar con Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) setIsMobileMenuOpen(false)
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [isMobileMenuOpen])

  // Bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset"
    return () => { document.body.style.overflow = "unset" }
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: "/", label: "Inicio", icon: Home },
    { href: "/catalogo", label: "Catálogo", icon: ShoppingBag },
    { href: "/#beneficios", label: "Beneficios", icon: Heart },
    { href: "/#testimonios", label: "Testimonios", icon: MessageSquare },
    { href: "/#faq", label: "FAQ", icon: HelpCircle },
    { href: "/#contacto", label: "Contacto", icon: Mail },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[250ms] ease-out ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-[0_2px_16px_rgba(0,0,0,0.06)] border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px] lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group transition-transform hover:scale-[1.02]">
            <img src="/4life-logo.svg" alt="4Life" className="h-10 md:h-12 w-auto" />
          </Link>

          {/* Links desktop (sin cambios) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium relative group transition-colors ${
                  isScrolled
                    ? "text-foreground/80 hover:text-foreground"
                    : "text-foreground/90 hover:text-foreground drop-shadow-sm"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Botón Escríbenos desktop (sin cambios visuales) */}
          <div className="hidden md:block">
            <Button
              asChild
              size="lg"
              className="rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 animate-breathing"
            >
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Escríbenos
              </a>
            </Button>
          </div>

          {/* Hamburguesa mobile */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-foreground/5 transition-colors relative z-[60]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-6 h-0.5 mb-1.5 origin-center bg-foreground"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="w-6 h-0.5 mb-1.5 bg-foreground"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-6 h-0.5 origin-center bg-foreground"
              />
            </div>
          </button>
        </div>
      </div>

      {/* -------- Menú móvil optimizado -------- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer lateral con altura viewport real y scroll interno */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="
                fixed inset-y-0 right-0 h-[100dvh] w-[80%] max-w-[380px] z-[9999]
                bg-white bg-gradient-to-b from-[#f9fbff] to-white
                shadow-2xl rounded-l-3xl flex flex-col overflow-hidden
              "
            >
              {/* Header fijo */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
                <img src="/4life-logo.svg" alt="4Life" className="h-8 w-auto opacity-80" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Cerrar menú"
                  className="p-2 rounded-full hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5 text-slate-700" />
                </button>
              </div>

              {/* Contenido scrollable */}
              <div className="grow overflow-y-auto px-6 py-6 scrollbar-thin scrollbar-thumb-[#037ECC]/30 scrollbar-track-transparent">
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link, index) => {
                    const Icon = link.icon
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.06, duration: 0.22 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="
                            group relative flex items-center gap-3 text-lg font-medium
                            text-slate-800 transition-colors duration-200 py-2
                            hover:text-[#037ECC] active:text-[#037ECC]
                            after:content-[''] after:absolute after:left-0 after:bottom-0
                            after:h-[2px] after:w-0 after:bg-[#037ECC]
                            after:transition-all after:duration-300
                            group-hover:after:w-full active:after:w-full
                          "
                        >
                          <Icon className="w-5 h-5" />
                          {link.label}
                        </Link>
                      </motion.div>
                    )
                  })}
                </nav>
              </div>

              {/* CTA WhatsApp */}
              <div className="px-6 pb-8 border-t border-slate-100">
                <Button
                  asChild
                  size="lg"
                  className="w-full rounded-2xl bg-[#037ECC] hover:bg-[#079CFB] text-white shadow-lg shadow-[#037ECC]/30 hover:shadow-[#079CFB]/40 transition-all duration-300"
                >
                  <motion.a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Escríbenos por WhatsApp
                  </motion.a>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
