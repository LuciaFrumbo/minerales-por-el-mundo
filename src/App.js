import NavBar from './components/NavBar.js';
import './App.css';
import'./components/navbar.css';
import ItemListContainer from './components/ItemListContainer.js';

function App() {
  
  return (
    <div>
      <header>
      <NavBar/>
      <ItemListContainer greeting='Hola, Gracias por visitar nuestra web'/>
      </header>
    </div>
  );
}

export default App;

