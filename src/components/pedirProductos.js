import products from "../productos.json";

const pedirProductos = () => {
    return new Promise((resolve, reject) => {
      resolve(products)

    })
  }

  export default pedirProductos;