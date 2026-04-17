import { Phone, MapPin } from "lucide-react";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/cristiano-logo.jpg"
                alt="Cristiano Pizzéria logo"
                className="w-11 h-11 rounded-full object-cover shadow-md"
              />
              <div>
                <div className="text-2xl font-bold brand-text-gradient" style={{ fontFamily: "var(--font-display)" }}>
                  Cristiano
                </div>
                <div className="text-xs uppercase tracking-[0.3em] text-zinc-400 font-semibold">
                  Pizzéria
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-zinc-400 leading-relaxed max-w-xs">
              Eredeti olasz pizza fatüzelésű kemencéből, Szombathely szívében.
              80% olasz alapanyag, szenvedéllyel.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.facebook.com/cristianopizzeria9700"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink hover:scale-110 transition-all flex items-center justify-center"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase text-xs tracking-widest text-zinc-400 mb-4">
              Étlap
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#menu" className="text-zinc-300 hover:text-pink-light transition-colors">Premium Pizzák</a></li>
              <li><a href="#menu" className="text-zinc-300 hover:text-pink-light transition-colors">Klasszikus Pizzák</a></li>
              <li><a href="#menu" className="text-zinc-300 hover:text-pink-light transition-colors">Sült Tészták</a></li>
              <li><a href="#menu" className="text-zinc-300 hover:text-pink-light transition-colors">Saláták & Gyros</a></li>
              <li><a href="#menu" className="text-zinc-300 hover:text-pink-light transition-colors">Desszertek</a></li>
              <li><a href="#menu" className="text-zinc-300 hover:text-pink-light transition-colors">Italok</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase text-xs tracking-widest text-zinc-400 mb-4">
              Kapcsolat
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+36704253793" className="flex items-center gap-3 text-zinc-300 hover:text-pink-light transition-colors">
                  <Phone className="w-4 h-4 text-pink" />
                  +36 70 425 37 93
                </a>
              </li>
              <li className="flex items-start gap-3 text-zinc-300">
                <MapPin className="w-4 h-4 text-pink mt-0.5 shrink-0" />
                <span>Százhold utca 23.<br />9700 Szombathely</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <div>© {new Date().getFullYear()} Cristiano Pizzéria. Minden jog fenntartva.</div>
          <div className="flex gap-6">
            <a href="https://www.cristianopizza.hu" target="_blank" rel="noopener noreferrer" className="hover:text-pink-light transition-colors">
              cristianopizza.hu
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
