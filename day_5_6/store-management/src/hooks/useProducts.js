import { useEffect, useState } from "react";

const initialProducts = [];

function useProducts() {
  const [products, setProducts] = useState(initialProducts);

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/products`);
      const result = await response.json();
      setProducts(result);
    } catch (err) {
      console.error(">>>>>>Error:", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return products;
}

export default useProducts;
