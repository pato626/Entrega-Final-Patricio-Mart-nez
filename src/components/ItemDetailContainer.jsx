import { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";


const ItemDetailContainer = () => {

  const [product, setProduct] = useState(null);
  const id = useParams().id;


  useEffect(() => {

    const docRef = doc(db, "productos", id);
    getDoc(docRef)
      .then((res) => {
        setProduct(
          { ...res.data(), id: res.id }
        );
      })


  }, [id])


  return (
    <div>

      {product && <ProductDetail product={product} />}
    </div>
  )
}

export default ItemDetailContainer