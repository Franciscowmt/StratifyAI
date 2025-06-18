"use client"

import { Building2, Users, Landmark, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function UseCasesSection() {
  const useCases = [
    {
      icon: Landmark,
      title: "Partidos Políticos",
      subtitle: "Análisis electoral sin manipulación",
      features: [
        "Medición neutral de intención de voto",
        "Análisis emocional de propuestas",
        "Segmentación demográfica precisa",
        "Detección de temas sensibles por territorio",
      ],
    },
    {
      icon: Building2,
      title: "Municipios y Gobiernos",
      subtitle: "Participación ciudadana real",
      features: [
        "Consultas ciudadanas automatizadas",
        "Evaluación de políticas públicas",
        "Priorización de inversiones comunales",
        "Monitoreo de satisfacción de servicios",
      ],
    },
    {
      icon: Users,
      title: "Empresas y RRHH",
      subtitle: "Clima laboral sin filtros",
      features: [
        "Encuestas de clima organizacional",
        "Evaluación 360° automatizada",
        "Detección temprana de conflictos",
        "Análisis de retención de talento",
      ],
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="casos-uso" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Casos de Uso Reales</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Nuestra tecnología se adapta a las necesidades específicas de cada sector,
            <br />
            manteniendo la neutralidad y precisión en todos los casos.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden min-h-[500px] flex flex-col hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <useCase.icon className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{useCase.title}</h3>
                <p className="text-white/80">{useCase.subtitle}</p>
              </div>

              <div className="px-8 flex-grow">
                <ul className="space-y-4">
                  {useCase.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-3 text-white/90 border-b border-white/10 pb-3"
                    >
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 mt-auto">
                <Button
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                  onClick={() => scrollToSection("contacto")}
                >
                  Conocer más <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
