import Link from 'next/link';
import Image from 'next/image';

export default function QuemSomos() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container-custom py-4">
          <nav className="flex items-center justify-between">
                         <Link href="/" className="text-2xl font-bold text-[#000000]">
               Interrogatio
             </Link>
             <div className="space-x-8">
               <Link href="/" className="nav-link">Início</Link>
               <Link href="/quem-somos" className="nav-link font-semibold text-[#000000]">Quem Somos</Link>
               <Link href="/comunidade" className="nav-link">Comunidade</Link>
             </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
                 <section className="bg-gradient-to-b from-[#7890A8] to-white py-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
                             <h1 className="text-5xl font-bold text-[#000000] mb-6">
                 Quem Somos
               </h1>
               <p className="text-xl text-[#304878] mb-12">
                Conheça a equipe por trás do Interrogatio e nossa missão de transformar 
                o processo de entrevistas profissionais através da tecnologia.
              </p>
            </div>
          </div>
        </section>

        

        {/* Equipe */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
                             <h2 className="text-3xl font-bold text-[#000000] mb-12 text-center">
                 Nossa Equipe
               </h2>
                             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                   {/* Bruno De Souza Araujo */}
                  <div className="bg-white rounded-lg shadow-md p-6 text-center">
                    <div className="w-24 h-24 bg-[#000000] rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                                           <Image src="/images/Brunao.jpg" alt="Bruno De Souza Araujo" width={96} height={96} className="w-full h-full object-cover" />
                   </div>
                                       <h3 className="text-xl font-semibold text-[#000000] mb-2">
                      Bruno De Souza Araujo
                    </h3>
                    <p className="text-[#304878] mb-3">Engenharia De Software</p>
                    <a href="https://github.com/brunoSouza0103" target="_blank" rel="noopener noreferrer" className="text-[#F0A818] hover:text-[#000000] transition-colors text-sm font-medium">
                     GitHub: brunoSouza0103
                   </a>
                 </div>

                                   {/* João Pedro De Souza Marin */}
                  <div className="bg-white rounded-lg shadow-md p-6 text-center">
                    <div className="w-24 h-24 bg-[#7890A8] rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                                           <Image src="/images/Joao.jpg" alt="João Pedro De Souza Marin" width={96} height={96} className="w-full h-full object-cover" />
                   </div>
                                       <h3 className="text-xl font-semibold text-[#000000] mb-2">
                      João Pedro De Souza Marin
                    </h3>
                    <p className="text-[#304878] mb-3">Ciência Da Computação</p>
                    <a href="https://github.com/joaomarin789" target="_blank" rel="noopener noreferrer" className="text-[#F0A818] hover:text-[#000000] transition-colors text-sm font-medium">
                     GitHub: joaomarin789
                   </a>
                 </div>

                                   {/* Leonardo Dutra Da Cruz */}
                  <div className="bg-white rounded-lg shadow-md p-6 text-center">
                    <div className="w-24 h-24 bg-[#F0A818] rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                      <Image src="/images/Dutra.jpg" alt="Leonardo Dutra Da Cruz" width={96} height={96} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#000000] mb-2">
                      Leonardo Dutra Da Cruz
                    </h3>
                    <p className="text-[#304878] mb-3">Engenharia De Software</p>
                    <a href="https://github.com/leodutrax" target="_blank" rel="noopener noreferrer" className="text-[#F0A818] hover:text-[#000000] transition-colors text-sm font-medium">
                      GitHub: leodutrax
                    </a>
                  </div>

                                   {/* Luiz Fernando Hillebrande */}
                  <div className="bg-white rounded-lg shadow-md p-6 text-center">
                    <div className="w-24 h-24 bg-[#304878] rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                      <Image src="/images/Luiz.jpg" alt="Luiz Fernando Hillebrande" width={96} height={96} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#000000] mb-2">
                      Luiz Fernando Hillebrande
                    </h3>
                    <p className="text-[#304878] mb-3">Engenharia De Software</p>
                    <a href="https://github.com/LuizHillebrande" target="_blank" rel="noopener noreferrer" className="text-[#F0A818] hover:text-[#000000] transition-colors text-sm font-medium">
                      GitHub: LuizHillebrande
                    </a>
                  </div>

                                   {/* Murilo Araujo El Haouli */}
                  <div className="bg-white rounded-lg shadow-md p-6 text-center">
                    <div className="w-24 h-24 bg-[#181848] rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                      <Image src="/images/murilo.jpg" alt="Murilo Araujo El Haouli" width={96} height={96} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#000000] mb-2">
                      Murilo Araujo El Haouli
                    </h3>
                    <p className="text-[#304878] mb-3">Ciência Da Computação</p>
                    <a href="https://github.com/MuHaouli" target="_blank" rel="noopener noreferrer" className="text-[#F0A818] hover:text-[#000000] transition-colors text-sm font-medium">
                      GitHub: MuHaouli
                    </a>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
                             <h2 className="text-3xl font-bold text-[#000000] mb-12 text-center">
                 Nossos Valores
               </h2>
              <div className="grid md:grid-cols-3 gap-8">
                                 <div className="text-center">
                   <div className="w-16 h-16 bg-[#000000] rounded-full mx-auto mb-4 flex items-center justify-center">
                     <span className="text-white text-xl">🎯</span>
                   </div>
                   <h3 className="text-xl font-semibold text-[#000000] mb-3">
                     Inovação
                   </h3>
                  <p className="text-gray-700">
                    Buscamos constantemente novas tecnologias e abordagens 
                    para melhorar a experiência dos usuários.
                  </p>
                </div>
                                 <div className="text-center">
                   <div className="w-16 h-16 bg-[#7890A8] rounded-full mx-auto mb-4 flex items-center justify-center">
                     <span className="text-white text-xl">🤝</span>
                   </div>
                   <h3 className="text-xl font-semibold text-[#000000] mb-3">
                     Colaboração
                   </h3>
                  <p className="text-gray-700">
                    Acreditamos no poder do trabalho em equipe e na 
                    diversidade de perspectivas para criar soluções melhores.
                  </p>
                </div>
                                 <div className="text-center">
                   <div className="w-16 h-16 bg-[#F0A818] rounded-full mx-auto mb-4 flex items-center justify-center">
                     <span className="text-white text-xl">💡</span>
                   </div>
                   <h3 className="text-xl font-semibold text-[#000000] mb-3">
                     Excelência
                   </h3>
                  <p className="text-gray-700">
                    Comprometidos com a qualidade e a excelência em tudo 
                    que fazemos, desde o código até a experiência do usuário.
                  </p>
                </div>
              </div>
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
