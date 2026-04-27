import { useEffect, useRef, useState } from "react"

const crafts = [
  {
    title: "Рыболовство и охота",
    description: "Вепсы — мастера рыбного промысла на Онежском, Ладожском и Белом озёрах. Традиционные снасти, лодки-кижанки и секреты зимней рыбалки передавались из поколения в поколение.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12c0 0 2-4 6-4s5 3 8 3 5-4 5-4"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17c0 0 2-3 5-3s5 2 8 2 5-3 5-3"/>
        <circle cx="19" cy="8" r="1.5" fill="currentColor"/>
      </svg>
    ),
    accent: "🎣",
  },
  {
    title: "Плотницкое дело",
    description: "«Вепс с топором родился» — так говорят о мастерах деревянного зодчества. Резные наличники, расписные ворота и узорчатые причелины — всё это живая летопись народного искусства.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
      </svg>
    ),
    accent: "🪵",
  },
  {
    title: "Национальная кухня",
    description: "Калитки с картошкой и пшеном, сканцы из ржаной муки, рыбник <em>(kalakurnik)</em> — запечённая в тесте рыба. Еда вепсов проста и питательна, как сама природа Русского Севера.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
      </svg>
    ),
    accent: "🫓",
  },
]

export function Services() {
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
    <section ref={sectionRef} id="services" className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/50">
      <div className="max-w-7xl mx-auto">
        {/* Орнаментальная полоса сверху */}
        <div className="veps-ornament-strip mb-16 animate-ornament-scroll"/>

        {/* Заголовок */}
        <div className="text-center mb-6">
          <p
            className={`text-xs tracking-[0.3em] uppercase text-terra mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Традиционный быт и ремёсла
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Что мы делаем
          </h2>
        </div>

        {/* Общая философия */}
        <p
          className={`text-center text-muted-foreground italic font-serif text-xl mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          «Всё, что нужно для жизни, дают лес и озеро»
        </p>

        {/* Карточки ремёсел */}
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {crafts.map((craft, index) => (
            <div
              key={craft.title}
              className={`group bg-background p-10 lg:p-12 transition-all duration-1000 hover:bg-card ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-forest transition-transform duration-500 group-hover:scale-110">
                  {craft.icon}
                </div>
                <span className="text-2xl">{craft.accent}</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{craft.title}</h3>
              <p
                className="text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: craft.description }}
              />
            </div>
          ))}
        </div>

        {/* Орнаментальная полоса снизу */}
        <div className="veps-ornament-strip mt-16"/>
      </div>
    </section>
  )
}
