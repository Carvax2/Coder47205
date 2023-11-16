import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemlListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './CartContext/CartContext';
import { Footer } from './components/Footer/Footer';


function App() {
  return (

    <div className="App">
      <CartProvider>
      <BrowserRouter className="App">
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemid" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
      </BrowserRouter>
      </CartProvider>
      <Footer />
    </div>
  );
}


export default App;
