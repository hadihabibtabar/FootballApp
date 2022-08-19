import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Home from "./Containers/Home";
import { Container } from "react-bootstrap";

function App() {
  return (
      <Container fluid dir="rtl">
      <Header />
      <Home />
      <Navbar />
      </Container>
  );
}

export default App;
