import { useEffect } from "react";
import { Table, Button } from "react-bootstrap";

const products = [
  { id: 1, name: "Product 1", price: 100, quantity: 10 },
  { id: 2, name: "Product 2", price: 200, quantity: 5 },
  // Add more products as needed
];

function ProductList() {
  // list products by fetching from api by replacing constant
  // moving the data fetching logic to a custom hook
  useEffect(() => {
    console.log("component mount");
    fetch("http://localhost:3000/products");
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
