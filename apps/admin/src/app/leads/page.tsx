import { db } from "@miloud-sabri/database";

export const dynamic = "force-dynamic";

export default async function LeadsPage() {
  const leads = await db.lead.findMany({ orderBy: { createdAt: "desc" }, take: 100 });
  return <main className="min-h-screen bg-cream p-6 md:p-10"><div className="mx-auto max-w-7xl"><a href="/" className="text-sm text-muted">← Dashboard</a><h1 className="mt-8 text-4xl font-semibold text-navy">Demandes</h1><div className="mt-8 overflow-hidden rounded-3xl bg-white shadow-glass"><div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead className="bg-navy text-white"><tr><th className="p-4">Client</th><th className="p-4">Contact</th><th className="p-4">Statut</th><th className="p-4">Date</th></tr></thead><tbody>{leads.map((lead) => <tr key={lead.id} className="border-b border-black/5"><td className="p-4 font-medium">{lead.name}</td><td className="p-4 text-muted">{lead.phone || lead.email || "—"}</td><td className="p-4"><span className="rounded-full bg-champagne/15 px-3 py-1 text-xs font-semibold">{lead.status}</span></td><td className="p-4 text-muted">{lead.createdAt.toLocaleDateString("fr-FR")}</td></tr>)}</tbody></table></div></div></div></main>;
}