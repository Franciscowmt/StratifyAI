export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Generación de Flujos Conversacionales",
      description: "Diseñamos automáticamente conversaciones naturales adaptadas a tu objetivo y audiencia específica.",
    },
    {
      number: 2,
      title: "Llamado Automatizado con Voz Clonada",
      description:
        "Nuestro sistema realiza llamadas masivas utilizando voces clonadas segmentadas por perfil demográfico.",
    },
    {
      number: 3,
      title: "Transcripción y Análisis Emocional",
      description:
        "Procesamos las respuestas en tiempo real con análisis de sentimientos y extracción de insights clave.",
    },
    {
      number: 4,
      title: "Visualización en Dashboard",
      description: "Presentamos resultados en dashboards interactivos compatibles con Looker y Power BI.",
    },
  ]

  return (
    <section id="como-funciona" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Cómo Funciona</h2>
          <p className="text-xl text-slate-600">Proceso simple y automatizado para obtener insights reales</p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-8">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                {step.number}
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-lg text-slate-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
