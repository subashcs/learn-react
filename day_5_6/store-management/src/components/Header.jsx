import { useRef } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  NavDropdown,
} from "react-bootstrap";

function Header({ onSearch }) {
  const searchInputRef = useRef(null);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    const searchText = searchInputRef.current.value;
    console.log("on click fired", searchText);
    onSearch(searchText);
    // searchKey
    // search
  };

  return (
    <Navbar bg="light" expand="lg" style={{ marginBottom: "20px" }}>
      <Container fluid>
        <Navbar.Brand href="#home">StoreManager</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#inventory">Inventory</Nav.Link>
            <Nav.Link href="#orders">Orders</Nav.Link>
            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Settings</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Support</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              ref={searchInputRef}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" onClick={handleSubmit}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
