
import NavBarComponent from "./components/NavBarComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TitleComponent from "./components/titleComponent";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';




function App() {

  return (

 <div style={{width: "100vw", height: "100vh"}}>
  <BrowserRouter>
  <NavBarComponent />
  <TitleComponent greeting={"¡Bienvenido a la pagina!"} />
  <ItemListContainer />
  <Routes>
    <Route path="/" element={ItemListContainer}           />
    <Route/>
    <Route/>
    <Route/>

  </Routes>
  </BrowserRouter>

 </div>
  );
}



export default App;