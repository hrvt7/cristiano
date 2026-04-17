"use client";

import { useState } from "react";
import { Flame, Star, Plus, Check } from "lucide-react";
import { useCart, formatHUF } from "@/context/CartContext";

type Item = {
  name: string;
  desc: string;
  price: number;
  badge?: string;
  emoji: string;
  image?: string;
};

const categories: { id: string; title: string; subtitle: string; items: Item[] }[] = [
  {
    id: "premium",
    title: "Premium Pizzák",
    subtitle: "A séf prémium különlegességei — szarvasgombával, gorgonzolával, ibériai sonkával",
    items: [
      { name: "Tartufissimo", desc: "Mascarponés szarvasgomba-krém, olvadt mozzarella, szarvasgombás mortadella, pirított shimeji gomba, friss parmezán forgács (1, 8)", emoji: "🍕", badge: "Premium", image: "/menu/tartufissimo.png", price: 4550 },
      { name: "Bianco Supremo Piccante", desc: "Mascarponéval lágyított porcinis-szarvasgombakrém, mozzarella, markáns Gorgonzola, pikáns Spianata piccante szalámi, frissen reszelt Grana Padano (1, 7)", emoji: "🍕", badge: "Csípős", image: "/menu/bianco-supremo.jpeg", price: 4550 },
      { name: "Fuego Ibérico", desc: "Pikáns paradicsomszósz, olvadó mozzarella, füstös chorizo, prémium serrano sonka, szárított paradicsom, fekete olíva, chili olaj (1, 7, 9)", emoji: "🌶️", badge: "Premium", image: "/menu/fuego-iberico.jpeg", price: 4550 },
      { name: "Nduja Dolce Fuoco", desc: "Paradicsomszósz, mézen futtatott fokhagyma, bazsalikom, mozzarella, csípős 'nduja kolbászkrém, bufala mozzarella, parmezán, méz (1, 7)", emoji: "🔥", badge: "Új", image: "/menu/nduja.jpeg", price: 4550 },
    ],
  },
  {
    id: "klasszikus",
    title: "Klasszikus Pizzák",
    subtitle: "Eredeti olasz receptek — fatüzelésű kemencében, Fior di Latte mozzarellával",
    items: [
      { name: "01. Marinara", desc: "Paradicsomszósz, fokhagyma, bazsalikom (1)", emoji: "🍕", image: "/menu/marinara.jpg", price: 2450 },
      { name: "02. Margherita", desc: "Paradicsomszósz, Fior di latte mozzarella, mozzarella golyó, bazsalikom (1, 7)", emoji: "🧀", badge: "Kedvenc", image: "/menu/margherita.jpg", price: 2750 },
      { name: "03. Prosciutto Cotto", desc: "Paradicsomszósz, Fior di latte mozzarella, sonka (1, 7)", emoji: "🥓", image: "/menu/prosciutto-cotto.jpg", price: 2890 },
      { name: "04. Prosciutto Cotto e Funghi", desc: "Paradicsomszósz, Fior di latte mozzarella, sonka, gomba (1, 7)", emoji: "🍄", image: "/menu/cotto-funghi.jpg", price: 2990 },
      { name: "05. Prosciutto di Parma e Rucola", desc: "Paradicsomszósz, Fior di latte mozzarella, Pármai sonka, rucola, koktélparadicsom, parmezán (1, 7)", emoji: "🌿", image: "/menu/parma-rucola.jpg", price: 3690 },
      { name: "06. Milano", desc: "Paradicsomszósz, Fior di latte mozzarella, nápolyi szalámi (1, 7)", emoji: "🍕", image: "/menu/milano.jpg", price: 2990 },
      { name: "07. Salame Piccante", desc: "Paradicsomszósz, Fior di latte mozzarella, Spianata Piccante szalámi, jalapeño paprika (1, 7)", emoji: "🌶️", badge: "Csípős", image: "/menu/salame-piccante.jpg", price: 3190 },
      { name: "08. Tonno e Cipolla", desc: "Paradicsomszósz, Fior di latte mozzarella, tonhal, lilahagyma, olívabogyó (1, 4, 7)", emoji: "🐟", image: "/menu/tonno.jpg", price: 3390 },
      { name: "10. Quattro Formaggi", desc: "Paradicsomszósz, Fior di latte mozzarella, Gorgonzola, Feta, Parmezán (1, 7)", emoji: "🧀", image: "/menu/quattro-formaggi.jpg", price: 3350 },
      { name: "11. Nanni", desc: "Paradicsomszósz, Fior di latte mozzarella, Ricotta, pisztáciás mortadella (1, 7, 8)", emoji: "💚", image: "/menu/nanni.jpg", price: 3350 },
      { name: "12. Capricciosa", desc: "Paradicsomszósz, Fior di latte mozzarella, sonka, gomba, articsóka, olívabogyó (1, 7)", emoji: "🍕", image: "/menu/capricciosa.jpg", price: 3350 },
      { name: "13. Calzone", desc: "Félbehajtott pizza: paradicsomszósz, Fior di latte mozzarella, sonka, gomba, kukorica (1, 7)", emoji: "🥟", image: "/menu/capricciosa.jpg", price: 3390 },
      { name: "14. Concettina", desc: "Paradicsomszósz, Fior di latte mozzarella, Milano szalámi, sonka, gomba, kukorica (1, 7)", emoji: "🍕", image: "/menu/concettina.jpg", price: 3590 },
      { name: "15. Ungherese", desc: "Fokhagymás tejföl, Fior di Latte mozzarella, paprikás kolbász, bacon, lilahagyma, paprika (1, 7)", emoji: "🇭🇺", image: "/menu/ungherese.jpg", price: 3390 },
      { name: "16. Greco", desc: "Fokhagymás tejföl, Fior di Latte mozzarella, gyros hús, Feta sajt (1, 7)", emoji: "🇬🇷", image: "/menu/greco.jpg", price: 3490 },
      { name: "17. Mexicana", desc: "Paradicsomszósz, Fior di latte mozzarella, sonka, vörösbab, kukorica (1, 7)", emoji: "🌽", image: "/menu/mexicana.jpg", price: 3290 },
      { name: "18. Vegetariana", desc: "Paradicsomszósz, Fior di latte mozzarella, grillezett zöldségek (1, 7)", emoji: "🥦", image: "/menu/vegetariana.jpg", price: 3390 },
      { name: "19. Pesca", desc: "Paradicsomszósz, Fior di latte mozzarella, sonka, őszibarack (1, 7)", emoji: "🍑", image: "/menu/pesca.jpg", price: 3390 },
      { name: "21. Pulled Pork e Cipolla", desc: "BBQ krémes alap, tépett disznó, vörös Cheddar sajt, lilahagyma (1, 7)", emoji: "🐷", image: "/menu/pulled-pork.jpg", price: 3650 },
      { name: "22. Grande e Rustica", desc: "Paradicsomos alap, főtt sonka, füstölt bacon, salsiccia, kukorica, füstölt sajt (1, 7)", emoji: "🍕", image: "/menu/grande-rustica.png", price: 3650 },
      { name: "22. Grande e Rustica — Családi", desc: "Mint a klasszikus, mozzarellával — családi méretben (1, 7)", emoji: "👨‍👩‍👧", image: "/menu/grande-rustica.png", price: 5790 },
      { name: "23. Pizza Kebab", desc: "Kapros tejfölös alap, Fior di Latte mozzarella, borjú kebabhús, lilahagyma, paradicsom (1, 7)", emoji: "🥙", image: "/menu/kebab.jpeg", price: 3650 },
      { name: "23. Pizza Kebab — Családi", desc: "Kebab pizza családi méretben (1, 7)", emoji: "👨‍👩‍👧", image: "/menu/kebab.jpeg", price: 5790 },
      { name: "24. Családi 2 feltétes", desc: "Paradicsomszósz, Fior di Latte mozzarella, 2 szabadon választott feltét — családi méret (1, 7)", emoji: "🍕", image: "/menu/margherita.jpg", price: 5150 },
      { name: "Akciós Páros Ajánlat", desc: "Két szabadon választott klasszikus pizza — csak készpénzes fizetésnél (1, 7)", emoji: "🎉", badge: "Akció", image: "/menu/paros.jpeg", price: 4990 },
    ],
  },
  {
    id: "tesztak",
    title: "Sült Tészták",
    subtitle: "Durumtészta, olvadt sajtbunda alatt — friss olasz ízvilág",
    items: [
      { name: "Bolognese Sült Tészta", desc: "Durumtészta, Bolognai ragu, mozzarella, parmezán (1, 7)", emoji: "🍝", image: "/menu/bolognese.jpeg", price: 2530 },
      { name: "Milanese Sült Tészta", desc: "Durumtészta, milánói ragu, mozzarella, parmezán (1, 7)", emoji: "🍝", image: "/menu/bolognese.jpeg", price: 2950 },
      { name: "Pesto Con Pollo", desc: "Durumtészta, csirkemell, pesto, parmezán, mozzarella (1, 7, 8)", emoji: "🌿", image: "/menu/pesto-pollo.jpeg", price: 2950 },
      { name: "Quattro Formaggi (Mac'n Cheese)", desc: "Durumtészta, mozzarella, cheddar, füstölt sajt, parmezán (1, 7)", emoji: "🧀", image: "/menu/pesto-pollo.jpeg", price: 2950 },
    ],
  },
  {
    id: "salatak",
    title: "Saláták & Gyros",
    subtitle: "Könnyű falatok és laktató tálak friss hozzávalókból",
    items: [
      { name: "Cézár Saláta", desc: "Jégsaláta, uborka, paradicsom, lilahagyma, kaliforniai paprika, parmezán, sült fűszeres csirkecsíkok + választható öntet", emoji: "🥗", image: "/menu/cezar.jpg", price: 2800 },
      { name: "Friss Kevert Saláta", desc: "Jégsaláta, uborka, paradicsom, lilahagyma, kaliforniai paprika + olívaolaj vagy balzsamecet", emoji: "🥬", image: "/menu/kevert-salata.jpg", price: 1600 },
      { name: "Görög Saláta", desc: "Paradicsom, uborka, lilahagyma, olívabogyó, feta, olívaolaj, bazsalikom (7)", emoji: "🇬🇷", image: "/menu/gorog.jpg", price: 2700 },
      { name: "Gyros Tál", desc: "Gyros hús, sült krumpli, jégsaláta, uborka, paradicsom, lilahagyma, kaliforniai paprika + választható öntet", emoji: "🥙", image: "/menu/gyros.jpg", price: 2850 },
      { name: "Sült Kebab Tál", desc: "Sült krumpli, sült kebab hús, sajt, jégsaláta, uborka, paradicsom, lilahagyma, kaliforniai paprika + választható öntet (7)", emoji: "🍖", image: "/menu/kebab-tal.jpg", price: 2990 },
      { name: "Tonhal Saláta", desc: "Jégsaláta, tonhal, kaliforniai paprika, paradicsom, lilahagyma, madársaláta, olívaolaj, citromlé (4)", emoji: "🐟", image: "/menu/tonhal-salata.jpg", price: 2700 },
    ],
  },
  {
    id: "desszertek",
    title: "Desszertek & Finomságok",
    subtitle: "Édes befejezés — ropogós churros és olasz ihletésű sütik",
    items: [
      { name: "Churros Csokoládé öntettel", desc: "Frissen sütött ropogós churros, belga csokoládé öntettel (1, 7)", emoji: "🍫", image: "/menu/churros-csoki.jpeg", price: 1490 },
      { name: "Churros Szamóca öntettel", desc: "Frissen sütött ropogós churros, édes szamóca öntettel (1, 7)", emoji: "🍓", image: "/menu/churros-szamoca.jpeg", price: 1490 },
      { name: "PisztaCiao", desc: "Krémes pisztáciakrém, fehércsoki, tört pisztácia (1, 7, 8)", emoji: "💚", badge: "Kedvenc", image: "/menu/pisztaciao.jpeg", price: 2990 },
      { name: "Sajttorta Szamóca öntettel", desc: "Lágy sajttorta, friss szamóca öntettel (1, 3, 7)", emoji: "🍰", image: "/menu/sajttorta.jpeg", price: 1290 },
      { name: "Extra Csoki öntet", desc: "Adagnyi belga csokoládé öntet (7)", emoji: "🍫", image: "/menu/churros-csoki.jpeg", price: 350 },
      { name: "Extra Szamóca öntet", desc: "Adagnyi szamóca öntet", emoji: "🍓", image: "/menu/churros-szamoca.jpeg", price: 350 },
    ],
  },
  {
    id: "italok",
    title: "Italok",
    subtitle: "Hideg üdítők a pizza mellé",
    items: [
      { name: "Coca Cola", desc: "0,5 L palackos", emoji: "🥤", image: "/menu/coca-cola.png", price: 750 },
      { name: "Coca Cola Zero", desc: "0,5 L palackos", emoji: "🥤", image: "/menu/coca-zero.png", price: 750 },
      { name: "Fanta Narancs", desc: "0,5 L palackos", emoji: "🍊", image: "/menu/fanta.png", price: 670 },
      { name: "Sprite", desc: "0,5 L palackos", emoji: "🥤", image: "/menu/sprite.png", price: 750 },
      { name: "Fuzetea Barackos", desc: "0,5 L palackos jeges tea", emoji: "🍑", image: "/menu/fuzetea-barack.png", price: 750 },
      { name: "Fuzetea Citromos", desc: "0,5 L palackos jeges tea", emoji: "🍋", image: "/menu/fuzetea-citrom.png", price: 750 },
    ],
  },
];

function PizzaBoxIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 8l1.5-4h15L21 8" />
      <rect x="3" y="8" width="18" height="12" rx="1.5" />
      <circle cx="12" cy="14" r="3" />
      <path d="M10 13l.01 0M13 14l.01 0M11.5 15.5l.01 0" />
    </svg>
  );
}

function AddButton({ item }: { item: Item }) {
  const { add, items } = useCart();
  const inCart = items.find((i) => i.name === item.name);
  const [clicked, setClicked] = useState(false);

  const onClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    add({ name: item.name, price: item.price, image: item.image });
    setClicked(true);
    setTimeout(() => setClicked(false), 900);
  };

  return (
    <button
      onClick={onClick}
      className={`w-full inline-flex items-center justify-center gap-2 rounded-xl font-bold uppercase tracking-wide text-xs py-3 transition-all shadow-sm ${
        clicked
          ? "bg-emerald-600 text-white"
          : "bg-emerald-500 hover:bg-emerald-600 text-white"
      }`}
      aria-label={`${item.name} kosárba`}
    >
      {clicked ? (
        <Check className="w-4 h-4" strokeWidth={3} />
      ) : (
        <PizzaBoxIcon className="w-4 h-4" />
      )}
      {clicked ? "Hozzáadva" : inCart ? `${inCart.qty} × Kosárban` : "Kosárba rakom"}
    </button>
  );
}

