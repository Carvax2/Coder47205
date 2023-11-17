import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemlListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider, CartContext } from './context/CartContext';
import { Footer } from './components/Footer/Footer';
import { useHistory } from "react-router-dom";
import CheckOut from './components/CheckOut/CheckOut';
import Cart from './/components/Cart/Cart';


function App() {
  return (

    <div className="App">
      <BrowserRouter className="App">
      <CartProvider>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={ <CheckOut />} />
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
      </CartProvider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}


export default App;
