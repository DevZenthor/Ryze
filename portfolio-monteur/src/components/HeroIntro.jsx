export default function HeroIntro({ onEnter }) {

  return (
    <section
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        background: "black"
      }}
    >

      <video
        src="/accueil.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100vw",
          height: "100vh",
          transform: "translate(-50%, -50%)",
          objectFit: "cover"
        }}
      />

      <button
        onClick={onEnter}
        className="discover-btn"
        >
        Découvrir
        </button>

    </section>
  )
}