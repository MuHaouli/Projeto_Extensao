import Link from "next/link";
import Navbar from "../components/Navbar";

export default function ExtensaoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-[#7890A8] to-white py-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-[#000000] mb-6">
                Extensão Curricular
              </h1>
              <p className="text-xl text-[#304878] mb-12">
                A extensão curricular é um dos pilares fundamentais do ensino superior, ao lado do ensino e da pesquisa. Ela representa a ponte entre o conhecimento acadêmico e a realidade social, promovendo a troca de saberes entre a universidade e a comunidade.
              </p>
            </div>
          </div>
        </section>

        {/* Benefícios da Extensão */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-[#000000] mb-12 text-center">
                Por que a extensão é importante?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#000000] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#000000] mb-2">Impacto Social</h3>
                  <p className="text-[#304878]">Transforma conhecimento acadêmico em ação para a sociedade</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#7890A8] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">💡</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#000000] mb-2">Inovação</h3>
                  <p className="text-[#304878]">Permite aplicar, testar e aprimorar o que é aprendido em sala de aula</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#F0A818] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">🌱</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#000000] mb-2">Crescimento Pessoal</h3>
                  <p className="text-[#304878]">Desenvolve empatia, comunicação, responsabilidade social e visão crítica</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#304878] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">🎓</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#000000] mb-2">Formação Integral</h3>
                  <p className="text-[#304878]">Contribui para o crescimento profissional e amadurecimento pessoal</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projeto Interrogatio */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-[#000000] mb-8">
                Como o projeto Interrogatio se insere nesse contexto?
              </h2>
              <p className="text-lg text-[#304878] font-medium mb-6">
                O projeto Interrogatio nasce como uma iniciativa de extensão que une tecnologia, inovação e responsabilidade social. Através do desenvolvimento de uma aplicação baseada em inteligência artificial, buscamos oferecer uma ferramenta acessível e inclusiva para a preparação de candidatos a entrevistas de emprego, especialmente aqueles que enfrentam maiores desafios para entrar ou se recolocar no mercado de trabalho.
              </p>
              <p className="text-lg text-[#304878] font-medium">
                Com isso, a comunidade se beneficia de um recurso que pode fazer diferença em sua trajetória profissional. Exemplificando perfeitamente o papel da extensão: transformar conhecimento em ação, gerar impacto social e formar profissionais mais humanos, conscientes e preparados para os desafios do mundo contemporâneo.
              </p>
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
