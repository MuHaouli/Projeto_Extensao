import Link from 'next/link';

export default function CommunityPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container-custom py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-[#1B263B]">
              Interrogatio
            </Link>
            <div className="space-x-8">
              <Link href="/" className="nav-link">Início</Link>
              <Link href="/quem-somos" className="nav-link">Quem Somos</Link>
              <Link href="/comunidade" className="nav-link">Comunidade</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-[#E0E1DD] to-white">
          <div className="container-custom py-20">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-[#1B263B] mb-6">
                Comunidade
              </h1>
              <p className="text-xl text-[#415A77] mb-8">
                Transforme suas entrevistas profissionais com análises inteligentes e feedbacks automáticos.
                Descubra insights valiosos e aprimore seu processo seletivo.
              </p>
              <h1 className="text-5xl font-bold text-[#1B263B] mb-6">
                Quem são as pessoas beneficiadas?
              </h1>
              <p className="text-xl text-[#415A77] mb-8"> 
                O aplicativo é voltado principalmente para: <br />
                 <br />
                - Profissionais em busca do primeiro emprego <br />
                - Jovens que estão entrando no mercado de trabalho <br />
                - Pessoas que desejam recolocação profissional <br />
                - Candidatos que buscam melhorar suas habilidades de comunicação em entrevistas. <br />
              </p>
              <h1 className="text-5xl font-bold text-[#1B263B] mb-6">
                Como o projeto contribui para a comunidade?
              </h1>
              <p className="text-xl text-[#415A77] mb-8">
                Por meio da nossa inteligência artificial, oferecemos uma experiência prática e acessível de simulação de entrevistas de emprego. O usuário grava um vídeo respondendo às perguntas, e a IA analisa sua performance, destacando pontos que podem ser aprimorados, como: <br />
                <br />
                - Tom de voz <br />
                - Clareza e objetividade nas respostas <br />
                - Postura e segurança durante a fala <br />
                - Pontos fortes apresentados ao recrutador <br />
                <br/>
                Dessa forma, ajudamos candidatos a se prepararem melhor para entrevistas reais, aumentando sua confiança, aprimorando suas habilidades de comunicação e, consequentemente, fortalecendo suas oportunidades no mercado de trabalho. Nosso objetivo é contribuir para que mais pessoas estejam preparadas, seguras e competitivas em suas jornadas profissionais.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1B263B] text-white py-6">
        <div className="container-custom text-center">
          <p>© 2025 Interrogatio. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
