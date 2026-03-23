import { useState } from "react"

import Navbar from "./components/Navbar"
import HeroIntro from "./components/HeroIntro"
import SiteBackground from "./components/SiteBackground"
import AboutSection from "./components/AboutSection"
import ClientsSection from "./components/ClientsSection"

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

      {/* VIDEO BACKGROUND FIXE */}
      <SiteBackground />

      {/* NAVBAR */}
      <Navbar lang={lang} setLang={setLang} />

      {/* CONTENU */}
      <div className="relative z-10">

        {/* 👤 PRESENTATION */}
        <AboutSection lang={lang} />

        {/* 💼 CLIENTS */}
        <ClientsSection lang={lang} />

        {/* 🖼️ GALERIE (placeholder) */}
        <section
          id="gallery"
          className="min-h-screen flex items-center justify-center"
        >
          <h2 className="text-5xl font-bold">Galerie</h2>
        </section>

        {/* 🛒 COMMANDER (placeholder) */}
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center"
        >
          <h2 className="text-5xl font-bold">Commander</h2>
        </section>

      </div>

    </div>
  )
}