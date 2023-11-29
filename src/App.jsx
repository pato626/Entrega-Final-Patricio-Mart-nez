import ItemListContainer  from "./components/ItemListContainer";
import NavBarComponent from "./components/NavBarComponent";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

  return (
 <div style={{width: "100vw", height: "100vh"}}>
  <NavBarComponent />
  <ItemListContainer greeting= "¡Bienvenidos a la página!" />
 </div>
  );
}




export default App;