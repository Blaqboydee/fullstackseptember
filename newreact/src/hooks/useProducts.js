import React, { useEffect, useState } from "react";
import axios from "axios";
const useProducts = () => {
  const [allproducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setAllProducts(res.data.products));
  }, []);

  return {allproducts};
};

export default useProducts;
