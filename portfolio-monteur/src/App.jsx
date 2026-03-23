import { useState } from "react"
import Navbar from "./components/Navbar"
import HeroIntro from "./components/HeroIntro"
import SiteBackground from "./components/SiteBackground"

export default function App() {

  const [entered, setEntered] = useState(false)

  // 🎬 INTRO SEULE
  if (!entered) {
    return <HeroIntro onEnter={() => setEntered(true)} />
  }

  // 💎 SITE COMPLET
  return (
    <div className="text-white">

      {/* VIDEO BACKGROUND GLOBAL */}
      <SiteBackground />

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENU */}
      <div className="relative z-10">

        <section id="about" className="min-h-screen flex items-center justify-center">
          <h1 className="text-7xl font-bold">Présentation</h1>
        </section>

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