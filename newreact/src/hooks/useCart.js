import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
const useCart = () => {
  const [localStorageCart, setLocalStorageCart] = useState([]);
  const [cart, setCart] = useState([]);
  

  const addToCart = (product) => {
    console.log(product);


    const updatedCart = [...cart, product];
    setLocalStorageCart(updatedCart);
    console.log(updatedCart);

    localStorage.setItem("Cart", JSON.stringify(updatedCart));

    toast.success("Item added successfully");

    const fetchedCart = JSON.parse(localStorage.getItem("Cart"));
    setCart(fetchedCart);

    console.log("updated cart to be sent", cart);
  };

  return { addToCart, cart, setCart };
};

export default useCart;
