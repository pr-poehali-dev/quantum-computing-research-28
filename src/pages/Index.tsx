import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Philosophy } from "@/components/Philosophy"
import { Process } from "@/components/Process"
import { Services } from "@/components/Services"
import { Testimonial } from "@/components/Testimonial"
import { Traditions } from "@/components/Traditions"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

export default function Index() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Philosophy />
      <Process />
      <Services />
      <Testimonial />
      <Traditions />
      <Contact />
      <Footer />
    </main>
  )
}
