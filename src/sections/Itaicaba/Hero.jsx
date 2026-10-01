import { useState, useEffect } from 'react';

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitora a rolagem da página para esconder/mostrar o botão
  useEffect(() => {
    const handleScroll = () => {
      // Se rolar mais de 50 pixels para baixo, o botão some
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Limpeza do evento quando o componente for desmontado
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between min-h-[90vh] lg:min-h-screen">
      
      {/* Container flexível para centralizar verticalmente na tela */}
      <div className="flex flex-col lg:flex-row items-center gap-12 my-auto w-full pb-8">
        
        {/* Bloco de Texto e Botão */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-madeira-escura mb-4 leading-tight">
            PASSAGEM DAS PEDRAS:
            <span className="block text-4xl md:text-5xl text-terroso-quente mt-2 italic font-serif">
              Crise na Vila
            </span>
          </h1>
          
          <p className="text-lg text-texto-principal mb-8 max-w-2xl mx-auto lg:mx-0">
            Um jogo de tabuleiro educativo que mergulha na história e cultura de Itaiçaba. 
            Enfrente a crise, tome decisões estratégicas e aprenda enquanto joga!
          </p>
          
          {/* <div className="flex justify-center lg:justify-start">
            <a href="#artigo" className="bg-terroso-quente hover:bg-madeira-clara text-destaque-claro px-8 py-4 rounded-md font-bold transition-all shadow-lg hover:-translate-y-1 text-lg flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              BAIXE O ARTIGO (PDF)
            </a>
          </div> */}
        </div>

        {/* Bloco da Imagem Principal Responsiva */}
        <div className="flex-1 w-full relative mt-8 lg:mt-0 flex justify-center items-center">
          <img 
            src="tabuleiros-do-saber/src/assets/Itaicaba/Caixa_fechada.jpeg" 
            alt="Tabuleiro montado do jogo Passagem das Pedras" 
            className="w-full h-auto max-h-[50vh] lg:max-h-[600px] object-contain rounded-xl shadow-2xl border-4 border-madeira-clara bg-pergaminho-medio"
          />
        </div>
        
      </div>

      {/* Botão Flutuante Fixo (Some ao rolar) */}
      <div 
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-40 transition-opacity duration-500 ${
          isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="animate-bounce bg-madeira-escura text-destaque-claro p-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.4)] border-2 border-pergaminho-claro/20">
          <svg 
            className="w-7 h-7" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
      
    </section>
  )
}