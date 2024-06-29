import { Row, Col } from "react-bootstrap";
import ProductList from "../components/ProductList";
import AddProductForm from "../components/AddProductForm";

function Products() {
  return (
    <Row>
      <Col>
        <AddProductForm />
      </Col>
      <Col>
        <ProductList />
      </Col>
    </Row>
  );
}

export default Products;
