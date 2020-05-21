import React from "react";
import { ReactComponent as LinkedInLogo } from "../imgs/linkedin.svg";
import { ReactComponent as CvLogo } from "../imgs/cv.svg";
import { ReactComponent as HomeLogo } from "../imgs/home.svg";
import { ReactComponent as AboutLogo } from "../imgs/question-circle.svg";
export default function Footer(props) {
  return (
    <footer>
      <div className="footer_content">
        <h4>Made with ❤️in Islamabad</h4>

        <iframe
          style={{marginLeft: '30px'}}
          src="https://ghbtns.com/github-btn.html?user=twbs&repo=bootstrap&type=star&count=true"
          frameBorder="0"
          scrolling="0"
          width="120"
          height="20"
          title="GitHub"
        ></iframe>


        <iframe
          style={{marginLeft: '20px'}}
          src="https://ghbtns.com/github-btn.html?user=twbs&repo=bootstrap&type=watch&count=true&v=2"
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
              <p>Cv</p>
            </a>
          </li>
          <li>
            <a href="">
              <LinkedInLogo />
              <p>LinkedIn</p>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
