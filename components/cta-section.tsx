"use client"

import { Calendar, Calculator, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import Modal from "@/components/ui/modal"

export default function CTASection() {
  useEffect(() => {
    if (!formRef.current) return;
    // Bitrix24 contact form script
    const script = document.createElement('script')
    script.setAttribute('data-b24-form', 'inline/24/z6o481')
    script.setAttribute('data-skip-moving', 'true')
    script.innerHTML = `
      (function(w,d,u){
        var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
        var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
      })(window,document,'https://cdn.bitrix24.es/b30395951/crm/form/loader_24.js');
    `
    formRef.current.appendChild(script)

    return () => {
      // Cleanup: remove script when component unmounts
      if (formRef.current && script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  const formRef = useRef<HTMLDivElement>(null)
  const [highlight, setHighlight] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const calendlyToken = process.env.NEXT_PUBLIC_CALENDLY_ACCESS_TOKEN

  const handleHighlight = () => {
    setHighlight(true)
    setTimeout(() => setHighlight(false), 1000)
  }

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Listo para escuchar a tu comunidad como nunca antes?</h2>
        {/* Spacer between title and columns */}
        <div className="mb-8" />
        {/* Two-column layout for buttons and Bitrix24 form */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-12 items-start md:items-stretch">
          {/* Left column: Subheading and Buttons */}
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            <p className="text-xl md:text-2xl mb-2 text-white/90">
              Agenda una reunión personalizada y descubre cómo Stratify AI puede revolucionar tus encuestas
            </p>
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 px-8 py-4 text-lg font-semibold"
              onClick={() => setIsModalOpen(true)}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Agendar Reunión
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
              onClick={handleHighlight}
            >
              <Calculator className="w-5 h-5 mr-2" />
              Cotizar Encuesta
            </Button>
          </div>
          {/* Right column: Bitrix24 form */}
          <div className="w-full md:w-1/2 flex justify-center items-start">
            <div
              ref={formRef}
              style={{width: '100%'}}
              className={highlight ? 'ring-4 ring-yellow-400 transition duration-300' : 'transition duration-300'}
            />
          </div>
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

      {/* Calendly Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3 className="text-xl font-bold mb-4 text-slate-900">Agenda tu reunión</h3>
        <iframe
          src={`https://calendly.com/ti-grupowmp?access_token=${calendlyToken}`}
          title="Calendly Booking"
          className="w-full h-[600px] border-0 rounded-lg"
          allow="camera; microphone; fullscreen"
        />
      </Modal>
    </section>
  )
}
