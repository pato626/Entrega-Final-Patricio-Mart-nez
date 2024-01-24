
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from "./layouts/MainLayout";
import ItemDetailContainer from './components/ItemDetailContainer';
import FooterComponent from './components/FooterComponent';
import Inicio from './components/Inicio';
import SobreNosotros from './components/SobreNosotros';
import { CartContext } from './context/CartContext';
import { useState } from 'react';
import CartWidget from './components/CartWidget';







function App() {
  
  const [carrito, setCarrito] = useState([]);

  

  return (

  <CartContext.Provider value={ {carrito, setCarrito} }>
    <BrowserRouter>
      <MainLayout />

    

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Productos" element={<ItemListContainer />} />
        <Route path="/Detalle/:id" element={<ItemDetailContainer />} />
        <Route path="/Productos/:category" element={<ItemListContainer />} />
        <Route path="/SobreNosotros" element={<SobreNosotros />} />
        <Route path="/Carrito" element={<CartWidget />} />
      </Routes>

      <FooterComponent />


    </BrowserRouter>

    </CartContext.Provider>
  );
}



export default App;