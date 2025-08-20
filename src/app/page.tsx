import Link from 'next/link';

export default function Home() {
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
                Interrogatio
              </h1>
              <p className="text-xl text-[#415A77] mb-8">
                Transforme suas entrevistas profissionais com análises inteligentes e feedbacks automáticos.
                Descubra insights valiosos e aprimore seu processo seletivo.
              </p>
              <Link href="/explorar" className="btn-primary">
                Explorar
              </Link>
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
