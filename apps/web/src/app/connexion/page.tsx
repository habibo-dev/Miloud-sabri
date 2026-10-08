import { signIn } from "../../../auth";

export default function ConnexionPage() {
  return (
    <main className="min-h-screen bg-cream px-6 py-20">
      <div className="mx-auto max-w-md">
        <a href="/" className="text-sm text-muted">← Accueil</a>
        <div className="glass mt-8 rounded-glass p-8">
          <p className="text-sm font-semibold uppercase tracking-[.2em] text-champagne">Espace client</p>
          <h1 className="mt-3 text-3xl font-semibold text-navy">Bienvenue chez Miloud Sabri</h1>
          <p className="mt-3 text-muted">Connectez-vous pour retrouver vos demandes et réservations.</p>
          <form action={async () => { "use server"; await signIn("google", { redirectTo: "/compte" }); }}>
            <button className="mt-8 w-full rounded-2xl bg-navy px-5 py-3 font-semibold text-white hover:bg-ink">Continuer avec Google</button>
          </form>
        </div>
      </div>
    </main>
  );
}