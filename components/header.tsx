"use client"

import { useState, useEffect } from "react"
import { Mic } from "lucide-react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/98 backdrop-blur-sm shadow-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div
          className={`flex items-center gap-2 text-2xl font-bold transition-colors duration-300 ${
            scrolled ? "text-slate-900" : "text-white"
          }`}
        >
          <Mic className={`w-7 h-7 transition-colors duration-300 ${scrolled ? "text-blue-600" : "text-white"}`} />
          <span>Stratify IA</span>
        </div>

        <nav className="hidden md:flex gap-8">
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
              className={`font-medium transition-all duration-300 px-3 py-2 rounded-md ${
                scrolled
                  ? "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                  : "text-white hover:text-blue-300 hover:bg-white/10"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
