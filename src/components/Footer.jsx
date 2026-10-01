import { Link } from 'react-router-dom'

function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer
      id="contato"
      className="site-footer"
    >

      <div className="footer-content">

        <div className="footer-brand">

          <h2>
            Tabuleiros
            <br />
            do Saber
          </h2>

          <p>
            Cultura, memória, educação e território
            transformados em experiências por meio
            dos jogos de tabuleiro.
          </p>

        </div>


        <div className="footer-column">

          <span>
            NAVEGAÇÃO
          </span>

          <Link to="/">
            Início
          </Link>

          <a href="/#jogos">
            Jogos
          </a>

          <a href="/#projeto">
            Projeto
          </a>

        </div>


        <div className="footer-column">

          <span>
            JOGOS
          </span>

          <Link to="/PassagemDasPedras">
            Itaiçaba
          </Link>

          <Link to="/GuardioesDaMemoria">
            Aracati
          </Link>

          <Link to="/ALendaDaCascavel">
            Cascavel
          </Link>

        </div>


        <div className="footer-column">

          <span>
            CONTATO
          </span>

          <a href="mailto:tabuleirosdosaber@gmail.com">
            tabuleirosdosaber@gmail.com
          </a>

          <a
            href="https://instagram.com/tabu.lando"
            target="_blank"
            rel="noreferrer"
          >
            @tabu.lando
          </a>

        </div>

      </div>


      <div className="footer-bottom">

        <span>
          © {ano} Tabuleiros do Saber
        </span>

        <span>
          IFCE Campus Aracati
        </span>

      </div>

    </footer>
  )
}

export default Footer