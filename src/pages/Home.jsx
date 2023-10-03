import React from "react";
import { LinkedIn, Email, GitHub } from "@mui/icons-material";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi! My name is Pablo</h2>
        <div className="prompt">
          {" "}
          <p>A software developer with a passion for learning and creating</p>
          <LinkedIn/>
          <Email/>
          <GitHub/>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-end</h2>
            <span>React, Angular, Ionic, HTML, CSS, Bootstrap, Styled Components
            </span>
          </li>
          <li className="item">
            <h2>Back-end</h2>
            <span>NodeJS, ExpressJS, MySQL, PostgreSQL, MongoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, TypeScript, Visual Basic .NET</span>
          </li>
        </ol>

      </div>
    </div>
  );
}
