import { AssistantChat } from "./assistant-chat";

export default function AssistantPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-20 pt-32">
      <section className="glass-panel overflow-hidden rounded-[2rem] p-8 md:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-champagne">Conseiller voyage IA</p>
        <h1 className="mt-3 text-4xl font-semibold text-ink md:text-6xl">Préparez votre prochain voyage.</h1>
        <p className="mt-4 max-w-2xl text-muted">Posez vos questions sur les destinations, les documents et l’organisation de votre voyage. Pour les prix, disponibilités et décisions de visa, notre équipe reste la référence.</p>
        <div className="mt-10"><AssistantChat /></div>
      </section>
    </main>
  );
}