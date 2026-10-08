import { db } from "@miloud-sabri/database";

export const dynamic = "force-dynamic";

export default async function ReservationsPage() {
  const bookings = await db.booking.findMany({ include: { package: { include: { destination: true } }, user: true }, orderBy: { createdAt: "desc" }, take: 100 });
  return <main className="min-h-screen bg-cream p-6 md:p-10"><div className="mx-auto max-w-7xl"><a href="/" className="text-sm text-muted">← Dashboard</a><h1 className="mt-8 text-4xl font-semibold text-navy">Réservations</h1><div className="mt-8 space-y-4">{bookings.map((booking) => <article key={booking.id} className="glass rounded-3xl p-5"><div className="flex flex-col justify-between gap-4 md:flex-row md:items-center"><div><p className="text-xs font-semibold tracking-wider text-champagne">{booking.reference}</p><h2 className="mt-1 text-xl font-semibold text-navy">{booking.package?.title || "Réservation"}</h2><p className="mt-1 text-sm text-muted">{booking.user?.name || "Client sans compte"} · {booking.user?.phone || booking.user?.email || "Contact manquant"}</p></div><div className="text-left md:text-right"><p className="text-sm font-semibold text-navy">{booking.status}</p><p className="text-sm text-muted">{booking.totalDzd.toString()} DZD</p></div></div></article>)}</div></div></main>;
}