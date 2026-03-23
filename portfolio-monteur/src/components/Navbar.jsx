export default function Navbar({ lang, setLang }) {

  const toggleLang = () => {
    setLang(lang === "fr" ? "en" : "fr")
  }

  const t = {
    fr: {
      about: "Présentation",
      clients: "Clients",
      gallery: "Galerie",
      contact: "Commander",
      langBtn: "EN"
    },
    en: {
      about: "About",
      clients: "Clients",
      gallery: "Gallery",
      contact: "Order",
      langBtn: "FR"
    }
  }

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="navbar">

      <div className="navbar-container">

        {/* LOGO */}
        <div className="navbar-logo">
          <img src="/Ryze.svg" alt="Ryze" />
          <span className="navbar-title">Ryze</span>
        </div>

        {/* LINKS */}
        <div className="navbar-links">

          <button onClick={() => scrollTo("about")}>
            {t[lang].about}
          </button>

          <button onClick={() => scrollTo("clients")}>
            {t[lang].clients}
          </button>

          <button onClick={() => scrollTo("gallery")}>
            {t[lang].gallery}
          </button>

          <button onClick={() => scrollTo("contact")}>
            {t[lang].contact}
          </button>

        </div>

        {/* LANGUAGE BUTTON */}
        <button onClick={toggleLang} className="lang-btn">
          {t[lang].langBtn}
        </button>

      </div>

    </nav>
  )
}