import { useEffect, useState } from "react";
import React from 'react'
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";


const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos");

  const category = useParams().category
  console.log(category);
 
  useEffect(() => {
    
    const productosRef= collection(db, "productos");

    const q = category ? query(productosRef, where("category", "==", category)) : productosRef;



    getDocs(q)
    .then((res) => {
      // console.log(res.docs[0].id);
      // console.log(res.docs[0].data());

      setProductos(

        res.docs.map((doc) => {
          return {...doc.data(), id: doc.id}
        })

      )
    })

  }, [category])

  return (
    <div>
      <ItemList productos={productos} titulo={titulo} /> 
    </div>
  )
};

export default ItemListContainer;





