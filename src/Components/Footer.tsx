import React from "react";
import GitHubButton from "react-github-button";

export function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h3 style={{ fontSize: "20px", fontWeight: 800, margin: "0px" }}>
          COVID — 19 Tracker
        </h3>

        <span style={{ marginLeft: "26px" }} >Hosted on Netlify</span>

       <span  style={{ marginLeft: "26px" }}>
       <a
          className="github-button"
          href="https://github.com/AhmedKhattak/trello-todo"
          data-size="large"
          data-show-count="true"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Star AhmedKhattak/todo-trello on GitHub"
        >
          Star
        </a>
       </span>
      

        <span  style={{ marginLeft: "26px" }}>
        <a
       
          className="github-button"
          href="https://github.com/AhmedKhattak/todo-trello/archive/master.zip"
          data-size="large"
          target='_blank'
          rel="noopener noreferrer"
          aria-label="Download AhmedKhattak/todo-trello on GitHub"
        >
          Download
        </a>
        </span>
       
        <ul>
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
    </footer>
  );
}
