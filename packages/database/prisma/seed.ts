import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function main() {
  const destinations = [
    { slug: "istanbul", name: "Istanbul", country: "Türkiye", region: "Europe & Asia", featured: true, imageUrl: "/images/destinations/istanbul.svg" },
    { slug: "dubai", name: "Dubai", country: "United Arab Emirates", region: "Middle East", featured: true, imageUrl: "/images/destinations/dubai.svg" },
    { slug: "makkah", name: "La Mecque", country: "Arabie Saoudite", region: "Middle East", featured: true, imageUrl: "/images/destinations/mecca.svg" },
    { slug: "paris", name: "Paris", country: "France", region: "Europe", featured: false, imageUrl: "/images/destinations/paris.svg" }
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