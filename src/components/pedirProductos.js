import products from "../productos.json";

const pedirProductos = () => {
  return new Promise((resolve, reject) => {
    resolve(products)

  })
}

export default pedirProductos;

export const productoId = (id) => {
  return new Promise((resolve, reject) => {

    const product = products.find((el) => el.id === id);

    if (product) {

      resolve(product)

    } else {
      reject({
        error: "No se encontró el producto."
      })
    }

  })
}