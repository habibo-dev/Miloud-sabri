import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function main() {
  const destinations = [
    { slug: "istanbul", name: "Istanbul", country: "Türkiye", region: "Europe & Asia", featured: true, imageUrl: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=85" },
    { slug: "dubai", name: "Dubai", country: "United Arab Emirates", region: "Middle East", featured: true, imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85" },
    { slug: "makkah", name: "La Mecque", country: "Arabie Saoudite", region: "Middle East", featured: true, imageUrl: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1200&q=85" },
    { slug: "paris", name: "Paris", country: "France", region: "Europe", featured: false, imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85" }
  ];

  for (const destination of destinations) {
    const created = await db.destination.upsert({
      where: { slug: destination.slug },
      update: destination,
      create: destination
    });
    await db.package.upsert({
      where: { slug: destination.slug + "-essentiel" },
      update: {},
      create: {
        destinationId: created.id,
        slug: destination.slug + "-essentiel",
        title: "Séjour " + destination.name,
        summary: "Une formule flexible pensée pour les voyageurs algériens.",
        durationDays: 7,
        priceDzd: 0,
        featured: destination.featured
      }
    });
  }
}

main().finally(() => db.$disconnect());