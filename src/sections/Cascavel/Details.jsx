import tabuleiro from '../../assets/Cascavel/cascavel_tabuleiro.png'

import carta1 from '../../assets/Cascavel/Cartas/cascavel_carta1.png'
import carta2 from '../../assets/Cascavel/Cartas/cascavel_carta2.png'
import carta3 from '../../assets/Cascavel/Cartas/cascavel_carta3.png'
import carta4 from '../../assets/Cascavel/Cartas/cascavel_carta4.png'


function Details() {

  const cartas = [
    {
      imagem: carta1,
      nome: 'Carta 01',
    },
    {
      imagem: carta2,
      nome: 'Carta 02',
    },
    {
      imagem: carta3,
      nome: 'Carta 03',
    },
    {
      imagem: carta4,
      nome: 'Carta 04',
    },
  ]


  return (
    <>

      {/* =====================================================
          SOBRE
      ===================================================== */}

      <section
        id="sobre-jogo"
        className="game-about theme-cascavel"
      >

        <div className="game-about-heading">

          <span>
            SOBRE O JOGO
          </span>

          <h2>
            Lendas, memória
            e território em
            uma experiência estratégica.
          </h2>

        </div>


        <div className="game-about-text">

          <p>
            <strong>
              A Lenda da Cascavel
            </strong>{' '}
            incorpora localidades,
            narrativas populares,
            recursos e referências
            culturais do município.
          </p>

          <p>
            O jogo transforma essas referências
            territoriais em elementos ativos
            da experiência lúdica,
            aproximando os participantes
            da cultura e da memória local.
          </p>

        </div>

      </section>



      {/* =====================================================
          COMPONENTES
      ===================================================== */}

      <section className="components-section theme-cascavel">

        <div className="components-heading">

          <span>
            CONHEÇA OS COMPONENTES
          </span>

          <h2>
            Lendas e território
            ganham forma
            sobre a mesa.
          </h2>

          <p>
            O tabuleiro e as cartas incorporam
            localidades, narrativas populares,
            elementos culturais e referências
            territoriais de Cascavel.
          </p>

        </div>



        {/* TABULEIRO */}

        <div className="board-showcase">

          <div className="board-label">

            <span>
              01
            </span>

            <div>

              <strong>
                O tabuleiro
              </strong>

              <p>
                O território se transforma em espaço
                estratégico para movimentação,
                decisões e acontecimentos.
              </p>

            </div>

          </div>


          <div className="board-image-container">

            <img
              src={tabuleiro}
              alt=""
              aria-hidden="true"
              className="board-background"
            />

            <img
              src={tabuleiro}
              alt="Tabuleiro de A Lenda da Cascavel"
              className="board-image"
            />

          </div>

        </div>



        {/* CARTAS */}

        <div className="cards-showcase">

          <div className="cards-heading">

            <div>

              <span>
                02
              </span>

              <h3>
                Algumas cartas
              </h3>

            </div>

            <p>
              Conheça algumas das cartas
              utilizadas durante
              as partidas.
            </p>

          </div>


          <div className="cards-grid">

            {cartas.map((carta, index) => (

              <article
                className="component-card"
                key={index}
              >

                <div className="component-card-image">

                  <img
                    src={carta.imagem}
                    alt={carta.nome}
                  />

                </div>

                <span>
                  {carta.nome}
                </span>

              </article>

            ))}

          </div>

        </div>

      </section>



      {/* =====================================================
          CARACTERÍSTICAS
      ===================================================== */}

      <section className="game-features theme-cascavel">

        <article>

          <span>
            01
          </span>

          <h3>
            Folclore
          </h3>

          <p>
            Narrativas populares ajudam
            a construir o universo
            e a identidade do jogo.
          </p>

        </article>


        <article>

          <span>
            02
          </span>

          <h3>
            Estratégia
          </h3>

          <p>
            Decisões e desafios conduzem
            a experiência dos participantes.
          </p>

        </article>


        <article>

          <span>
            03
          </span>

          <h3>
            Memória local
          </h3>

          <p>
            Elementos culturais e territoriais
            aparecem integrados
            às mecânicas.
          </p>

        </article>

      </section>



      {/* =====================================================
          PROCESSO
      ===================================================== */}

      <section className="game-process theme-cascavel">

        <span>
          FOLCLORE • TERRITÓRIO • MEMÓRIA
        </span>

        <h2>
          Narrativas locais
          transformadas em jogo.
        </h2>


        <div className="process-grid">

          <article>

            <strong>
              01
            </strong>

            <h3>
              Pesquisa
            </h3>

            <p>
              Levantamento das referências
              culturais do município.
            </p>

          </article>


          <article>

            <strong>
              02
            </strong>

            <h3>
              Narrativa
            </h3>

            <p>
              Lendas e referências locais
              entram no universo do jogo.
            </p>

          </article>


          <article>

            <strong>
              03
            </strong>

            <h3>
              Estratégia
            </h3>

            <p>
              Os elementos culturais se tornam
              desafios e decisões.
            </p>

          </article>


          <article>

            <strong>
              04
            </strong>

            <h3>
              Valorização
            </h3>

            <p>
              A experiência estimula contato
              com a memória local.
            </p>

          </article>

        </div>

      </section>

    </>
  )
}


export default Details