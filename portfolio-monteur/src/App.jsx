import { useState } from "react"
import Navbar from "./components/Navbar"
import HeroIntro from "./components/HeroIntro"
import SiteBackground from "./components/SiteBackground"
import AboutSection from "./components/AboutSection"

export default function App() {

  const [entered, setEntered] = useState(false)
  const [lang, setLang] = useState("fr")

  // 🎬 INTRO SEULE
  if (!entered) {
    return <HeroIntro onEnter={() => setEntered(true)} />
  }

  // 💎 SITE COMPLET
  return (
    <div className="text-white">

      <SiteBackground />

      <Navbar lang={lang} setLang={setLang} />

      <div className="relative z-10">

        <AboutSection lang={lang} />

        <section id="clients" className="min-h-screen flex items-center justify-center">
          <h2 className="text-5xl font-bold">Clients</h2>
        </section>

        <section id="gallery" className="min-h-screen flex items-center justify-center">
          <h2 className="text-5xl font-bold">Galerie</h2>
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center">
          <h2 className="text-5xl font-bold">Commander</h2>
        </section>

      </div>

    </div>
  )
}