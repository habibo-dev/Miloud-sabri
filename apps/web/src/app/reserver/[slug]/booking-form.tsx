"use client";
import { FormEvent, useState } from "react";

export function BookingForm({ packageId }: { packageId: string }) {
  const [message, setMessage] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setMessage("Enregistrement…");
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const response = await fetch("/api/bookings", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, packageId }) });
    const json = await response.json(); setMessage(response.ok ? `Demande créée — référence ${json.reference}.` : json.error ?? "Une erreur est survenue."); if (response.ok) event.currentTarget.reset();
  }
  return <form onSubmit={submit} className="glass mt-8 space-y-5 rounded-glass p-7">
    <input name="name" required placeholder="Nom complet" className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3" />
    <input name="phone" required placeholder="Téléphone" className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3" />
    <input name="email" type="email" placeholder="Email" className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3" />
    <label className="block text-sm text-muted">Date souhaitée<input name="travelDate" type="date" className="mt-2 w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3" /></label>
    <textarea name="notes" rows={4} placeholder="Précisions ou demandes particulières" className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3" />
    <button className="w-full rounded-2xl bg-navy px-5 py-3 font-semibold text-white">Envoyer la demande</button>{message && <p role="status" className="text-sm text-muted">{message}</p>}
  </form>;
}