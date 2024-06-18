// import React from "react";  // NOTE: this import may be required in some bundlers but not required in vite
import { Container, Row, Col } from "react-bootstrap";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";
import Header from "./components/Header";

function App() {
  return (
    <Container>
      <Header
        onSearch={(searchText) => {
          // do something on search text change
          console.log(searchText);
        }}
      />
      <Row>
        <Col>
          <AddProductForm />
        </Col>
        <Col>
          <ProductList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
