import './curriculoStyle.css';
import Header from '../componentes/Header'; // Caminho corrigido

function Curriculo() {
  return (
    <div>
      <Header activeSection="hero" /> {/* Adiciona o Header no topo */}
      <div className="curriculo-container">
        <h1>Meu Currículo</h1>
        <p>Bem-vindo ao meu site!</p>
      </div>
    </div>
  );
}

export default Curriculo;