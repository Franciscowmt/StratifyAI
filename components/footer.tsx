"use client"

import { Mic } from "lucide-react"

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 text-3xl font-bold mb-6">
            <Mic className="w-8 h-8 text-blue-500" />
            Stratify AIK
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {[
              { label: "Por qué Stratify", id: "diferenciadores" },
              { label: "Casos de Uso", id: "casos-uso" },
              { label: "Cómo Funciona", id: "como-funciona" },
              { label: "Demo", id: "demo" },
              { label: "Contacto", id: "contacto" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/80 hover:text-blue-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60">
            © 2025 Stratify AI. Tecnología chilena para el mundo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
