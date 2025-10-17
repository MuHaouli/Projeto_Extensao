import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function CommunityPage() {
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
                Comunidade
              </h1>
              <p className="text-xl text-[#304878] mb-12">
                Transforme suas entrevistas profissionais com análises inteligentes e feedbacks automáticos. Descubra insights valiosos e aprimore seu processo seletivo.
              </p>
            </div>
          </div>
        </section>

        {/* Beneficiados */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-[#000000] mb-12 text-center">
                Quem são as pessoas beneficiadas?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-16 h-16 bg-[#000000] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">🎓</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#000000] mb-2">Primeiro Emprego</h3>
                  <p className="text-[#304878]">Profissionais em busca do primeiro emprego</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-16 h-16 bg-[#7890A8] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">🧑‍💼</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#000000] mb-2">Jovens no Mercado</h3>
                  <p className="text-[#304878]">Jovens que estão entrando no mercado de trabalho</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-16 h-16 bg-[#F0A818] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">🔄</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#000000] mb-2">Recolocação</h3>
                  <p className="text-[#304878]">Pessoas que desejam recolocação profissional</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-16 h-16 bg-[#304878] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">🗣️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#000000] mb-2">Comunicação</h3>
                  <p className="text-[#304878]">Candidatos que buscam melhorar suas habilidades de comunicação</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contribuição */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#000000] mb-12 text-center">
                Como o projeto contribui para a comunidade?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#7890A8] rounded-lg shadow-md p-6 text-center flex flex-col items-center">
                  <span className="text-white text-4xl mb-4">🤖</span>
                  <h3 className="text-xl font-semibold text-white mb-2">Simulação com IA</h3>
                  <p className="text-white">Experiência prática e acessível de simulação de entrevistas de emprego com análise de performance.</p>
                </div>
                <div className="bg-[#F0A818] rounded-lg shadow-md p-6 text-center flex flex-col items-center">
                  <span className="text-white text-4xl mb-4">💬</span>
                  <h3 className="text-xl font-semibold text-white mb-2">Feedback Personalizado</h3>
                  <p className="text-white">Feedback sobre tom de voz, clareza, postura, pontos fortes e recomendações para evolução.</p>
                </div>
              </div>
              <p className="text-lg text-[#304878] font-medium mt-8 text-center">
                Nosso objetivo é contribuir para que mais pessoas estejam preparadas, seguras e competitivas em suas jornadas profissionais.
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
