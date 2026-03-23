import { useEffect } from "react"

export default function HeroIntro() {

  useEffect(() => {

    const preventScroll = (e) => e.preventDefault()

    const preventKeys = (e) => {
      const keys = ["Space", "ArrowUp", "ArrowDown", "PageUp", "PageDown"]
      if (keys.includes(e.code)) e.preventDefault()
    }

    // 🔒 Bloque scroll partout
    document.body.style.overflow = "hidden"
    document.documentElement.style.overflow = "hidden"

    window.addEventListener("wheel", preventScroll, { passive: false })
    window.addEventListener("touchmove", preventScroll, { passive: false })
    window.addEventListener("keydown", preventKeys)

    return () => {
      // 🔓 Nettoyage si composant disparaît
      document.body.style.overflow = "auto"
      document.documentElement.style.overflow = "auto"

      window.removeEventListener("wheel", preventScroll)
      window.removeEventListener("touchmove", preventScroll)
      window.removeEventListener("keydown", preventKeys)
    }

  }, [])

  const scrollDown = () => {

    // 🔓 Débloque scroll
    document.body.style.overflow = "auto"
    document.documentElement.style.overflow = "auto"

    document
      .getElementById("portfolio")
      ?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="hero-video">

      {/* VIDEO */}
      <video
        src="/accueil.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Bouton */}
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