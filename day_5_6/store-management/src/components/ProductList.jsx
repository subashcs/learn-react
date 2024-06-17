import { useState } from "react";
import { useEffect } from "react";
import { Table, Button } from "react-bootstrap";

const initialProducts = [
  { id: 1, name: "Product 1", price: 100, quantity: 10 },
  { id: 2, name: "Product 2", price: 200, quantity: 5 },
  // Add more products as needed
];

function ProductList() {
  // list products by fetching from api by replacing constant
  // moving the data fetching logic to a custom hook
  const [products, setProducts] = useState(initialProducts);

  // This function executes after component mounts on the dom
  useEffect(() => {
    // Task 1: Complete this effect hook
    // set the fetched data response correctly to products state variable
    // using the useEffect hook
    // Hint:
    // 1. Log the response to verify and then set the response
    // to products state
    // 2. you can use .then method to get the response from fetch request

    fetch("http://localhost:3000/products").then((response) => {
      console.log("got api response", response);
      // Do something here with the response and set it to products
      // YOUR CODE GOES HERE

      // *******
    });
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={product.id}>
            <td>{index + 1}</td>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td>{product.quantity}</td>
            <td>
              <Button variant="info">Edit</Button>{" "}
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ProductList;
