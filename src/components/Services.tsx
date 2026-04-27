import { useEffect, useRef, useState } from "react"

const FISHING_PHOTO = "https://cdn.poehali.dev/projects/f8fa6a70-eadb-4f1e-b152-b8a5ace3b046/files/63c86d07-2c1a-4265-9a11-98f7bc9f9f3c.jpg"
const CARPENTRY_PHOTO = "https://cdn.poehali.dev/projects/f8fa6a70-eadb-4f1e-b152-b8a5ace3b046/files/aacecf9b-516f-4989-8c08-23b41ec10d84.jpg"
const FOOD_PHOTO = "https://cdn.poehali.dev/projects/f8fa6a70-eadb-4f1e-b152-b8a5ace3b046/files/d8759ea0-3dea-4a68-a588-6b83dec48a7b.jpg"

const crafts = [
  {
    title: "Рыболовство и охота",
    description: "Вепсы — мастера рыбного промысла на Онежском, Ладожском и Белом озёрах. Традиционные снасти, лодки-кижанки и секреты зимней рыбалки передавались из поколения в поколение.",
    photo: FISHING_PHOTO,
    alt: "Рыбаки на Онежском озере",
  },
  {
    title: "Плотницкое дело",
    description: "«Вепс с топором родился» — так говорят о мастерах деревянного зодчества. Резные наличники, расписные ворота и узорчатые причелины — живая летопись народного искусства.",
    photo: CARPENTRY_PHOTO,
    alt: "Резные деревянные наличники",
  },
  {
    title: "Национальная кухня",
    description: "Калитки с картошкой и пшеном, сканцы из ржаной муки, рыбник (kalakurnik) — запечённая в тесте рыба. Еда вепсов проста и питательна, как сама природа Русского Севера.",
    photo: FOOD_PHOTO,
    alt: "Вепсские калитки и рыбник",
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
        <div className="veps-ornament-strip mb-16"/>

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
            Уклад народа
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

        {/* Карточки ремёсел с фото */}
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {crafts.map((craft, index) => (
            <div
              key={craft.title}
              className={`group bg-background transition-all duration-1000 overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Фото */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={craft.photo}
                  alt={craft.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent"/>
              </div>
              {/* Текст */}
              <div className="p-8 lg:p-10">
                <h3 className="font-serif text-2xl text-foreground mb-4">{craft.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{craft.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Орнаментальная полоса снизу */}
        <div className="veps-ornament-strip mt-16"/>
      </div>
    </section>
  )
}
