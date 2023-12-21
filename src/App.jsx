
import NavBarComponent from "./components/NavBarComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TitleComponent from "./components/titleComponent";



function App() {

  return (
 <div style={{width: "100vw", height: "100vh"}}>
  <NavBarComponent />
  <TitleComponent greeting={"¡Bienvenido a la pagina!"} />
 </div>
  );
}



export default App;