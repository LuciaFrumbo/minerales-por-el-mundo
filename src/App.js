import NavBar from './components/NavBar.js';
import './App.css';
import'./components/navbar.css';
import'./components/itemListContainer.css';
import ItemListContainer from './components/ItemListContainer.js';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
    <div>
      <header>
          <NavBar/>
      </header>
      <Routes>
      <Route path='/' element={<ItemListContainer greeting='Productos en stock'/>}/>
              <Route path='/:categoryName' 
              element={<ItemListContainer greeting='Productos en stock'/>}/>
              <Route path='/item/:id' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;

