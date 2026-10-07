import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Miloud Sabri Admin", description: "Administration de Miloud Sabri Voyage" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}