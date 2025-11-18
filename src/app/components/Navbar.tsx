import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container-custom py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/unifil-logo.png" alt="Logo UniFil" className="h-10 w-auto" />
            <Link href="/" className="text-2xl font-bold text-[#000000]">
              Interrogatio
            </Link>
          </div>

          <div className="space-x-8">
            <Link href="/" className="nav-link">Início</Link>
            <Link href="/quem-somos" className="nav-link">Quem Somos</Link>
            <Link href="/comunidade" className="nav-link">Comunidade</Link>
            <Link href="/extensao" className="nav-link">Extensão</Link>
            <Link href="/visao" className="nav-link">Visão</Link>
            <Link href="/documentacao" className="nav-link">Documentação</Link>
            <Link href="/prototipo" className="nav-link">Telas</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
