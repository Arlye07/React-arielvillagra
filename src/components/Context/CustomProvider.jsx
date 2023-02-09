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

  const addToCart = (item, cantidadLocal) => {
    const areItemInCart = inCart(item);
    if (areItemInCart) {
      const itemInCart = carrito.items.find((i) => i.title === item.title);
      itemInCart.quantity += cantidadLocal;
      addQuantityToCart(cantidadLocal);
      return;
    }

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
    const itemToRemove = carrito.items.find((i) => i.title === item.title);
    if (itemToRemove.quantity > 1) {
      itemToRemove.quantity -= 1;
      setCarrito((prevState) => {
        return {
          ...prevState,
          items: carrito.items,
        };
      });
      removeQuantityInCart();
      return;
    }

    const id = item.id;
    const newItems = carrito.items.filter((i) => i.id !== id);

    setCarrito((prevState) => {
      return {
        ...prevState,
        items: newItems,
        quantity: newItems.length,
      };
    });
    removeQuantityInCart();
  };

  const inCart = (item) => carrito.items.some((i) => i.title === item.title);

  const deleteAllCart = () => setCarrito(initialCartState);
  const addQuantityToCart = (qty) =>
    setCarrito((prevState) => ({
      ...prevState,
      quantity: carrito.quantity + qty,
    }));
  const removeQuantityInCart = () =>
    setCarrito((prevState) => ({
      ...prevState,
      quantity: carrito.quantity - 1,
    }));

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
