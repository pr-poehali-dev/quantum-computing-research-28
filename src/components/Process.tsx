import { useEffect, useRef, useState } from "react"

export function Process() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="language" className="py-32 lg:py-40 px-6 lg:px-12 bg-linen">
      <div className="max-w-7xl mx-auto">

        {/* Цитата о языке */}
        <div className={`max-w-3xl mx-auto text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs tracking-[0.3em] uppercase text-terra mb-6">Язык — душа народа</p>

          {/* Большая цавтата */}
          <blockquote className="font-serif text-2xl md:text-3xl font-light text-foreground leading-relaxed mb-8 text-balance">
            «Вепсский язык <em>(vepsän kel')</em> — один из самых архаичных родственников финского и карельского языков,
            насчитывающий до&nbsp;24 падежей»
          </blockquote>

          {/* Орнаментальный разделитель */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-terra/30"/>
            <svg width="16" height="16" viewBox="0 0 16 16" className="text-terra/50" fill="currentColor">
              <rect x="8" y="0.5" width="5" height="5" transform="rotate(45 8 0.5)"/>
              <rect x="8" y="9" width="4" height="4" transform="rotate(45 8 9)" opacity="0.5"/>
            </svg>
            <div className="h-px w-16 bg-terra/30"/>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-background/70 border border-border">
              <span className="w-2 h-2 bg-terra/60 rotate-45 inline-block"/>
              Занесён в «Красную книгу языков народов России»
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-background/70 border border-border">
              <span className="w-2 h-2 bg-forest/60 rotate-45 inline-block"/>
              Издаётся газета «Kodima» (Родина)
            </span>
          </div>
        </div>

        {/* Интерактивные фразы */}
        <div className={`grid md:grid-cols-2 gap-6 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground text-center md:col-span-2 mb-2">
            Послушайте вепсскую речь
          </p>
          {[
            { veps: "Tervhen!", rus: "Здравствуй!", emoji: "👋" },
            { veps: "Elon pu", rus: "Древо жизни", emoji: "🌳" },
            { veps: "Kurg", rus: "Журавль", emoji: "🦢" },
            { veps: "Kodima", rus: "Родина", emoji: "🏡" },
          ].map((phrase) => (
            <button
              key={phrase.veps}
              className="group flex items-center gap-4 px-6 py-5 bg-background border border-border hover:border-terra/60 hover:bg-background transition-all duration-500 text-left"
              onClick={() => {/* аудио будет добавлено позже */}}
            >
              <span className="text-2xl">{phrase.emoji}</span>
              <div>
                <p className="font-serif text-xl text-forest group-hover:text-terra transition-colors">{phrase.veps}</p>
                <p className="text-xs text-muted-foreground">{phrase.rus}</p>
              </div>
              <svg className="ml-auto w-5 h-5 text-muted-foreground group-hover:text-terra transition-colors opacity-60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}
