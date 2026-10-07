import { auth } from "../../../auth";
import { redirect } from "next/navigation";

export default async function AccountPage() {
  const session = await auth();
  if (!session?.user) redirect("/connexion");

  return (
    <main className="min-h-screen bg-cream px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[.2em] text-champagne">Espace client</p>
        <h1 className="mt-3 text-4xl font-semibold text-navy">Bonjour {session.user.name ?? "voyageur"}.</h1>
        <div className="glass mt-8 rounded-glass p-6">
          <p className="text-muted">Votre espace personnel est prêt. Les réservations, documents et notifications seront branchés dans les prochaines phases.</p>
        </div>
      </div>
    </main>
  );
}