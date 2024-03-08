import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <NavBar />
      <p>{content}</p>
      <Footer />
    </>
  );
}

export default App;
