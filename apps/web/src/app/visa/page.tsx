import { FileCheck2, Globe2, Headphones } from "lucide-react";

const steps = [
  ["1", "Choisir votre destination", "Nous vérifions les conditions applicables à votre projet."],
  ["2", "Préparer le dossier", "Notre équipe vous indique les documents nécessaires."],
  ["3", "Suivre la demande", "Vous restez informé de l'avancement de votre dossier."]
];

export default function VisaPage() {
  return (
    <main className="min-h-screen bg-cream px-6 py-16 md:px-10">
      <div className="mx-auto max-w-6xl">
        <a href="/" className="text-sm text-muted">← Accueil</a>
        <div className="mt-10 max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[.2em] text-champagne">Visa</p><h1 className="mt-3 text-5xl font-semibold tracking-tight text-navy">Votre dossier, accompagné avec méthode.</h1><p className="mt-5 text-lg leading-8 text-muted">Un service de préparation et de suivi. Les conditions, délais et décisions restent ceux des autorités compétentes.</p></div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">{steps.map(([number,title,text]) => <div key={number} className="glass rounded-glass p-7"><span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy font-semibold text-white">{number}</span><h2 className="mt-6 text-xl font-semibold text-navy">{title}</h2><p className="mt-2 text-sm leading-6 text-muted">{text}</p></div>)}</div>
        <div className="mt-10 rounded-[2rem] bg-white p-7 shadow-glass"><div className="flex items-start gap-4"><FileCheck2 className="mt-1 h-6 w-6 text-champagne" /><div><h2 className="font-semibold text-navy">Demander une étude de dossier</h2><p className="mt-2 text-sm text-muted">Indiquez votre destination et votre situation afin qu'un conseiller vous contacte.</p><a href="/contact" className="mt-5 inline-flex items-center gap-2 font-semibold text-navy hover:text-champagne">Commencer <Globe2 className="h-4 w-4" /></a></div></div></div>
      </div>
    </main>
  );
}