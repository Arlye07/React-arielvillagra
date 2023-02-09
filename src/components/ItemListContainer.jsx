import React, { useEffect, useState } from "react";
import { products } from "./productos/productos";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {productsCollection} from "../firebaseConfig"
import {getDocs, query, where} from "firebase/firestore"

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
   
    const getProducts = () => {

     let filtro =[]
     if (categoryName){ 
      filtro = query(productsCollection,where("category", "==","categoryName"))
    }else{
      filtro = productsCollection
    };
      const pedidoPorCategoria = getDocs(filtro)

      pedidoPorCategoria
      .then((resultado)=>{
        const productos = resultado.docs.map((doc)=>{ 
          return {id: doc.id, ...doc.data()}
        })
        setItems(productos)
      })
      .catch((error)=>{
        console.log(error);
      })
    
       return new Promise((res, rej) => {
         const productosFiltrados = products.filter(
           (prod) => prod.category === categoryName
         );

         const prodListados = categoryName ? productosFiltrados : products;
         setTimeout(() => {
           res(prodListados);
         }, 300);
       });
    };
    getProducts()
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryName]);

  return (
    <div>
      <h2 className="d-flex justify-content-center">{greeting} </h2>;
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
