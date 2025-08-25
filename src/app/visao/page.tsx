import Link from "next/link";

export default function VisaoPage() {
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
                <section className="bg-gradient-to-b from-[#7890A8] to-white py-20">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-5xl font-bold text-[#000000] mb-6">
                                Visão de Futuro
                            </h1>
                            <p className="text-xl text-[#304878] mb-12">
                                O Interrogatio nasceu como um projeto acadêmico de extensão, mas possui grande potencial de evolução para além do ambiente universitário.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Possibilidades Futuras */}
                <section className="py-16 bg-gray-50">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl font-bold text-[#000000] mb-12 text-center">
                                Possibilidades Futuras
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center">
                                    <div className="w-16 h-16 bg-[#000000] rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <span className="text-white text-2xl">🌐</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#000000] mb-2">Plataforma Acessível</h3>
                                    <p className="text-[#304878]">Empresas de RH, escolas e consultorias de carreira</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center">
                                    <div className="w-16 h-16 bg-[#7890A8] rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <span className="text-white text-2xl">💻</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#000000] mb-2">Integração com Videoconferência</h3>
                                    <p className="text-[#304878]">Zoom, Google Meet, Microsoft Teams para análise em tempo real</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center">
                                    <div className="w-16 h-16 bg-[#F0A818] rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <span className="text-white text-2xl">📊</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#000000] mb-2">Dashboard de Métricas</h3>
                                    <p className="text-[#304878]">Evolução individual ao longo de diversas entrevistas</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center">
                                    <div className="w-16 h-16 bg-[#304878] rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <span className="text-white text-2xl">⚙️</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#000000] mb-2">Personalização Profissional</h3>
                                    <p className="text-[#304878]">Critérios de análise para entrevistas técnicas, comportamentais ou acadêmicas</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center">
                                    <div className="w-16 h-16 bg-[#7890A8] rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <span className="text-white text-2xl">🎮</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#000000] mb-2">Gamificação e Trilhas</h3>
                                    <p className="text-[#304878]">Recomendações práticas, exercícios de fala e simulações</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center">
                                    <div className="w-16 h-16 bg-[#F0A818] rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <span className="text-white text-2xl">🌎</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#000000] mb-2">Expansão Internacional</h3>
                                    <p className="text-[#304878]">Suporte a múltiplos idiomas e adaptação a diferentes contextos culturais</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Consolidação */}
                <section className="py-16 bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl font-bold text-[#000000] mb-8">
                                Consolidação do Interrogatio
                            </h2>
                            <p className="text-lg text-[#304878] font-medium">
                                Com essas melhorias, o Interrogatio pode se consolidar como uma ferramenta inovadora de <span className="font-bold">treinamento de entrevistas</span> e <span className="font-bold">desenvolvimento de comunicação profissional</span>, alcançando tanto indivíduos quanto organizações.
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
