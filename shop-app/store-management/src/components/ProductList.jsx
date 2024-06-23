import { Table, Button } from "react-bootstrap";
import useProducts from "../hooks/useProducts";
import { SET_PRODUCTS, useStore } from "../contexts/StoreContext";
import { useEffect } from "react";

function ProductList() {
  const products = useProducts();
  const { state, dispatch } = useStore();

  useEffect(() => {
    dispatch({ type: SET_PRODUCTS, payload: products });
  }, [products]);

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
        {state.matchingProducts.map((product, index) => (
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
