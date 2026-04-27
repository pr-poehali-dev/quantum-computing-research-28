import { useEffect, useRef, useState } from "react"

export function Traditions() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.15 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="traditions"
      className="relative py-40 lg:py-56 px-6 lg:px-12 overflow-hidden"
    >
      {/* Параллакс-фон */}
      <div
        className="absolute inset-0 parallax-container"
        style={{
          backgroundImage: `linear-gradient(to bottom, hsl(var(--forest) / 0.85), hsl(var(--wood) / 0.9))`,
        }}
      />

      {/* Узор вышивки на фоне */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, hsl(var(--linen)) 0px, hsl(var(--linen)) 1px, transparent 1px, transparent 32px),
            repeating-linear-gradient(90deg, hsl(var(--linen)) 0px, hsl(var(--linen)) 1px, transparent 1px, transparent 32px)
          `,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Текст */}
          <div>
            <p
              className={`text-xs tracking-[0.3em] uppercase text-terra mb-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Традиции и праздники
            </p>
            <h2
              className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-linen mb-8 text-balance transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Древо жизни<br/>
              <span className="italic text-terra">Elon pu</span>
            </h2>

            <p
              className={`text-linen/75 leading-relaxed mb-8 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Главный межрегиональный праздник — фестиваль вепсской культуры <strong className="text-linen">«Древо жизни»</strong> (Elon pu),
              собирающий тысячи гостей из Карелии, Ленинградской и Вологодской областей.
              Здесь звучат вепсские песни, проходят мастер-классы по ткачеству и резьбе,
              а хороводы объединяют молодёжь и старейшин.
            </p>

            {/* Цитата на вепсском */}
            <div
              className={`border-l-2 border-terra/70 pl-6 mb-10 transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="font-serif text-xl text-linen/90 italic mb-2">
                «Kurg'ed letihe ka kezaki vaumičihes»
              </p>
              <p className="text-sm text-linen/50">
                Журавли улетели — так и лето кончилось
              </p>
            </div>

            {/* Теги-события */}
            <div
              className={`flex flex-wrap gap-3 transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {["Фестиваль Elon pu", "Хороводы", "Песни и сказания", "Мастер-классы"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 text-xs tracking-wider uppercase border border-linen/20 text-linen/60 hover:border-terra/60 hover:text-terra transition-all duration-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Векторный силуэт журавля */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1200 delay-300 ${
              isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
            }`}
          >
            <svg
              width="320"
              height="320"
              viewBox="0 0 320 320"
              fill="none"
              className="text-linen"
              style={{ filter: "drop-shadow(0 0 40px hsl(var(--terra) / 0.15))" }}
            >
              {/* Силуэт взлетающего журавля */}
              {/* Тело */}
              <ellipse cx="160" cy="160" rx="55" ry="22" transform="rotate(-25 160 160)" fill="currentColor" opacity="0.15"/>
              <ellipse cx="160" cy="160" rx="48" ry="18" transform="rotate(-25 160 160)" fill="currentColor" opacity="0.25"/>

              {/* Шея */}
              <path d="M185 148 Q200 110 210 90 Q215 75 208 68 Q200 62 195 72 Q188 90 182 125 Z" fill="currentColor" opacity="0.35"/>

              {/* Голова */}
              <ellipse cx="208" cy="65" rx="10" ry="8" fill="currentColor" opacity="0.4"/>
              {/* Клюв */}
              <path d="M216 63 L236 58 L216 67 Z" fill="currentColor" opacity="0.4"/>
              {/* Красная шапочка */}
              <ellipse cx="206" cy="59" rx="6" ry="4" fill="hsl(var(--terra))" opacity="0.7"/>

              {/* Левое крыло (поднято вверх) */}
              <path
                d="M155 155 Q120 120 80 90 Q60 76 55 82 Q50 90 70 100 Q100 115 135 148 Z"
                fill="currentColor"
                opacity="0.3"
              />
              <path
                d="M152 150 Q115 125 85 105 Q68 95 62 100 Q57 107 78 115 Q108 127 145 155 Z"
                fill="currentColor"
                opacity="0.2"
              />

              {/* Правое крыло (поднято вверх) */}
              <path
                d="M165 155 Q200 120 240 90 Q260 76 265 82 Q270 90 250 100 Q220 115 185 148 Z"
                fill="currentColor"
                opacity="0.3"
              />
              <path
                d="M168 150 Q205 125 235 105 Q252 95 258 100 Q263 107 242 115 Q212 127 175 155 Z"
                fill="currentColor"
                opacity="0.2"
              />

              {/* Ноги */}
              <path d="M148 178 L130 240 L125 255 M130 240 L120 255" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.35"/>
              <path d="M168 178 L155 240 L150 255 M155 240 L145 255" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.35"/>

              {/* Декоративные ромбы вокруг */}
              <rect x="50" y="50" width="12" height="12" transform="rotate(45 56 56)" fill="hsl(var(--terra))" opacity="0.2"/>
              <rect x="250" y="240" width="10" height="10" transform="rotate(45 255 245)" fill="hsl(var(--terra))" opacity="0.15"/>
              <rect x="40" y="240" width="8" height="8" transform="rotate(45 44 244)" fill="currentColor" opacity="0.1"/>
              <rect x="260" y="60" width="8" height="8" transform="rotate(45 264 64)" fill="currentColor" opacity="0.1"/>
            </svg>
          </div>

        </div>
      </div>
    </section>
  )
}
