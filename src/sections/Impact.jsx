import { useState } from 'react';

export default function Impact() {
  const [activeModal, setActiveModal] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const escolas = [
    {
      id: "itaiçaba",
      cidade: "Itaiçaba, CE",
      nome: "Escola de Ensino Médio João Barbosa Lima",
      descricao: "Sessões focadas na aplicação dos jogos.",
      modalText: "Durante a nossa visita à escola, os alunos puderam vivenciar sobre a cultura e história dos municípios. A recepção foi incrível e resultou em ótimas discussões sobre o patrimônio cultural dos municípios.",
      imagens: [
        "src/assets/Visitas/Itaiçaba/v-1.jpeg",
        "src/assets/Visitas/Itaiçaba/v-2.jpeg",
        "src/assets/Visitas/Itaiçaba/v-4.jpeg",
        "src/assets/Visitas/Itaiçaba/v-5.jpeg",
        "src/assets/Visitas/Itaiçaba/v-6.jpeg",
        "src/assets/Visitas/Itaiçaba/v-7.jpeg",
        "src/assets/Visitas/Itaiçaba/v-8.jpeg",
        "src/assets/Visitas/Itaiçaba/v-9.jpeg",
        "src/assets/Visitas/Itaiçaba/v-10.jpeg",
        "src/assets/Visitas/Itaiçaba/v-11.jpeg"
      ]
    },
    {
      id: "aracati",
      cidade: "Aracati, CE",
      nome: "EEF Antônio Monteiro",
      descricao: "Sessões focadas na aplicação dos jogos.",
      modalText: "Em Aracati, focamos em aprsentar os jogos autorais e como adolescentes mais novos interagiam com os mesmos.",
      imagens: [
        "src/assets/Visitas/Aracati/Antonio-1.JPG",
        "src/assets/Visitas/Aracati/Antonio-2.JPG",
        "src/assets/Visitas/Aracati/Antonio-3.JPG",
        "src/assets/Visitas/Aracati/Antonio-4.JPG",
        "src/assets/Visitas/Aracati/Antonio-5.JPG",
        "src/assets/Visitas/Aracati/Antonio-6.JPG",
        "src/assets/Visitas/Aracati/Antonio-7.JPG",
      ]
    },
    {
      id: "jaguaruana",
      cidade: "Jaguaruana, CE",
      nome: "Escola Profissionalizante Francisca Rocha Silva",
      descricao: "Sessões focadas na aplicação dos jogos.",
      modalText: "A visita a Fortim foi marcada pela dinamicidade. Dividimos as turmas em grupos menores para partidas simultâneas, estimulando a liderança e a tomada de decisão rápida frente aos eventos da vila.",
      imagens: [
        "src/assets/Visitas/Jaguaruana/ep-1.JPG",
        "src/assets/Visitas/Jaguaruana/ep-2.JPG",
        "src/assets/Visitas/Jaguaruana/ep-3.JPG",
        "src/assets/Visitas/Jaguaruana/ep-4.JPG",
        "src/assets/Visitas/Jaguaruana/ep-5.JPG",
        "src/assets/Visitas/Jaguaruana/ep-6.JPG",
        "src/assets/Visitas/Jaguaruana/ep-7.JPG",
        "src/assets/Visitas/Jaguaruana/ep-8.JPG"
      ]
    },
    {
      id: "sebrae",
      cidade: "Aracati, CE",
      nome: "Sebrae Aracati",
      descricao: "Exposição dos jogos autorais",
      modalText: "Neste evento focamos em mostrar todo o nosso projeto e trabalhos até o momento.",
      imagens: [
        "src/assets/Visitas/Sebrae/sebrae-1.jpeg",
        "src/assets/Visitas/Sebrae/sebrae-2.jpeg",
        "src/assets/Visitas/Sebrae/sebrae-3.jpeg",
        "src/assets/Visitas/Sebrae/sebrae-4.jpeg",
        "src/assets/Visitas/Sebrae/sebrae-5.jpeg",
        "src/assets/Visitas/Sebrae/sebrae-6.jpeg",
        "src/assets/Visitas/Sebrae/sebrae-7.jpeg",
        "src/assets/Visitas/Sebrae/sebrae-8.jpeg",
        "src/assets/Visitas/Sebrae/sebrae-9.jpeg",
        "src/assets/Visitas/Sebrae/sebrae-10.jpeg",
        "src/assets/Visitas/Sebrae/sebrae-11.jpeg",
        "src/assets/Visitas/Sebrae/sebrae-12.jpeg",
        "src/assets/Visitas/Sebrae/sebrae-13.jpeg",
        "src/assets/Visitas/Sebrae/sebrae-14.jpeg"
      ]
    },
    {
      id: "unijaguaribe",
      cidade: "Aracati, CE",
      nome: "Unijaguaribe",
      descricao: "Exposição dos jogos autorais",
      modalText: "Neste evento focamos em mostrar todo o nosso projeto e trabalhos até o momento.",
      imagens: [
        "src/assets/Visitas/fvj/fvj-1.jpeg",
        "src/assets/Visitas/fvj/fvj-2.jpeg",
        "src/assets/Visitas/fvj/fvj-3.jpeg",
        "src/assets/Visitas/fvj/fvj-4.jpeg",
        "src/assets/Visitas/fvj/fvj-5.jpeg",
        "src/assets/Visitas/fvj/fvj-6.jpeg",
        "src/assets/Visitas/fvj/fvj-7.jpeg",
        "src/assets/Visitas/fvj/fvj-7.jpeg",
        "src/assets/Visitas/fvj/fvj-7.jpeg",
        "src/assets/Visitas/fvj/fvj-7.jpeg",
        "src/assets/Visitas/fvj/fvj-7.jpeg",
        "src/assets/Visitas/fvj/fvj-7.jpeg"
      ]
    },
    {
      id: "festival",
      cidade: "Aracati, CE",
      nome: "Festival do Camarão",
      descricao: "Exposição dos jogos autorais",
      modalText: "Neste evento focamos em mostrar todo o nosso projeto e trabalhos até o momento.",
      imagens: [
        "src/assets/Visitas/Festival/festival-1.jpeg",
        "src/assets/Visitas/Festival/festival-2.jpeg",
        "src/assets/Visitas/Festival/festival-3.jpeg"
      ]
    }
  ];

  const abrirModal = (escola) => {
    setActiveModal(escola);
    setCurrentImageIndex(0);
  };

  const proximaImagem = () => {
    setCurrentImageIndex((prev) => 
      prev === activeModal.imagens.length - 1 ? 0 : prev + 1
    );
  };

  const imagemAnterior = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? activeModal.imagens.length - 1 : prev - 1
    );
  };

  return (
    <section id="impacto" className="py-24 bg-pergaminho-claro border-t-2 border-pergaminho-escuro/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-madeira-escura mb-6">
            Por Onde Passamos
          </h2>
          <p className="text-lg text-texto-principal">
            O projeto <strong className="text-verde-escuro">Tabuleiros do Saber</strong> já percorreu diversas escolas públicas no Litoral Leste cearense. Levamos as oficinas e o "Passagem das Pedras" diretamente aos estudantes, conectando ludicidade e patrimônio histórico.
          </p>
        </div>

        {/* Grid de Escolas Visitadas (Clicáveis) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {escolas.map((escola) => (
            <button 
              key={escola.id} 
              onClick={() => abrirModal(escola)}
              className="text-left relative bg-destaque-claro p-8 rounded-2xl shadow-sm border border-pergaminho-escuro/20 hover:shadow-xl hover:border-verde-ativo hover:-translate-y-2 transition-all duration-300 group cursor-pointer w-full flex flex-col"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform origin-left">📍</div>
              <h3 className="text-xl font-bold text-madeira-escura mb-1">{escola.cidade}</h3>
              <h4 className="text-md font-semibold text-terroso-quente mb-3">{escola.nome}</h4>
              <p className="text-neutro text-sm leading-relaxed mb-4 flex-1">
                {escola.descricao}
              </p>
              <div className="mt-auto text-verde-ativo font-bold text-sm flex items-center gap-2">
                Ver registros da visita
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* MODAL DO CARROSSEL E TEXTO */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Fundo escuro */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setActiveModal(null)}
          ></div>
          
          {/* Container do Modal */}
          <div className="relative bg-pergaminho-claro w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl border border-madeira-clara flex flex-col animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
            
            {/* Cabeçalho */}
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-pergaminho-escuro/20 bg-destaque-claro z-10">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-madeira-escura">
                  {activeModal.nome}
                </h3>
                <p className="text-sm text-terroso-quente font-semibold">{activeModal.cidade}</p>
              </div>
              <button 
                onClick={() => setActiveModal(null)}
                className="text-madeira-escura/50 hover:text-terroso-quente transition-colors p-1 bg-pergaminho-medio/50 rounded-full"
                aria-label="Fechar"
              >
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            {/* Conteúdo Rolável (Carrossel + Texto) */}
            <div className="overflow-y-auto custom-scrollbar flex flex-col">
              
              {/* Carrossel de Imagens (Agora com espaçamento e ajuste proporcional) */}
              <div className="relative w-full h-64 sm:h-80 md:h-[450px] bg-pergaminho-medio/30 p-4 sm:p-8 flex items-center justify-center group border-b border-pergaminho-escuro/20">
                <img 
                  src={activeModal.imagens[currentImageIndex]} 
                  alt={`Registro ${currentImageIndex + 1}`} 
                  className="max-w-full max-h-full object-contain rounded-lg shadow-md transition-opacity duration-300"
                />
                
                {/* Controles do Carrossel (só exibe se houver mais de 1 imagem) */}
                {activeModal.imagens.length > 1 && (
                  <>
                    <button 
                      onClick={imagemAnterior}
                      className="absolute left-2 sm:left-6 p-2 bg-madeira-escura/70 hover:bg-madeira-escura text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Imagem anterior"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <button 
                      onClick={proximaImagem}
                      className="absolute right-2 sm:right-6 p-2 bg-madeira-escura/70 hover:bg-madeira-escura text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Próxima imagem"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
                    </button>

                    {/* Indicadores (Pontinhos) reposicionados e recoloridos */}
                    <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 flex justify-center gap-2 flex-wrap px-12">
                      {activeModal.imagens.map((_, idx) => (
                        <button 
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-2.5 h-2.5 rounded-full transition-all flex-shrink-0 ${
                            idx === currentImageIndex ? 'bg-terroso-quente w-5' : 'bg-madeira-escura/40 hover:bg-madeira-escura'
                          }`}
                          aria-label={`Ir para imagem ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Texto Principal */}
              <div className="p-6 sm:p-8 bg-pergaminho-claro">
                <p className="text-lg text-texto-principal leading-relaxed">
                  {activeModal.modalText}
                </p>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  )
}