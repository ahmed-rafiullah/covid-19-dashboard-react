import React from "react";
import Map from './Map'

export default function Dashboard(props) {
  return (
    <div className="grid-container">
      <div id="count_total_cases">Total cases</div>

      <div id="count_total_deaths">Total deaths</div>
      <div id="count_total_recoveries">Total recoveries</div>

      <div id="cases_today">cases today</div>

      <div id="cases_recovered">recoverd today</div>

      <div id="graph_fatality">fatality rate</div>

      <div id="graph_recovery">recovery rate</div>

      <div id="map">
          <Map/>
      </div>

      <div id="twitterfeed">Twitter feed</div>

      <div id="news">News from news api</div>

      <div id="table">
        
      </div>
    </div>
  );
}
