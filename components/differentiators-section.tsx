import { Flag, Mic, Database, Shield, X, Check } from "lucide-react"

export default function DifferentiatorsSection() {
  return (
    <section id="diferenciadores" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Las encuestas politizadas quedaron atrás</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Compara el método tradicional con la revolución de Stratify AI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center mb-16">
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-red-600 mb-6">Encuestas Tradicionales</h3>
            <ul className="space-y-3 text-left">
              <li className="flex items-center gap-3 text-slate-700">
                <X className="w-5 h-5 text-red-500" />
                Sesgos de encuestadores
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <X className="w-5 h-5 text-red-500" />
                Muestras pequeñas
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <X className="w-5 h-5 text-red-500" />
                Resultados manipulables
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <X className="w-5 h-5 text-red-500" />
                Costos elevados
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <X className="w-5 h-5 text-red-500" />
                Tiempos largos
              </li>
            </ul>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-slate-900">VS</div>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-green-600 mb-6">Stratify AI</h3>
            <ul className="space-y-3 text-left">
              <li className="flex items-center gap-3 text-slate-700">
                <Check className="w-5 h-5 text-green-500" />
                Neutralidad absoluta
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <Check className="w-5 h-5 text-green-500" />
                Muestras masivas
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <Check className="w-5 h-5 text-green-500" />
                Datos objetivos
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <Check className="w-5 h-5 text-green-500" />
                Costo reducido
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <Check className="w-5 h-5 text-green-500" />
                Resultados inmediatos
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Flag,
              title: "Tecnología 100% Chilena",
              description: "Desarrollada por ingenieros chilenos con estándares globales para el mercado local",
            },
            {
              icon: Mic,
              title: "Voz Clonada Segmentada",
              description: "Voces personalizadas por región, edad y género para mayor naturalidad",
            },
            {
              icon: Database,
              title: "Modelos Entrenados Localmente",
              description: "IA entrenada con datos chilenos para mayor precisión cultural",
            },
            {
              icon: Shield,
              title: "Privacidad y Seguridad",
              description: "Manejo responsable de datos sensibles con infraestructura enterprise",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
