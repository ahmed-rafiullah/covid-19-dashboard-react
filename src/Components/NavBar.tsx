import React from "react";


export function NavBar() {
  return (
    <nav>
      <div className="nav-content">
        <i className="fas fa-viruses fa-3x" style={{ color: "#007BFF" }}></i>

        <h3
          style={{
            margin: "0px",
            marginLeft: "25px",
            fontSize: "26px",
            fontWeight: 800,
          }}
        >
          COVID-19 Tracker
        </h3>

        <ul>
          <li>
            <a href="#" target="_blank">
              Home
            </a>
          </li>
          <li>
            <a href="https://github.com/AhmedKhattak" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              About
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ahmedkhattak/" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
