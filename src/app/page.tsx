'use client';
import Link from 'next/link';
import { useState } from 'react';

// Imagens fictícias para o carrossel
//teste do carrosel
const carouselImages = [
  '/carousel1.jpg',
  '/carousel2.jpg',
  '/carousel3.jpg',
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % carouselImages.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm fade-in-up">
        <div className="container-custom py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="/unifil-logo.png" 
              alt="Logo UniFil" 
              className="h-12 w-auto"
            />
            <Link href="/" className="text-2xl font-bold text-[#1B263B] hover:scale-105 transition-transform">
              Interrogatio
            </Link>
          </div> 
          <div className="space-x-8 flex">
            <Link href="/" className="nav-link">Início</Link>
            <Link href="/quem-somos" className="nav-link">Quem Somos</Link>
            <Link href="/comunidade" className="nav-link">Comunidade</Link>
            <Link href="/extensao" className="nav-link">Extensão</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-[#E0E1DD] to-white fade-in-up">
          <div className="container-custom py-20 flex flex-col lg:flex-row items-center gap-10">
            <div className="max-w-2xl text-center lg:text-left fade-in-up">
              <h1 className="text-5xl font-bold text-[#1B263B] mb-6">
                Interrogatio
              </h1>
              <p className="text-xl text-[#415A77] mb-8">
                Transforme suas entrevistas profissionais com análises inteligentes e feedbacks automáticos.
                Descubra insights valiosos e aprimore seu processo seletivo.
              </p>
              <Link href="/explorar" className="btn-primary inline-block">
                Explorar
              </Link>
            </div>
            <div className="w-full lg:w-1/2 fade-in-up">
              <img 
                src="/hero-image.png" 
                alt="App exemplo" 
                className="rounded-xl shadow-lg border border-[#1B263B] w-full max-w-md h-100 object-contain mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Carrossel */}
        <section className="py-20 bg-[#F4F4F4] fade-in-up">
          <div className="container-custom max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#1B263B] mb-10">Exemplos de Análise</h2>
            <div className="relative">
              <img 
                src={carouselImages[current]} 
                alt="Carrossel" 
                className="w-full rounded-xl shadow-lg transition-all duration-500"
              />
              <button 
                onClick={prevSlide} 
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#1B263B] text-white p-2 rounded-full hover:bg-[#415A77] transition-colors"
              >‹</button>
              <button 
                onClick={nextSlide} 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#1B263B] text-white p-2 rounded-full hover:bg-[#415A77] transition-colors"
              >›</button>
            </div>
          </div>
        </section>

        {/* Introdução ao Problema e Justificativa */}
        <section className="py-20 bg-white fade-in-up">
          <div className="container-custom max-w-4xl mx-auto grid gap-12 lg:grid-cols-2">
            <div className="fade-in-up">
              <h2 className="text-3xl font-bold text-[#1B263B] mb-6">O Problema e Nossa Proposta</h2>
              <p className="text-lg text-[#415A77] mb-6 text-justify">
                O processo de entrevistas profissionais é um dos maiores desafios para candidatos que buscam oportunidades 
                no mercado de trabalho. Muitas vezes, o nervosismo, a falta de preparo ou mesmo a dificuldade em se comunicar 
                de forma clara podem prejudicar o desempenho, resultando em oportunidades perdidas. 
              </p>
              <p className="text-lg text-[#415A77] mb-6 text-justify">
                O <span className="font-semibold">Interrogatio</span> surge para resolver esse problema. 
                Nossa aplicação utiliza inteligência artificial para analisar entrevistas simuladas em vídeo, 
                fornecendo feedback detalhado sobre postura, clareza na comunicação, domínio técnico e até mesmo 
                fluência em inglês. O objetivo é oferecer um ambiente seguro para o usuário treinar e melhorar antes 
                de enfrentar processos seletivos reais.
              </p>
            </div>
            <div className="fade-in-up flex items-center justify-center">
              <img src="/problem-illustration.png" alt="Problema" className="rounded-xl shadow-lg"/>
            </div>
            <div className="fade-in-up flex items-center justify-center order-last lg:order-none">
              <img src="/solution-illustration.png" alt="Solução" className="rounded-xl shadow-lg"/>
            </div>
            <div className="fade-in-up">
              <h3 className="text-2xl font-semibold text-[#1B263B] mb-4">Justificativa e Relevância</h3>
              <p className="text-lg text-[#415A77] text-justify">
                A escolha do tema é motivada pela crescente competitividade no mercado de trabalho e pela 
                necessidade de preparar os candidatos de forma mais eficiente. Enquanto empresas buscam profissionais 
                mais qualificados, candidatos precisam se destacar não apenas pelo conhecimento técnico, mas também pela 
                forma como se comunicam e se apresentam.  
                O Interrogatio se torna, portanto, uma ferramenta inovadora e relevante para estudantes, profissionais em 
                transição de carreira e todos aqueles que desejam potencializar suas chances de sucesso em entrevistas.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1B263B] text-white py-6 fade-in-up">
        <div className="container-custom text-center flex flex-col lg:flex-row items-center justify-center gap-4">
          <img src="/unifil-logo.png" alt="Logo UniFil" className="h-10 w-auto"/>
          <p>© 2025 Interrogatio. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
