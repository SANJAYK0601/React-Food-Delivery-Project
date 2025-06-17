import React, { createContext, useState } from "react";
import { food_list } from "../assets/assets";

// Create the context
export const StoreContext = createContext(null);

// Context provider component
const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId] -= 1;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };
  const getTotalCartAmount =() => {
    let totalAmount =0;
    for(const item in cartItems)
    {
      if (cartItems[item]>0) {
        let itemInfo = food_list.find((product)=>product._id === item);
       totalAmount += itemInfo.price* cartItems[item];
      }       
    }
    return totalAmount;
  }

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
