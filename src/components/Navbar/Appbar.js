import React from 'react';
import './Appbar.css';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';


// window.onscroll = function (e) {
//   var scrollY = window.pageYOffset || document.documentElement.scrollTop;
//   var header = document.querySelector('nav');
//   var height = -header.clientHeight;
//   header.style.transition = 'transform 0.1s';

//   (scrollY <= Math.max(this.lastScroll, 50) || window.innerWidth <= 1200 || this.loaded === undefined)
//     ? header.style.transform = 'translateY(0px)'
//     : header.style.transform = 'translateY(' + height + 'px)'

//   this.lastScroll = scrollY;
//   this.loaded = true;
// }


const Appbar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Appbar;
