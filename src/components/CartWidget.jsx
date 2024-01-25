
import carrito from "../assets/icon/carrito.png"
import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {

  const {cantidadCarrito} = useContext(CartContext);


  return (
    <div>
      
      <div><img src={carrito} alt="" style={{ width: "45px", height: "35px" }}/> {cantidadCarrito()}</div>
     
    </div>
  )
}
export default CartWidget



