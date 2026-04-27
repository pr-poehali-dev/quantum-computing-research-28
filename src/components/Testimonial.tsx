import { useEffect, useRef, useState } from "react"

const COSTUME_PHOTO = "https://cdn.poehali.dev/projects/f8fa6a70-eadb-4f1e-b152-b8a5ace3b046/files/4dbcba57-193d-41a4-922c-4d40f6876295.jpg"

const costumeSlides = [
  {
    title: "Северные вепсы",
    subtitle: "Юбочный комплект",
    description: "Традиционный костюм северных вепсов включал белую рубаху, клетчатую юбку (hame) и передник. Украшался вышивкой с геометрическими узорами.",
  },
  {
    title: "Южные вепсы",
    subtitle: "Сарафанный комплект",
    description: "Сарафан южных вепсов (sarafan) шился из домотканого полотна, богато украшался красными полосами — символом берегини и защиты от злых сил.",
  },
]

export function Testimonial() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.2 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="costume" className="py-32 lg:py-40 px-6 lg:px-12 bg-forest overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Анимированная орнаментальная полоса */}
        <div
          className={`h-1 mb-16 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
          style={{
            background: `repeating-linear-gradient(90deg, hsl(var(--terra) / 0.7) 0px, hsl(var(--terra) / 0.7) 8px, transparent 8px, transparent 16px, hsl(var(--linen) / 0.2) 16px, hsl(var(--linen) / 0.2) 24px, transparent 24px, transparent 32px)`,
            animation: "ornament-scroll 4s linear infinite"
          }}
        />

        <p className={`text-xs tracking-[0.3em] uppercase text-terra mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Костюм и орнамент
        </p>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Слайдер */}
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            {/* Имитация слайдера с цветными блоками */}
            <div className="relative aspect-[3/4] bg-wood/40 border border-linen/10 overflow-hidden">
              {/* Реальное фото костюма */}
              <img
                src={COSTUME_PHOTO}
                alt="Вепсский народный костюм"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wood/80 via-transparent to-transparent"/>

              {costumeSlides.map((slide, i) => (
                <div
                  key={slide.title}
                  className={`absolute bottom-0 left-0 right-0 p-8 transition-all duration-700 ${i === activeSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                >
                  <div className="relative z-10">
                    <p className="font-serif text-2xl text-linen mb-1">{slide.title}</p>
                    <p className="text-xs tracking-widest uppercase text-terra">{slide.subtitle}</p>
                  </div>
                </div>
              ))}

              {/* Кнопки переключения */}
              <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                {costumeSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    className={`w-2 h-2 rotate-45 transition-colors duration-300 ${i === activeSlide ? "bg-terra" : "bg-linen/30"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Пояснение справа */}
          <div
            className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-light text-linen mb-8 text-balance">
              Одежда как
              <span className="italic text-terra"> оберег</span>
            </h2>

            <p className="text-linen/70 leading-relaxed mb-8">
              {costumeSlides[activeSlide].description}
            </p>

            <div className="border-l-2 border-terra/60 pl-6 mb-10">
              <p className="font-serif text-lg text-linen/90 italic leading-relaxed">
                «Главный оберег — тканый пояс, а вышивка с символами берегини оберегает дом и семью»
              </p>
            </div>

            {/* Орнаментальные элементы */}
            <div className="flex gap-6 items-center">
              {["Берегиня", "Журавль (kurg)", "Солярный знак"].map((symbol) => (
                <div key={symbol} className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 border border-terra/40 rotate-45 flex items-center justify-center">
                    <div className="w-4 h-4 bg-terra/30 rotate-45"/>
                  </div>
                  <p className="text-[10px] tracking-wider uppercase text-linen/50">{symbol}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Нижняя орнаментальная полоса */}
        <div
          className="h-1 mt-16"
          style={{
            background: `repeating-linear-gradient(90deg, hsl(var(--terra) / 0.7) 0px, hsl(var(--terra) / 0.7) 8px, transparent 8px, transparent 16px, hsl(var(--linen) / 0.2) 16px, hsl(var(--linen) / 0.2) 24px, transparent 24px, transparent 32px)`,
          }}
        />

      </div>
    </section>
  )
}