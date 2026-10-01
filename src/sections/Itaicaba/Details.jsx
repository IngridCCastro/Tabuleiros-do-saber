import { useState } from 'react';

export default function Details() {
  // Controla qual aba do modal está aberta (conteúdo principal)
  const [activeModal, setActiveModal] = useState(null);
  
  // Controla a imagem que foi clicada para expansão (tela cheia)
  const [expandedImage, setExpandedImage] = useState(null);

  // Dados atualizados com imagens de placeholder para cada item
  const componentes = [
    {
      id: "cartas",
      title: "Cartas",
      description: "Representam acontecimentos, pessoas, lendas e a história de Itaiçaba.",
      icon: "📜",
      modalData: {
        title: "Tipos de cartas",
        intro: "Existem diferentes tipos de cartas.",
        items: [
          { 
            name: "Cartas de Crise", 
            desc: "Cartas de Crise são o objetivo central do jogo. Elas representam acontecimentos históricos que moldara a identidade da cidade. Cada carta pede uma quantidade de recrusos que os jogadores precisam juntar para solucionar a crise vencer o jogo.",
            image: "tabuleiros-do-saber/src/assets/Itaicaba/Cartas/Separacao.png"
          },
          { 
            name: "Cartas de Tempo", 
            desc: "Cartas de Tempo são parecidas com cartas de Crise, elas representam a cultura e a vida nordestina de um modo geral. Estas cartas executam efeitos especiais ao longo do jogo.",
            image: "tabuleiros-do-saber/src/assets/Itaicaba/Cartas/Seca.png"
          },
          { 
            name: "Cartas de Personagens", 
            desc: "Estas cartas representam algumas das diferentes pessoas que do município. Como: Pescador, Artesão, Fazendeiro, etc. Cada jogador recebe uma carta de personagem no início do jogo. Cada uma traz habilidades especiais para quem as possuir.",
            image: "src/assets/Cartas/Comerciante.png"
          },
          { 
            name: "Cartas de Recurso", 
            desc: "Estas cartas são os centro do jogo junto com as cartas de Crise. Cada carta traz diferentes recursos que precisam ser acumulados para solucionar a crise.",
            image: "src/assets/Cartas/Material.png"
          },
          { 
            name: "Cartas de Especiais", 
            desc: "Cartas Especiais podem trazer habilidades especiais no momento que são usadas, ous recursos duplicados.",
            image: "tabuleiros-do-saber/src/assets/Itaicaba/Cartas/Comida-Barco.png"
          },
          { 
            name: "Cartas de Lealdade", 
            desc: "Cartas de Lealdade são utilizadas quando se joga no modo 'Impostor'. Elas são entregues juntos com as cartas de personagem no início do jogo e definem se o jogador irá contribuir ou não com a solução da crise.",
            image: "tabuleiros-do-saber/src/assets/Itaicaba/Cartas/CidadaoLeal.png"
          }
        ]
      }
    },
    {
      id: "tabuleiro",
      title: "Tabuleiro",
      description: "Tabuleiro que representa o município de Itaiçaba abstratamente.",
      icon: "♟️",
      modalData: {
        title: "Tabuleiro",
        intro: "O tabuleiro de Passagem das Pedras: Crise na Vila não funciona com trilhas. Nele existem pontos fixos para onde o jogador pode posicionar seu peão e executar a ação daquele lugar.",
        items: [
          { 
            name: "O Tabuleiro", 
            desc: "Além dos pontos onde o jogador posiciona o peão. Também existem dois lugares para posicionar cartas. Ao centro para colocar a carta de Crise que está em vigor. E, abaixo, para colocar as cartas com os recursos exigidos para solucionar a crise.",
            image: "tabuleiros-do-saber/src/assets/Itaicaba/tabuleiroFinal.png"
          }
        ]
      }
    },
    {
      id: "mecanicas",
      title: "Mecânicas Principais",
      description: "Combina gestão de recursos, movimentação no mapa e tomada de decisão cooperativa.",
      icon: "🎲",
      modalData: {
        title: "Mecânicas do Jogo",
        intro: "O jogo funciona de forma cooperativa, onde a falha da vila é a falha de todos. As decisões precisam ser tomadas em conjunto.",
        items: [
          { 
            name: "Gestão de Recursos", 
            desc: "A gestão de recursos é o processo de planejar, alocar e controlar bens limitados.",
          },
          { 
            name: "Personagens", 
            desc: "As mecânicas de personagens são as regras, sistemas e estatísticas que definem o que um personagem pode fazer, como ele interage com o mundo de um jogo",
          },
          { 
            name: "Rodadas", 
            desc: "Mecânica de rodadas em jogos de tabuleiro define como o tempo do jogo é estruturado, dividindo a partida em ciclos ordenados de ações, fases ou turnos.",
          },
          { 
            name: "Peões", 
            desc: "A mecânica de peões em jogos de tabuleiro envolve regras específicas de movimentação, captura e estrutura estratégica.",
          },
          {
            name: "Cartas",
            desc: "A mecânica de cartas refere-se ao conjunto de regras que definem como as cartas são utilizadas, compradas, trocadas ou jogadas dentro de um jogo.",
          },
          {
            name: "Blefe",
            desc: "A mecânica de blefe é um recurso de jogos baseado na dissimulação, na omissão e na manipulação de informações, onde um jogador finge ter uma força, intenção ou carta diferente da que realmente possui para enganar os adversários.",
          }
        ]
      }
    }
    // {
    //   id: "objetivo",
    //   title: "Objetivo do Jogo",
    //   description: "Superar as crises históricas acumulando recursos e utilizando o conhecimento local.",
    //   icon: "🎯",
    //   modalData: {
    //     title: "Como Vencer",
    //     intro: "A vitória não é individual. Para vencer em Passagem das Pedras, o grupo precisa garantir a sobrevivência e a prosperidade da vila de Itaiçaba.",
    //     items: [
    //       { 
    //         name: "Trilha de Progresso", 
    //         desc: "Mantenha o medidor de esperança acima do limiar crítico para não perder o jogo imediatamente.",
    //         image: "https://via.placeholder.com/400x200/D97D3C/F9F5EC?text=Trilha+Progresso"
    //       }
    //     ]
    //   }
    // }
  ];

  return (
    <section id="como-jogar" className="py-20 bg-pergaminho-medio border-y-2 border-madeira-clara/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-madeira-escura mb-16">
          Componentes do Jogo
        </h2>
        
        {/* Grid de Componentes (Clicáveis) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 max-w-5xl mx-auto">
          {componentes.map((item) => (
            <button 
              key={item.id} 
              onClick={() => setActiveModal(item)}
              className="text-left bg-pergaminho-claro p-6 rounded-xl shadow-md border border-pergaminho-escuro/30 hover:border-terroso-quente hover:-translate-y-2 hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="text-4xl mb-4 bg-verde-natural/10 w-16 h-16 flex items-center justify-center rounded-full group-hover:bg-verde-natural/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-madeira-escura mb-3 group-hover:text-terroso-quente transition-colors">
                {item.title}
              </h3>
              <p className="text-texto-principal leading-relaxed text-sm">
                {item.description}
              </p>
              <div className="mt-4 text-terroso-quente font-bold text-sm flex items-center gap-2">
                Ver Detalhes 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* MODAL PRINCIPAL (Detalhes dos Componentes) */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setActiveModal(null)}
          ></div>
          
          <div className="relative bg-pergaminho-claro w-full max-w-3xl max-h-[85vh] rounded-2xl shadow-2xl border border-madeira-clara flex flex-col animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-6 border-b border-pergaminho-escuro/20">
              <h3 className="text-2xl font-bold text-madeira-escura flex items-center gap-3">
                <span className="text-3xl">{activeModal.icon}</span>
                {activeModal.modalData.title}
              </h3>
              <button 
                onClick={() => setActiveModal(null)}
                className="text-madeira-escura/50 hover:text-terroso-quente transition-colors p-1"
                aria-label="Fechar"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <div className="p-6 overflow-y-auto custom-scrollbar">
              <p className="text-lg text-texto-principal mb-8 leading-relaxed">
                {activeModal.modalData.intro}
              </p>

              <div className="space-y-6">
                {activeModal.modalData.items.map((subItem, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row gap-5 bg-pergaminho-medio/30 p-4 rounded-lg border border-pergaminho-escuro/20">
                    
                    {/* Renderização Condicional: Só exibe se subItem.image existir */}
                    {subItem.image && (
                      <button 
                        onClick={() => setExpandedImage(subItem.image)}
                        className="flex-shrink-0 w-full sm:w-32 h-40 sm:h-auto rounded-md overflow-hidden border-2 border-transparent hover:border-terroso-quente transition-colors shadow-sm relative group cursor-zoom-in"
                      >
                        <img 
                          src={subItem.image} 
                          alt={subItem.name} 
                          className="w-full h-full object-cover"
                        />
                        {/* Overlay com lupa ao passar o mouse */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <svg className="w-8 h-8 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                          </svg>
                        </div>
                      </button>
                    )}

                    {/* Texto ao lado da imagem (ocupa espaço total se imagem não existir) */}
                    <div className="flex-1 flex flex-col justify-center">
                      <h4 className="text-lg font-bold text-verde-escuro mb-2">
                        {subItem.name}
                      </h4>
                      <p className="text-texto-principal leading-relaxed text-sm sm:text-base">
                        {subItem.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* OVERLAY DE IMAGEM EXPANDIDA (Fica acima do modal principal) */}
      {expandedImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8">
          {/* Fundo bem escuro para focar na imagem */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={() => setExpandedImage(null)}
          ></div>
          
          <div className="relative animate-in zoom-in-90 duration-200 w-full max-w-4xl h-full flex items-center justify-center">
            {/* Imagem em tamanho máximo contida na tela */}
            <img 
              src={expandedImage} 
              alt="Ampliada" 
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.5)] border-2 border-madeira-clara/30"
            />
            
            {/* Botão de fechar (X) estilo galeria */}
            <button 
              onClick={() => setExpandedImage(null)}
              className="absolute top-0 right-0 bg-madeira-escura hover:bg-terroso-quente text-white rounded-full p-2 m-4 shadow-lg transition-colors z-10"
              aria-label="Fechar ampliação"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}