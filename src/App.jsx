import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [content, setContent] = useState("state");
  return (
    <>
      <NavBar />
      <p>{content}</p>
      <button
        onClick={() => {
          setContent("different state");
        }}
      >
        click to change state
      </button>
      <Footer />
    </>
  );
}

export default App;
