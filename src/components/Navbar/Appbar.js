import React from "react";
import './Appbar.css';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const Appbar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Andy's Nail Collection</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Styles by Season" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Summer</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.2">Fall</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3">Winter</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">Spring</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Appbar;
