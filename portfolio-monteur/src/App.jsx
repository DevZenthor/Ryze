import { useState } from "react"

import HeroIntro from "./components/HeroIntro"
import SiteBackground from "./components/SiteBackground"
import Navbar from "./components/Navbar"
import AboutSection from "./components/AboutSection"
import ClientsSection from "./components/ClientsSection"
import GallerySection from "./components/GallerySection"

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

      {/* 💙 VIDEO BACKGROUND GLOBAL */}
      <SiteBackground />

      {/* 🧭 NAVBAR */}
      <Navbar lang={lang} setLang={setLang} />

      {/* 📄 CONTENU */}
      <div className="relative z-10">

        {/* 👤 PRESENTATION */}
        <AboutSection lang={lang} />

        {/* 💼 CLIENTS */}
        <ClientsSection lang={lang} />

        {/* 🎬 GALERIE */}
        <GallerySection lang={lang} />

        {/* 🛒 COMMANDER (placeholder) */}
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center"
        >
          <h2 className="text-5xl font-bold">
            {lang === "fr" ? "Commander" : "Order"}
          </h2>
        </section>

      </div>

    </div>
  )
}