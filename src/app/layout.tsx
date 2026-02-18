import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Jungler - Clinica Dentară",
  description: "Clinica stomatologică Dr. Jungler - Unde zâmbetul este prioritatea nr. 1! Servicii dentare profesionale într-un mediu prietenos și relaxant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
