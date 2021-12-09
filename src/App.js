import { FiSearch } from 'react-icons/fi';
import './styles.css';



function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput">
        <input type="text"
        placeholder="Digite seu cep..."
        />

        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF"/>
        </button>

      </div>

      <main className="main">
        <h2>CEP: 69079250</h2>

        <span>Rua Nunes Cardoso</span>
        <span>Complemento: Algum complemento</span>
        <span>São Francisco</span>
        <span>Manaus - AM</span>

      </main>

    </div>
  );
}

export default App;
