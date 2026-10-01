import imagem from '../../assets/Cascavel/cascavel_home.jpeg'

function Hero() {
  return (
    <section className="game-hero theme-cascavel">

      <div className="game-hero-image">

        <img
          src={imagem}
          alt=""
          aria-hidden="true"
          className="game-hero-background"
        />

        <img
          src={imagem}
          alt="A Lenda da Cascavel"
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
          CASCAVEL • CEARÁ
        </span>

        <h1>
          A Lenda
          <span>da Cascavel</span>
        </h1>

        <h2>
          Folclore, memória e território
        </h2>

        <p>
          Uma experiência inspirada nas narrativas
          populares, localidades e referências
          culturais do município de Cascavel.
        </p>

        <div className="game-hero-tags">
          <span>Folclore</span>
          <span>Estratégia</span>
          <span>Memória</span>
          <span>Território</span>
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