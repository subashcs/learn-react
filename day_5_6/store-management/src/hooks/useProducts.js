import { useEffect, useState } from "react";
const initialProducts = [];

function useProducts() {
  // list products by fetching from api by replacing constant
  // moving the data fetching logic to a custom hook
  const [products, setProducts] = useState(initialProducts);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");
      const result = await response.json();
      setProducts(result);
    } catch (err) {
      console.error(">>>>>>Error:", err);
    }
  };

  // This function executes after component mounts on the dom
  useEffect(() => {
    // Task 1: Complete this effect hook
    // set the fetched data response correctly to products state variable
    // using the useEffect hook
    // Hint:
    // 1. Log the response to verify and then set the response
    // to products state
    // 2. you can use .then method to get the response from fetch request
    getData();
  }, []);
  return products;
}

export default useProducts;
