import { MapPin, Phone } from "lucide-react";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
    </svg>
  );
}
function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink/10 text-pink-dark text-xs font-semibold uppercase tracking-wider mb-4">
            Kapcsolat
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
            Gyere el, vagy{" "}
            <span className="brand-text-gradient italic" style={{ fontFamily: "var(--font-display)" }}>
              hívj minket
            </span>
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Szombathely, Százhold utca 23. — foglalj asztalt, rendelj telefonon,
            vagy egyszerűen ugorj be egy frissen sült pizzára.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <a
              href="tel:+36704253793"
              className="flex items-start gap-4 bg-white rounded-3xl p-6 border border-zinc-100 hover:border-pink/30 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-2xl brand-gradient flex items-center justify-center shrink-0 shadow-lg shadow-pink/20">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
                  Telefon
                </div>
                <div className="text-2xl font-bold text-black mt-1">
                  +36 70 425 37 93
                </div>
                <div className="text-sm text-zinc-600 mt-1">
                  Foglalás, rendelés, kérdések
                </div>
              </div>
            </a>

            <div className="flex items-start gap-4 bg-white rounded-3xl p-6 border border-zinc-100">
              <div className="w-12 h-12 rounded-2xl brand-gradient flex items-center justify-center shrink-0 shadow-lg shadow-pink/20">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
                  Cím
                </div>
                <div className="text-lg font-bold text-black mt-1">
                  Százhold utca 23.
                </div>
                <div className="text-sm text-zinc-600 mt-1">
                  9700 Szombathely
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-3xl p-6 border border-zinc-100">
              <div className="w-12 h-12 rounded-2xl brand-gradient flex items-center justify-center shrink-0 shadow-lg shadow-pink/20">
                <FacebookIcon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
                  Közösség
                </div>
                <div className="text-lg font-bold text-black mt-1">
                  Kövess minket!
                </div>
                <div className="flex flex-wrap gap-3 mt-3">
                  <a
                    href="https://www.facebook.com/cristianopizzeria9700"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-zinc-800 transition-colors"
                  >
                    <FacebookIcon className="w-4 h-4" />
                    Facebook
                  </a>
                  <a
                    href="https://www.cristianopizza.hu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 brand-gradient text-white px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform"
                  >
                    <GlobeIcon className="w-4 h-4" />
                    cristianopizza.hu
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-white rounded-3xl border border-zinc-100 overflow-hidden min-h-[400px]">
            <iframe
              src="https://www.google.com/maps?q=Sz%C3%A1zhold+utca+23,+Szombathely&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cristiano Pizzéria Szombathely térkép"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
