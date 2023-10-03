import React from "react";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/Projects.css";
import ProjectItem from "../components/ProjectItem";


export default function Projects() {
  return (
    <div className="projects">
      <h1>My personal projects</h1>
      <div className="projectList">
        {ProjectList.map((project, index) => {
          return <ProjectItem id={index} name={project.name} image={project.image} />;
        })}
      </div>
    </div>
  );
}
