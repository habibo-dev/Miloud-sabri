import { db } from "@miloud-sabri/database";
import { notFound } from "next/navigation";
import { Clock, MapPin } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function PackagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = await db.package.findUnique({ where: { slug }, include: { destination: true } });
  if (!item || !item.active) notFound();

  return (
    <main className="min-h-screen bg-cream">
      <div className="relative min-h-[58vh] overflow-hidden bg-navy">
        {item.imageUrl && <img src={item.imageUrl} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55" />}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
        <div className="relative mx-auto flex min-h-[58vh] max-w-6xl flex-col justify-end px-6 py-14 md:px-10">
          <a href="/sejours" className="mb-auto text-sm text-white/80">← Tous les séjours</a>
          <p className="text-sm font-semibold uppercase tracking-[.2em] text-champagne">{item.destination.name}</p>
          <h1 className="mt-3 max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-6xl">{item.title}</h1>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-white/80"><span className="flex items-center gap-2"><MapPin className="h-4 w-4" />{item.destination.country}</span><span className="flex items-center gap-2"><Clock className="h-4 w-4" />{item.durationDays} jours</span></div>
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 lg:grid-cols-[1fr_360px] md:px-10">
        <article className="glass rounded-glass p-7">
          <h2 className="text-2xl font-semibold text-navy">À propos de ce séjour</h2>
          <p className="mt-4 whitespace-pre-line leading-8 text-muted">{item.description ?? item.summary ?? "Une formule conçue par notre équipe pour vous accompagner sereinement."}</p>
        </article>
        <aside className="glass h-fit rounded-glass p-7">
          <p className="text-sm text-muted">À partir de</p>
          <p className="mt-1 text-3xl font-semibold text-navy">{item.priceDzd.toString()} DZD</p>
          <p className="mt-2 text-sm text-muted">Tarif à confirmer selon dates et disponibilités.</p>
          <a href={`/contact?package=${encodeURIComponent(item.slug)}`} className="mt-7 block rounded-2xl bg-navy px-5 py-3 text-center font-semibold text-white hover:bg-ink">Demander un devis</a>
        </aside>
      </div>
    </main>
  );
}