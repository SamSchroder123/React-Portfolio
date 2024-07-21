import React from "react";

export default function ({ title, imgSrc, deployedURL, gitHubURL }) {
  import IMG from "${imgSrc}"
  return (
    <>
      <div className="project">
        <h3>{title}</h3>
        <a href={deployedURL} target="_blank" rel="noopener noreferrer">
          Deployed Link
        </a>
        <a href={gitHubURL} target="_blank" rel="noopener noreferrer">
          GitHub Link
        </a>
        <img src={IMG} alt={title} />
      </div>
    </>
  );
}
