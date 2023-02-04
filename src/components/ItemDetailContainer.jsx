import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { products } from "./productos/productos";
import { getDoc, doc } from "firebase/firestore";
import { productsCollection } from "../firebaseConfig";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [cargando, setCargando] = useState(true)
  const valor = useParams();
  //console.log(valor);

  useEffect(() => {
    const getProduct = () => {
      const referenciaDoc = doc(productsCollection,"1")
      const pedido = getDoc(referenciaDoc)
      pedido
      .then((resultado)=>{
        const producto = resultado.data()
        setItem(producto)
        setCargando(false)
      })
      .catch((error)=>{})


      return new Promise((res, rej) => {
        const productoEncontrado = products.find(
          (prod) => prod.id === parseInt(valor.id)
        );

        setTimeout(() => {
          res(productoEncontrado);
        }, 500);
      });
    };

    getProduct()
      .then((res) => {
        setItem(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [valor.id]);
  return <>{!cargando ? <ItemDetail item={item}/>: <p>Cargando...</p>}</>;
};

export default ItemDetailContainer;
