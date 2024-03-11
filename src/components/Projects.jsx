import React from "react";
import Project from "./Project";
import projectData from "../assets/projectData.json";
const images = [];
projectData.projects.forEach((element) => {
  images.push(element.imgSrc);
});

export default function () {
  const projectsToAdd = [];
  for (let i = 0; i < projectData.projects.length; i++) {
    projectsToAdd.push(
      <Project
        title={projectData.projects[i].title}
        imgSrc={images[i]}
        deployedURL={projectData.projects[i].deployedURL}
        gitHubURL={projectData.projects[i].gitHubURL}
      ></Project>
    );
  }
  return (
    <>
      <div className="d-flex" style={{ flexWrap: "wrap" }}>
        {projectsToAdd}
      </div>
    </>
  );
}
