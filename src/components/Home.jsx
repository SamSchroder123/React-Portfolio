import React from "react";
import img from "../assets/headshot.PNG";

export default function () {
  return (
    <>
      <main>
        <h2>Home</h2>
        <p>
          Hi! I'm
          <strong> Samuel Tillotson Schroder</strong>
        </p>
        <img
          src={img}
          alt="headshot image"
          className="img-fluid img-thumbnail"
          style={{ maxWidth: "20%", borderRadius: "5%" }}
        ></img>
        <p style={{ fontSize: "20px" }}>
          "We can do it <em>if we work together</em>."
        </p>
        <p>Welcome to my portfolio site!</p>
      </main>
    </>
  );
}
