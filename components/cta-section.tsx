import { Calendar, Calculator, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Listo para escuchar a tu comunidad como nunca antes?</h2>
        <p className="text-xl md:text-2xl mb-12 text-white/90">
          Agenda una reunión personalizada y descubre cómo Stratify IA puede revolucionar tus encuestas
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 px-8 py-4 text-lg font-semibold"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Agendar Reunión
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
          >
            <Calculator className="w-5 h-5 mr-2" />
            Cotizar Encuesta
          </Button>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex items-center gap-3 text-lg">
              <Mail className="w-5 h-5" />
              contacto@stratifyia.cl
            </div>
            <div className="flex items-center gap-3 text-lg">
              <MapPin className="w-5 h-5" />
              Santiago, Chile - Tecnología 100% Nacional
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
