"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Imagem {
  src: string;
  titulo: string;
}

export default function PrototipoPage() {
  const imagens: Imagem[] = [
    { src: "/figma/tela1.png", titulo: "Tela Inicial" },
    { src: "/figma/tela2.png", titulo: "Tela de Login" },
    { src: "/figma/tela3.png", titulo: "Dashboard" },
    { src: "/figma/tela4.png", titulo: "Simulação de Entrevista" },
    { src: "/figma/tela5.png", titulo: "Resultados e Feedback" },
  ];

  const [atual, setAtual] = useState<number>(0);

  const anterior = (): void => {
    setAtual((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));
  };

  const proximo = (): void => {
    setAtual((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-[#7890A8] to-white py-20">
          <div className="container-custom text-center">
            <h1 className="text-5xl font-bold text-[#000000] mb-6">
              Protótipo do Projeto Interrogatio
            </h1>
            <p className="text-xl text-[#304878] max-w-3xl mx-auto">
              O protótipo foi desenvolvido no Figma, refletindo as principais
              telas e fluxos da aplicação. Cada tela foi pensada para oferecer
              uma experiência acessível, moderna e intuitiva.
            </p>
          </div>
        </section>

        {/* Carrossel de Telas */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-[#000000] mb-10">
              Visualize as 5 Telas do Protótipo
            </h2>

            <div className="relative max-w-4xl mx-auto">
              {/* Imagem atual */}
              <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                <Image
                  src={imagens[atual].src}
                  alt={imagens[atual].titulo}
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Título da tela */}
              <h3 className="text-xl font-semibold text-[#304878] mt-6">
                {imagens[atual].titulo}
              </h3>

              {/* Botões de navegação */}
              <button
                onClick={anterior}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#000000]/70 text-white p-3 rounded-full hover:bg-[#000000] transition"
                aria-label="Tela anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={proximo}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#000000]/70 text-white p-3 rounded-full hover:bg-[#000000] transition"
                aria-label="Próxima tela"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Indicadores */}
              <div className="flex justify-center gap-2 mt-4">
                {imagens.map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full ${
                      i === atual ? "bg-[#304878]" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Link para o Figma */}
            <div className="mt-12">
              <a
                href="https://www.figma.com/design/wUjwmOfG4MQUq89OsUmvuJ/Atividade-Portf%C3%B3lio?node-id=0-1&t=LaeztjWgrmIFoEab-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#304878] text-white px-8 py-3 rounded-full font-medium hover:bg-[#000000] transition"
              >
                Ver Protótipo no Figma
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#000000] text-white py-6">
        <div className="container-custom text-center">
          <p>© 2025 Interrogatio. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
