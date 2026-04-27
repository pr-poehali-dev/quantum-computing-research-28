import { useEffect, useRef, useState } from "react"

export function Philosophy() {
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
    <section ref={sectionRef} id="philosophy" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Заголовок секции */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs tracking-[0.3em] uppercase text-terra mb-4">История и происхождение</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 text-balance">
            Кто такие <span className="italic">вепсы?</span>
          </h2>
          {/* Орнаментальный разделитель */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-24 bg-terra/30"/>
            <svg width="20" height="20" viewBox="0 0 20 20" className="text-terra/60" fill="currentColor">
              <rect x="10" y="1" width="7" height="7" transform="rotate(45 10 1)"/>
            </svg>
            <div className="h-px w-24 bg-terra/30"/>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto text-lg">
            Вепсы <em className="text-foreground">(vepsläižed)</em> — один из древнейших прибалтийско-финских народов
            России, известный с VI века. Сегодня около <strong className="text-foreground">4 500 человек</strong> сохраняют
            уникальный язык и традиции, живя на стыке Карелии, Ленинградской и Вологодской областей.
            С 2006 года вепсы включены в Перечень коренных малочисленных народов РФ.
          </p>
        </div>

        {/* Три счётчика-региона */}
        <div className={`grid md:grid-cols-3 gap-0 bg-border mb-24 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {[
            { region: "Карелия", desc: "Вепсская национальная волость", icon: "🌲" },
            { region: "Ленинградская область", desc: "Бокситогорский и Лодейнопольский р-ны", icon: "🏡" },
            { region: "Вологодская область", desc: "Бабаевский и Вытегорский р-ны", icon: "🏔" },
          ].map((item, i) => (
            <div
              key={item.region}
              className="bg-background p-10 text-center border-r last:border-r-0 border-border hover:bg-linen/50 transition-colors duration-500"
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <p className="font-serif text-2xl text-forest mb-2">{item.region}</p>
              <p className="text-xs text-muted-foreground tracking-wide">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Таймлайн истории */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs tracking-[0.3em] uppercase text-terra mb-10 text-center">Хронология</p>
          <div className="relative">
            {/* Линия таймлайна */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-border"/>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { year: "VI век", text: "Первые упоминания предков вепсов в летописях" },
                { year: "IX век", text: "Племя «весь» участвует в основании Древнерусского государства" },
                { year: "1931", text: "Создание вепсской письменности и национальных школ" },
                { year: "1994", text: "Образование Вепсской национальной волости в Карелии" },
              ].map((item, i) => (
                <div key={item.year} className="relative flex flex-col items-center text-center" style={{ transitionDelay: `${500 + i * 150}ms` }}>
                  {/* Точка таймлайна */}
                  <div className="relative z-10 w-16 h-16 mb-6 flex items-center justify-center bg-background border-2 border-terra/60"
                    style={{
                      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                      background: "hsl(var(--background))",
                      outline: "2px solid hsl(var(--terra) / 0.4)",
                      outlineOffset: "4px"
                    }}
                  >
                    <span className="font-serif text-xs text-terra font-medium">{item.year}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
