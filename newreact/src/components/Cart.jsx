import React from "react";
import "../styles/cart.css";
import { useEffect, useState } from "react";

const Cart = ({cart}) => {


  return (
    <div className="cart">
      <h3>Your Cart</h3>

      {cart.map((item) => (
        <div>
          <p>{item.title}</p>
          <img className="imageStyle" src={item.images[0]} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Cart;
