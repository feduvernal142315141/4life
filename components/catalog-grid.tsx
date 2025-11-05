"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  MessageCircle,
  Shield,
  Eye,
  Sparkles,
  Activity,
  Droplets,
  Users,
  Flame,
  ChevronDown,
  X,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const categories = [
  { id: "todos", label: "Todos", icon: null },
  { id: "inmunidad", label: "Inmunidad", icon: Shield },
  { id: "vision", label: "Visión", icon: Eye },
  { id: "piel", label: "Piel/Colágeno", icon: Sparkles },
  { id: "metabolismo", label: "Metabolismo", icon: Activity },
  { id: "urinario", label: "Sistema urinario", icon: Droplets },
  { id: "hombres", label: "Hombres/Próstata", icon: Users },
  { id: "energia", label: "Energía/Vitalidad", icon: Flame },
]

const products = [
  {
    id: 1,
    name: "4Life Transfer Factor® PLUS",
    category: "inmunidad",
    categoryLabel: "Inmunidad",
    benefit: "Inmunidad avanzada con zinc",
    shortDescription: "Apoyo robusto al sistema inmune",
    fullDescription:
      "Fórmula Tri-Factor® con mezcla de ingredientes incluyendo cordyceps, beta-glucanos y zinc para un apoyo inmunológico completo.",
    price: 2400,
    image: "/4life-transfer-factor-plus-blue-bottle.jpg",
    ingredients: ["Cordyceps", "Beta-glucanos", "Zinc", "Fórmula Tri-Factor®"],
    usage: "Tomar 2 cápsulas al día con alimentos",
  },
  {
    id: 2,
    name: "Renuvo®",
    category: "energia",
    categoryLabel: "Energía/Envejecimiento",
    benefit: "Envejecimiento saludable & recuperación física",
    shortDescription: "Vitalidad, metabolismo y energía",
    fullDescription:
      "Apoyo a respuesta al estrés y bienestar integral. Fórmula diseñada para promover recuperación física y vitalidad diaria.",
    price: 1850,
    image: "/renuvo-supplement-bottle-recovery.jpg",
    ingredients: ["Complejo de recuperación", "Antioxidantes", "Adaptógenos"],
    usage: "Tomar 1 cápsula por la mañana y 1 por la noche",
  },
  {
    id: 3,
    name: "Vistari®",
    category: "vision",
    categoryLabel: "Visión",
    benefit: "Visión nítida",
    shortDescription: "Luteína, zeaxantina y vitaminas A–E",
    fullDescription:
      "Apoyo ocular con antioxidantes y bioflavonoides cítricos. Fórmula especializada para mantener la salud visual.",
    price: 1150,
    image: "/vistari-eye-health-supplement-bottle.jpg",
    ingredients: ["Luteína", "Zeaxantina", "Vitamina A", "Vitamina E", "Bioflavonoides cítricos"],
    usage: "Tomar 1 cápsula al día con alimentos",
  },
  {
    id: 4,
    name: "Transfer Factor® Collagen",
    category: "piel",
    categoryLabel: "Piel/Colágeno",
    benefit: "Piel, huesos y músculos",
    shortDescription: "Belleza y soporte estructural",
    fullDescription:
      "Colágeno + ingredientes para vitalidad y apariencia de la piel. Apoya la elasticidad y firmeza de la piel.",
    price: 1350,
    image: "/collagen-supplement-bottle-beauty.jpg",
    ingredients: ["Colágeno hidrolizado", "Vitamina C", "Biotina", "Ácido hialurónico"],
    usage: "Mezclar 1 medida con agua o jugo, una vez al día",
  },
  {
    id: 5,
    name: "KBU®",
    category: "urinario",
    categoryLabel: "Sistema urinario",
    benefit: "Soporte para el sistema urinario",
    shortDescription: "Con enfoque específico en bienestar urinario",
    fullDescription:
      "Complemento diario para el cuidado del tracto urinario. Fórmula especializada con ingredientes naturales.",
    price: 1280,
    image: "/kbu-urinary-health-supplement-bottle.jpg",
    ingredients: ["Extracto de arándano", "D-Manosa", "Probióticos", "Vitamina C"],
    usage: "Tomar 2 cápsulas al día con abundante agua",
  },
  {
    id: 6,
    name: "GluCoach®",
    category: "metabolismo",
    categoryLabel: "Metabolismo",
    benefit: "Metabolismo de la glucosa",
    shortDescription: "Apoya niveles saludables de azúcar en sangre",
    fullDescription:
      "Mezcla orientada a metabolismo y equilibrio. Ayuda a mantener niveles saludables de glucosa en sangre.",
    price: 1300,
    image: "/glucoach-glucose-metabolism-supplement.jpg",
    ingredients: ["Cromo", "Canela", "Ácido alfa-lipoico", "Berberina"],
    usage: "Tomar 1 cápsula antes de las comidas principales",
  },
  {
    id: 7,
    name: "Renewall®",
    category: "piel",
    categoryLabel: "Piel/Tópicos",
    benefit: "Cuidado de la piel sensible",
    shortDescription: "Con aloe, lavanda, manzanilla y pantenol",
    fullDescription:
      "Ideal para suavidad y confort; adecuada para todo tipo de piel. Crema hidratante con ingredientes naturales calmantes.",
    price: 690,
    image: "/renewall-skin-cream-jar.jpg",
    ingredients: ["Aloe vera", "Lavanda", "Manzanilla", "Pantenol", "Vitamina E"],
    usage: "Aplicar sobre piel limpia, masajeando suavemente hasta absorción",
  },
  {
    id: 8,
    name: "MalePro®",
    category: "hombres",
    categoryLabel: "Hombres/Próstata",
    benefit: "Salud del hombre",
    shortDescription: "Soporte prostático; antioxidantes e inmunidad",
    fullDescription:
      "Fórmula orientada al bienestar masculino integral. Apoya la salud prostática y el sistema inmunológico.",
    price: 1550,
    image: "/malepro-mens-health-supplement-bottle.jpg",
    ingredients: ["Saw Palmetto", "Zinc", "Selenio", "Licopeno", "Vitamina E"],
    usage: "Tomar 2 cápsulas al día con alimentos",
  },
]

