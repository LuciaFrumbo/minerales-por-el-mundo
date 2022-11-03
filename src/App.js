import NavBar from './components/NavBar.js';
import './App.css';
import'./components/itemDetail.css';
import'./components/navbar.css';
import'./components/form.css';
import'./components/footer.css';
import'./components/cartDetail.css';
import'./components/itemListContainer.css';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Form from "./components/Form"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Provider from './context/CartContext';

function App() {
  
  return (
    <Provider>
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
              <Route path="/checkout" element={<Form />} />
      </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
    </Provider>
  );
}

export default App;

