export default function HeroIntro() {

  const scrollDown = () => {
    document
      .getElementById("portfolio")
      ?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="hero-video">

      {/* VIDEO ACCUEIL */}
      <video
        src="/accueil.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="hero-overlay"></div>

      <button
        onClick={scrollDown}
        className="
          discover-btn
          px-8 py-3 rounded-xl
          bg-blue-600 hover:bg-blue-500
          text-white text-lg font-semibold
          shadow-[0_0_25px_rgba(59,130,246,0.9)]
          transition
        "
      >
        Découvrir
      </button>

    </section>
  )
}