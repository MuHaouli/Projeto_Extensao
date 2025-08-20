import Link from "next/link";

export default function VisaoPage() {
    return (
        <div className="min-h-screen flex flex-col">

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
                <Link href="/visao" className="nav-link">Visão</Link>
                <Link href="/extensao" className="nav-link">Extensão</Link>
                </div>
            </nav>
            </div>
            </header>

        <main>
            <div className="container-custom py-20">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-5xl font-bold text-[#1B263B] mb-6">
                    Visão de futuro - Planejamento
                    </h1>
                    <div className="description_vision">
                        <p className="text-xl text-[#415A77] mb-8">
                        O Interrogatio nasceu como um projeto acadêmico de extensão, mas possui grande potencial de evolução para além do ambiente universitário.  
                            Entre as possibilidades futuras estão:  <br /> 
                            - Plataforma acessível a empresas de RH, escolas e consultorias de carreira.br <br />  
                            - Integração com plataformas de videoconferência** (Zoom, Google Meet, Microsoft Teams) para análise em tempo real durante entrevistas online.  <br />
                            - Dashboard com métricas de evolução individual ao longo de diversas entrevistas.  <br />
                            - **Personalização por área profissional**, ajustando critérios de análise para entrevistas técnicas, comportamentais ou acadêmicas.  <br />
                            - **Gamificação e trilhas de aprendizado**, oferecendo recomendações práticas, exercícios de fala e simulações de entrevistas.  <br />
                            - **Expansão internacional**, com suporte a múltiplos idiomas e adaptação a diferentes contextos culturais.  <br />

                            Com essas melhorias, o Interrogatio pode se consolidar como uma ferramenta inovadora de **treinamento de entrevistas** e **desenvolvimento de comunicação profissional**, alcançando tanto indivíduos quanto organizações.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    </div>

    );
  }