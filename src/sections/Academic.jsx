export default function Academic() {
  return (
    <section id="artigo" className="bg-verde-escuro text-destaque-claro py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-shrink-0 bg-destaque-claro/10 p-8 rounded-2xl border border-destaque-claro/20 shadow-inner">
          {/* Ícone de PDF */}
          <svg className="w-24 h-24 text-terroso-quente" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
        </div>
        
        <div className="text-center md:text-left flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pesquisa Acadêmica</h2>
          <p className="text-lg text-destaque-claro/90 mb-8 leading-relaxed">
            O desenvolvimento do jogo é fundamentado na incorporação da ludicidade como ferramenta de ensino e salvaguarda da memória local. 
            Conheça as metodologias aplicadas, o resgate histórico de Itaiçaba e os resultados 
            alcançados na educação básica através do nosso artigo completo.
          </p>
          <a 
            // href="/25303_Manuscrito_VERSAO_FINAL.pdf" 
            download 
            className="inline-block bg-terroso-quente hover:bg-madeira-clara text-destaque-claro px-8 py-3 rounded-md font-bold transition-all shadow-lg hover:-translate-y-1"
          >
            FUTURAMENTE DISPONÍVEL PARA DONWLOAD
          </a>
        </div>
      </div>
    </section>
  )
}