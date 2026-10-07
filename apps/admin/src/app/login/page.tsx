import { signIn } from "../../../auth";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-mist px-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-glass">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne">
          Miloud Sabri Voyage
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-ink">Espace équipe</h1>
        <p className="mt-3 text-sm text-muted">
          Accès réservé aux agents et administrateurs autorisés.
        </p>
        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/" });
          }}
          className="mt-8"
        >
          <button className="w-full rounded-2xl bg-navy px-5 py-3 text-sm font-semibold text-white">
            Continuer avec Google
          </button>
        </form>
      </div>
    </main>
  );
}
