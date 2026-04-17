import { Flame, Leaf, Clock, MapPin } from "lucide-react";

const features = [
  {
    icon: Flame,
    title: "Fatüzelésű olasz kemence",
    desc: "Pizzáinkat eredeti olaszországi fatüzelésű kemencében sütjük — ropogós szél, puha közepe, az az egyedi füstös íz.",
  },
  {
    icon: Leaf,
    title: "80% olasz alapanyag",
    desc: "Fior di Latte mozzarella, Grana Padano, Parma sonka, Gorgonzola — az alapanyagok 80%-a közvetlenül Olaszországból érkezik.",
  },
  {
    icon: Clock,
    title: "Gyors kiszállítás",
    desc: "Szombathelyen 350 Ft szállítási díj, vidéken 900 Ft. Kiszállítási idő 60–90 perc. Személyes átvétel kb. 15 perc.",
  },
  {
    icon: MapPin,
    title: "Szombathely szívében",
    desc: "Százhold utca 23. — barátságos hangulat, családias kiszolgálás. Gyere be, vagy rendelj telefonon.",
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
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="bg-gradient-to-br from-white to-cream border border-zinc-100 rounded-3xl p-6 hover:border-pink/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl brand-gradient flex items-center justify-center mb-4 shadow-lg shadow-pink/20">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-black mb-2" style={{ fontFamily: "var(--font-display)" }}>
                    {f.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
