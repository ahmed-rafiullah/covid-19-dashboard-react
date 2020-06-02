import React from "react";
import { ReactComponent as LinkedInLogo } from "../imgs/linkedin.svg";
import { ReactComponent as CvLogo } from "../imgs/cv.svg";
import { ReactComponent as HomeLogo } from "../imgs/home.svg";
import { ReactComponent as AboutLogo } from "../imgs/question-circle.svg";
import {Link} from 'react-router-dom'
export default function Footer(props) {
  return (
    <footer>
      <div className="footer_content">
        <h4>Made with ❤️&nbsp;in Islamabad</h4>

        <iframe
          style={{ marginLeft: "30px" }}
          src="https://ghbtns.com/github-btn.html?user=AhmedKhattak&repo=covid-19-dashboard-react&type=star&count=true"
          frameBorder="0"
          scrolling="0"
          width="80"
          height="20"
          title="GitHub"
        ></iframe>

        <iframe
          style={{ marginLeft: "15px" }}
          src="https://ghbtns.com/github-btn.html?user=AhmedKhattak&repo=covid-19-dashboard-react&type=watch&count=true&v=2"
          frameBorder="0"
          scrolling="0"
          width="120"
          height="20"
          title="GitHub"
        ></iframe>

        <ul className="footer_nav">
          <li>
          <Link to='/'>
              <HomeLogo />
              <p>Home</p>
            </Link>
          </li>
          <li>
           <Link to='/about'>
              <AboutLogo />
              <p>About</p>
            </Link>
           
          </li>
          <li>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              <CvLogo />
              <p>CV</p>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ahmedkhattak/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInLogo />
              <p>LinkedIn</p>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
