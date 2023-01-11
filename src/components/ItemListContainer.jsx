import React, { useEffect, useState } from "react";
import { products } from "./productos/productos";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
   
    const getProducts = () => {
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
