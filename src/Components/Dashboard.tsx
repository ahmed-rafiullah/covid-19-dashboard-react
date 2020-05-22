import React from "react";
import Map from '../Components/Dashboard Components/Map'
import GridBox from "./Dashboard Components/GridBox";
import MyResponsiveLine from "./Dashboard Components/LineChart";
import data from './Dashboard Components/tempdata'
import { COVIDDataCallback } from "./CovidData";
import { CountryTable } from "./Dashboard Components/CountryTable";



type DashboardProps = Pick<COVIDDataCallback, 'isLoading' | 'countryData' | 'allCountriesData' >


export default function Dashboard(props: DashboardProps) {

  return (
    
    <div className="grid-container">
      <GridBox id='count_total_cases' isLoading={props.isLoading}>
            <div style={{padding: '10px',textAlign: 'center'}}>
            <p>Total Cases</p>
            <p>{props.countryData?.latest_data.confirmed}</p>
          </div>
      </GridBox>
      

      <GridBox id='count_total_deaths' isLoading={props.isLoading}>
      <div style={{padding: '10px',textAlign: 'center'}}>
          <p>Total Deaths</p>
          <p>{props.countryData?.latest_data.deaths}</p>
        </div>
      </GridBox>

      <GridBox id='count_total_recoveries' isLoading={props.isLoading}>
      <div style={{padding: '10px',textAlign: 'center'}}>
          <p>Total Recovered</p>
          <p>{props.countryData?.latest_data.recovered}</p>

        </div>
      </GridBox>

      <GridBox id='cases_today' isLoading={props.isLoading}>
      
     
         <div style={{padding: '10px',textAlign: 'center'}}>
          <p>Cases Today</p>
          <p>{props.countryData?.timeline[0]?.new_confirmed ?? 'N/A'}</p>

        </div>
      </GridBox>
     
      <GridBox id='cases_recovered' isLoading={props.isLoading}>
      <div style={{padding: '10px',textAlign: 'center'}}>
          <p>Cases Recovered</p>
          <p>{props.countryData?.timeline[0]?.new_recovered ?? 'N/A'}</p>

        </div>
      </GridBox>
     

      <GridBox id='graph_fatality' isLoading={props.isLoading}>
      <div style={{padding: '10px',textAlign: 'left',  zIndex:1 }}>
          <span>Fatality Rate</span>
          <p>{props.countryData?.latest_data.calculated.death_rate?.toFixed(2) + '%'}</p>
    
        </div>
        <div style={{position: 'absolute', top: '20px', left: '0px' , bottom: '0px', right: '0px'}}>
          <MyResponsiveLine data={data}/>
         
        </div>
      </GridBox>
     
    
      <GridBox id='graph_recovery' isLoading={props.isLoading}>
      <div style={{padding: '10px',textAlign: 'left',  zIndex:1 }}>
          <span>Recovery Rate</span>
          <p>{props.countryData?.latest_data.calculated.recovery_rate?.toFixed(2) + '%'}</p>
    
        </div>
        <div style={{position: 'absolute', top: '20px', left: '0px' , bottom: '0px', right: '0px'}}>
          <MyResponsiveLine data={data}/>
         
        </div>
      </GridBox>
     
    

      <GridBox id='map' isLoading={props.isLoading}>
        <div style={{padding: '10px'}}>
          <Map lat={props.countryData?.coordinates.latitude} lng={props.countryData?.coordinates.longitude} allCoutries={props.allCountriesData}/>
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
        <div style={{position: 'absolute', top: '0px', bottom: '0px', left:'0px', right: '0px', overflow: 'auto'}}>
         <CountryTable  data={props.allCountriesData?.data}  />
        </div>
        
        
      
      </GridBox>

    


     
        
     
    </div>
  );
}
