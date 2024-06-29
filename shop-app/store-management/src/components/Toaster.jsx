/* eslint-disable react/prop-types */
import { Toast } from "react-bootstrap";

const colorMap = {
  success: "success",
  error: "danger",
};

export const Toaster = ({ message, type }) => {
  return (
    <Toast
      style={{ marginBottom: "20px", color: "#ffffff" }}
      bg={colorMap[type] || "green"}
    >
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
};
