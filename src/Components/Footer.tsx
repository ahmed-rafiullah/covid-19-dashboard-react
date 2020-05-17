import React from "react";
import { ReactComponent as LinkedInLogo } from "../imgs/linkedin.svg";
import { ReactComponent as CvLogo } from "../imgs/cv.svg";
import { ReactComponent as HomeLogo } from "../imgs/home.svg";
import { ReactComponent as AboutLogo } from "../imgs/question-circle.svg";
export default function Footer(props) {
  return (
    <footer>
      <ul className="footer_content">
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
            <LinkedInLogo/>
            <p>LinkedIn</p>
          </a>
        </li>
      </ul>
    </footer>
  );
}
