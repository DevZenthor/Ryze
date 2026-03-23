import { useState } from "react"
import HeroIntro from "./components/HeroIntro"
import SiteBackground from "./components/SiteBackground"

export default function App() {

  const [entered, setEntered] = useState(false)

  // 🔥 INTRO SEULE
  if (!entered) {
    return <HeroIntro onEnter={() => setEntered(true)} />
  }

  // 💎 SITE SEUL
  return (
    <div className="text-white">

      {/* VIDEO BACKGROUND GLOBAL */}
      <SiteBackground />

      <div id="portfolio" className="relative z-10">

        <section className="min-h-screen flex items-center justify-center">
          <h1 className="text-7xl font-bold">Portfolio</h1>
        </section>

        <section className="min-h-screen flex items-center justify-center">
          <h2 className="text-5xl font-bold">Clients</h2>
        </section>

        <section className="min-h-screen flex items-center justify-center">
          <h2 className="text-5xl font-bold">Galerie</h2>
        </section>

        <section className="min-h-screen flex items-center justify-center">
          <h2 className="text-5xl font-bold">Contact</h2>
        </section>

      </div>

    </div>
  )
}