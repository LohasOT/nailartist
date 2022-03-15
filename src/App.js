import React from "react";
import Appbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Nails from "./components/Nails/Nails"
import Top from "./components/Top/Top";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {
  return (
    <>
      <Appbar></Appbar>
      <Footer></Footer>
    </>
  );
}

export default App;
