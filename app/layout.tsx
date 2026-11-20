import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NexuCare Odontologia | Cuidado para toda a família",
  description:
    "Projeto de portfólio da NexuCare Odontologia, clínica fictícia com uma proposta de cuidado acolhedor para bebês, crianças e adultos.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jakarta.variable} motion-safe:scroll-smooth`}
    >
      <body className="bg-cream font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
