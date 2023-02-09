import { addDoc } from "firebase/firestore";
import { useContext } from "react";
import { contexto } from "./Context/CustomProvider";
import { ventasCollection } from "../firebaseConfig";
import "./Item.css";

const Cart = () => {
  const { carrito,  removeOneFromCart, deleteAllCart } =
    useContext(contexto);

  const handleDelete = (item) => {
    removeOneFromCart(item);
  };

  const handleCompra = () => {
    const items = carrito.items;
    
    if (!items.length) return console.log("debes comprar algo");
    addDoc(ventasCollection, { items })
      .then((resultado) => {
        console.log(resultado);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="cart-b">
      <h1>Este es el carrito</h1>
      {carrito.items.map(i => {
                return (
                <div key={i.id} style={{border: 'solid 1px black', display: 'inline-block' }}>

                <span className="fondoClaro" >Categoria: {i.category} || Nombre: {i.title} || Cantidad: {i.quantity} || </span>

                <button onClick={() => handleDelete(i)}>Borrar del carrito</button>

                <br></br>

                </div>
                )
            })}
      <h3>{carrito.items.length > 1 ? carrito.items.length + ' productos' : carrito.items.length + ' producto'}</h3>
            <button className="contador2" onClick={deleteAllCart}>Borrar carrito</button>
            <br />
      <div> {JSON.stringify(carrito)} </div> <br /><br />
      <button className="contador1 item:hover" onClick={handleCompra}>Finalizar Compra</button> <br />
    </div>
  );
};

export default Cart;
