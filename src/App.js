
import Address from './Component/Profil/Address.js';
import './App.css';
import Name from './Component/Profil/FullName';
import ProfilPH from './Component/Profil/ProfilPhoto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProfilPH />
        <h3>
          Prénom et nom :
        </h3>
        <Name />
        <h4>
          Adresse :
        </h4>
        <Address />
      </header>
    </div>
  );
}

export default App;
