import "./CardWi.css";
import { contexto } from "../Context/CustomProvider";
import { useContext } from "react";

export default function CartWidget() {
  const icon =
    "https://cdn.icon-icons.com/icons2/1138/PNG/512/1486395300-03-trolley_80567.png";

  const { cantidad } = useContext(contexto);

  return (
    <>
      <div className="cart1">
        <img className="cart2" src={icon} alt="carrito" />
        <span className="cart3"> {cantidad} </span>
      </div>
    </>
  );
}
