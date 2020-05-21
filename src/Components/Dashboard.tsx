import React from "react";
import Map from '../Components/Dashboard Components/Map'
import GridBox from "./Dashboard Components/GridBox";
import MyResponsiveLine from "./Dashboard Components/LineChart";
import data from './Dashboard Components/tempdata'
import { COVIDDataCallback } from "./CovidData";



type DashboardProps = Pick<COVIDDataCallback, 'isLoading' | 'countryData' >


export default function Dashboard(props: DashboardProps) {

  return (
    
    <div className="grid-container">
      <GridBox id='count_total_cases' isLoading={props.isLoading}>
        {
          () => (
            <div style={{padding: '10px',textAlign: 'center'}}>
            <p>Total Cases</p>
            {/* <p>{props.summary.Global.TotalConfirmed}</p> */}
            {console.log('summary')}
            {/* {console.log(props.summary?.Global.TotalConfirmed)} */}
          </div>
          )
        }
       
      </GridBox>
      

      {/* <GridBox id='count_total_deaths' isLoading={props.isLoading}>
      <div style={{padding: '10px',textAlign: 'center'}}>
          <p>Total Deaths</p>
          <p>{props.summary?.Global.TotalDeaths}</p>
          {console.log('summary')}
          {console.log(props.summary?.Global.TotalConfirmed)}
        </div>
      </GridBox>

      <GridBox id='count_total_recoveries' isLoading={props.isLoading}>
      <div style={{padding: '10px',textAlign: 'center'}}>
          <p>Total Recovered</p>
          <p>{props.summary?.Global.TotalDeaths}</p>
          {console.log('summary')}
          {console.log(props.summary?.Global.TotalRecoveries)}
        </div>
      </GridBox>

      <GridBox id='cases_today' isLoading={props.isLoading}>
      
     
         <div style={{padding: '10px',textAlign: 'center'}}>
          <p>Total Recovered</p>
          <p>{props.summary?.Global.TotalDeaths}</p>
          {console.log('summary')}
          {console.log(props.summary?.Global.TotalRecoveries)}
        </div>
      </GridBox>
     
      <GridBox id='cases_recovered' isLoading={props.isLoading}>
        <div style={{padding: '10px'}}>
         recoverd today
        </div>
      </GridBox>
     

      <GridBox id='graph_fatality' isLoading={props.isLoading}>
      <div style={{padding: '10px',textAlign: 'left',  zIndex:1 }}>
          <span>Fatality Rate</span>
          <p>{props.summary?.Global.TotalDeaths}</p>
          {console.log('summary')}
          {console.log(props.summary?.Global.TotalRecoveries)}
        </div>
        <div style={{position: 'absolute', top: '20px', left: '0px' , bottom: '0px', right: '0px'}}>
          <MyResponsiveLine data={data}/>
         
        </div>
      </GridBox>
     
    
      <GridBox id='graph_recovery' isLoading={props.isLoading}>
        <div style={{padding: '10px'}}>
        recovery rate
        </div>
      </GridBox>
     
    

      <GridBox id='map' isLoading={props.isLoading}>
        <div style={{padding: '10px'}}>
          <Map lat={props.countryData.coordinates.latitude} lng={props.countryData.coordinates.longitude} />
        </div>
      </GridBox>
     
    


      <GridBox id='twitterfeed' isLoading={props.isLoading}>
        <div style={{padding: '10px'}}>
        Twitter feed
        </div>
      </GridBox>


    

      <GridBox id='news' isLoading={props.isLoading}>
        <div style={{padding: '10px'}}>
        News from news api
        </div>
      </GridBox>


    

      <GridBox id='table' isLoading={props.isLoading}>
        <div style={{padding: '10px'}}>
        Table
        </div>
      </GridBox>

     */}


     
        
     
    </div>
  );
}
