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
              <Link href="/extensao" className="nav-link">Extensão</Link>
              <Link href="/visao" className="nav-link">Visão</Link>
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
                Extensão Curricular:
              </h1>
              <p className="text-3xl font-bold text-[#415A77] mb-8">
                O que é?
              </p>

              <p className="text-xl text-[#415A77] mb-8">
                A extensão curricular é um dos pilares fundamentais do ensino superior, ao lado do ensino e da pesquisa. Ela representa a ponte entre o conhecimento acadêmico e a realidade social, promovendo a troca de saberes entre a universidade e a comunidade. Por meio da extensão, estudantes e professores têm a oportunidade de aplicar, testar e aprimorar o que é aprendido em sala de aula em contextos reais, gerando impacto social positivo.
              </p>

              <p className="text-xl text-[#415A77] mb-8">
                Esse tipo de atividade permite que o aluno desenvolva competências além do conteúdo técnico, como empatia, comunicação, responsabilidade social e visão crítica. A extensão é, portanto, uma forma de formação integral, pois contribui tanto para o crescimento profissional quanto para o amadurecimento pessoal.
              </p>

              <h2 className="text-4xl font-bold text-[#1B263B] mb-6">
                Como o projeto Interrogatio se insere nesse contexto?
              </h2>
              <p className="text-xl text-[#415A77] mb-8">
                O projeto Interrogatio nasce como uma iniciativa de extensão que une tecnologia, inovação e responsabilidade social. Através do desenvolvimento de uma aplicação baseada em inteligência artificial, buscamos oferecer uma ferramenta acessível e inclusiva para a preparação de candidatos a entrevistas de emprego, especialmente aqueles que enfrentam maiores desafios para entrar ou se recolocar no mercado de trabalho.
              </p>

              <p className="text-xl text-[#415A77] mb-8">
                Com isso, a comunidade se beneficia de um recurso que pode fazer diferença em sua trajetória profissional. Exemplificando perfeitamente o papel da extensão: transformar conhecimento em ação, gerar impacto social e formar profissionais mais humanos, conscientes e preparados para os desafios do mundo contemporâneo.
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
