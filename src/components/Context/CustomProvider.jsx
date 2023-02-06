import { createContext, useState } from "react";

export const contexto = createContext();
const { Provider } = contexto;

const CarritoProvider = ({ children }) => {
    const initialCartState = {
        items: [],
        total: 0,
        quantity: 0,
      };
      
  const [carrito, setCarrito] = useState(initialCartState);
//   const [total, setTotal] = useState(0);
//   const [cantidad, setCantidad] = useState(0);

//   const agregarProducto = (producto, cantidad) => {

//     producto.cantidad= cantidad

//     setCarrito([producto]);
//    // setTotal(producto.precio * cantidad);
//    // setCantidad(cantidad);
//   };

const addToCart = item => {
    setCarrito(prevState => {
      return {
        ...prevState,
        items: [...carrito.items, item],
      }
    })
  };

  const removeOneFromCart = item => {
    const id = item.id;
    const itemToRemove = carrito.items.find(i => i.id === id);
    itemToRemove.stock -= 1

    setCarrito(prevState => {
      return {
        ...prevState,
        items: [...carrito.items, itemToRemove],
      }
    })
  }

const inCart = item => 
carrito.items.some(i => i.title === item.title);

  const valorDelContexto = {
    carrito,
    inCart,
    addToCart,
    removeOneFromCart,
   // total,
    //cantidad,
   // agregarProducto,
    //setTotal,
    //setCantidad,
  };
  return <Provider value={valorDelContexto}>{children}</Provider>;
};
export default CarritoProvider;
