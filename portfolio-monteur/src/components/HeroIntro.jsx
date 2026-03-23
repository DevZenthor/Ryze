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
        style={{
          position: "absolute",
          bottom: "60px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "14px 36px",
          borderRadius: "12px",
          background: "#2563eb",
          color: "white",
          fontSize: "18px",
          fontWeight: "600",
          boxShadow: "0 0 25px rgba(59,130,246,0.9)"
        }}
      >
        Découvrir
      </button>

    </section>
  )
}