"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Info } from "lucide-react"

export default function DemoSection() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null)
  const [progress, setProgress] = useState<{ [key: string]: number }>({})
  const [currentTime, setCurrentTime] = useState<{ [key: string]: string }>({})
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({})

  const demos = [
    {
      id: "demo1",
      profile: "María Elena - Región Metropolitana",
      description: "Joven Profesional, 32 años - Encuesta política",
      duration: "0:30",
      sample:
        '"Hola, mi nombre es María Elena y tengo 32 años, soy de Santiago. Quería contarle que me parece muy importante..."',
      accent: "Acento: Santiago centro, tono profesional y reflexivo",
      audioSrc: "/placeholder-audio.mp3", // Placeholder since we can't use the original URLs
    },
    {
      id: "demo2",
      profile: "Esperanza - Región de Ñuble",
      description: "Adulta Mayor, 67 años - Consulta municipal",
      duration: "0:39",
      sample: '"Buenos días, soy Esperanza, tengo 67 años y vivo en Chillán desde hace más de 40 años..."',
      accent: "Acento: Rural centro-sur, tono cálido y experiencia",
      audioSrc: "/placeholder-audio.mp3",
    },
    {
      id: "demo3",
      profile: "Carlos - Región de Antofagasta",
      description: "Trabajador Industrial, 40 años - Encuesta laboral",
      duration: "0:26",
      sample: '"Hola, soy Carlos, trabajo en la minera acá en Antofagasta desde hace 15 años..."',
      accent: "Acento: Norte grande, tono firme y directo",
      audioSrc: "/placeholder-audio.mp3",
    },
  ]

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${minutes}:${secs.toString().padStart(2, "0")}`
  }

  const handlePlayPause = (demoId: string) => {
    const audio = audioRefs.current[demoId]
    if (!audio) return

    if (currentlyPlaying && currentlyPlaying !== demoId) {
      // Stop other audio
      const currentAudio = audioRefs.current[currentlyPlaying]
      if (currentAudio) {
        currentAudio.pause()
        currentAudio.currentTime = 0
      }
    }

    if (audio.paused) {
      audio.play()
      setCurrentlyPlaying(demoId)
    } else {
      audio.pause()
      setCurrentlyPlaying(null)
    }
  }

  useEffect(() => {
    demos.forEach((demo) => {
      const audio = new Audio(demo.audioSrc)
      audioRefs.current[demo.id] = audio

      audio.addEventListener("timeupdate", () => {
        const progressPercent = (audio.currentTime / audio.duration) * 100
        setProgress((prev) => ({ ...prev, [demo.id]: progressPercent }))
        setCurrentTime((prev) => ({ ...prev, [demo.id]: formatTime(audio.currentTime) }))
      })

      audio.addEventListener("ended", () => {
        setCurrentlyPlaying(null)
        setProgress((prev) => ({ ...prev, [demo.id]: 0 }))
        setCurrentTime((prev) => ({ ...prev, [demo.id]: "0:00" }))
      })
    })

    return () => {
      Object.values(audioRefs.current).forEach((audio) => {
        audio.pause()
        audio.currentTime = 0
      })
    }
  }, [])

  return (
    <section id="demo" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Escúchalo por ti mismo</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Descubre cómo suenan nuestras encuestas con voz IA personalizada para diferentes perfiles chilenos
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {demos.map((demo) => (
            <div
              key={demo.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-blue-500/20 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-xl font-bold text-blue-400 mb-2">{demo.profile}</div>
              <div className="text-white/70 mb-6">{demo.description}</div>

              <div className="bg-black/40 rounded-xl p-6 mb-4">
                <button
                  onClick={() => handlePlayPause(demo.id)}
                  className={`w-16 h-16 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-all ${
                    currentlyPlaying === demo.id ? "animate-pulse" : ""
                  }`}
                >
                  {currentlyPlaying === demo.id ? (
                    <Pause className="w-6 h-6 text-white" />
                  ) : (
                    <Play className="w-6 h-6 text-white ml-1" />
                  )}
                </button>

                <div className="flex items-center gap-3">
                  <span className="text-sm text-white/80 min-w-[40px]">{currentTime[demo.id] || "0:00"}</span>
                  <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden cursor-pointer">
                    <div
                      className="h-full bg-blue-500 transition-all duration-100"
                      style={{ width: `${progress[demo.id] || 0}%` }}
                    />
                  </div>
                  <span className="text-sm text-white/80 min-w-[40px]">{demo.duration}</span>
                </div>
              </div>

              <div className="text-sm text-white/60 text-left">
                <div className="mb-2">
                  <strong>Muestra:</strong> {demo.sample}
                </div>
                <div className="italic">{demo.accent}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-white/5 rounded-xl p-8">
          <p className="text-lg mb-4">
            <Info className="inline w-5 h-5 text-blue-400 mr-2" />
            Estas son muestras reales de nuestro sistema de voz clonada
          </p>
          <p className="text-white/80">
            Cada voz está entrenada específicamente para conectar con diferentes segmentos demográficos chilenos
          </p>
        </div>
      </div>
    </section>
  )
}
