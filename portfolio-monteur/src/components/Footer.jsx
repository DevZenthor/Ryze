export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-inner">

        {/* LOGO / NOM */}
        <div className="footer-brand">
          <span className="footer-title">Ryze</span>
          <p className="footer-sub">
            Video Editor & Social Media Manager
          </p>
        </div>

        {/* SEPARATEUR */}
        <div className="footer-divider" />

        {/* SIGNATURE */}
        <p className="footer-dev">
          Dev by <span>Zenthor</span>
        </p>

      </div>

    </footer>
  )
}