const sortOptions = [
  { id: "relevance", label: "Relevancia" },
  { id: "price-asc", label: "Precio: Menor a Mayor" },
  { id: "price-desc", label: "Precio: Mayor a Menor" },
  { id: "popular", label: "Más buscados" },
]

export function CatalogGrid() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["todos"])
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("relevance")
  const [showFilters, setShowFilters] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const filtersPanelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (showFilters && window.innerWidth < 1024) {
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 60) {
          setShowFilters(false)
        }
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [showFilters, lastScrollY])

  const toggleCategory = (categoryId: string) => {
    if (categoryId === "todos") {
      setSelectedCategories(["todos"])
    } else {
      const newCategories = selectedCategories.includes(categoryId)
        ? selectedCategories.filter((c) => c !== categoryId)
        : [...selectedCategories.filter((c) => c !== "todos"), categoryId]

      setSelectedCategories(newCategories.length === 0 ? ["todos"] : newCategories)
    }
  }

  const filteredProducts = products
    .filter((product) => {
      const matchesCategory = selectedCategories.includes("todos") || selectedCategories.includes(product.category)
      const matchesSearch =
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.benefit.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price
        case "price-desc":
          return b.price - a.price
        case "popular":
          return b.id - a.id
        default:
          return 0
      }
    })

  const activeFilterChips = selectedCategories
    .filter((catId) => catId !== "todos")
    .map((catId) => categories.find((c) => c.id === catId))
    .filter(Boolean)

  return (
    <section className="py-16 lg:py-24 bg-white relative">
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none grain-texture" />

      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/20 z-40 lg:hidden pointer-events-none"
          />
        )}
      </AnimatePresence>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="sticky top-20 lg:top-24 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/50 -mx-6 lg:-mx-12 px-6 lg:px-12 py-4 mb-12 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Buscar por nombre o beneficio"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-xl border-slate-200 focus:border-[#0EA5E9] focus:ring-[#0EA5E9]"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="lg:hidden rounded-xl">
                Filtros
                <ChevronDown className={`ml-2 w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
              </Button>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9]"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>

              <Badge variant="outline" className="rounded-full px-3 py-1 text-xs border-slate-300">
                Moneda: Córdobas (NIO)
              </Badge>
            </div>
          </div>

          {!showFilters && activeFilterChips.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2 lg:hidden">
              {activeFilterChips.map((cat) => {
                const Icon = cat?.icon
                return (
                  <motion.button
                    key={cat?.id}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2, type: "spring" }}
                    onClick={() => toggleCategory(cat?.id || "")}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#0EA5E9] text-white shadow-sm"
                  >
                    {Icon && <Icon className="w-3 h-3" />}
                    {cat?.label}
                    <X className="w-3 h-3 ml-0.5" />
                  </motion.button>
                )
              })}
            </div>
          )}

          <AnimatePresence>
            {showFilters && (
              <motion.div
                ref={filtersPanelRef}
                initial={{ height: 0, opacity: 0, y: -10 }}
                animate={{ height: "auto", opacity: 1, y: 0 }}
                exit={{ height: 0, opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="mt-4 overflow-hidden lg:hidden relative z-50 bg-white rounded-xl p-4 shadow-lg border border-slate-200"
              >
                <button
                  onClick={() => setShowFilters(false)}
                  className="absolute top-2 right-2 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                  aria-label="Cerrar filtros"
                >
                  <X className="w-5 h-5 text-slate-600" />
                </button>

                <div className="flex flex-wrap gap-2 pt-6">
                  {categories.map((category) => {
                    const Icon = category.icon
                    const isSelected = selectedCategories.includes(category.id)
                    return (
                      <button
                        key={category.id}
                        onClick={() => toggleCategory(category.id)}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                          isSelected
                            ? "bg-[#0EA5E9] text-white shadow-md shadow-[#0EA5E9]/25"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        {Icon && <Icon className="w-4 h-4" />}
                        {category.label}
                      </button>
                    )
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-4 hidden lg:block">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = category.icon
                const isSelected = selectedCategories.includes(category.id)
                return (
                  <button
                    key={category.id}
                    onClick={() => toggleCategory(category.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isSelected
                        ? "bg-[#0EA5E9] text-white shadow-md shadow-[#0EA5E9]/25"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    {category.label}
                  </button>
                )
              })}
            </div>

            {!selectedCategories.includes("todos") && selectedCategories.length > 0 && (
              <div className="flex items-center gap-2 mt-3">
                <span className="text-xs text-slate-500">Filtros activos:</span>
                {selectedCategories.map((catId) => {
                  const cat = categories.find((c) => c.id === catId)
                  return (
                    <Badge key={catId} variant="secondary" className="rounded-full">
                      {cat?.label}
                      <button
                        onClick={() => toggleCategory(catId)}
                        className="ml-1 hover:text-destructive transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  )
                })}
              </div>
            )}
          </div>
        </div>

        <div className="mb-8 text-sm text-slate-600">
          Mostrando <span className="font-semibold text-slate-900">{filteredProducts.length}</span> productos
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">No se encontraron productos</h3>
            <p className="text-slate-600 mb-6">Intenta ajustar tus filtros o búsqueda</p>
            <Button
              onClick={() => {
                setSelectedCategories(["todos"])
                setSearchQuery("")
              }}
              variant="outline"
              className="rounded-xl"
            >
              Limpiar filtros
            </Button>
          </div>
        )}

        {filteredProducts.length > 0 && (
          <div className="mt-16 text-center">
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-[#0EA5E9]/25 hover:shadow-xl hover:shadow-[#0EA5E9]/30 hover:-translate-y-1 transition-all duration-300"
            >
              Ver catálogo completo
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

function ProductCard({ product, index }: { product: (typeof products)[0]; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.08 }}
      className="group relative bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-[0_12px_36px_-12px_rgba(2,132,199,0.15)] hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <Badge className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur-sm text-[#0369A1] border-0 shadow-sm">
          {product.categoryLabel}
        </Badge>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-serif font-semibold text-lg text-slate-900 mb-2 line-clamp-2 group-hover:text-[#0EA5E9] transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">{product.shortDescription}</p>
        </div>

        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-slate-900">C$ {product.price.toLocaleString()}</span>
        </div>

        <div className="flex flex-col gap-2 pt-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full rounded-xl bg-[#0EA5E9] hover:bg-[#0284C7] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group/btn">
                Ver detalles
                <motion.span className="ml-2" initial={{ x: 0 }} whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
                  →
                </motion.span>
              </Button>
            </DialogTrigger>
            <ProductDetailModal product={product} />
          </Dialog>

          <Button
            asChild
            variant="outline"
            className="w-full rounded-xl border-slate-200 hover:border-[#0EA5E9]/40 bg-transparent"
          >
            <a
              href={`https://wa.me/1234567890?text=Hola, me interesa ${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

function ProductDetailModal({ product }: { product: (typeof products)[0] }) {
  return (
    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="font-serif text-2xl md:text-3xl text-slate-900">{product.name}</DialogTitle>
        <DialogDescription className="text-base text-slate-600">{product.benefit}</DialogDescription>
      </DialogHeader>

      <div className="grid md:grid-cols-2 gap-8 mt-6">
        <div className="space-y-4">
          <div className="aspect-square rounded-2xl overflow-hidden bg-slate-50 border border-slate-100">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <Badge className="rounded-full">{product.categoryLabel}</Badge>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Descripción</h3>
            <p className="text-slate-600 leading-relaxed">{product.fullDescription}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Beneficios clave</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="rounded-full">
                {product.benefit}
              </Badge>
              <Badge variant="secondary" className="rounded-full">
                {product.shortDescription}
              </Badge>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Ingredientes principales</h3>
            <ul className="space-y-2">
              {product.ingredients.map((ingredient, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-200">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-bold text-slate-900">C$ {product.price.toLocaleString()}</span>
              <span className="text-sm text-slate-500">NIO</span>
            </div>
            <Button
              asChild
              size="lg"
              className="w-full rounded-xl bg-[#0EA5E9] hover:bg-[#0284C7] shadow-lg hover:shadow-xl transition-all"
            >
              <a
                href={`https://wa.me/1234567890?text=Hola, me interesa ${product.name} - C$ ${product.price}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Consultar disponibilidad
              </a>
            </Button>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="usage">
              <AccordionTrigger className="text-sm font-semibold">Cómo se usa</AccordionTrigger>
              <AccordionContent className="text-sm text-slate-600">{product.usage}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq">
              <AccordionTrigger className="text-sm font-semibold">Preguntas frecuentes</AccordionTrigger>
              <AccordionContent className="text-sm text-slate-600 space-y-2">
                <p>
                  <strong>¿Necesito receta médica?</strong>
                  <br />
                  No, este es un suplemento alimenticio. Sin embargo, consulta con tu médico si tienes condiciones
                  preexistentes.
                </p>
                <p>
                  <strong>¿Cuánto tiempo dura el producto?</strong>
                  <br />
                  Depende de la presentación y uso diario. Consulta la etiqueta para más detalles.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="disclaimer">
              <AccordionTrigger className="text-sm font-semibold">Nota importante</AccordionTrigger>
              <AccordionContent className="text-sm text-slate-600">
                Este contenido es informativo. Consulta siempre con un profesional de la salud. Los suplementos no
                sustituyen una dieta equilibrada ni tratamiento médico.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      </DialogContent>
  )
}