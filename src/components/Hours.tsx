import { Clock } from "lucide-react";

const schedule = [
  { day: "Hétfő", hours: "11:00 – 22:00" },
  { day: "Kedd", hours: "11:00 – 22:00" },
  { day: "Szerda", hours: "11:00 – 22:00" },
  { day: "Csütörtök", hours: "11:00 – 22:00" },
  { day: "Péntek", hours: "11:00 – 23:00", highlight: true },
  { day: "Szombat", hours: "11:00 – 23:00", highlight: true },
  { day: "Vasárnap", hours: "11:00 – 22:00" },
];

export default function Hours() {
  return (
    <section id="hours" className="relative py-24 bg-gradient-to-br from-black via-zinc-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink/25 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-light/15 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink/20 text-pink-light text-xs font-semibold uppercase tracking-wider mb-4">
            <Clock className="w-3.5 h-3.5" />
            Nyitvatartás
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Mikor várunk <br />
            <span className="brand-text-gradient italic" style={{ fontFamily: "var(--font-display)" }}>
              szeretettel?
            </span>
          </h2>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-10">
          <div className="divide-y divide-white/10">
            {schedule.map((s) => (
              <div
                key={s.day}
                className="flex items-center justify-between py-4"
              >
                <span
                  className={`text-lg font-semibold ${
                    s.highlight ? "brand-text-gradient italic" : "text-white"
                  }`}
                  style={s.highlight ? { fontFamily: "var(--font-display)" } : undefined}
                >
                  {s.day}
                </span>
                <span
                  className={`text-lg ${
                    s.highlight ? "text-pink-light font-bold" : "text-zinc-300"
                  }`}
                >
                  {s.hours}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-zinc-400 text-sm">
          Ünnepnapi nyitvatartásért hívj minket: <a href="tel:+36704253793" className="text-pink-light font-semibold hover:underline">+36 70 425 37 93</a>
        </p>
      </div>
    </section>
  );
}
