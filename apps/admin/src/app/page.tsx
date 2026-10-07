import { CalendarDays, CircleDollarSign, ContactRound, Plane } from "lucide-react";

const stats = [
  ["Demandes", "24", ContactRound],
  ["Réservations", "12", CalendarDays],
  ["CA estimé", "2.84M DZD", CircleDollarSign],
  ["Voyages actifs", "18", Plane]
] as const;

export default function AdminHome() {
  return (
    <main className="min-h-screen bg-cream p-6 md:p-10">
      <header className="mb-10 flex items-end justify-between">
        <div><p className="text-sm font-semibold uppercase tracking-[.2em] text-champagne">Miloud Sabri Voyage</p><h1 className="mt-2 text-4xl font-semibold tracking-tight text-navy">Tableau de bord</h1></div>
        <span className="rounded-full bg-navy px-4 py-2 text-sm font-medium text-white">Admin</span>
      </header>
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([label,value,Icon]) => <div key={label} className="glass rounded-3xl p-5"><Icon className="h-5 w-5 text-champagne" /><p className="mt-6 text-sm text-muted">{label}</p><p className="mt-1 text-2xl font-semibold text-navy">{value}</p></div>)}
      </section>
      <section className="mt-8 glass rounded-3xl p-6"><h2 className="text-xl font-semibold">Architecture prête pour les données</h2><p className="mt-2 max-w-2xl text-muted">Les prochaines étapes brancheront PostgreSQL, l’authentification, les leads, les réservations et les opérations agence sur ce dashboard.</p></section>
    </main>
  );
}