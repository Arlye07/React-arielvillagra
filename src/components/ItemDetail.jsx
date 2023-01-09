import React from "react";

const ItemDetail = () => {
  return (
    <div className="container-page container-detail">
      <img src="https://d3ugyf2ht6aenh.cloudfront.net/stores/931/176/products/31-50ded82df6a0e231d816364111195879-480-0.jpg" 
      alt="detail" />

      <article>
        <h2>Nombre del producto</h2>
        <h4>10% OFF</h4>
        <section>
          <h3>$1500.-</h3>
          <h5>$2200.-</h5>
        </section>
        <span className="info-span">
          Todos los precios estan en pesos Argentinos
        </span>
        <hr />
        <h3 className="cuotas">
          Hasta <strong>12</strong> cuotas sin interes de
          <strong>$150</strong>
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