import { useEffect, useState } from "react";
import { productoId } from "./pedirProductos";
import ProductDetail from "./ProductDetail";
import { useParams } from "react-router-dom";



const ItemDetailContainer = () => {

  const [product, setProduct] = useState(null);
  const id = useParams().id;


  useEffect(() => {
      productoId(Number(id))
      .then((res) => {
        setProduct(res);
      })
  }, [])
  

  return (
    <div>
     
     {product && <ProductDetail product={product} /> }
    </div>
  )
}

export default ItemDetailContainer