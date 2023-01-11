import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { products } from "./productos/productos";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const valor = useParams();
  console.log(valor);

  useEffect(() => {
    const getProduct = () => {
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
  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
