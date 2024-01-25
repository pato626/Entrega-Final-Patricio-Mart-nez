
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from "./layouts/MainLayout";
import ItemDetailContainer from './components/ItemDetailContainer';
import FooterComponent from './components/FooterComponent';
import Inicio from './components/Inicio';
import SobreNosotros from './components/SobreNosotros';
import { CartProvider } from './context/CartContext';
import Carrito from './components/Carrito';







function App() {

  return (

    <CartProvider>
      <BrowserRouter>
        <MainLayout />



        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Productos" element={<ItemListContainer />} />
          <Route path="/Detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/Productos/:category" element={<ItemListContainer />} />
          <Route path="/SobreNosotros" element={<SobreNosotros />} />
          <Route path="/Carrito" element={<Carrito />} />
        </Routes>

        <FooterComponent />


      </BrowserRouter>

    </CartProvider>
  );
}



export default App;