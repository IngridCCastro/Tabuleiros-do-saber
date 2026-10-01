import imagem from '../../assets/Itaicaba/itaicaba_home.jpeg'

function Hero() {
  return (
    <section className="game-hero theme-itaicaba">

      <div className="game-hero-image">

        <img
          src={imagem}
          alt=""
          aria-hidden="true"
          className="game-hero-background"
        />

        <img
          src={imagem}
          alt="Passagem das Pedras: Crise na Vila"
          className="game-hero-main-image"
        />

      </div>


      <div className="game-hero-content">

        <a
          href="/#jogos"
          className="back-games"
        >
          ← Todos os jogos
        </a>

        <span className="game-hero-city">
          ITAIÇABA • CEARÁ
        </span>

        <h1>
          Passagem
          <span>das Pedras</span>
        </h1>

        <h2>
          Crise na Vila
        </h2>

        <p>
          Uma experiência inspirada na história,
          nos desafios e na identidade cultural
          do município de Itaiçaba.
        </p>

        <div className="game-hero-tags">
          <span>História</span>
          <span>Cooperação</span>
          <span>Território</span>
          <span>Educação</span>
        </div>

        <a
          href="#sobre-jogo"
          className="game-hero-button"
        >
          Conheça o jogo ↓
        </a>

      </div>

    </section>
  )
}

export default Hero