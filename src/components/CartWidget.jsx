import React from 'react'
import carrito from "../assets/icon/carrito.png"

const CartWidget = () => {
  return (
    <div>
      <a href=""><img src={carrito} alt="" style={{width: "45px", height:"35px"}}/> 0</a>

    </div>
  )
}
export default CartWidget



