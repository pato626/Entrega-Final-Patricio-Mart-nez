import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import {collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase"
const Checkout = () => {

  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const { register, handleSubmit } = useForm();

  const [pedidoId, setPedidoId] = useState("");

  const comprar = (data) => {
    const pedido = {

      cliente: data,
      productos: carrito,
      total: precioTotal()

    }
    console.log(pedido);

    const pedidosRef = collection(db, "pedidos");

    addDoc(pedidosRef, pedido)
    .then((doc) => {
      setPedidoId(doc.id);
      vaciarCarrito();
    })

  }


  if (pedidoId) {
    return (
      <div>
        <h1 className='title'>¡Gracias por tu compra!</h1>
        <h2 className='descripcion'>Tu numero de pedido es: {pedidoId} </h2>
      </div>
    )
  }



  return (
    <div>
      <h1 className='title bg-sub'>Finalice su compra</h1>
      <form className='formulario' onSubmit={handleSubmit(comprar)}>
        <input type="text" placeholder='Nombre y apellido' className='input-border' {...register("nombre")} />
        <input type="text" placeholder='Ingrese su teléfono' className='input-border'{...register("telefono")} />
        <input type="email" placeholder='Ingrese su email' className='input-border'{...register("email")} />
        <button type='submit' className='input-border m-bottom'>Comprar</button>

      </form>
    </div>
  )
}

export default Checkout