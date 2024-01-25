
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }


    return (
        <div>
            <h1 className='title'>Tu pedido</h1>
            {
                carrito.map((prod) => (
                    <div key={prod.id} className="ordenar subtitulo">
                        <img src={prod.image} alt={prod.title} className='tamaño-imagen' />
                        <div> <p>{prod.title} </p> <p> Categoría: </p> {prod.category} </div>
                        <p>Precio: ${prod.price}</p>
                        <p>Cantidad {prod.cantidad}</p>
                        <p>{prod.description}</p>
                    </div>
                ))
            }

            <div>
                <button className="vaciar-carrito" onClick={handleVaciar}>Vaciar carrito</button>
            </div>

            <div className="finalizar-compra"> <h2 className="texto">Precio Total: $ {precioTotal()} </h2>
                <button>Finalizar compra</button> </div>


        </div>


    )
}

export default Carrito