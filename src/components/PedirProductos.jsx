import productos from"../productos.json";

const pedirProductos = () => {
  return new Promise((resolve, reject) => {
    resolve(productos)

  })
}

export default pedirProductos;