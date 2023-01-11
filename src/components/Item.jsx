import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ producto }) => {
  const discount = producto.price - (producto.price * producto.descuento) / 100;
  return (
    <div className="item">
      <img
        src={producto.img}
        width="220px"
        height="160px"
        alt={producto.title}
      />
      <article className="info">
        <h2> {producto.title}</h2>
        <h4 className="descuento">{producto.descuento}% off</h4>
        <div className="info-price"></div>
        <h3>${discount}.-</h3>
        <h5 className="info-descuento"> ${producto.price}.-</h5>
        <Link className="ver-detalle" to={`/detail/${producto.id}`}>
          Ver detalle
        </Link>
      </article>
    </div>
  );
};

export default Item;
