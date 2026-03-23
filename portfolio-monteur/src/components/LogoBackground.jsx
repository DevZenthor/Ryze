export default function TechBackground() {
  return (
    <div className="tech-bg">

      {/* Halo lumineux */}
      <div className="center-halo"></div>

      {/* Logo vif */}
      <img
        src="/logo.png"
        alt=""
        className="logo-core"
      />

      {/* Grille */}
      <div className="tech-grid"></div>

      {/* Assombrissement bords */}
      <div className="vignette"></div>

    </div>
  )
}