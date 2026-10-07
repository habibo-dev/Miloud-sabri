import { db } from "@miloud-sabri/database";

export const dynamic = "force-dynamic";

export default async function DocumentsPage() {
  const documents = await db.document.findMany({
    include: { user: true, booking: true },
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  return (
    <main className="min-h-screen bg-cream p-6 md:p-10">
      <div className="mx-auto max-w-7xl">
        <a href="/" className="text-sm text-muted">
          ← Dashboard
        </a>

        <h1 className="mt-8 text-4xl font-semibold text-navy">
          Documents clients
        </h1>

        <div className="mt-8 grid gap-4">
          {documents.map((doc) => (
            <div key={doc.id} className="glass rounded-3xl p-5">
              <div className="flex flex-col justify-between gap-3 md:flex-row">
                <div>
                  <p className="font-semibold text-navy">{doc.name}</p>
                  <p className="text-sm text-muted">
                    {doc.user.name || doc.user.email || "Client"} · {doc.mimeType}
                  </p>
                </div>
                <span className="h-fit rounded-full bg-navy/10 px-3 py-1 text-xs">
                  {doc.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
