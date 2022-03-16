import React from "react";
import Appbar from "./components/Navbar/Appbar";
import Footer from "./components/Footer/Footer";
import Nails from "./components/Nails/Nails"
import Top from "./components/Top/Top";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {
  return (
    <>
    <Container>
      {/* <Appbar></Appbar> */}
      <Nails></Nails>
      {/* <Footer></Footer> */}
    </Container>
    </>
  );
}

export default App;
