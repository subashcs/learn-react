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
import { Link } from "react-router-dom";
import { SEARCH_PRODUCTS, useStore } from "../contexts/StoreContext";

function Header() {
  const searchInputRef = useRef(null);
  const { dispatch } = useStore();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    const searchText = searchInputRef.current.value;

    const action = {
      type: SEARCH_PRODUCTS,
      payload: searchText,
    };

    dispatch(action);
  };

  return (
    <Navbar bg="light" expand="lg" style={{ marginBottom: "20px" }}>
      <Container fluid>
        <Link to="/" className="navbar-brand">
          StoreManager
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/" className="nav-link">
              Dashboard
            </Link>
            <Link to="/products" className="nav-link">
              Products
            </Link>
            {/* The following is the normal link that uses the html <a> tag
              Notice the difference between react router dom link and normal link
            */}
            <Link to="/orders" className="nav-link">
              Orders
            </Link>
            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Settings</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Support</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <FormControl
              ref={searchInputRef}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button
              type="submit"
              variant="outline-success"
              onClick={handleSubmit}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
