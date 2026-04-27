export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-border bg-wood/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Лого и описание */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="text-terra">
                <rect x="11" y="1" width="7" height="7" transform="rotate(45 11 1)" fill="currentColor" opacity="0.8"/>
                <rect x="11" y="12" width="5" height="5" transform="rotate(45 11 12)" fill="hsl(var(--forest))" opacity="0.5"/>
              </svg>
              <div>
                <p className="font-serif text-xl tracking-wide text-foreground leading-none">Vepsän ma</p>
                <p className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground">Земля вепсов</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Сайт о культуре, языке и традициях вепсского народа — коренного народа Карелии и Северо-Запада России.
            </p>
          </div>

          {/* Навигация */}
          <div className="md:col-span-2 md:col-start-7">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Разделы</p>
            <nav className="flex flex-col gap-3">
              {[
                { href: "#philosophy", label: "История" },
                { href: "#language", label: "Язык" },
                { href: "#services", label: "Быт" },
                { href: "#costume", label: "Костюм" },
                { href: "#traditions", label: "Традиции" },
              ].map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-foreground hover:text-forest transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Ресурсы */}
          <div className="md:col-span-2">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Ресурсы</p>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-sm text-foreground hover:text-forest transition-colors">Газета Kodima</a>
              <a href="#" className="text-sm text-foreground hover:text-forest transition-colors">Вепсский словарь</a>
              <a href="#" className="text-sm text-foreground hover:text-forest transition-colors">Фестиваль Elon pu</a>
            </nav>
          </div>

          {/* Соцсети */}
          <div className="md:col-span-2">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Соцсети</p>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-sm text-foreground hover:text-forest transition-colors">ВКонтакте</a>
              <a href="#" className="text-sm text-foreground hover:text-forest transition-colors">Telegram</a>
            </nav>
          </div>
        </div>

        {/* Нижняя строка */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Vepsän ma. Культурный просветительский проект.
          </p>
          <p className="text-xs text-muted-foreground italic font-serif">
            Kurg'ed letihe ka kezaki vaumičihes
          </p>
        </div>
      </div>
    </footer>
  )
}
