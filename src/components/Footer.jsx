export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-madeira-escura text-destaque-claro pt-16 pb-8 border-t-4 border-terroso-quente">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Coluna 1: Marca */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-pergaminho-claro">Tabuleiros do Saber</h3>
            <p className="text-destaque-claro/80 leading-relaxed text-sm">
              Iniciativa de extensão dedicada a transformar o ensino através do desenvolvimento e aplicação de jogos de tabuleiro modernos e educativos.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-terroso-quente">Navegação</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-destaque-claro/80 hover:text-pergaminho-claro transition-colors text-sm">Página Inicial</a></li>
              <li><a href="#como-jogar" className="text-destaque-claro/80 hover:text-pergaminho-claro transition-colors text-sm">Como Jogar</a></li>
              <li><a href="#artigo" className="text-destaque-claro/80 hover:text-pergaminho-claro transition-colors text-sm">Artigo Acadêmico</a></li>
              <li><a href="#sobre" className="text-destaque-claro/80 hover:text-pergaminho-claro transition-colors text-sm">A Equipe</a></li>
            </ul>
          </div>

          {/* Coluna 3: Parceiros / Apoio (Logos Maiores) */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-terroso-quente">Apoio & Parceiros</h4>
            <div className="flex flex-col gap-6 items-start">
              {/* Logo 1 - Altura aumentada para h-20 ou h-24 */}
              <img 
                src="/public/Logos/ifce.jpeg" 
                alt="Logo IFCE" 
                className="h-20 sm:h-24 w-auto object-contain bg-pergaminho-claro/90 p-2 rounded-lg shadow-sm"
              />
              {/* Logo 2 - Altura aumentada para h-20 ou h-24 */}
              <img 
                src="/public/Logos/interset-horizontal.jpeg" 
                alt="Logo Interset" 
                className="h-20 sm:h-24 w-auto object-contain bg-pergaminho-claro/90 p-2 rounded-lg shadow-sm"
              />
              <img 
                src="/public/Logos/tabuleiros.jpeg" 
                alt="Logo Tabuleiros" 
                className="h-20 sm:h-24 w-auto object-contain bg-pergaminho-claro/90 p-2 rounded-lg shadow-sm"
              />
            </div>
          </div>

          {/* Coluna 4: Contato & Redes Sociais */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-terroso-quente">Contato</h4>
            
            <div className="flex flex-col gap-4 mb-4">
              {/* Instagram Tabulando */}
              <a 
                href="https://instagram.com/seu_user_tabulando" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-destaque-claro/80 hover:text-pergaminho-claro transition-colors text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
                @tabu.lando
              </a>
              
              {/* Instagram Forja */}
              <a 
                href="https://instagram.com/seu_user_forja" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-destaque-claro/80 hover:text-pergaminho-claro transition-colors text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
                @forja_if
              </a>

              <a 
                href="https://redeintersetce.ufc.br/projeto/tabuleiros-do-saber/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-destaque-claro/80 hover:text-pergaminho-claro transition-colors text-sm"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
                Site Interset
              </a>
            </div>

            <p className="text-destaque-claro/80 mb-2 text-sm">
              Interessado em levar o projeto para sua escola?
            </p>
            <a 
              href="mailto:tabuleirosdosaber@gmail.com.com" 
              className="inline-block mt-1 text-pergaminho-claro font-bold hover:text-terroso-quente transition-colors underline decoration-2 underline-offset-4 text-sm"
            >
              Fale com a equipe
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-destaque-claro/10 text-destaque-claro/60 text-xs">
          <p>© {anoAtual} Projeto Tabuleiros do Saber. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}