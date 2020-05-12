import React from "react";
import logo from "../imgs/corona.svg";

export function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className='hero-header'>Track COVID-19 Live</h1>

        <div>
          <p style={{fontSize: '20px', fontWeight: 'bold'}}>Last Updated Monday 14, 2020</p>
          <p style={{fontSize: '15px'}}> 
            Sources: WHO, CDC, ECDC, NHC of the PRC, JHU CSSE, DXY, QQ,<br/> and
            various international media
          </p>
        </div>
      </div>
    </div>
  );
}
