import React from "react"

const ProductDetail = ({product}) => {
  return (
    <div>
           <div className='ordenar'>
                <img src={product.image} alt={product.title} className='tamaño-imagen' />
                <div> <p className='subtitulo'>{product.title} </p> <p className="subtitulo"> Categoría: </p> {product.category} </div>
                <p>Precio: ${product.price}</p>
                <p>{product.description}</p>
                <button>comprar</button>
            </div>
    </div>
  )
}

export default ProductDetail


