import { useEffect, useRef, useState } from "react"

const VILLAGE_PHOTO = "https://cdn.poehali.dev/projects/f8fa6a70-eadb-4f1e-b152-b8a5ace3b046/files/297d2fbc-df02-4bdd-8046-273a5ef86d61.jpg"

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

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Фото деревни */}
          <div
            className={`relative aspect-[4/5] overflow-hidden transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <img
              src={VILLAGE_PHOTO}
              alt="Вепсская деревня на берегу Онежского озера"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-terra/70" />
          </div>

          {/* Текст о языке */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-terra mb-6">Язык — душа народа</p>

            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-8 text-balance">
              Vepsän kel'
              <span className="block text-2xl md:text-3xl italic text-muted-foreground mt-2 font-light">
                Вепсский язык
              </span>
            </h2>

            <blockquote className="font-serif text-lg md:text-xl font-light text-foreground leading-relaxed mb-8 border-l-2 border-terra/50 pl-6">
              Один из самых архаичных родственников финского и карельского языков,
              насчитывающий до <strong>24 падежей</strong> — больше, чем в большинстве языков мира.
            </blockquote>

            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-16 bg-terra/30"/>
              <svg width="16" height="16" viewBox="0 0 16 16" className="text-terra/50" fill="currentColor">
                <rect x="8" y="0.5" width="5" height="5" transform="rotate(45 8 0.5)"/>
                <rect x="8" y="9" width="4" height="4" transform="rotate(45 8 9)" opacity="0.5"/>
              </svg>
              <div className="h-px w-16 bg-terra/30"/>
            </div>

            <div className="space-y-4 mb-10">
              {[
                { icon: "📕", text: "Занесён в «Красную книгу языков народов России»" },
                { icon: "📰", text: "Издаётся газета «Kodima» (Родина) на вепсском языке" },
                { icon: "🏫", text: "Преподаётся в школах Карелии и Ленинградской области" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">{item.icon}</span>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Слова на вепсском */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { veps: "Tervhen!", rus: "Здравствуй!" },
                { veps: "Elon pu", rus: "Древо жизни" },
                { veps: "Kurg", rus: "Журавль" },
                { veps: "Kodima", rus: "Родина" },
              ].map((phrase) => (
                <div key={phrase.veps} className="px-4 py-3 border border-border bg-background/50">
                  <p className="font-serif text-lg text-forest">{phrase.veps}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{phrase.rus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
