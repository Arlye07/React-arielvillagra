import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { products } from "./productos/productos";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = () => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          res(products);
        }, 2000);
      });
    };
    getProducts()
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return ( <div>
  <h2 className="d-flex justify-content-center">{greeting} </h2>;
  <ItemList items={items}/>
 </div>
 );
};

export default ItemListContainer;
