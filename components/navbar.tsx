"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Home, ShoppingBag, Heart, MessageSquare, HelpCircle, Mail } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 28)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
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
          <Link href="/" className="flex items-center group transition-transform hover:scale-[1.02]">
            <img src="/4life-logo.svg" alt="4Life" className="h-10 md:h-12 w-auto" />
          </Link>

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

          <button
            className="md:hidden p-2 rounded-lg hover:bg-foreground/5 transition-colors relative z-[60]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`w-6 h-0.5 mb-1.5 origin-center ${
                  isScrolled ? "bg-foreground" : "bg-foreground drop-shadow-sm"
                }`}
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className={`w-6 h-0.5 mb-1.5 ${isScrolled ? "bg-foreground" : "bg-foreground drop-shadow-sm"}`}
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`w-6 h-0.5 origin-center ${isScrolled ? "bg-foreground" : "bg-foreground drop-shadow-sm"}`}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay oscuro con blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Panel drawer desde la derecha */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fixed inset-0 z-[9999] md:hidden bg-gradient-to-b from-white/95 to-sky-50/95 backdrop-blur-2xl"
            >
              <div className="flex flex-col h-full pt-20 pb-8 px-8">
                {/* Enlaces con animación escalonada */}
                <nav className="flex-1 flex flex-col gap-5">
                  {navLinks.map((link, index) => {
                    const Icon = link.icon
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08, duration: 0.3 }}
                      >
                        <Link
                          href={link.href}
                          className="group relative flex items-center gap-3 text-xl font-medium text-slate-800 hover:text-sky-600 transition-all duration-300 hover:translate-x-1 py-3"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span className="absolute left-0 w-1 h-0 bg-[#037ECC] transition-all duration-300 group-hover:h-full rounded-r-full" />
                          <Icon className="w-5 h-5 ml-2" />
                          {link.label}
                        </Link>
                      </motion.div>
                    )
                  })}
                </nav>

                {/* Botón "Escríbenos" fijo con relieve y brillo */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.08 + 0.1, duration: 0.3 }}
                >
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
                </motion.div>

                {/* Logo con brillo en la parte inferior */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="mt-8 flex justify-center"
                >
                  <img
                    src="/4life-logo.svg"
                    alt="4Life"
                    className="h-10 w-auto opacity-40 hover:opacity-60 hover:brightness-110 transition-all duration-200"
                  />
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
