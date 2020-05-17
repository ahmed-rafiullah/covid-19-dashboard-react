import React from "react";
import { ReactComponent as SiteLogo } from '../imgs/site-logo.svg';
import { ReactComponent as NavButton } from '../imgs/bars.svg';

export default function NavBar(props) {
  return (
    <nav>
      <div className="nav_content">
       
        <SiteLogo/>
        <h3 className='site_title'>COVID-19 Dashboard</h3>
       
    
        <NavButton className='nav_button'/>

  
        
      </div>
    </nav>
  );
}
