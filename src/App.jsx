
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TitleComponent from "./components/titleComponent";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from "./layouts/MainLayout";
import ItemDetailContainer from './components/ItemDetailContainer';
import FooterComponent from './components/FooterComponent';
import Inicio from './components/Inicio';
import SobreNosotros from './components/SobreNosotros';








function App() {

  return (


    <BrowserRouter>
      <MainLayout />

    

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Productos" element={<ItemListContainer />} />
        <Route path="/Detalle/:id" element={<ItemDetailContainer />} />
        <Route path="/Productos/:category" element={<ItemListContainer />} />
        <Route path="/SobreNosotros" element={<SobreNosotros />} />

      </Routes>

      <FooterComponent />


    </BrowserRouter>


  );
}



export default App;