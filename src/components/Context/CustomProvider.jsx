import { createContext, useState } from "react";

export const contexto = createContext();
const { Provider } = contexto;

const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantidad, setCantidad] = useState(0);

  const agregarProducto = ()=>{
    const testProducto = {
        id:1,
        nombre: "pro 1",
        precio: 1000,
        cantidad: 5
    }
    setCarrito([testProducto])
    setTotal(testProducto.precio * testProducto.cantidad)
    setCantidad(testProducto.cantidad)
  }

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

