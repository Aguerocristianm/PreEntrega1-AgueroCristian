import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#Sony Argentina"></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Televisores</Nav.Link>
          <Nav.Link href="#features">Consolas</Nav.Link>
          <Nav.Link href="#pricing">Camaras</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
