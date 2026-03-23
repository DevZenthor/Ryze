export default function SiteBackground() {
  return (
    <div className="site-bg">

      <video
        src="/ryze.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay sombre pour lisibilité */}
      <div className="site-overlay"></div>

    </div>
  )
}