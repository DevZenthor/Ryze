import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

export default function Navbar({ lang, setLang }) {

  const [open, setOpen] = useState(false)

  const t = {
    fr: {
      about: "Présentation",
      clients: "Clients",
      gallery: "Galerie",
      contact: "Commander"
    },
    en: {
      about: "About",
      clients: "Clients",
      gallery: "Gallery",
      contact: "Order"
    }
  }

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setOpen(false)
  }

  return (
    <nav className="navbar">

      {/* LOGO */}
      <img src="/Ryze.svg" className="nav-logo" />

      {/* DESKTOP MENU */}
      <div className="nav-links">
        <button onClick={() => scrollTo("about")}>{t[lang].about}</button>
        <button onClick={() => scrollTo("clients")}>{t[lang].clients}</button>
        <button onClick={() => scrollTo("gallery")}>{t[lang].gallery}</button>
        <button onClick={() => scrollTo("contact")}>{t[lang].contact}</button>
      </div>

      {/* LANGUAGE */}
      <button
        className="lang-btn"
        onClick={() => setLang(lang === "fr" ? "en" : "fr")}
      >
        {lang === "fr" ? "EN" : "FR"}
      </button>

      {/* MOBILE BURGER */}
      <button className="burger" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu">
          <button onClick={() => scrollTo("about")}>{t[lang].about}</button>
          <button onClick={() => scrollTo("clients")}>{t[lang].clients}</button>
          <button onClick={() => scrollTo("gallery")}>{t[lang].gallery}</button>
          <button onClick={() => scrollTo("contact")}>{t[lang].contact}</button>
        </div>
      )}

    </nav>
  )
}