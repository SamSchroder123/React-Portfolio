import React from "react";
import Project from "./Project";
import projectData from "../assets/projectData.json";

export default function () {
  const projectsToAdd = [];
  projectData.projects.forEach((element) => {
    projectsToAdd.push(
      <Project
        title={element.title}
        imgSrc={element.imgSrc}
        deployedURL={element.deployedURL}
        gitHubURL={element.gitHubURL}
      ></Project>
    );
  });
  return (
    <>
      <div className="d-flex" style={{ flexWrap: "wrap" }}>
        {projectsToAdd}
      </div>
    </>
  );
}
