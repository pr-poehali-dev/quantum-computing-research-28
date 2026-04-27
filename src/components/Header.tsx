import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/40">
      <nav className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            {/* Вепсский орнамент-ромб */}
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-terra">
              <rect x="14" y="2" width="8.5" height="8.5" transform="rotate(45 14 2)" fill="currentColor" opacity="0.8"/>
              <rect x="14" y="2" width="8.5" height="8.5" transform="rotate(45 14 2)" stroke="hsl(var(--forest))" strokeWidth="0.5" fill="none"/>
              <rect x="14" y="15" width="6" height="6" transform="rotate(45 14 15)" fill="hsl(var(--forest))" opacity="0.5"/>
            </svg>
            <div>
              <p className="font-serif text-xl tracking-wide text-foreground leading-none">Vepsän ma</p>
              <p className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground">Земля вепсов</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {[
              { href: "#philosophy", label: "История" },
              { href: "#language", label: "Язык" },
              { href: "#services", label: "Быт" },
              { href: "#costume", label: "Костюм" },
              { href: "#traditions", label: "Традиции" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-500"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-xs tracking-widest uppercase px-5 py-2.5 border border-forest text-forest hover:bg-forest hover:text-primary-foreground transition-all duration-500"
            >
              Связаться
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Открыть меню"
          >
            <span className={`block w-6 h-px bg-foreground transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-px bg-foreground transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-foreground transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${isMenuOpen ? "max-h-96 pb-8" : "max-h-0"}`}>
          <div className="flex flex-col gap-5 pt-4">
            {[
              { href: "#philosophy", label: "История" },
              { href: "#language", label: "Язык" },
              { href: "#services", label: "Быт" },
              { href: "#costume", label: "Костюм" },
              { href: "#traditions", label: "Традиции" },
              { href: "#contact", label: "Связаться" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
