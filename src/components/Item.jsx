import React from 'react'
import { Link } from 'react-router-dom';


const Item = ({ producto }) => {
    return (
        <div>

            <div className='ordenar'>
                <img src={producto.image} alt={producto.title} className='tamaño-imagen' />
                <p className='subtitulo'>{producto.title}</p>
                <p>Precio: ${producto.price}</p>
                <div> <p className='subtitulo'>categoría: </p> <p>{producto.category}</p> </div>
                
                <Link to={`/Detalle/${producto.id}`}>  <button>Ver más</button> </Link>
            </div>

        </div>
    )
}

export default Item;
