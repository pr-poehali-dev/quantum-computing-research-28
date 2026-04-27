import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20 overflow-hidden">
      {/* Фоновая текстура — имитация лесного полумрака */}
      <div className="absolute inset-0 bg-gradient-to-b from-wood/80 via-forest/70 to-background/95" />
      {/* Шум-текстура */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Надзаголовок */}
        <p
          className={`text-xs tracking-[0.35em] uppercase text-linen/70 mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Народы Карелии
        </p>

        {/* Главный заголовок */}
        <h1
          className={`font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tight text-linen mb-6 text-balance transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Вепсы
          <span className="block italic text-terra/90 font-light text-4xl md:text-5xl lg:text-6xl mt-3">Vepsläižed</span>
        </h1>

        {/* Подзаголовок */}
        <p
          className={`text-lg md:text-xl text-linen/75 max-w-2xl mx-auto leading-relaxed mb-10 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Коренные хранители лесов и озёр Северо-Запада России
        </p>

        {/* Орнамент журавля */}
        <div
          className={`flex justify-center mb-12 transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <svg width="120" height="40" viewBox="0 0 120 40" fill="none" className="text-terra/60">
            <line x1="0" y1="20" x2="44" y2="20" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 3"/>
            {/* Силуэт журавля */}
            <g transform="translate(60, 20)" fill="currentColor" opacity="0.8">
              <ellipse cx="0" cy="-2" rx="6" ry="3.5" transform="rotate(-20)"/>
              <ellipse cx="-8" cy="-5" rx="2" ry="1.2" transform="rotate(-40)"/>
              <ellipse cx="7" cy="-6" rx="1.2" ry="5" transform="rotate(15)"/>
              <ellipse cx="-7" cy="-6" rx="1.2" ry="5" transform="rotate(-15)"/>
              <ellipse cx="0" cy="4" rx="1.2" ry="5"/>
              <ellipse cx="2" cy="8" rx="1" ry="4" transform="rotate(10)"/>
              <ellipse cx="-2" cy="8" rx="1" ry="4" transform="rotate(-10)"/>
            </g>
            <line x1="76" y1="20" x2="120" y2="20" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 3"/>
          </svg>
        </div>

        {/* CTA */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#philosophy"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-terra text-linen text-xs tracking-widest uppercase hover:bg-terra/90 transition-all duration-500"
          >
            Узнать историю
            <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#language"
            className="inline-flex items-center gap-2 px-8 py-4 text-xs tracking-widest uppercase text-linen/70 border border-linen/30 hover:border-linen/60 hover:text-linen transition-all duration-500"
          >
            Язык народа
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-linen/40 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
