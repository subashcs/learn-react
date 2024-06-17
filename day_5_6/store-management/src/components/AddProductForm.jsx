import { Form, Button } from "react-bootstrap";

function AddProductForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="productName">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" placeholder="Enter product name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="productPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Price" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="productQuantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="number" placeholder="Quantity" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddProductForm;
