import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-pergaminho-claro border-b-2 border-madeira-clara/20 transition-colors duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Empilhada Original */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="font-bold text-lg text-madeira-escura transition-colors flex flex-col leading-tight tracking-wide">
              <span>TABULEIROS</span>
              <span>DO SABER</span>
            </a>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-texto-principal font-bold hover:text-terroso-quente transition-colors">Início</a>
            <a href="#como-jogar" className="text-texto-principal font-bold hover:text-terroso-quente transition-colors">Como Jogar</a>
            <a href="#artigo" className="text-texto-principal font-bold hover:text-terroso-quente transition-colors">Acadêmico</a>
            <a href="#sobre" className="text-texto-principal font-bold hover:text-terroso-quente transition-colors">Projeto</a>
          </div>

          {/* Botão Contato (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#contato" className="bg-madeira-escura hover:bg-terroso-quente text-destaque-claro px-6 py-2 rounded-md font-bold transition-colors shadow-sm">
              Contato
            </a>
          </div>

          {/* Menu Hamburguer Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-madeira-escura focus:outline-none">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Expandido */}
      {isOpen && (
        <div className="md:hidden bg-pergaminho-claro border-t border-madeira-clara/20 transition-colors">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-texto-principal font-bold hover:bg-pergaminho-medio rounded-md">Início</a>
            <a href="#como-jogar" className="block px-3 py-2 text-texto-principal font-bold hover:bg-pergaminho-medio rounded-md">Como Jogar</a>
            <a href="#artigo" className="block px-3 py-2 text-texto-principal font-bold hover:bg-pergaminho-medio rounded-md">Acadêmico</a>
            <a href="#sobre" className="block px-3 py-2 text-texto-principal font-bold hover:bg-pergaminho-medio rounded-md">Projeto</a>
            <a href="#contato" className="block px-3 py-2 text-terroso-quente font-bold hover:bg-pergaminho-medio rounded-md">Contato</a>
          </div>
        </div>
      )}
    </nav>
  )
}