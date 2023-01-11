import React from "react";
import "./Item.css";

const ItemDetail = ({item}) => {
  const discount =
  item.price - (item.price * item.descuento) /100;
  return (
    <div className="container-page container-detail">
      <img src={item.img} 
      alt="detail" />

      <article>
        <h2>{item.title}</h2>
        <h4>{item.descuento}% OFF</h4>
        <section>
          <h3>${discount}</h3>
          <h5>${item.price}.-</h5>
        </section>
        <span className="info-span">
          Todos los precios estan en pesos Argentinos
        </span>
        <hr />
        <h3 className="cuotas">
          Hasta <strong>12</strong> cuotas sin interes de
          <strong>${item.price/12}</strong>
        </h3>
        <button className="metodos-pagos">
          Conoce todos los metodos de pagos
        </button>
        <hr />
      </article>
    </div>
  );
};

export default ItemDetail;