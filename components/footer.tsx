"use client"

import type React from "react"

import { MessageCircle, Facebook, Instagram, Mail, MapPin, Phone, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Subscribe:", email)
    setEmail("")
  }

  return (
    <footer className="relative overflow-hidden bg-gradient-to-t from-[#025f9a] via-[#037ecc]/80 to-[#079cfb]/30 text-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo + Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <img src="/4life-logo.svg" alt="4Life Logo" className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm text-gray-200 leading-relaxed max-w-xs">
              Creamos experiencias digitales que impulsan tu negocio. Diseño, desarrollo y tecnología con propósito.
            </p>
            <Link
              href="https://www.kodewave-solutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#079cfb] hover:text-white font-medium text-sm transition-all duration-200 group"
            >
              Visita KodeWave Solutions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl md:text-2xl font-semibold">Navegación</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Inicio" },
                { href: "/catalogo", label: "Catálogo" },
                { href: "#beneficios", label: "Beneficios" },
                { href: "#testimonios", label: "Testimonios" },
                { href: "#contacto", label: "Contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-[#079cfb] transition-colors duration-200 inline-block hover:translate-x-1 transform"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl md:text-2xl font-semibold">Contáctanos</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-all duration-200 group"
                >
                  <MapPin className="w-5 h-5 text-[#079cfb] group-hover:scale-110 transition-transform" />
                  Managua, Nicaragua
                </a>
              </li>
              <li>
                <a
                  href="tel:+505XXXXXXXX"
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-all duration-200 group"
                >
                  <Phone className="w-5 h-5 text-[#079cfb] group-hover:scale-110 transition-transform" />
                  +505 XXX XXXX
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-all duration-200 group"
                >
                  <MessageCircle className="w-5 h-5 text-[#079cfb] group-hover:scale-110 transition-transform" />
                  WhatsApp Directo
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@kodewave-solutions.com"
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-all duration-200 group"
                >
                  <Mail className="w-5 h-5 text-[#079cfb] group-hover:scale-110 transition-transform" />
                  contacto@kodewave-solutions.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-xl md:text-2xl font-semibold">Recibe actualizaciones</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Mantente informado sobre nuevos productos y promociones.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#079cfb] focus:ring-[#079cfb] rounded-xl"
                required
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#037ecc] to-[#079cfb] hover:scale-[1.03] transition-transform duration-200 rounded-xl shadow-lg"
              >
                Suscribirse
              </Button>
            </form>
            <div className="flex gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#079cfb] hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#079cfb] hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#079cfb] hover:scale-110 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-xs md:text-sm text-gray-400 text-center">
            <span>© 2025 | Hecho con</span>
            <span className="text-red-400 animate-pulse">❤️</span>
            <span>por</span>
            <a
              href="https://www.kodewave-solutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#079cfb] hover:text-white font-medium transition-all duration-200 hover:underline"
            >
              KodeWave Solutions
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
