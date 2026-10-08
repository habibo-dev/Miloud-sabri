import { db } from "@miloud-sabri/database";
import { MapPin, Clock, ArrowRight } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function SejoursPage() {
  const packages = await db.package.findMany({
    where: { active: true },
    include: { destination: true },
    orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
  });

  return (
    <main className="min-h-screen bg-cream px-6 py-16 md:px-10">
      <div className="mx-auto max-w-7xl">
        <a href="/" className="text-sm text-muted">← Accueil</a>
        <div className="mt-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[.2em] text-champagne">Séjours</p>
          <h1 className="mt-3 text-5xl font-semibold tracking-tight text-navy">Des départs qui vous ressemblent.</h1>
          <p className="mt-5 text-lg leading-8 text-muted">Découvrez les offres sélectionnées par Miloud Sabri Voyage et demandez un devis personnalisé.</p>
        </div>

        {packages.length === 0 ? (
          <div className="glass mt-12 rounded-glass p-10 text-center text-muted">Les prochaines offres arrivent bientôt.</div>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((item) => (
              <a key={item.id} href={`/sejours/${item.slug}`} className="glass group overflow-hidden rounded-glass transition hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden bg-mist">
                  {item.imageUrl ? <img src={item.imageUrl} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /> : null}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted"><MapPin className="h-4 w-4" />{item.destination.name}</div>
                  <h2 className="mt-3 text-2xl font-semibold text-navy">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.summary}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-black/5 pt-4">
                    <span className="flex items-center gap-2 text-sm text-muted"><Clock className="h-4 w-4" />{item.durationDays} jours</span>
                    <span className="flex items-center gap-2 text-sm font-semibold text-navy">Découvrir <ArrowRight className="h-4 w-4" /></span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}