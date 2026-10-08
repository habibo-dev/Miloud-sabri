"use client";

import { FormEvent, useState } from "react";

export function AssistantChat() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; text: string }[]>([]);
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    const value = question.trim();
    if (!value || loading) return;
    setQuestion("");
    setMessages((items) => [...items, { role: "user", text: value }]);
    setLoading(true);
    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: value })
      });
      const data = await response.json();
      setMessages((items) => [...items, { role: "assistant", text: data.answer ?? data.error ?? "Une erreur est survenue." }]);
    } catch {
      setMessages((items) => [...items, { role: "assistant", text: "Impossible de contacter le conseiller IA pour le moment." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-3xl border border-white/70 bg-white/60 p-4 shadow-glass">
      <div className="min-h-64 space-y-4 overflow-y-auto p-4">
        {messages.length === 0 && <p className="text-sm text-muted">Exemple : « Quelle destination me conseillez-vous pour une semaine en famille ? »</p>}
        {messages.map((message, index) => (
          <div key={index} className={message.role === "user" ? "ml-auto max-w-[85%] rounded-2xl bg-navy px-4 py-3 text-sm text-white" : "max-w-[85%] rounded-2xl bg-mist px-4 py-3 text-sm text-ink"}>
            {message.text}
          </div>
        ))}
        {loading && <div className="rounded-2xl bg-mist px-4 py-3 text-sm text-muted">Le conseiller réfléchit…</div>}
      </div>
      <form onSubmit={submit} className="mt-3 flex gap-2 border-t border-slate-200/70 pt-4">
        <input value={question} onChange={(event) => setQuestion(event.target.value)} maxLength={1000} placeholder="Votre question…" className="min-w-0 flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-champagne" />
        <button disabled={loading} className="rounded-2xl bg-navy px-5 py-3 text-sm font-semibold text-white disabled:opacity-50">Envoyer</button>
      </form>
    </div>
  );
}