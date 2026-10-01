import { Link } from 'react-router-dom'

/*
  =======================================================
  IMAGENS DOS JOGOS
  =======================================================

  Você só precisa trocar estes três arquivos.

  ITAIÇABA:
  src/assets/Itaicaba/Caixa_fechada.jpeg

  ARACATI:
  src/assets/Aracati/Aracati_home.png

  CASCAVEL:
  src/assets/Cascavel/Cascavel_home.jpeg
*/

import imagemItaicaba
  from '../../assets/Itaicaba/Caixa_fechada.jpeg'

import imagemAracati
  from '../../assets/Aracati/Aracati_home.png'

import imagemCascavel
  from '../../assets/Cascavel/cascavel_home.jpeg'


function Home() {

  const jogos = [
    {
      cidade: 'Itaiçaba',
      titulo: 'Passagem das Pedras',
      subtitulo: 'Crise na Vila',
      descricao:
        'Um jogo cooperativo inspirado na história, nos desafios e na identidade cultural de Itaiçaba.',
      rota: '/PassagemDasPedras',
      imagem: imagemItaicaba,
      numero: '01',
    },

    {
      cidade: 'Aracati',
      titulo: 'Guardiões da Memória',
      subtitulo: 'História, patrimônio e cultura',
      descricao:
        'Uma experiência lúdica construída a partir da memória, do patrimônio e dos símbolos históricos de Aracati.',
      rota: '/GuardioesDaMemoria',
      imagem: imagemAracati,
      numero: '02',
    },

    {
      cidade: 'Cascavel',
      titulo: 'A Lenda da Cascavel',
      subtitulo: 'Folclore, território e memória',
      descricao:
        'Um jogo estratégico que transforma referências culturais e territoriais de Cascavel em experiência lúdica.',
      rota: '/ALendaDaCascavel',
      imagem: imagemCascavel,
      numero: '03',
    },
  ]


  return (
    <main className="home">

      {/* =================================================
          HERO
      ================================================= */}

      <section
        id="home"
        className="home-hero"
      >

        <div className="hero-badge">
          Projeto de extensão • IFCE
        </div>

        <h1>
          Histórias do Ceará
          <span>
            transformadas em jogos.
          </span>
        </h1>

        <p>
          Cultura, memória e território se encontram
          em jogos de tabuleiro desenvolvidos a partir
          das histórias dos municípios cearenses.
        </p>

        <div className="hero-actions">

          <a
            href="#jogos"
            className="primary-button"
          >
            Conheça os jogos

            <span>
              ↓
            </span>
          </a>

          <a
            href="#projeto"
            className="secondary-button"
          >
            Conheça o projeto
          </a>

        </div>

        <div className="hero-bottom">

          <div>
            <strong>03</strong>

            <span>
              jogos apresentados
            </span>
          </div>

          <div>
            <strong>03</strong>

            <span>
              municípios cearenses
            </span>
          </div>

          <div>
            <strong>01</strong>

            <span>
              território conectado
            </span>
          </div>

        </div>

      </section>


      {/* =================================================
          JOGOS
      ================================================= */}

      <section
        id="jogos"
        className="games-section"
      >

        <div className="section-header">

          <div>
            <span className="section-eyebrow">
              NOSSOS JOGOS
            </span>

            <h2>
              Conheça cada território
            </h2>
          </div>

          <p>
            Cada jogo nasce de pesquisas,
            referências locais e elementos culturais
            transformados em mecânicas, narrativas
            e experiências de mesa.
          </p>

        </div>


        <div className="games-grid">

          {jogos.map((jogo) => (

            <Link
              to={jogo.rota}
              key={jogo.cidade}
              className="game-card"
            >

              {/* IMAGEM */}

              <div className="game-image-wrapper">

                {/* fundo desfocado */}
                <img
                  src={jogo.imagem}
                  alt=""
                  aria-hidden="true"
                  className="game-image-background"
                />

                {/* imagem completa */}
                <img
                  src={jogo.imagem}
                  alt={`Imagem de ${jogo.titulo}`}
                  className="game-image"
                />

                <span className="game-number">
                  {jogo.numero}
                </span>

              </div>


              {/* TEXTO */}

              <div className="game-card-content">

                <span className="game-city">
                  {jogo.cidade}
                </span>

                <h3>
                  {jogo.titulo}
                </h3>

                <span className="game-subtitle">
                  {jogo.subtitulo}
                </span>

                <p>
                  {jogo.descricao}
                </p>

                <span className="game-link">
                  Explorar jogo

                  <strong>
                    →
                  </strong>
                </span>

              </div>

            </Link>

          ))}

        </div>

      </section>


      {/* =================================================
          PROJETO
      ================================================= */}

      <section
        id="projeto"
        className="project-section"
      >

        <div className="project-label">
          SOBRE O PROJETO
        </div>


        <div className="project-content">

          <h2>
            Do território
            <br />
            para o tabuleiro.
          </h2>


          <div className="project-text">

            <p>
              O <strong>Tabuleiros do Saber</strong>
              é uma iniciativa que aproxima educação,
              cultura e território por meio do
              desenvolvimento de jogos analógicos.
            </p>

            <p>
              As propostas partem de pesquisas,
              visitas, memórias, histórias,
              manifestações culturais e características
              próprias dos municípios do litoral
              leste cearense.
            </p>

          </div>

        </div>


        <div className="project-steps">

          <article>
            <span>01</span>

            <h3>
              Pesquisa
            </h3>

            <p>
              Levantamento histórico,
              cultural e territorial.
            </p>
          </article>


          <article>
            <span>02</span>

            <h3>
              Criação
            </h3>

            <p>
              Transformação das referências
              em mecânicas e narrativas.
            </p>
          </article>


          <article>
            <span>03</span>

            <h3>
              Prototipação
            </h3>

            <p>
              Desenvolvimento de tabuleiros,
              cartas, peças e regras.
            </p>
          </article>


          <article>
            <span>04</span>

            <h3>
              Aplicação
            </h3>

            <p>
              Experiências com estudantes,
              escolas e comunidade.
            </p>
          </article>

        </div>

      </section>


      {/* =================================================
          CHAMADA FINAL
      ================================================= */}

      <section className="home-cta">

        <span>
          CULTURA • EDUCAÇÃO • JOGOS
        </span>

        <h2>
          Uma nova forma de
          conhecer nossas histórias.
        </h2>

        <a href="#jogos">
          Explore os jogos
          <strong>→</strong>
        </a>

      </section>

    </main>
  )
}

export default Home