import HeroIntro from "./components/HeroIntro"

export default function App() {
  return (
    <div className="text-white">

      {/* INTRO VIDEO */}
      <HeroIntro />

      {/* PORTFOLIO */}
      <section
        id="portfolio"
        className="
          min-h-screen
          flex items-center justify-center
          bg-black
        "
      >
        <h1 className="text-6xl font-bold">
          Portfolio
        </h1>
      </section>

    </div>
  )
}