import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false)

  function fecharMenu() {
    setMenuAberto(false)
  }

  return (
    <header className="main-header">

      <nav className="main-navbar">

        <Link
          to="/"
          className="brand"
          onClick={fecharMenu}
        >
          <span>TABULEIROS</span>
          <span>DO SABER</span>
        </Link>


        <div
          className={`navbar-links ${
            menuAberto ? 'navbar-links-open' : ''
          }`}
        >

          <NavLink
            to="/"
            onClick={fecharMenu}
          >
            Início
          </NavLink>

          <NavLink
            to="/PassagemDasPedras"
            onClick={fecharMenu}
          >
            Itaiçaba
          </NavLink>

          <NavLink
            to="/GuardioesDaMemoria"
            onClick={fecharMenu}
          >
            Aracati
          </NavLink>

          <NavLink
            to="/ALendaDaCascavel"
            onClick={fecharMenu}
          >
            Cascavel
          </NavLink>

          <a
            href="/#projeto"
            onClick={fecharMenu}
          >
            Projeto
          </a>

          <a
            href="#contato"
            onClick={fecharMenu}
            className="navbar-contact"
          >
            Contato
          </a>

        </div>


        <button
          type="button"
          className={`hamburger ${
            menuAberto ? 'active' : ''
          }`}
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Abrir menu"
        >
          <span />
          <span />
          <span />
        </button>

      </nav>

    </header>
  )
}

export default Navbar