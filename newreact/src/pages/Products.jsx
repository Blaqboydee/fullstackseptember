import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";
import Addtocart from "../components/Addtocart";
import useProducts from "../hooks/useProducts";
import { toast, ToastContainer } from "react-toastify";
import Cart from "../components/Cart";
import useCart from "../hooks/useCart";

const Products = () => {
  const { addToCart, cart, setCart } = useCart();

  const products = useProducts();

  return (
    <div>
      <ToastContainer />
      <h1>Products</h1>

      <Link to="/usersdummy/8">Go to users</Link>

      {products.allproducts.length == 0 ? (
        <Spinner />
      ) : (
        products.allproducts.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <img src={product.images[0]} />
            <p>{product.description}</p>

            <Link to={`/productPage/${product.id}`}>See more</Link>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))
      )}

      <Cart cart={cart} />
    </div>
  );
};

export default Products;
