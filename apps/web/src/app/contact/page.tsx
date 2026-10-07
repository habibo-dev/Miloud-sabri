"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Envoi…");
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(form)) });
    setStatus(response.ok ? "Merci ! Votre demande a bien été reçue." : "Vérifiez les informations puis réessayez.");
    if (response.ok) event.currentTarget.reset();
  }

  return (
    <main className="min-h-screen bg-cream px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <a href="/" className="text-sm text-muted">← Accueil</a>
        <h1 className="mt-8 text-4xl font-semibold text-navy">Parlons de votre prochain voyage.</h1>
        <p className="mt-3 text-muted">Un conseiller Miloud Sabri vous répondra avec une proposition adaptée.</p>
        <form onSubmit={submit} className="glass mt-10 space-y-5 rounded-glass p-6">
          <input name="name" required placeholder="Nom complet" className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-champagne" />
          <input name="phone" placeholder="Téléphone" className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-champagne" />
          <input name="email" type="email" placeholder="Email" className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-champagne" />
          <textarea name="message" rows={5} placeholder="Votre projet de voyage…" className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-champagne" />
          <input type="hidden" name="source" value="website" />
          <button className="w-full rounded-2xl bg-navy px-5 py-3 font-semibold text-white transition hover:bg-ink">Demander un devis</button>
          {status && <p role="status" className="text-sm text-muted">{status}</p>}
        </form>
      </div>
    </main>
  );
}