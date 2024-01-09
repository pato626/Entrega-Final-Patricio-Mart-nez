
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TitleComponent from "./components/titleComponent";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from "./layouts/MainLayout";








function App() {

  return (

 <MainLayout>
  <BrowserRouter>
  <TitleComponent greeting={"¡Bienvenido a la pagina!"} />
  <ItemListContainer />
  
  
  
  
  <Routes>
    <Route path="/" element={ItemListContainer}           />
    <Route/>
    <Route/>
    <Route/>

  </Routes>
  </BrowserRouter>

 </MainLayout>
  );
}



export default App;