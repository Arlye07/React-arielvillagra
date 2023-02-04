import { createContext, useState } from "react";

export const contexto = createContext();
const { Provider } = contexto;

const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantidad, setCantidad] = useState(0);

  const agregarProducto = (producto, cantidad) => {

    producto.cantidad= cantidad

    setCarrito([producto]);
    setTotal(producto.precio * cantidad);
    setCantidad(cantidad);
  };

//   const eliminarProducto= () =>{}
  // const vaciarCarrito= () =>{setCarrito([])};
//   const estaEnCarrito= () =>{}
  
  const valorDelContexto = {
    carrito,
    total,
    cantidad,
    agregarProducto,
    setTotal,
    setCantidad,
  };
  return <Provider value={valorDelContexto}>{children}</Provider>;
};
export default CarritoProvider;
