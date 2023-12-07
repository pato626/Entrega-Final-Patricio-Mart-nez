import ItemListContainer  from "./components/ItemListContainer";
import NavBarComponent from "./components/NavBarComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {


const promesa = new Promise((resolve, reject) => {

  const flag = true;
  if (flag) {
    resolve("promesa correctamente cumplida");
  } else {
    reject("promesa no cumplida");
  }

});

promesa.then(res => console.log(res))


  return (
 <div style={{width: "100vw", height: "100vh"}}>
  <NavBarComponent />
  <ItemListContainer greeting= "¡Bienvenidos a la página!" />
 </div>
  );
}




export default App;