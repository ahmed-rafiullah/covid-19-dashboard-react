import React from "react";

export default function About() {
  return (
    <div
    className='about'
     
    >
      <h1>About</h1>

      <p>
        This is a simple project i made to learn React. The source code is available on 
        
        <iframe
          style={{marginRight: '6px', marginLeft: '10px'}}
          src="https://ghbtns.com/github-btn.html?user=AhmedKhattak&repo=covid-19-dashboard-react&type=star&count=true"
          frameBorder="0"
          scrolling="0"
          width="80"
          height="20"
          title="GitHub"
        ></iframe>

        
        in the footer .The API for the
        dashboard is provided by{" "}
        <a href="https://about-corona.net/documentation">
          https://about-corona.net/documentation
        </a>
        .
        <br /> <br /> The sources for data are available at the api
        documentation as well.
      </p>

      <h4 style={{ marginTop: "10px", marginBottom: "10px" }}>Data Sources</h4>
      <p>
        <ul style={{ marginTop: "0px" }}>
          <li>World Health Organization Situation Reports</li>
          <li>Johns Hopkins CSSE</li>
          <li>US CDC</li>
          <li>China CDC (CCDC)</li>
          <li>European Centre for Disease Prevention and Control (ECDC)</li>
          <li>
            National Health Commission of the People’s Republic of China (NHC)
          </li>
          <li>DXY.cn. Pneumonia. 2020</li>
        </ul>
      </p>
      <p>
        Thanks to {" "}
        <a href="https://about-corona.net/">https://about-corona.net </a>
         for providing the API.

         
      </p>

      <h3 style={{textAlign: 'center', marginTop:'80px'}}>
        Stay Safe • Wear Masks • Wash hands • Maintain Social Distance
      </h3>
    </div>
  );
}
