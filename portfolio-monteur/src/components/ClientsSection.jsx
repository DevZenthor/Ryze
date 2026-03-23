export default function ClientsSection({ lang }) {

  const t = {
    fr: {
      editor: "Clients Montage",
      manager: "Clients YouTube Manager"
    },
    en: {
      editor: "Editing Clients",
      manager: "YouTube Manager Clients"
    }
  }

  // 🎬 CLIENTS MONTEUR
  const editorClients = [
    { name: "One Prodige", img: "/prodige.jpg", twitter: "https://x.com/oneprodige" },
    { name: "Asa", img: "/asa.jpg", twitter: "https://x.com/Asafnr" },
    { name: "Vexdylan", img: "/vexdylan.jpg", twitter: "https://x.com/vexdylan_" },
    { name: "Tjino", img: "/tjino.jpg", twitter: "https://x.com/Tjino9" },
    { name: "Sky", img: "/sky.jpg", twitter: "https://x.com/SkySZN_" },
    { name: "Coach Grimz", img: "/grimz.jpg", twitter: "https://x.com/coach_grimz" },
    { name: "Momsy", img: "/momsy.jpg", twitter: "https://x.com/MomsyFN" },
    { name: "Hedra", img: "/hedra.jpg", twitter: "https://x.com/HedraFn" },
    { name: "Zarb", img: "/zarb.jpg", twitter: "https://x.com/coach_grimz" },
    { name: "Noia", img: "/noia.png", twitter: "https://x.com/noia_gg" },
    { name: "Seek", img: "/seek.jpg", twitter: "https://x.com/seekkfn?s=21" }
  ]

  // 👔 MANAGER
  const managerClients = [
    { name: "One Prodige", img: "/prodige.jpg", twitter: "https://x.com/oneprodige" },
    { name: "Asa", img: "/asa.jpg", twitter: "https://x.com/Asafnr" }
  ]

  const ClientCard = ({ client }) => (
    <a
      href={client.twitter}
      target="_blank"
      rel="noreferrer"
      className="client-card"
    >
      <img src={client.img} alt={client.name} />
      <span>{client.name}</span>
    </a>
  )

  return (
    <section id="clients" className="clients-section">

      {/* ===== MONTAGE ===== */}

      <h2 className="clients-title">{t[lang].editor}</h2>

      <div className="clients-marquee">

        <div className="clients-track">

          {/* duplication pour boucle infinie */}
          {[...editorClients, ...editorClients].map((c, i) => (
            <ClientCard key={i} client={c} />
          ))}

        </div>

      </div>

      {/* ===== MANAGER ===== */}

      <h2 className="clients-title">{t[lang].manager}</h2>

      <div className="manager-row">
        {managerClients.map((c, i) => (
          <ClientCard key={i} client={c} />
        ))}
      </div>

    </section>
  )
}