import { Phone, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black -mt-20">
      <div className="absolute inset-0 -z-0">
        <video
          src="/hero-video-mobile.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/pizza-hero.jpg"
          className="absolute inset-0 w-full h-full object-cover lg:hidden bg-black"
        />
        <video
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/pizza-hero.jpg"
          className="absolute inset-0 w-full h-full object-cover hidden lg:block bg-black"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 md:h-28 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,247,242,0) 0%, rgba(255,247,242,0.3) 50%, rgba(255,247,242,0.75) 85%, var(--cream) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-10 md:pt-32 md:pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-up text-center lg:text-left">
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
            <div className="relative aspect-[4/5] max-w-xs mx-auto">
              <div className="absolute inset-0 brand-gradient rounded-[3rem] rotate-3 opacity-30 blur-3xl" />
              <div className="relative bg-white rounded-[3rem] shadow-2xl shadow-pink/30 overflow-hidden border-4 border-pink/20 aspect-[4/5]">
                <img
                  src="/hero-profile.jpg"
                  alt="Cristiano Pizzéria — nápolyi pizza"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
