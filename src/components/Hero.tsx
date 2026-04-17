import { Phone, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="absolute inset-0 -z-0">
        <img
          src="/pizza-hero.jpg"
          alt="Fatüzelésű kemencében sütött Margherita pizza"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-up text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider mb-6 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-pink animate-pulse" />
              Szombathely · Eredeti olasz pizza
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-white drop-shadow-xl">
              <span className="block">Cristiano</span>
              <span
                className="block italic pb-2"
                style={{ fontFamily: "var(--font-display)", lineHeight: 1.2, color: "#EF4444" }}
              >
                Pizzéria
              </span>
            </h1>

            <p className="mt-6 text-lg text-zinc-100 max-w-xl leading-relaxed mx-auto lg:mx-0 drop-shadow-md">
              Olaszországi fatüzelésű kemencében sütött eredeti nápolyi pizzák,
              80% olasz alapanyagból. Szombathely és környéke — gyere be, vagy
              rendelj telefonon.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 brand-gradient text-white px-7 py-4 rounded-full text-base font-semibold shadow-xl shadow-pink/30 hover:shadow-pink/50 hover:scale-105 transition-all"
              >
                Menü megtekintése
              </a>
              <a
                href="tel:+36704253793"
                className="inline-flex items-center gap-2 bg-black text-white px-7 py-4 rounded-full text-base font-semibold hover:bg-zinc-800 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Rendelés telefonon
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-zinc-200 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-pink-light" />
                Százhold u. 23, Szombathely
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-pink-light" />
                +36 70 425 37 93
              </div>
            </div>
          </div>

          <div className="relative fade-up hidden lg:block" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 brand-gradient rounded-full rotate-6 opacity-25 blur-3xl" />
              <div className="relative bg-white rounded-[3rem] shadow-2xl shadow-pink/30 overflow-hidden border-4 border-pink/20 aspect-square flex items-center justify-center p-10">
                <div className="text-center">
                  <div
                    className="text-7xl font-bold brand-text-gradient"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Cristiano
                  </div>
                  <div
                    className="mt-2 text-2xl italic text-zinc-700"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Pizzéria
                  </div>
                  <div className="mt-6 h-1 w-24 brand-gradient mx-auto rounded-full" />
                  <div className="mt-6 text-xs uppercase tracking-[0.35em] text-zinc-500 font-semibold">
                    Szombathely · 9700
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-black text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider rotate-12 shadow-xl">
                🔥 Forró!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
