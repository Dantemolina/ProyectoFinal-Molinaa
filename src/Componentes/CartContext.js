import React, { useState, createContext } from "react";



export const CartContext = createContext({
  cart: [],
  clearCart: () => {},
  isInCart: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  getTotalQuantity: () => {},
  getTotal: () => {}
});


const CartProvider = (props) => {

  
  const [cart, setCart] = useState([]);

  
  const clearCart = () => {
    setCart([]);
  }

  
  const isInCart = (id) => {
    return cart.find((productos) => productos.id === id) ? true : false;
  }

  const addToCart = (productos, quantity) => {
    if (isInCart(productos.id)) {
      setCart(cart.map((cartproductos) => {
        if (cartproductos.id === productos.id) {
          return { ...cartproductos, quantity: cartproductos.quantity + quantity };
        }
        return cartproductos;
      }));
    } else {
      setCart([...cart, { ...productos, quantity }]);
    }
  };
  

  const removeFromCart = (id) => {
    const newCart = cart.filter((productos) => productos.id !== id)
    setCart(newCart);
  };

  const getTotalQuantity = () => {
    let cant = 0
    cart.forEach((e) => cant += e.quantity)
    return cant
  };

 
  const getTotal = () => {
    let total = 0
    cart.forEach((e) => total += (e.quantity*e.price))
    return total        
  };

  return (
  
    <CartContext.Provider value={{ cart, clearCart, addToCart, removeFromCart, getTotalQuantity, getTotal }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;