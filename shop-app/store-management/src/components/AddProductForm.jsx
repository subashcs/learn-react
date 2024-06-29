import { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { Toaster } from "./Toaster";
import {
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  useStore,
} from "../contexts/StoreContext";

function AddProductForm() {
  const {
    state: { currentEditProduct },
    dispatch,
  } = useStore();

  const [data, setData] = useState({
    name: "",
    price: "",
    quantity: "",
  });

  const [toastMessage, setToastMessage] = useState({
    message: "",
    type: "error",
  });

  useEffect(() => {
    setData(currentEditProduct);
  }, [currentEditProduct]);

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

  const addToastMessage = ({ message, type }) => {
    // add toast message
    setToastMessage({
      message: message,
      type: type,
    });
    // remove toast message after 2 seconds
    setTimeout(() => {
      setToastMessage({ message: "" });
    }, 2000);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const requestData = data;
    // const requestMethod = "POST";
    try {
      const requestURL = "http://localhost:3000/products";
      const response = await axios.post(requestURL, requestData);
      if (response.status == 201) {
        addToastMessage({
          message: "Successfully added product",
          type: "success",
        });
        requestData.id = response.data.id;
        dispatch({
          type: ADD_PRODUCT,
          payload: requestData,
        });
      }
    } catch (e) {
      addToastMessage({
        message: "Error adding product",
        type: "error",
      });
    }
  };

  const handleUpdate = () => {
    const updateData = data;
    const id = currentEditProduct.id;
    const url = `http://localhost:3000/products/${id}`;
    axios
      .put(url, updateData)
      .then((res) => {
        console.log(res);
        dispatch({
          type: UPDATE_PRODUCT,
          payload: {
            ...updateData,
            id,
          },
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const renderButtons = () => {
    return currentEditProduct?.id ? (
      <Button variant="primary" type="button" onClick={handleUpdate}>
        Update
      </Button>
    ) : (
      <Button variant="primary" type="submit">
        Submit
      </Button>
    );
  };

  return (
    <>
      {toastMessage.message && (
        <Toaster message={toastMessage.message} type={toastMessage.type} />
      )}

      <Form action="#" onSubmit={handleSubmit}>
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
        {renderButtons()}
      </Form>
    </>
  );
}

export default AddProductForm;
