import { Table, Button } from "react-bootstrap";
import useProducts from "../hooks/useProducts";
import { EDIT_PRODUCT, SET_PRODUCTS, useStore } from "../contexts/StoreContext";
import { useCallback, useEffect } from "react";
import axios from "axios";

const getDeleteURL = (productId) =>
  `http://localhost:3000/products/${productId}`;

function ProductList() {
  const products = useProducts();
  const { state, dispatch } = useStore();

  useEffect(() => {
    dispatch({ type: SET_PRODUCTS, payload: products });
  }, [products]);

  const handleDelete = useCallback(async (id) => {
    try {
      const url = getDeleteURL(id); //productID // find issue and complete
      const response = await axios.delete(url);
      if (response.status === 200) {
        // TASK: on success remove item from store
        // do not reload using window.location
        // hint create and use DELETE_PRODUCT action
        window.location.reload();
      } else {
        console.error(`Could not delete item ${id}`);
      }
    } catch (err) {
      console.error(err?.message);
      // TODO: Display toast on error
    }
  }, []);

  const handleEdit = (id) => {
    dispatch({
      type: EDIT_PRODUCT,
      productId: id,
    });
  };

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
              <Button variant="info" onClick={() => handleEdit(product.id)}>
                Edit
              </Button>
              <Button
                variant="danger"
                onClick={function () {
                  handleDelete(product.id);
                }}
                className="mx-4"
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ProductList;
