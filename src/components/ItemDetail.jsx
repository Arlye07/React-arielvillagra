import React, {useState} from "react";
import "./Item.css";
import Contador from "./contador";
import { useContext } from "react";
import { contexto } from "./Context/CustomProvider";

const ItemDetail = ({ item }) => {
  const discount = item.price - (item.price * item.descuento) / 100;

  const [confirmado, setConfirmado]= useState(false)
  const {agregarProducto} = useContext(contexto)
  const [cantidadLocal, setCantidadLocal] = useState(1)

  
  const handleAdd = (cantidad)=>{
    setCantidadLocal (cantidad)
    setConfirmado(true)
  }

  const handleClick = ()=>{ 
    agregarProducto(item, cantidadLocal)
   }
   return (
    <div className="container-page container-detail">
      <img src={item.img} alt="detail" />

      <article className="">
        <h2 className="detail-titulo">{item.title}</h2>
        <h4>{item.descuento}% OFF</h4>
        <section>
          <h3 className="detail-titulo">${discount}</h3>
          <h5 className="info-descuento">${item.price}.-</h5>
        </section>
        <span className="info-span">
          Todos los precios estan en pesos Argentinos
        </span>
        <hr />
        <h3 className="cuotas">
          Hasta <strong>12</strong> cuotas sin interes de
          <strong>${item.price / 12}</strong>
        </h3>
        <hr />
        <Contador stock={7} handleAdd={handleAdd} />
        {confirmado && <button onClick={handleClick}>Agregar al Carrito</button>}
      </article>
    </div>
  );
};

export default ItemDetail;
