import React from "react";
import Map from "../Components/Dashboard Components/Map";
import GridBox from "./Dashboard Components/GridBox";
import MyResponsiveLine from "./Dashboard Components/LineChart";
import data from "./Dashboard Components/tempdata";
import { COVIDDataCallback } from "./CovidData";
import { CountryTable } from "./Dashboard Components/CountryTable";
import TwitterEmbed from "./Dashboard Components/TwitterEmbed";
import NewsData from './Dashboard Components/NewsData'

type DashboardProps = Pick<
  COVIDDataCallback,
  "isLoading" | "countryData" | "allCountriesData"
>;

export default function Dashboard(props: DashboardProps) {
  return (
    <div className="grid-container">
      <GridBox id="count_total_cases" isLoading={props.isLoading}>
        <div className='grid_box_inner_content'>
          <p>Total Cases</p>
          <h3>{props.countryData?.latest_data.confirmed}</h3>
        </div>
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "0px",
            bottom: "0px",
            right: "0px",
          }}
        >
          <MyResponsiveLine
            timeline={props.countryData?.timeline}
            xAxisValue="date"
            yAxisValue="confirmed"
          />
        </div>
      </GridBox>

      <GridBox id="count_total_deaths" isLoading={props.isLoading}>
        <div  className='grid_box_inner_content'>
          <p>Total Deaths</p>
          <h3>{props.countryData?.latest_data.deaths}</h3>
        </div>
    
      </GridBox>

      <GridBox id="count_total_recoveries" isLoading={props.isLoading}>
        <div   className='grid_box_inner_content'>
          <p>Total Recovered</p>
          <h3>{props.countryData?.latest_data.recovered}</h3>
        </div>
    
      </GridBox>

      <GridBox id="cases_today" isLoading={props.isLoading}>
        <div  className='grid_box_inner_content'>
          <p>Cases Today</p>
          <h3>{props.countryData?.timeline[0]?.new_confirmed ?? "N/A"}</h3>
        </div>
      </GridBox>

      <GridBox id="cases_recovered" isLoading={props.isLoading}>
        <div  className='grid_box_inner_content'>
          <p>Cases Recovered</p>
          <h3>{props.countryData?.timeline[0]?.new_recovered ?? "N/A"}</h3>
        </div>
      </GridBox>

      <GridBox id="graph_fatality" isLoading={props.isLoading}>
        <div  className='grid_box_inner_content' style={{zIndex: 1 }}>
          <p>Fatality Rate</p>
          <h3>
            {props.countryData?.latest_data.calculated.death_rate?.toFixed(2) +
              "%"}
          </h3>
        </div>
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "0px",
            bottom: "0px",
            right: "0px",
          }}
        >
          <MyResponsiveLine
            timeline={props.countryData?.timeline}
            xAxisValue="date"
            yAxisValue="deaths"
          />
        </div>
      </GridBox>

      <GridBox id="graph_recovery" isLoading={props.isLoading}>
        <div  className='grid_box_inner_content' style={{zIndex: 1 }}>
          <p>Recovery Rate</p>
          <h3>
            {props.countryData?.latest_data.calculated.recovery_rate?.toFixed(
              2
            ) + "%"}
          </h3>
        </div>
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "0px",
            bottom: "0px",
            right: "0px",
          }}
        >
          <MyResponsiveLine
            timeline={props.countryData?.timeline}
            xAxisValue="date"
            yAxisValue="recovered"
          />
        </div>
      </GridBox>

      <GridBox id="map" isLoading={props.isLoading}>
        <div style={{ padding: "10px" }}>
          <Map
            lat={props.countryData?.coordinates.latitude}
            lng={props.countryData?.coordinates.longitude}
            allCoutries={props.allCountriesData}
          />
        </div>
      </GridBox>

      <GridBox id="twitterfeed" isLoading={props.isLoading}>
      
           
           <TwitterEmbed/>
       
      </GridBox>

      <GridBox id="news" isLoading={props.isLoading}>
        <div style={{ padding: "10px" }}>
          
        <NewsData country='pakistan'/>
        </div>
      </GridBox>

      <GridBox id="table" isLoading={props.isLoading}>
        <div
          style={{
            position: "absolute",
            top: "0px",
            bottom: "0px",
            left: "0px",
            right: "0px",
            overflow: "auto",
          }}
        >
          <CountryTable data={props.allCountriesData?.data} />
        </div>
      </GridBox>
    </div>
  );
}
