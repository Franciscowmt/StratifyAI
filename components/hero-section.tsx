"use client"

import { Bot, Brain, Cloud, Play, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-600 overflow-hidden">
      <div className="text-center text-white max-w-4xl px-6 z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Escucha la verdad de los territorios.
          <br />
          <span className="text-blue-300">Sin sesgos. Sin consultoras.</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Tecnología chilena de IA para encuestas automatizadas con voz clonada y análisis predictivo.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="flex items-center gap-2 text-lg">
            <Bot className="w-5 h-5 text-blue-300" />
            IA conversacional con voz clonada
          </div>
          <div className="flex items-center gap-2 text-lg">
            <Brain className="w-5 h-5 text-blue-300" />
            Modelos predictivos entrenados localmente
          </div>
          <div className="flex items-center gap-2 text-lg">
            <Cloud className="w-5 h-5 text-blue-300" />
            Infraestructura cloud integrada
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold border-0"
            onClick={() => scrollToSection("demo")}
          >
            <Play className="w-5 h-5 mr-2" />
            Ver Demo Interactiva
          </Button>
          <Button
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold transition-all duration-300"
            onClick={() => scrollToSection("contacto")}
          >
            <Calculator className="w-5 h-5 mr-2" />
            Cotizar Encuesta
          </Button>
        </div>
      </div>
    </section>
  )
}
