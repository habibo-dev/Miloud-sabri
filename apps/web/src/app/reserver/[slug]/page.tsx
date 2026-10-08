import { db } from "@miloud-sabri/database";
import { notFound } from "next/navigation";
import { BookingForm } from "./booking-form";

export const dynamic = "force-dynamic";

export default async function ReservePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = await db.package.findUnique({ where: { slug }, include: { destination: true } });
  if (!pkg || !pkg.active) notFound();
  return <main className="min-h-screen bg-cream px-6 py-16"><div className="mx-auto max-w-2xl"><a href={`/sejours/${pkg.slug}`} className="text-sm text-muted">← Retour à l'offre</a><p className="mt-10 text-sm font-semibold uppercase tracking-[.2em] text-champagne">Réservation</p><h1 className="mt-3 text-4xl font-semibold text-navy">{pkg.title}</h1><p className="mt-2 text-muted">{pkg.destination.name} · {pkg.durationDays} jours</p><BookingForm packageId={pkg.id} /></div></main>;
}