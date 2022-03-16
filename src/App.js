import React from "react";
import Appbar from "./components/Navbar/Appbar";
import Footer from "./components/Footer/Footer";
import Nails from "./components/Nails/Nails"
import Top from "./components/Top/Top";
import { Navbar, Nav, NavDropdown, Container, Image, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {
  return (
    <>
    <Container>
      <Appbar></Appbar>
      {/* <Footer></Footer> */}
    </Container>
    </>
  );
}

export default App;
