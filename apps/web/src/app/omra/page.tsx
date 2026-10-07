import { db } from "@miloud-sabri/database";
import { MapPin, ShieldCheck, Users } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function OmraPage() {
  const offers = await db.package.findMany({ where: { active: true, destination: { slug: "makkah" } }, include: { destination: true } });
  return (
    <main className="min-h-screen bg-cream px-6 py-16 md:px-10">
      <div className="mx-auto max-w-6xl">
        <a href="/" className="text-sm text-muted">← Accueil</a>
        <section className="mt-10 rounded-[2rem] bg-navy p-8 text-white md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[.2em] text-champagne">Omra</p>
          <h1 className="mt-3 max-w-3xl text-5xl font-semibold tracking-tight">Un accompagnement humain pour un voyage spirituel.</h1>
          <p className="mt-5 max-w-2xl leading-7 text-white/70">Nous préparons votre voyage, vos formalités et votre séjour avec une attention particulière aux détails.</p>
        </section>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[["Accompagnement", Users],["Formalités", ShieldCheck],["Séjour", MapPin]].map(([label,Icon]) => <div key={label as string} className="glass rounded-glass p-6"><Icon className="h-5 w-5 text-champagne" /><h2 className="mt-5 font-semibold text-navy">{label as string}</h2><p className="mt-2 text-sm text-muted">Une équipe disponible avant, pendant et après votre départ.</p></div>)}
        </div>
        <h2 className="mt-14 text-3xl font-semibold text-navy">Nos formules</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">{offers.map((offer) => <a href={`/sejours/${offer.slug}`} key={offer.id} className="glass rounded-glass p-6"><p className="text-sm text-muted">{offer.durationDays} jours</p><h3 className="mt-2 text-2xl font-semibold text-navy">{offer.title}</h3><p className="mt-2 text-muted">{offer.summary}</p></a>)}</div>
      </div>
    </main>
  );
}