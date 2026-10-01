import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SubNavbar from './components/SubNavbar';
import Impact from './sections/Impact';
import About from './sections/About';
import Footer from './components/Footer';

// Importação das páginas dos jogos
import PassagemDasPedras from './pages/PassagemDasPedras';
import GuardioesDaMemoria from './pages/GuardioesDaMemoria';
import ALendaDaCascavel from './pages/ALendaDaCascavel';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-pergaminho-claro text-texto-principal transition-colors duration-300">
        
        {/* Navbar principal fixa no topo */}
        <Navbar />
        
        {/* Sub-navbar flutuante sobreposta */}
        <SubNavbar />

        {/* Conteúdo dinâmico (Hero e Details) voltando à posição original */}
        <main>
          <Routes>
            <Route path="/" element={<PassagemDasPedras />} />
            <Route path="/PassagemDasPedras" element={<PassagemDasPedras />} />
            <Route path="/GuardioesDaMemoria" element={<GuardioesDaMemoria />} />
            <Route path="/ALendaDaCascavel" element={<ALendaDaCascavel />} />
          </Routes>
        </main>

        {/* Seções Fixas */}
        <Impact />
        <About />
        <Footer />
        
      </div>
    </Router>
  );
}