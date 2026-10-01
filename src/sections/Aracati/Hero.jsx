import imagem from '../../assets/Aracati/aracati_home.png'

function Hero() {
  return (
    <section className="game-hero theme-aracati">

      <div className="game-hero-image">

        <img
          src={imagem}
          alt=""
          aria-hidden="true"
          className="game-hero-background"
        />

        <img
          src={imagem}
          alt="Aracati: Guardiões da Memória"
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
          ARACATI • CEARÁ
        </span>

        <h1>
          Guardiões
          <span>da Memória</span>
        </h1>

        <h2>
          História, patrimônio e cultura
        </h2>

        <p>
          Uma experiência lúdica inspirada
          na memória, no patrimônio histórico
          e na identidade cultural de Aracati.
        </p>

        <div className="game-hero-tags">
          <span>Patrimônio</span>
          <span>História</span>
          <span>Memória</span>
          <span>Cultura</span>
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