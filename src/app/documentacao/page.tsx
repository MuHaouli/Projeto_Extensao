import Link from "next/link";
import Navbar from "../components/Navbar";

export default function DocumentacaoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-[#7890A8] to-white py-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-[#000000] mb-6">Documentação</h1>
              <p className="text-xl text-[#304878] mb-12">
                Nesta vitrine você encontrará as documentações e materiais do projeto. A primeira entrada é o Caso de Uso, que descreve os requisitos, atores e fluxos do sistema.
              </p>
              <p className="text-sm text-[#304878]">Clique em uma documentação para visualizar detalhes ou baixar materiais relacionados.</p>
            </div>
          </div>
        </section>

        {/* Documentações list */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-[#000000] mb-8 text-center">Vitrine de Documentações</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Caso de Uso */}
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-[#304878] rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-2xl">📄</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#000000]">Caso de Uso</h3>
                      <p className="text-[#304878] text-sm">Descrição dos atores, cenários e fluxos que orientam o desenvolvimento da aplicação.</p>
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between flex-col gap-5">
                    <Link href="/documentacao/caso-de-uso" className="inline-block bg-[#304878] text-white px-4 py-2 rounded-md hover:opacity-90">Ver caso de uso</Link>
                    <span className="text-sm text-[#7890A8]">Última atualização: 2025</span>
                  </div>
                </div>

                {/* Espaço para futuras documentações (exemplos) */}
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-[#7890A8] rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-2xl">📚</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#000000]">Guia de Implantação</h3>
                      <p className="text-[#304878] text-sm">Passo a passo para instalar e rodar o projeto localmente e em produção.</p>
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between flex-col gap-5">
                    <Link href="#" className="inline-block bg-[#7890A8] text-white px-4 py-2 rounded-md opacity-60 cursor-not-allowed">Em breve</Link>
                    <span className="text-sm text-[#7890A8]">Rascunho</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-[#F0A818] rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-2xl">🧾</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#000000]">Especificação de Requisitos</h3>
                      <p className="text-[#304878] text-sm">Lista de requisitos funcionais e não funcionais do sistema.</p>
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between flex-col gap-5">
                    <Link href="#" className="inline-block bg-[#F0A818] text-white px-4 py-2 rounded-md opacity-60 cursor-not-allowed">Em breve</Link>
                    <span className="text-sm text-[#7890A8]">Rascunho</span>
                  </div>
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
