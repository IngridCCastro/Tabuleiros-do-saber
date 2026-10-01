import { NavLink } from 'react-router-dom';

export default function SubNavbar() {
  const getLinkStyle = ({ isActive }) => 
    `px-4 py-1.5 rounded-full font-medium text-xs transition-all shadow-sm ${
      isActive 
        ? 'bg-terroso-quente text-white shadow-sm scale-105' 
        : 'bg-pergaminho-medio/90 text-madeira-escura hover:bg-pergaminho-medio'
    }`;

  return (
    <div className="w-full absolute z-30 pt-20 flex justify-center items-center pointer-events-none">
      {/* pointer-events-auto garante que apenas os botões sejam clicáveis, o fundo flutua por cima */}
      <div className="pointer-events-auto bg-pergaminho-claro/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-madeira-clara/20 shadow-sm flex items-center gap-2 overflow-x-auto max-w-full">
        <NavLink to="/" end className={getLinkStyle}>
          Passagem das Pedras: Crise na Vila
        </NavLink>

        <NavLink to="/GuardioesDaMemoria" className={getLinkStyle}>
          Aracati: Guardiões da Memória
        </NavLink>

        <NavLink to="/ALendaDaCascavel" className={getLinkStyle}>
          A Lenda da Cascavel
        </NavLink>

      </div>
    </div>
  );
}