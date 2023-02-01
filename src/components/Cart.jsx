import { useContext } from "react";
import { contexto } from "./Context/CustomProvider";

const Cart =()=>{
    const {carrito,agregarProducto}= useContext(contexto)

   const handleClick = () =>{
    agregarProducto()
   }

    return(
        <div>
            <h1>Este es el carrito</h1>
            <button onClick={handleClick} >test carrito</button> 
            {JSON.stringify(carrito)}
        </div>
    );
};

export default Cart;