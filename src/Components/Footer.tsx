import React from "react";
import { ReactComponent as LinkedInLogo } from "../imgs/linkedin.svg";
import { ReactComponent as CvLogo } from "../imgs/cv.svg";
import { ReactComponent as HomeLogo } from "../imgs/home.svg";
import { ReactComponent as AboutLogo } from "../imgs/question-circle.svg";
export default function Footer(props) {
  return (
    <footer>
      <div className="footer_content">
        <h4>Made with ❤️&nbsp;in Islamabad</h4>

        <iframe
          style={{marginLeft: '30px'}}
          src="https://ghbtns.com/github-btn.html?user=AhmedKhattak&repo=covid-19-dashboard-react&type=star&count=true"
          frameBorder="0"
          scrolling="0"
          width="80"
          height="20"
          title="GitHub"
        ></iframe>


        <iframe
          style={{marginLeft: '15px'}}
          src="https://ghbtns.com/github-btn.html?user=AhmedKhattak&repo=covid-19-dashboard-react&type=watch&count=true&v=2"
          frameBorder="0"
          scrolling="0"
          width="120"
          height="20"
          title="GitHub"
        ></iframe>

        <ul className="footer_nav">
          <li>
            <a href="">
              <HomeLogo />
              <p>Home</p>
            </a>
          </li>
          <li>
            <a href="">
              <AboutLogo />
              <p>About</p>
            </a>
          </li>
          <li>
            <a href="">
              <CvLogo />
              <p>CV</p>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ahmedkhattak/" target="_blank" rel="noopener noreferrer" >
              <LinkedInLogo />
              <p>LinkedIn</p>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
