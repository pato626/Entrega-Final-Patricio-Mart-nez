import React from 'react'


const Item = ({ producto }) => {
    return (
        <div>
            <div><img src={producto.image} alt={producto.title} className='tamaño-imagen' /> </div>
            <div> <p className='subtitulo'>{producto.title}</p> </div>
            <div> <p>Precio: ${producto.price}</p></div>
            <div> <p>{producto.description}</p></div>

        </div>
    )
}

export default Item;