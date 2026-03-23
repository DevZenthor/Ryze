export default function AboutSection({ lang }) {

  const t = {
    fr: {
      role: "Monteur | Social media manager pour @oneprodige"
    },
    en: {
      role: "Editor | Social media manager for @oneprodige"
    }
  }

  return (
    <section id="about" className="about-section">

      <div className="about-card">

        <img
          src="/ryze.jpg"
          alt="Ryze"
          className="about-avatar"
        />

        <h1 className="about-name">Ryze</h1>

        <p className="about-role">
          {t[lang].role}
        </p>

      </div>

    </section>
  )
}