function MediaBlock({ item }: { item: Item }) {
  if (item.image) {
    return (
      <div className="relative w-full aspect-[4/5] bg-white overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    );
  }
  return (
    <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-cream to-white flex items-center justify-center text-7xl">
      {item.emoji}
    </div>
  );
}

function Card({ item, mobile }: { item: Item; mobile?: boolean }) {
  return (
    <article
      className={`group relative bg-white rounded-3xl border border-zinc-100 overflow-hidden flex flex-col transition-all ${
        mobile
          ? "shadow-sm shrink-0 w-[75vw] max-w-[320px] snap-start"
          : "hover:border-pink/30 hover:shadow-xl hover:shadow-pink/10"
      }`}
    >
      {item.badge && (
        <div className="absolute top-3 right-3 z-10 brand-gradient text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1">
          <Star className="w-3 h-3 fill-white" />
          {item.badge}
        </div>
      )}

      <MediaBlock item={item} />

      <div className={`${mobile ? "p-5" : "p-3.5"} flex-1 flex flex-col`}>
        <h4
          className={`${mobile ? "text-lg" : "text-sm"} font-bold text-black mb-1 leading-tight`}
          style={{ fontFamily: "var(--font-display)" }}
        >
          {item.name}
        </h4>
        <p className={`${mobile ? "text-sm" : "text-xs"} text-zinc-600 leading-snug flex-1 line-clamp-3`}>
          {item.desc}
        </p>
        <div className={`${mobile ? "mt-4" : "mt-3"} flex items-center justify-end`}>
          <span className={`${mobile ? "text-xl" : "text-base"} font-bold text-black`}>
            {formatHUF(item.price)}
          </span>
        </div>
        <div className={`${mobile ? "mt-3" : "mt-2"}`}>
          <AddButton item={item} />
        </div>
      </div>
    </article>
  );
}

export default function Menu() {
  return (
    <section id="menu" className="relative py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink/10 text-pink-dark text-xs font-semibold uppercase tracking-wider mb-4">
            <Flame className="w-3.5 h-3.5" />
            Étlapunk
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
            La nostra{" "}
            <span
              className="brand-text-gradient italic"
              style={{ fontFamily: "var(--font-display)" }}
            >
              cucina
            </span>
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Minden pizzánk fatüzelésű olasz kemencében készül, alapanyagaink 80%-a
            Olaszországból származik. Válassz, rakd kosárba, és rendelj pár
            kattintással.
          </p>
        </div>

        <div className="space-y-20">
          {categories.map((cat) => (
            <div key={cat.id}>
              <div className="mb-10">
                <h3
                  className="text-3xl md:text-4xl font-bold text-black italic"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {cat.title}
                </h3>
                <p className="mt-2 text-zinc-600">{cat.subtitle}</p>
                <div className="mt-4 h-1 w-20 brand-gradient rounded-full" />
              </div>

              {/* Mobile horizontal scroll */}
              <div className="sm:hidden -mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {cat.items.map((item) => (
                  <Card key={item.name + "-m"} item={item} mobile />
                ))}
                <div className="shrink-0 w-1" aria-hidden />
              </div>

              {/* Desktop grid */}
              <div
                className={`hidden sm:grid sm:grid-cols-3 gap-4 ${
                  cat.items.length <= 4 ? "lg:grid-cols-4" : "lg:grid-cols-5"
                }`}
              >
                {cat.items.map((item) => (
                  <Card key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center bg-white rounded-3xl p-8 border border-zinc-100 shadow-sm">
          <h4 className="text-xl font-bold text-black mb-2" style={{ fontFamily: "var(--font-display)" }}>
            Szállítási információ
          </h4>
          <p className="text-zinc-600">
            <strong className="text-black">Szombathely:</strong> 350 Ft · <strong className="text-black">Vidéken:</strong> 900 Ft ·
            <strong className="text-black"> Kiszállítási idő:</strong> 60–90 perc
          </p>
          <p className="text-xs text-zinc-500 mt-3">
            Az árak forintban értendőek és az ÁFÁ-t tartalmazzák. Allergének jelölve a
            pizzák neve után (1-14 szerinti számozás).
          </p>
        </div>
      </div>
    </section>
  );
}
