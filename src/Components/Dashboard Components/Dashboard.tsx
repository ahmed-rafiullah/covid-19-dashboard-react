import React from "react";
import Map from "./Map";
import GridBox from "./GridBox";
import MyResponsiveLine from "./LineChart";
import data from "./tempdata";
import { COVIDDataCallback } from "./CovidData";
import { CountryTable } from "./CountryTable";
import TwitterEmbed from "./TwitterEmbed";

import { HM } from "./LineAndBarChart";

type DashboardProps = Pick<
  COVIDDataCallback,
  "isLoading" | "countryData" | "globalTimeline" | "allCountriesData"
>;

const graphOptions = {
  enableAxis: true,
  isInteractive: true,
  enableGrid: true,
  enablePoints: false,
};

export default function Dashboard(props: DashboardProps) {
  console.log(props.isLoading)
  return (
    <div className="grid-container">
      <GridBox id="count_total_cases" isLoading={props.isLoading}>
        <div className="grid_box_inner_content">
          <p>Total Cases</p>
          <h3>{props.countryData?.latest_data.confirmed}</h3>
        </div>
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            bottom: "0px",
            right: "0px",
          }}
        >
          <MyResponsiveLine
            simple={true}
            timeline={props.countryData?.timeline}
            xAxisValue="date"
            yAxisValue="confirmed"
          />

          {/* <HM
            simple={true}
            xAxisValue="date"
            yAxisValue="confirmed"
            timeline={props.countryData?.timeline}
          /> */}
        </div>
      </GridBox>

      <GridBox id="count_total_deaths" isLoading={props.isLoading}>
        <div className="grid_box_inner_content">
          <p>Total Deaths</p>
          <h3>{props.countryData?.latest_data.deaths}</h3>
        </div>
      </GridBox>

      <GridBox id="count_total_recoveries" isLoading={props.isLoading}>
        <div className="grid_box_inner_content">
          <p>Total Recovered</p>
          <h3>{props.countryData?.latest_data.recovered}</h3>
        </div>
      </GridBox>

      <GridBox id="cases_today" isLoading={props.isLoading}>
        <div className="grid_box_inner_content">
          <p>Cases Today</p>
          <h3>{props.countryData?.timeline[0]?.new_confirmed ?? "N/A"}</h3>
        </div>
      </GridBox>

      <GridBox id="cases_recovered" isLoading={props.isLoading}>
        <div className="grid_box_inner_content">
          <p>Cases Recovered</p>
          <h3>{props.countryData?.timeline[0]?.new_recovered ?? "N/A"}</h3>
        </div>
      </GridBox>

      <GridBox id="graph_fatality" isLoading={props.isLoading}>
        <div className="grid_box_inner_content" style={{ zIndex: 1 }}>
          <p>Fatality Rate</p>
          <h3>
            {props.countryData?.latest_data.calculated.death_rate?.toFixed(2) +
              "%"}
          </h3>
        </div>
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            bottom: "0px",
            right: "0px",
          }}
        >
          <MyResponsiveLine
            simple={true}
            timeline={props.countryData?.timeline}
            xAxisValue="date"
            yAxisValue="deaths"
          />
          {/* <HM
            simple={true}
            xAxisValue="date"
            yAxisValue="deaths"
            timeline={props.countryData?.timeline}
          /> */}
        </div>
      </GridBox>

      <GridBox id="graph_recovery" isLoading={props.isLoading}>
        <div className="grid_box_inner_content" style={{ zIndex: 1 }}>
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
            top: "0px",
            left: "0px",
            bottom: "0px",
            right: "0px",
          }}
        >
          <MyResponsiveLine
            simple={true}
            timeline={props.countryData?.timeline}
            xAxisValue="date"
            yAxisValue="recovered"
          />

          {/* <HM
            simple={true}
            xAxisValue="date"
            yAxisValue="recovered"
            timeline={props.countryData?.timeline}
          /> */}
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
        <TwitterEmbed />
      </GridBox>

      <GridBox id="global_graph_recovery" isLoading={props.isLoading}>
        <div
          style={{
            height: "40px",
            padding: "20px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Global Recoveries Over Time
        </div>
        <div
          style={{
            position: "absolute",
            top: "66px",
            left: "20px",
            bottom: "10px",

            right: "12px",
          }}
        >
          {/* <MyResponsiveLine
            timeline={props.globalTimeline?.data}
            xAxisValue="date"
            yAxisValue="recovered"
            options={graphOptions}
          /> */}

          <HM
            say="recovered"
            xAxisValue="date"
            yAxisValue="recovered"
            timeline={props.globalTimeline?.data}
          />
        </div>
      </GridBox>

      <GridBox id="global_graph_fatality" isLoading={props.isLoading}>
        <div
          style={{
            height: "40px",
            padding: "20px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Global Fatalities Over Time
        </div>
        <div
          style={{
            position: "absolute",
            top: "66px",
            left: "20px",
            bottom: "10px",

            right: "12px",
          }}
        >
          <HM
            say="dead"
            xAxisValue="date"
            yAxisValue="deaths"
            timeline={props.globalTimeline?.data}
          />
        </div>
      </GridBox>

      <GridBox id="global_graph_cases" isLoading={props.isLoading}>
        <div
          style={{
            height: "40px",
            padding: "20px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Global New Cases Over Time
        </div>
        <div
          style={{
            position: "absolute",
            top: "66px",
            left: "20px",
            bottom: "10px",
            right: "12px",
          }}
        >
          <HM
            say="new cases"
            xAxisValue="date"
            yAxisValue="new_confirmed"
            timeline={props.globalTimeline?.data}
          />
        </div>
      </GridBox>

      {/*  */}
      <GridBox id="local_graph_recovery" isLoading={props.isLoading}>
        <div
          style={{
            height: "40px",
            padding: "20px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Recovery Over Time for {props.countryData?.name ?? "N/A"}{" "}
        </div>
        <div
          style={{
            position: "absolute",
            top: "66px",
            left: "20px",
            bottom: "10px",
            right: "12px",
          }}
        >
          {/* <MyResponsiveLine
            timeline={props.countryData?.timeline}
            xAxisValue="date"
            yAxisValue="recovered"
            options={graphOptions}
          /> */}
          <HM
            xAxisValue="date"
            yAxisValue="recovered"
            say="recovered"
            timeline={props.countryData?.timeline}
          />
        </div>
      </GridBox>

      <GridBox id="local_graph_fatality" isLoading={props.isLoading}>
        <div
          style={{
            height: "40px",
            padding: "20px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Fatalities Over Time for {props.countryData?.name ?? "N/A"}{" "}
        </div>
        <div
          style={{
            position: "absolute",
            top: "66px",
            left: "20px",
            bottom: "10px",
            right: "12px",
          }}
        >
          {/* <MyResponsiveLine
            timeline={props.countryData?.timeline}
            xAxisValue="date"
            yAxisValue="deaths"
            options={graphOptions}
          /> */}

          <HM
            say="dead"
            xAxisValue="date"
            yAxisValue="deaths"
            timeline={props.countryData?.timeline}
          />
        </div>
      </GridBox>

      <GridBox id="local_graph_cases" isLoading={props.isLoading}>
        <div
          style={{
            height: "40px",
            padding: "20px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          New Cases Over Time for {props.countryData?.name ?? "N/A"}{" "}
        </div>
        <div
          style={{
            position: "absolute",
            top: "66px",
            left: "20px",
            bottom: "10px",
            right: "12px",
          }}
        >
          {/* <MyResponsiveLine
            timeline={props.countryData?.timeline}
            xAxisValue="date"
            yAxisValue="confirmed"
            options={graphOptions}
          /> */}

          <HM
            say="new cases"
            xAxisValue="date"
            yAxisValue="new_confirmed"
            timeline={props.countryData?.timeline}
          />
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
