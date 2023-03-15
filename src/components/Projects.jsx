import React from 'react'
import Home from "./Home";
import "./About.css";

const Projects = () => {
  return (
    <div>
      <Home />
      <div className="projects">
        <h2>Projects</h2>
        <div className="sp">
          <span style={{ color: "black" }}>M</span>
          <span style={{ color: "green" }}>E</span>
          <span style={{ color: "blue" }}>P</span>
        </div>
      </div>
    </div>
  );
}

export default Projects