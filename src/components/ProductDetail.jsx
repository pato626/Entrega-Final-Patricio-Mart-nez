import React, { useContext, useState } from "react"
import { CartContext } from "../context/CartContext";


const ProductDetail = ({ product }) => {

  const { carrito, agregarAlCarrito } = useContext(CartContext);
console.log(carrito);
  const [cantidad, setCantidad] = useState(1);


  const handleAddCount = () => {
    setCantidad(cantidad + 1);

  }

  const handleRemoveCount = () => {
    cantidad > 1 && setCantidad(cantidad - 1);

  }


  return (
    <div className="subtitulo">
      <div className='ordenar'>
        <img src={product.image} alt={product.title} className='tamaño-imagen' />
        <div> <p>{product.title} </p> <p> Categoría: </p> {product.category} </div>
        <p>Precio: ${product.price}</p>
        <p>{product.description}</p>
        <div>

          <button onClick={handleAddCount}>+</button>
          <div>{cantidad}</div>
          <button onClick={handleRemoveCount}>-</button>

        </div>
        <button onClick={() => {agregarAlCarrito(product, cantidad)}}>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ProductDetail


