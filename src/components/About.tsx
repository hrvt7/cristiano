const features = [
  {
    video: "/about/fatuzeles.mp4",
    title: "Fatüzelésű olasz kemence",
    desc: "Pizzáinkat eredeti olaszországi fatüzelésű kemencében sütjük — ropogós szél, puha közepe, az az egyedi füstös íz.",
  },
  {
    video: "/about/olasz-alapanyag.mp4",
    title: "80% olasz alapanyag",
    desc: "Fior di Latte mozzarella, Grana Padano, Parma sonka, Gorgonzola — az alapanyagok 80%-a közvetlenül Olaszországból érkezik.",
  },
  {
    video: "/about/gyors-kiszallitas.mp4",
    title: "Gyors kiszállítás",
    desc: "Szombathelyen 350 Ft szállítási díj, vidéken 900 Ft. Kiszállítási idő 60–90 perc. Személyes átvétel kb. 15 perc.",
  },
  {
    video: "/about/premium.mp4",
    title: "Prémium minőség",
    desc: "Friss, szezonális hozzávalók, kézműves tészta, házi készítésű szószok. Minden falatban ott a szenvedély és a minőség.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink/10 text-pink-dark text-xs font-semibold uppercase tracking-wider mb-4">
              Rólunk
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
              Eredeti olasz pizza, <br />
              <span className="brand-text-gradient italic" style={{ fontFamily: "var(--font-display)" }}>
                szenvedéllyel
              </span>
            </h2>
            <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
              A Cristiano Pizzéria Szombathelyen egy olyan hely, ahol a klasszikus
              nápolyi pizza hagyománya találkozik a modern konyhaművészettel.
              Pizzáinkat eredeti olaszországi fatüzelésű kemencében sütjük, és az
              alapanyagok 80%-a közvetlenül Olaszországból érkezik.
            </p>
            <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
              A Margheritától a Tartufissimóig — minden egyes falat arról szól,
              hogy Szombathelyre hozzuk Nápoly ízeit. <em>Benvenuti!</em>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="group bg-gradient-to-br from-white to-cream border border-zinc-100 rounded-3xl overflow-hidden hover:border-pink/30 transition-colors"
              >
                <div className="relative w-full aspect-video bg-black overflow-hidden">
                  <video
                    src={f.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3
                    className="font-bold text-black mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
