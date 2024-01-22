import React, { useState } from "react"
// import CountComponent from "./CountComponent"

const ProductDetail = ({ product }) => {

  const [carrito, setCarrito] = useState([])
  const [cantidad, setCantidad] = useState(1);


    const handleAddCount = () => {
      setCantidad(cantidad + 1);
    }

    const handleRemoveCount = () => {
      cantidad > 1 && setCantidad(cantidad - 1);

    }


  const agregarAlCarrito = (product) => {
    const itemAgregado = { ...product, cantidad };
    console.log(itemAgregado);
    const nuevoCarrito = [...carrito]
    const estaEnElCarrito = nuevoCarrito.find((prod) => prod.id === itemAgregado.id)
    if (estaEnElCarrito) {
      estaEnElCarrito.cantidad += cantidad;

    } else { nuevoCarrito.push(itemAgregado) }
    setCarrito(nuevoCarrito)
    setCantidad(1)

  }



  return (
    <div>
      <div className='ordenar'>
        <img src={product.image} alt={product.title} className='tamaño-imagen' />
        <div> <p className='subtitulo'>{product.title} </p> <p className="subtitulo"> Categoría: </p> {product.category} </div>
        <p>Precio: ${product.price}</p>
        <p>{product.description}</p>
        <div>

          <button onClick={handleAddCount}>+</button>
          <div>{cantidad}</div>
          <button onClick={handleRemoveCount}>-</button>

        </div>
        <button onClick={agregarAlCarrito}>comprar</button>
      </div>
    </div>
  )
}

export default ProductDetail


