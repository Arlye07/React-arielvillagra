import { createContext, useState } from "react";

export const contexto = createContext();
const { Provider } = contexto;

const CarritoProvider = ({ children }) => {
  const initialCartState = {
    items: [],
    total: 0,
    quantity: 0, // cantidad de productos diferentes en carrito
  };

  const [carrito, setCarrito] = useState(initialCartState);


  const addToCart = (item, cantidadLocal) => {
    const areItemInCart = inCart(item);
    if (areItemInCart){
      //Si esta el producto el carrito solo le vamos a subir uno a su quantity y sumamos el quantity general del carrito
      const itemInCart = carrito.items.find(i => i.title === item.title);
      itemInCart.quantity += cantidadLocal;
      addQuantityToCart(cantidadLocal);
      return;
    } 
    // Si no esta el producto creamos el producto con el quantity en 1 y le sumamos el quantity al carrito general

    const newItem = {
      ...item,
      quantity: cantidadLocal,
    };

    setCarrito((prevState) => {
      const items = [...carrito.items, newItem];
      return {
        ...prevState,
        items,
      };
    });
    addQuantityToCart(cantidadLocal);
  };

  const removeOneFromCart = (item) => {
  const itemToRemove = carrito.items.find(i => i.title === item.title);
  // Si hay mas de un producto del mismo tipo (quantity > 1) le sumamos uno y restamos el quantity del carrito general
  if (itemToRemove.quantity > 1){
    itemToRemove.quantity -= 1;
    setCarrito(prevState => {
      return {
        ...prevState,
        items: carrito.items,
      }
    });
    removeQuantityInCart();
    return;
  }

    // Si no es que solo hay una unidad del producto en el carrito entonces lo borramos y restamos uno al quantity del carrito general
    const id = item.id;
    const newItems = carrito.items.filter(i => i.id !== id);

    setCarrito((prevState) => {
      return {
        ...prevState,
        items: newItems,
        quantity: newItems.length
      };
    });
    removeQuantityInCart();
  };

  const inCart = (item) => carrito.items.some((i) => i.title === item.title);

  const deleteAllCart = () => setCarrito(initialCartState);
// Declaramos addQuantityToCart y removeQuantityInCart que lo que hacen es modificar el carrito
// sumandole y restandole uno al quantity del carrito respectivamente
  const addQuantityToCart = qty => setCarrito(prevState => ({...prevState, quantity: carrito.quantity + qty }));
  const removeQuantityInCart = () => setCarrito(prevState => ({...prevState, quantity: carrito.quantity - 1 }));


  
  const valorDelContexto = {
    carrito,
    inCart,
    addToCart,
    removeOneFromCart,
    deleteAllCart,
  };
  return <Provider value={valorDelContexto}>{children}</Provider>;
};
export default CarritoProvider;
