import { auth } from "../../../auth";
import { db } from "@miloud-sabri/database";
import { redirect } from "next/navigation";

export default async function AccountPage() {
  const session = await auth();
  if (!session?.user?.email) redirect("/connexion");

  const user = await db.user.findUnique({
    where: { email: session.user.email },
    include: {
      bookings: {
        include: { package: { include: { destination: true } } },
        orderBy: { createdAt: "desc" },
      },
      documents: { orderBy: { createdAt: "desc" }, take: 20 },
      notifications: { orderBy: { createdAt: "desc" }, take: 10 },
    },
  });

  return (
    <main className="min-h-screen bg-cream px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[.2em] text-champagne">
          Espace client
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-navy">
          Bonjour {session.user.name ?? "voyageur"}.
        </h1>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <section className="glass rounded-glass p-6">
            <h2 className="text-xl font-semibold text-navy">Mes réservations</h2>
            <div className="mt-5 space-y-3">
              {user?.bookings.length ? (
                user.bookings.map((booking) => (
                  <div key={booking.id} className="rounded-2xl bg-white/70 p-4">
                    <p className="font-semibold text-ink">
                      {booking.package?.title ?? "Réservation"}
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      {booking.reference} · {booking.status}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted">
                  Aucune réservation pour le moment.
                </p>
              )}
            </div>
          </section>

          <section className="glass rounded-glass p-6">
            <h2 className="text-xl font-semibold text-navy">Documents</h2>
            <div className="mt-5 space-y-3">
              {user?.documents.length ? (
                user.documents.map((document) => (
                  <div key={document.id} className="rounded-2xl bg-white/70 p-4">
                    <p className="font-semibold text-ink">{document.name}</p>
                    <p className="mt-1 text-sm text-muted">{document.status}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted">Aucun document transmis.</p>
              )}
            </div>
          </section>

          <section className="glass rounded-glass p-6 md:col-span-2">
            <h2 className="text-xl font-semibold text-navy">Notifications</h2>
            <div className="mt-5 space-y-3">
              {user?.notifications.length ? (
                user.notifications.map((notification) => (
                  <div key={notification.id} className="rounded-2xl bg-white/70 p-4">
                    <p className="font-semibold text-ink">{notification.title}</p>
                    <p className="mt-1 text-sm text-muted">{notification.body}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted">Aucune notification.</p>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
