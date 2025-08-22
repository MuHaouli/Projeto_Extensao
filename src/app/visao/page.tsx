import Link from "next/link";
import Image from "next/image";

export default function VisaoPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#E0E1DD] to-white">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-10">
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

            {/* Hero Section */}
            <main className="flex-grow">
                <section className="relative bg-gradient-to-br from-[#E0E1DD] to-white py-20 fade-in-up">
                    <div className="container-custom flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2 text-center md:text-left">
                            <h1 className="text-5xl font-extrabold text-[#1B263B] mb-6 drop-shadow-lg">
                                Visão de futuro <span className="text-[#304878]">Interrogatio</span>
                            </h1>
                            <p className="text-xl text-[#415A77] mb-8">
                                O Interrogatio nasceu como um projeto acadêmico de extensão, mas possui grande potencial de evolução para além do ambiente universitário.
                            </p>
                            <ul className="text-lg text-[#304878] text-left mb-8 space-y-2">
                                <li>• Plataforma acessível a empresas de RH, escolas e consultorias de carreira</li>
                                <li>• Integração com plataformas de videoconferência (Zoom, Google Meet, Microsoft Teams) para análise em tempo real</li>
                                <li>• Dashboard com métricas de evolução individual ao longo de diversas entrevistas</li>
                                <li>• <span className="font-semibold">Personalização por área profissional</span>, ajustando critérios de análise para entrevistas técnicas, comportamentais ou acadêmicas</li>
                                <li>• <span className="font-semibold">Gamificação e trilhas de aprendizado</span>, com recomendações práticas, exercícios de fala e simulações</li>
                                <li>• <span className="font-semibold">Expansão internacional</span>, com suporte a múltiplos idiomas e adaptação a diferentes contextos culturais</li>
                            </ul>
                            <p className="text-lg text-[#415A77] font-medium">
                                Com essas melhorias, o Interrogatio pode se consolidar como uma ferramenta inovadora de <span className="font-bold">treinamento de entrevistas</span> e <span className="font-bold">desenvolvimento de comunicação profissional</span>, alcançando tanto indivíduos quanto organizações.
                            </p>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <Image
                                src="/visaoLogo.png"
                                alt="Visão do futuro"
                                width={400}
                                height={400}
                                className="rounded-2xl shadow-xl border-4 border-[#304878] bg-white"
                                priority
                            />
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-[#1B263B] text-white py-6 mt-12">
                <div className="container-custom flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center gap-3 mb-4 md:mb-0">
                        <Image src="/visaoLogo.png" alt="Visao Logo" width={40} height={40} className="bg-white rounded-full p-1" />
                        <span className="font-semibold">Projeto de Extensão Unifil</span>
                    </div>
                    <p className="text-sm">© 2025 Interrogatio. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
}