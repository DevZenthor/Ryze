import { FaDiscord } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export default function ContactSection({ lang }) {

  const t = {
    fr: {
      title: "Contact",
      desc: "Pour toute commande, contactez-moi sur :"
    },
    en: {
      title: "Contact",
      desc: "For any order, contact me on:"
    }
  }

  return (
    <section id="contact" className="contact-section">

      <h2 className="contact-title">
        {t[lang].title}
      </h2>

      <p className="contact-desc">
        {t[lang].desc}
      </p>

      <div className="contact-links">

        {/* DISCORD */}
        <a
          href="https://discord.gg/7dqCetz7Yt"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaDiscord className="contact-icon" />
          <span>Discord</span>
        </a>

        {/* TWITTER / X */}
        <a
          href="https://x.com/RyzeProd"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaXTwitter className="contact-icon" />
          <span>Twitter / X</span>
        </a>

      </div>

    </section>
  )
}