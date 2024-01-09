import React from 'react'



const Item = ({ producto }) => {
    return (
        <div>

            <div className='ordenar'>
                <img src={producto.image} alt={producto.title} className='tamaño-imagen' />
                <p className='subtitulo'>{producto.title}</p>
                <p>Precio: ${producto.price}</p>
                <div> <p className='subtitulo'>categoría: </p> <p>{producto.categoria}</p> </div>
                <p>{producto.description}</p>
                <button>comprar</button>
            </div>

        </div>
    )
}

export default Item;
