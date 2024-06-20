import { Table, Button } from "react-bootstrap";
import useProducts from "../hooks/useProducts";
import { useStore } from "../contexts/StoreContext";

function ProductList({ searchKey }) {
  const products = useProducts(searchKey);
  const { state } = useStore();
  console.log("got store state", state);

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
