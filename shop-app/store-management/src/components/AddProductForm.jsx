import { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

function AddProductForm() {
  const [data, setData] = useState({
    name: "",
    price: "",
    quantity: "",
  });

  const handleChange = (ev) => {
    ev.preventDefault();
    let value = ev.target.value;
    const name = ev.target.name;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = async () => {
    const requestData = data;
    // const requestMethod = "POST";
    const requestURL = "http://localhost:3000/products";
    const request = await axios.post(requestURL, requestData);
    console.log("request", request);
  };
  console.log("data", data);

  return (
    <Form
      onSubmit={() => {
        handleSubmit();
      }}
    >
      <Form.Group className="mb-3" controlId="productName">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          value={data.name}
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="Enter product name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="productPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control
          name="price"
          value={data.price}
          onChange={handleChange}
          type="number"
          placeholder="Price"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="productQuantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          name="quantity"
          value={data.quantity}
          onChange={handleChange}
          type="number"
          placeholder="Quantity"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddProductForm;
