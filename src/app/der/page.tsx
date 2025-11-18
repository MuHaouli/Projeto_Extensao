"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";

export default function DERPage() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/images/DER_INTERROGATIO.png';
    link.download = 'DER_INTERROGATIO.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-[#7890A8] to-white py-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-[#000000] mb-6">Diagrama Entidade-Relacionamento (DER)</h1>
              <p className="text-xl text-[#304878] mb-12">
                Visualize a estrutura do banco de dados do Interrogatio através do diagrama entidade-relacionamento.
              </p>
            </div>
          </div>
        </section>

        {/* DER Image Section */}
        <section className="py-8 bg-white">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="bg-gray-50 rounded-xl shadow-lg p-6">
                <div className="flex flex-col items-center gap-4">
                  <div className="flex justify-center">
                    <Image
                      src="/images/DER_INTERROGATIO.png"
                      alt="Diagrama Entidade-Relacionamento do Interrogatio"
                      width={900}
                      height={600}
                      className="rounded-lg shadow-md w-full max-w-4xl h-auto object-contain"
                      priority
                    />
                  </div>
                  <button
                    onClick={handleDownload}
                    className="inline-block bg-[#304878] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#000000] transition-colors"
                  >
                    📥 Baixar Imagem do DER
                  </button>
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

