import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const Chatbot = dynamic(() => import("./components/Chatbot"), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Interrogatio - Análise de Entrevistas Profissionais",
  description: "Plataforma inteligente para análise e feedback de entrevistas profissionais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
