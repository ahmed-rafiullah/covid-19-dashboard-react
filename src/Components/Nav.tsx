import React, { useState } from "react";
import { ReactComponent as SiteLogo } from "../imgs/site-logo.svg";
import { ReactComponent as NavButton } from "../imgs/bars.svg";

export default function NavBar(props) {

  const [menuState,setMenu] = useState('closed_menu')

  function flipMenu(){
    setMenu(menuState === 'closed_menu' ? 'open_menu' : 'closed_menu')
  }

  return (
    <nav>
      <div className="nav_content">
        <SiteLogo />
        <h3 className="site_title">COVID-19 Dashboard</h3>
        <button className="nav_button"  onClick={flipMenu}>
         <NavButton  />
        </button>
       

        {/* movile menu expanded */}
        <div className={`menu ${menuState}`}>
          <div className='menu_content'>
          <ul>
            <li><a href="">Home</a></li>
            
            <li><a href="">About</a></li>
            
            <li><a href="">CV</a></li>
            
            <li><a  href="https://www.linkedin.com/in/ahmedkhattak/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
          <p style={{marginBottom: '20px'}}>A React COVID-19 Dashboard</p>
          <iframe
          style={{marginRight: '10px'}}
          src="https://ghbtns.com/github-btn.html?user=AhmedKhattak&repo=covid-19-dashboard-react&type=star&count=true"
          frameBorder="0"
          scrolling="0"
          width="80"
          height="20"
          title="GitHub"
        ></iframe>


        <iframe
        
          src="https://ghbtns.com/github-btn.html?user=AhmedKhattak&repo=covid-19-dashboard-react&type=watch&count=true&v=2"
          frameBorder="0"
          scrolling="0"
          width="120"
          height="20"
          title="GitHub"
        ></iframe>
          </div>
         
        </div>
      </div>
    </nav>
  );
}
