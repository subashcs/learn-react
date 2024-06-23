// import React from "react";  // NOTE: this import may be required in some bundlers but not required in vite
import { Container, Row, Col } from "react-bootstrap";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";
import Header from "./components/Header";
import { StoreProvider } from "./contexts/StoreContext";

function App() {
  return (
    <StoreProvider>
      <Container>
        <Header />
        <Row>
          <Col>
            <AddProductForm />
          </Col>
          <Col>
            <ProductList />
          </Col>
        </Row>
      </Container>
    </StoreProvider>
  );
}

export default App;
