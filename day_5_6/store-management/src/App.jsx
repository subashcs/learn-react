// import React from "react";  // NOTE: this import may be required in some bundlers but not required in vite
import { Container, Row, Col } from "react-bootstrap";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";
import Header from "./components/Header";
import { useState } from "react";
import { StoreProvider } from "./contexts/StoreContext";

function App() {
  const [searchKey, setSearchKey] = useState("");

  return (
    <StoreProvider>
      <Container>
        <Header
          onSearch={(searchText) => {
            setSearchKey(searchText);
            // do something on search text change
          }}
        />
        <Row>
          <Col>
            <AddProductForm />
          </Col>
          <Col>
            <ProductList searchKey={searchKey} />
          </Col>
        </Row>
      </Container>
    </StoreProvider>
  );
}

export default App;
