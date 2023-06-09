import logo from './logo.svg';
import './App.css';
import { Contacto } from './models/contacto.class';
import ComponenteA from './components/componenteA';

function App() {
  let conectadoTest = new Contacto("Daniel", "Reynaga", "daniel.roberto.reynaga@gmail.com", true);

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponenteA contacto={conectadoTest} />
      </div>
    </div>
  );
}

export default App;
