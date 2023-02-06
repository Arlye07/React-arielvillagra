import { serverTimestamp, addDoc } from "firebase/firestore";
import { useContext } from "react";
import { contexto } from "./Context/CustomProvider";
import { ventasCollection } from "../firebaseConfig";

const Cart =()=>{
    const {carrito,removeOneFromCart}= useContext(contexto)

   const handleClick = () =>{
    removeOneFromCart()
   }
const handleCompra =()=>{
    
    const compra = {
        usuario: {
            nombre: "fulano",
            email: "abca",
            telefono:"123"
        },
        carrito: carrito,
        fecha:serverTimestamp(),

    };
    addDoc(ventasCollection, compra)
    .then((resultado)=>{ console.log(resultado);})
    .catch((error)=>{console.log(error);})
}
    return(
        <div>
            <h1>Este es el carrito</h1>
            <button onClick={handleClick} >test carrito</button> 
            {JSON.stringify(carrito)}
            <button onClick={handleCompra}>Finalizar Compra</button>
        </div>
    );
};

export default Cart;