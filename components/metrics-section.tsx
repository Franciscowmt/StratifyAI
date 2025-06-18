export default function MetricsSection() {
  const metrics = [
    { value: "99.9%", label: "Precisión en Análisis" },
    { value: "<10ms", label: "Latencia de Procesamiento" },
    { value: "100%", label: "Tecnología Chilena" },
    { value: "24/7", label: "Disponibilidad" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Resultados Comprobados</h2>
          <p className="text-xl text-slate-600">Métricas que respaldan la efectividad de nuestra tecnología</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center p-8 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-blue-500 mb-4">{metric.value}</div>
              <div className="text-lg text-slate-600">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
