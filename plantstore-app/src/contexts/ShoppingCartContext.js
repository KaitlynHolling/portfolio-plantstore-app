import React, { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    const plantIndex = cart.findIndex((item) => item.plant.name === plant.name);

    if (plantIndex >= 0) {
      const newCart = [...cart];
      newCart[plantIndex].quantity += 1;
      setCart(newCart);
    } else {
      setCart([...cart, { plant, quantity: 1 }]);
    }
  };

  // TODO: Fix this function, it's not filtering anything at the moment
  const removeFromCart = (plant) => {
    setCart(cart.filter((item) => item.plant.name !== plant.name));
  };

  const incrementQuantity = (plant) => {
    const plantIndex = cart.findIndex((item) => item.plant.name === plant.name);

    if (plantIndex >= 0) {
      const newCart = [...cart];
      newCart[plantIndex].quantity += 1;
      setCart(newCart);
    }
  };

  const decrementQuantity = (plant) => {
    const plantIndex = cart.findIndex((item) => item.plant.name === plant.name);

    if (plantIndex >= 0) {
      const newCart = [...cart];

      if (newCart[plantIndex].quantity > 1) {
        newCart[plantIndex].quantity -= 1;
      } else {
        newCart.splice(plantIndex, 1);
      }

      setCart(newCart);
    }
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        emptyCart,
        incrementQuantity,

        decrementQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
