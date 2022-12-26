import "./CardWi.css";

export default function CartWidget() {
  const icon =
    "https://cdn.icon-icons.com/icons2/1138/PNG/512/1486395300-03-trolley_80567.png";
  return (
    <>
      <div className="cart1">
        <img className="cart2" src={icon} alt="carrito" />
        <span className="cart3">7</span>
      </div>
    </>
  );
}
