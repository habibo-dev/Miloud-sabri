import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const destinations = [
  ["Istanbul", "Turquie", "45 000 DA", "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=85"],
  ["Dubai", "Émirats Arabes Unis", "89 000 DA", "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85"],
  ["La Mecque", "Arabie Saoudite", "120 000 DA", "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1200&q=85"],
  ["Paris", "France", "65 000 DA", "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85"],
  ["Antalya", "Turquie", "52 000 DA", "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85"],
  ["Tassili n'Ajjer", "Algérie", "35 000 DA", "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1200&q=85"],
];

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F4] px-6 pb-20 pt-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-navy"><ArrowLeft className="h-4 w-4" /> Accueil</Link>
        <div className="mt-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[.18em] text-champagne">Explorer</p>
          <h1 className="mt-3 text-5xl font-semibold tracking-[-.05em] text-navy">Des destinations qui donnent envie de partir.</h1>
          <p className="mt-5 text-lg leading-8 text-muted">Découvrez notre sélection de destinations populaires et de voyages conçus pour les voyageurs algériens.</p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map(([name, country, price, image]) => (
            <article key={name} className="glass overflow-hidden rounded-glass p-2 transition duration-500 hover:-translate-y-2 hover:shadow-glass">
              <div className="aspect-[4/3] overflow-hidden rounded-[18px]">
                <img src={image} alt={name} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
              </div>
              <div className="p-5">
                <p className="text-sm text-muted">{country}</p>
                <h2 className="mt-1 text-2xl font-semibold text-navy">{name}</h2>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm font-medium text-navy">Dès {price}</span>
                  <Link href="/#contact" className="inline-flex items-center gap-1 text-sm font-medium text-navy">Voir l'offre <ArrowRight className="h-4 w-4" /></Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
