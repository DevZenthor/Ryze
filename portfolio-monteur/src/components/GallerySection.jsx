export default function GallerySection({ lang }) {

  const t = {
    fr: { title: "Galerie" },
    en: { title: "Gallery" }
  }

  const videos = [
    "wowI7FifSJU",
    "1ZRZmjaDZb8",
    "F-Ny-j6Z_1A",
    "de0HrFSgHI0",
    "7E_UBlVQhA4",
    "xNW1hISW4hk"
  ]

  return (
    <section id="gallery" className="gallery-section">

      <h2 className="gallery-title">
        {t[lang].title}
      </h2>

      <div className="gallery-grid">

        {videos.map((id, i) => (
          <div key={i} className="video-card">

            <iframe
              src={`https://www.youtube.com/embed/${id}?rel=0`}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

          </div>
        ))}

      </div>

    </section>
  )
}