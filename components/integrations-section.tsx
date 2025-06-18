export default function IntegrationsSection() {
  const integrations = [
    { name: "AWS", subtitle: "Amazon Web Services", color: "text-orange-500" },
    { name: "Azure", subtitle: "Microsoft Cloud", color: "text-blue-600" },
    { name: "GCP", subtitle: "Google Cloud Platform", color: "text-blue-500" },
    { name: "Power BI", subtitle: "Microsoft Analytics", color: "text-yellow-500" },
    { name: "Looker", subtitle: "Google Business Intelligence", color: "text-blue-500" },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Infraestructura Enterprise</h2>
          <p className="text-xl text-slate-600">Integración perfecta con las plataformas líderes del mercado</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all hover:transform hover:scale-105 min-h-[140px] flex flex-col justify-center"
            >
              <div className={`text-3xl font-bold mb-2 ${integration.color}`}>{integration.name}</div>
              <div className="text-sm text-slate-600">{integration.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
