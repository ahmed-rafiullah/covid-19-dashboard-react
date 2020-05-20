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
        <NavButton onClick={flipMenu}  className="nav_button" />

        {/* movile menu expanded */}
        <div className={`menu ${menuState}`}>
          <div className='menu_content'>
          <ul>
            <li><a href="">Home</a></li>
            
            <li><a href="">About</a></li>
            
            <li><a href="">CV</a></li>
            
            <li><a href="">LinkedIn</a></li>
          </ul>
          <p style={{marginBottom: '20px'}}>A React COVID-19 Dashboard</p>
          <iframe
          style={{marginRight: '10px'}}
          src="https://ghbtns.com/github-btn.html?user=twbs&repo=bootstrap&type=star&count=true"
          frameBorder="0"
          scrolling="0"
          width="120"
          height="20"
          title="GitHub"
        ></iframe>


        <iframe
        
          src="https://ghbtns.com/github-btn.html?user=twbs&repo=bootstrap&type=watch&count=true&v=2"
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
