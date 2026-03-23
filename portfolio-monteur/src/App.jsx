import HeroIntro from "./components/HeroIntro"
import SiteBackground from "./components/SiteBackground"

export default function App() {
  return (
    <div className="text-white">

      {/* 🎬 INTRO VIDEO */}
      <HeroIntro />

      {/* 💎 RESTE DU SITE */}
      <section className="relative">

        {/* Background animé */}
        <SiteBackground />

        {/* Contenu */}
        <main className="relative z-10 min-h-screen flex items-center justify-center">
          <h1 className="text-7xl font-bold">
            Portfolio
          </h1>
        </main>

        <section className="relative z-10 min-h-screen flex items-center justify-center">
          <h2 className="text-5xl font-bold">
            Clients
          </h2>
        </section>

      </section>

    </div>
  )
}