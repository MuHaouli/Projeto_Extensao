import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function CasoDeUsoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow container-custom py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#000000] mb-4">Caso de Uso</h1>
          <p className="text-[#304878] mb-8">Diagrama ou imagem do caso de uso do projeto. Abaixo você pode visualizar em alta resolução ou baixar o arquivo.</p>

          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src="/CasoDeUsoInterrogatio.png"
              alt="Caso de Uso - Diagrama"
              className="w-full h-auto rounded-md object-contain"
            />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/CasoDeUsoInterrogatio.png" download className="btn-primary inline-block">Baixar imagem</a>
            <Link href="/documentacao" className="text-[#304878] hover:underline">← Voltar à vitrine de documentações</Link>
          </div>
        </div>
      </main>

      <footer className="bg-[#000000] text-white py-6 mt-12">
        <div className="container-custom text-center">
          <p>© 2025 Interrogatio. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
