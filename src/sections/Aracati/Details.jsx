import tabuleiro from '../../assets/Aracati/aracati_tabuleiro.png'

import carta1 from '../../assets/Aracati/Cartas/aracati_carta1.png'
import carta2 from '../../assets/Aracati/Cartas/aracati_carta2.png'
import carta3 from '../../assets/Aracati/Cartas/aracati_carta3.png'
import carta4 from '../../assets/Aracati/Cartas/aracati_carta4.png'


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
        className="game-about theme-aracati"
      >

        <div className="game-about-heading">

          <span>
            SOBRE O JOGO
          </span>

          <h2>
            Guardar a memória
            também é conhecer
            o território.
          </h2>

        </div>


        <div className="game-about-text">

          <p>
            <strong>
              Guardiões da Memória
            </strong>{' '}
            reúne referências históricas,
            culturais e patrimoniais
            de Aracati.
          </p>

          <p>
            A proposta transforma elementos
            relacionados à cidade em componentes
            de uma experiência lúdica,
            aproximando os participantes
            da história e da memória local.
          </p>

        </div>

      </section>



      {/* =====================================================
          COMPONENTES
      ===================================================== */}

      <section className="components-section theme-aracati">

        <div className="components-heading">

          <span>
            CONHEÇA OS COMPONENTES
          </span>

          <h2>
            O patrimônio de Aracati
            ganha forma
            sobre a mesa.
          </h2>

          <p>
            O tabuleiro e as cartas incorporam
            referências históricas, culturais
            e territoriais do município.
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
                A representação espacial conecta
                diferentes referências e elementos
                da experiência de jogo.
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
              alt="Tabuleiro de Guardiões da Memória"
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
              Uma pequena seleção dos elementos
              que fazem parte da experiência.
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

      <section className="game-features theme-aracati">

        <article>

          <span>
            01
          </span>

          <h3>
            Patrimônio
          </h3>

          <p>
            Monumentos e referências históricas
            ajudam a construir
            a experiência.
          </p>

        </article>


        <article>

          <span>
            02
          </span>

          <h3>
            Memória
          </h3>

          <p>
            Narrativas e símbolos locais
            aparecem ao longo
            da experiência.
          </p>

        </article>


        <article>

          <span>
            03
          </span>

          <h3>
            Território
          </h3>

          <p>
            A cidade deixa de ser apenas cenário
            e passa a integrar
            os elementos do jogo.
          </p>

        </article>

      </section>



      {/* =====================================================
          PROCESSO
      ===================================================== */}

      <section className="game-process theme-aracati">

        <span>
          MEMÓRIA • PATRIMÔNIO • CULTURA
        </span>

        <h2>
          Aracati transformada
          em experiência de mesa.
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
              históricas e culturais.
            </p>

          </article>


          <article>

            <strong>
              02
            </strong>

            <h3>
              Curadoria
            </h3>

            <p>
              Seleção dos elementos relacionados
              à identidade do município.
            </p>

          </article>


          <article>

            <strong>
              03
            </strong>

            <h3>
              Design
            </h3>

            <p>
              Transformação das referências
              em elementos lúdicos.
            </p>

          </article>


          <article>

            <strong>
              04
            </strong>

            <h3>
              Experiência
            </h3>

            <p>
              Interação entre jogo,
              patrimônio e território.
            </p>

          </article>

        </div>

      </section>

    </>
  )
}


export default Details