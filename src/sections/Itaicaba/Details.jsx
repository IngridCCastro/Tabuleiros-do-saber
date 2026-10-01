import tabuleiro from '../../assets/Itaicaba/itaicaba_tabuleiro.png'

import carta1 from '../../assets/Itaicaba/Cartas/itaicaba_carta1.png'
import carta2 from '../../assets/Itaicaba/Cartas/itaicaba_carta2.png'
import carta3 from '../../assets/Itaicaba/Cartas/itaicaba_carta3.png'
import carta4 from '../../assets/Itaicaba/Cartas/itaicaba_carta4.png'

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
          SOBRE O JOGO
      ===================================================== */}

      <section
        id="sobre-jogo"
        className="game-about theme-itaicaba"
      >

        <div className="game-about-heading">

          <span>
            SOBRE O JOGO
          </span>

          <h2>
            História local
            transformada em
            experiência de mesa.
          </h2>

        </div>


        <div className="game-about-text">

          <p>
            <strong>
              Passagem das Pedras: Crise na Vila
            </strong>{' '}
            utiliza referências do território,
            da história e da identidade cultural
            de Itaiçaba.
          </p>

          <p>
            O jogo convida os participantes
            a enfrentar situações que exigem
            decisões, cooperação e administração
            de recursos, enquanto elementos
            ligados ao município fazem parte
            da experiência.
          </p>

        </div>

      </section>



      {/* =====================================================
          COMPONENTES
      ===================================================== */}

      <section className="components-section theme-itaicaba">

        <div className="components-heading">

          <span>
            CONHEÇA OS COMPONENTES
          </span>

          <h2>
            A crise da vila
            ganha forma
            sobre a mesa.
          </h2>

          <p>
            O tabuleiro e as cartas apresentam
            personagens, desafios, acontecimentos
            e referências relacionadas ao território
            e à história de Itaiçaba.
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
                O espaço principal da partida,
                onde os acontecimentos e decisões
                dos jogadores se desenvolvem.
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
              alt="Tabuleiro do jogo Passagem das Pedras"
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
              Conheça alguns dos componentes
              utilizados durante uma partida.
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

      <section className="game-features theme-itaicaba">

        <article>

          <span>
            01
          </span>

          <h3>
            Cooperação
          </h3>

          <p>
            Os participantes precisam agir
            coletivamente diante dos desafios
            apresentados durante a partida.
          </p>

        </article>


        <article>

          <span>
            02
          </span>

          <h3>
            Território
          </h3>

          <p>
            Referências de Itaiçaba participam
            diretamente da construção
            da experiência.
          </p>

        </article>


        <article>

          <span>
            03
          </span>

          <h3>
            Aprendizagem
          </h3>

          <p>
            História e cultura local são
            apresentadas por meio
            da interação e da ludicidade.
          </p>

        </article>

      </section>



      {/* =====================================================
          PROCESSO
      ===================================================== */}

      <section className="game-process theme-itaicaba">

        <span>
          DO TERRITÓRIO PARA O TABULEIRO
        </span>

        <h2>
          Pesquisa que se
          transforma em jogo.
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
              Levantamento histórico,
              cultural e territorial.
            </p>

          </article>


          <article>

            <strong>
              02
            </strong>

            <h3>
              Criação
            </h3>

            <p>
              Desenvolvimento da narrativa,
              mecânicas e conceitos.
            </p>

          </article>


          <article>

            <strong>
              03
            </strong>

            <h3>
              Prototipação
            </h3>

            <p>
              Desenvolvimento dos componentes
              e realização de testes.
            </p>

          </article>


          <article>

            <strong>
              04
            </strong>

            <h3>
              Aplicação
            </h3>

            <p>
              Uso do jogo em experiências
              com estudantes e comunidade.
            </p>

          </article>

        </div>

      </section>

    </>
  )
}


export default Details