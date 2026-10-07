import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miloud Sabri Voyage | Voyagez autrement",
  description: "Agence de voyage algérienne — séjours, Omra, visas et voyages sur mesure.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
