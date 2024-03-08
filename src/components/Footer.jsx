import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";

export default function () {
  return (
    <>
      <hr />
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/samuel-tillotson-schroder-436835202/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://github.com/SamSchroder123">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://drive.google.com/drive/folders/1pZx8Ocgbfbl79XG3AwWdn5RnMDfwDybT?usp=sharing">
            <FontAwesomeIcon icon={faFile} />
          </a>
        </li>
      </ul>
    </>
  );
}
