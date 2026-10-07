import Link from "next/link";
import { ArrowRight, Check, Compass, Headphones, Plane, ShieldCheck, Sparkles } from "lucide-react";

const destinations = [
  { name: "Istanbul", country: "Turquie", price: "À partir de 45 000 DA", image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=85" },
  { name: "Dubai", country: "Émirats Arabes Unis", price: "À partir de 89 000 DA", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85" },
  { name: "La Mecque", country: "Arabie Saoudite", price: "À partir de 120 000 DA", image: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1200&q=85" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -left-32 -top-40 h-[520px] w-[520px] rounded-full bg-[#E8EEF2] blur-[110px]" />
        <div className="absolute -right-32 top-[38%] h-[520px] w-[520px] rounded-full bg-[#F2E7D1] blur-[120px]" />
      </div>

      <nav className="fixed left-1/2 top-4 z-50 w-[min(94%,1180px)] -translate-x-1/2 glass rounded-full px-5 py-3">
        <div className="flex items-center justify-between gap-5">
          <Link href="/" className="text-lg font-semibold tracking-[-.03em] text-navy">
            Miloud <span className="font-light text-champagne">Sabri</span>
          </Link>
          <div className="hidden items-center gap-1 md:flex">
            {["Destinations", "Séjours", "Omra", "Visa", "Contact"].map((item) => (
              <Link key={item} href={item === "Destinations" ? "/destinations" : "/#" + item.toLowerCase()}
                className="rounded-full px-4 py-2 text-sm text-muted transition hover:bg-white/70 hover:text-navy">
                {item}
              </Link>
            ))}
          </div>
          <Link href="#contact" className="rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-glass">
            Parlons voyage
          </Link>
        </div>
      </nav>

      <section className="hero-grid mx-auto flex min-h-[760px] max-w-7xl items-center px-6 pb-20 pt-36 lg:px-10">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-muted">
              <Sparkles className="h-4 w-4 text-champagne" />
              Votre voyage commence ici
            </div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-.055em] text-navy sm:text-6xl lg:text-7xl">
              Des voyages pensés pour <span className="text-champagne">vous.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted">
              Séjours, Omra, visas et voyages sur mesure depuis l'Algérie.
              Une équipe locale, un accompagnement humain et une expérience simple du premier clic au retour.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/destinations" className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-4 font-medium text-white transition hover:-translate-y-1 hover:shadow-glass">
                Découvrir nos voyages <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#contact" className="rounded-full glass px-7 py-4 font-medium text-navy transition hover:-translate-y-1">
                Demander un devis
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted">
              {["Conseil personnalisé", "Tarifs transparents", "Assistance 7j/7"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-champagne" /> {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass overflow-hidden rounded-[32px] p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[25px] bg-[#DCE5E9]">
                <img
                  src="https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1200&q=85"
                  alt="Paysage de voyage"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-5 bottom-5 glass rounded-2xl p-5">
                  <p className="text-xs font-medium uppercase tracking-[.18em] text-muted">Destination du moment</p>
                  <div className="mt-1 flex items-end justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-semibold text-navy">Istanbul</h2>
                      <p className="text-sm text-muted">Culture · Shopping · Gastronomie</p>
                    </div>
                    <span className="rounded-full bg-white/80 px-3 py-1.5 text-xs font-semibold text-navy">Dès 45 000 DA</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-7 -left-5 hidden glass rounded-2xl p-4 sm:block">
              <Plane className="mb-2 h-5 w-5 text-champagne" />
              <p className="text-xs text-muted">Départs depuis</p>
              <p className="font-semibold text-navy">Alger · Oran · Constantine</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.18em] text-champagne">À découvrir</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-[-.04em] text-navy">Nos destinations</h2>
          </div>
          <Link href="/destinations" className="hidden items-center gap-2 text-sm font-medium text-navy sm:flex">Toutes les destinations <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {destinations.map((destination) => (
            <article key={destination.name} className="group glass overflow-hidden rounded-glass p-2 transition duration-500 hover:-translate-y-2 hover:shadow-glass">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[18px]">
                <img src={destination.image} alt={destination.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1.5 text-xs font-medium text-navy backdrop-blur">Populaire</span>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted">{destination.country}</p>
                <h3 className="mt-1 text-2xl font-semibold text-navy">{destination.name}</h3>
                <p className="mt-2 text-sm text-muted">{destination.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            [ShieldCheck, "Voyage en toute sérénité", "Des informations claires et un accompagnement à chaque étape."],
            [Headphones, "Une vraie équipe à vos côtés", "Un contact humain avant, pendant et après votre voyage."],
            [Compass, "Des expériences locales", "Des offres adaptées aux voyageurs algériens et à leurs besoins."],
          ].map(([Icon, title, text]) => (
            <div key={String(title)} className="glass rounded-glass p-7">
              <Icon className="h-6 w-6 text-champagne" />
              <h3 className="mt-5 text-xl font-semibold text-navy">{String(title)}</h3>
              <p className="mt-2 leading-7 text-muted">{String(text)}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-6 mb-10 rounded-[32px] bg-navy px-7 py-14 text-white sm:px-12 lg:mx-auto lg:max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[.18em] text-[#E8D7B7]">Votre prochain départ</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-[-.04em]">Vous avez une destination en tête ?</h2>
            <p className="mt-4 max-w-xl leading-7 text-white/70">Parlez-nous de votre projet. Nous vous préparons une proposition adaptée.</p>
          </div>
          <Link href="https://wa.me/" className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-7 py-4 font-medium text-navy transition hover:-translate-y-1">
            Nous contacter <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-6 pb-10 pt-2 text-sm text-muted lg:px-10">
        © 2026 Miloud Sabri Voyage · Aïn Témouchent, Algérie
      </footer>
    </main>
  );
}
