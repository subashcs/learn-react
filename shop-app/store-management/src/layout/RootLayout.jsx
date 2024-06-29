import { Container } from "react-bootstrap";
import Header from "../components/Header";
import { StoreProvider } from "../contexts/StoreContext";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <StoreProvider>
      <Container>
        <Header />
        {/* The following outlet specified the placeholder to hold the children view  */}
        <Outlet />
      </Container>
    </StoreProvider>
  );
}

export default RootLayout;
