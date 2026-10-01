export default function About() {
  // Adicione o caminho das fotos reais na propriedade "imagem". 
  // Exemplo: "src/assets/equipe/joao.jpg" ou "/joao.jpg" (se estiver na pasta public)
  const equipe = [
    {
      nome: "Andressa Bezerra", 
      papel: "Professora Coordenadora",
      imagem: "src/assets/Integrantes/Andressa.jpg"
    },
    { 
      nome: "Samuel Levi", 
      papel: "Professor Parceiro",
      imagem: "src/assets/Integrantes/Samuel.png"
    },
    { 
      nome: "Gabriel Marchon", 
      papel: "Caiçara(Icapuí)",
      imagem: "src/assets/Integrantes/Marchon.jpeg"
    },
    { 
      nome: "Guilherme Emanuel", 
      papel: "Fortim e a Guerra do Comércio(Fortim)",
      imagem: "src/assets/Integrantes/Guilherme.jpeg"
    },
    { 
      nome: "Iasmim Gondim", 
      papel: "A Lenda da Cascavel(Cascavel)",
      imagem: "src/assets/Integrantes/Iasmim.jpeg"
    },
    { 
      nome: "Ingrid Gondim", 
      papel: "Aracati: Guarddiões da Memória(Aracati)",
      imagem: "src/assets/Integrantes/Ingrid.jpeg"
    },
    { 
      nome: "João Vitor Silva", 
      papel: "Passagem das Pedras: Crise na Vila(Itaiçaba)",
      imagem: "src/assets/Integrantes/joao_vitor.jpeg"
    },
    { 
      nome: "Maria Camilly(Beberibe)", 
      papel: "SiliCORgrafia",
      imagem: "src/assets/Integrantes/Camilly.jpeg"
    },
    { 
      nome: "Natália Beatryz(Pindoretama)", 
      papel: "Rapadura",
      imagem: "src/assets/Integrantes/Beatriz.jpeg"
    },
    { 
      nome: "Yane Fernandes(Juaguaruana)", 
      papel: "Entre Redes e Lendas",
      imagem: "src/assets/Integrantes/Yane.jpeg"
    }
  ];

  return (
    <section id="sobre" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Texto Sobre o Projeto */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-madeira-escura mb-6">
            Sobre o Projeto Tabuleiros do Saber
          </h2>
          <p className="text-lg text-texto-principal mb-6 leading-relaxed">
            Nascido no IFCE Campus Aracati, o projeto de extensão <strong className="text-verde-escuro">Tabuleiros do Saber</strong> tem como missão utilizar jogos analógicos modernos como ferramentas educativas e de transformação social.
          </p>
          <p className="text-lg text-texto-principal mb-6 leading-relaxed">
            O uso de jogos de tabuleiro como recurso pedagógico tem se destacado pela capacidade de engajar estudantes e desenvolver competências cognitivas, socioemocionais e colaborativas. Nesse cenário, o IFCE mantém dois ambientes extensionistas dedicados a essa prática: o Forja, criado em 2023 no campus Jaguaruana, e o Tabulando, implantado em 2024 no campus Aracati. Ambos são conduzidos por equipes de professores e estudantes voluntários, oferecem acervos diversificados e promovem sessões temáticas que integram ludicidade e aprendizagem, fortalecendo a interação entre comunidade acadêmica e sociedade. 
          </p>
          <p className="text-lg text-texto-principal leading-relaxed">
            Como desdobramento, surge o Tabuleiros do Saber, iniciativa itinerante que leva os jogos até as escolas locais e estimula a criação de jogos autorais inspirados na cultura do litoral leste do Ceará, ampliando a integração entre instituição, comunidade e território.
          </p>
        </div>

        {/* Cards da Equipe */}
        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
          {equipe.map((membro, idx) => (
            <div 
              key={idx} 
              className="bg-pergaminho-medio/40 p-6 rounded-xl border border-pergaminho-escuro/20 text-center hover:bg-pergaminho-medio/80 transition-colors flex flex-col items-center shadow-sm hover:shadow-md"
            >
              {/* Renderização da Foto ou Letra Inicial */}
              {membro.imagem ? (
                <img 
                  src={membro.imagem} 
                  alt={`Foto de ${membro.nome}`} 
                  className="w-24 h-24 rounded-full object-cover mb-4 shadow-md border-4 border-madeira-clara bg-pergaminho-claro"
                />
              ) : (
                <div className="w-24 h-24 bg-madeira-clara text-destaque-claro rounded-full mb-4 flex items-center justify-center text-3xl font-bold shadow-inner border-4 border-madeira-clara">
                  {membro.nome.charAt(0)}
                </div>
              )}
              
              <h3 className="font-bold text-madeira-escura text-lg">{membro.nome}</h3>
              <p className="text-sm text-neutro font-medium mt-1">{membro.papel}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}