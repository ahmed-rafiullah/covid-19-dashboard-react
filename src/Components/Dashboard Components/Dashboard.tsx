import React from "react";
import Map from "./Map";
import GridBox from "./GridBox";
import MyResponsiveLine from "./LineChart";
import data from "./tempdata";
import { UseCovidDataReturns } from "./CovidDataHOC";
import { CountryTable } from "./CountryTable";
import TwitterEmbed from "./TwitterEmbed";

import { HM } from "./LineAndBarChart";
import { CountryTimeLineHOC } from "./CountryTimeLineHOC";

type DashboardProps = Pick<
  UseCovidDataReturns,
  "allCountriesData" | "isLoading" | "countryData" | "globalTimeline"
>;

export default function Dashboard(props: DashboardProps) {


  return (
    <div className="grid-container">
      <GridBox id="count_total_cases" isLoading={props.isLoading}>
        <div className="grid_box_inner_content">
          <p>Total Cases</p>
          <h3>{props.countryData?.cases.toLocaleString()}</h3>
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
          {/* <MyResponsiveLine
            simple={true}
            timeline={props.countryData?.timeline}
            xAxisValue="date"
            yAxisValue="confirmed"
          /> */}
        </div>
      </GridBox>

      <GridBox id="count_total_deaths" isLoading={props.isLoading}>
        <div className="grid_box_inner_content">
          <p>Total Deaths</p>
          <h3>{props.countryData?.deaths.toLocaleString()}</h3>
        </div>
      </GridBox>

      <GridBox id="count_total_recoveries" isLoading={props.isLoading}>
        <div className="grid_box_inner_content">
          <p>Total Recovered</p>
          <h3>{props.countryData?.recovered.toLocaleString()}</h3>
        </div>
      </GridBox>

      <CountryTimeLineHOC
        countryCode={props.countryData?.countryInfo.iso2 ?? "PK"}
      >
        {({ country, error, isLoading }) => {
          if (error) {
            return (
              <div
                style={{
                  textAlign: "center",
                  padding: "10px",
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  justifyContent: "center",
                }}
              >
                <span>Error</span>
              </div>
            );
          }

          return (
            <GridBox id="cases_today" isLoading={props.isLoading}>
              <div className="grid_box_inner_content">
                <p>Cases Today</p>
                <h3>
                  {country?.timeline[0]?.new_confirmed.toLocaleString() ?? "N/A"}
                </h3>
              </div>
            </GridBox>
          );
        }}
      </CountryTimeLineHOC>

      <CountryTimeLineHOC
        countryCode={props.countryData?.countryInfo.iso2 ?? "PK"}
      >
        {({ country, error, isLoading }) => {
          if (error) {
            return (
              <div
                style={{
                  textAlign: "center",
                  padding: "10px",
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  justifyContent: "center",
                }}
              >
                <span>Error</span>
              </div>
            );
          }

          return (
            <GridBox id="cases_recovered" isLoading={props.isLoading}>
              <div className="grid_box_inner_content">
                <p>Cases Recovered</p>
                <h3>
                  {country?.timeline[0]?.new_recovered.toLocaleString() ??
                    "N/A"}
                </h3>
              </div>
            </GridBox>
          );
        }}
      </CountryTimeLineHOC>

    
      <CountryTimeLineHOC
        countryCode={props.countryData?.countryInfo.iso2 ?? "PK"}
      >
        {({ country, error, isLoading }) => {
          if (error) {
            return (
              <div
                style={{
                  textAlign: "center",
                  padding: "10px",
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  justifyContent: "center",
                }}
              >
                <span>Error</span>
              </div>
            );
          }
          

          return (
            <GridBox id="graph_fatality" isLoading={props.isLoading}>
        <div className="grid_box_inner_content" style={{ zIndex: 1 }}>
          <p>Fatality Rate</p>
          <h3>
            {(
              (props.countryData?.deaths ?? 1) /
              (props.countryData?.cases ?? 1)
            ).toFixed(3) + "%"}
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

          <HM
            simple={true}
            xAxisValue="date"
            yAxisValue="deaths"
            timeline={country?.timeline}
          />
        </div>
      </GridBox>
          );
        }}
      </CountryTimeLineHOC>


      <CountryTimeLineHOC
        countryCode={props.countryData?.countryInfo.iso2 ?? "PK"}
      >
        {({ country, error, isLoading }) => {
          if (error) {
            return (
              <div
                style={{
                  textAlign: "center",
                  padding: "10px",
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  justifyContent: "center",
                }}
              >
                <span>Error</span>
              </div>
            );
          }

          return (
            <GridBox id="graph_recovery" isLoading={props.isLoading}>
            <div className="grid_box_inner_content" style={{ zIndex: 1 }}>
              <p>Recovery Rate</p>
              <h3>
                {/* @ts-ignore */}
                {(
                  (props.countryData?.recovered ?? 1) / (props.countryData?.cases ?? 1)
                ).toFixed(3) + "%"}
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
              {/* <MyResponsiveLine
                simple={true}
                timeline={props.countryData?.timeline}
                xAxisValue="date"
                yAxisValue="recovered"
              /> */}
    
              <HM
                simple={true}
                xAxisValue="date"
                yAxisValue="recovered"
                timeline={country?.timeline ?? []}
              />
            </div>
          </GridBox>
          );
        }}
      </CountryTimeLineHOC>
     

     

      <GridBox id="map" isLoading={props.isLoading}>
        <div style={{ padding: "10px" }}>
          <Map
            lat={props.countryData?.countryInfo.lat}
            lng={props.countryData?.countryInfo.long}
            allCoutries={props.allCountriesData}
          />
        </div>
      </GridBox>

      <GridBox id="twitterfeed" isLoading={props.isLoading}>
        <TwitterEmbed />
      </GridBox>

      <GridBox id="global_graph_recovery" isLoading={props.isLoading}>
        <div className="graph_heading">Global Recoveries Over Time</div>

        <div className="graph_container">
          <div
            style={{
              position: "absolute",
              top: "12px",
              bottom: "12px",
              left: "12px",
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
        </div>
      </GridBox>

      <GridBox id="global_graph_fatality" isLoading={props.isLoading}>
        <div className="graph_heading">Global Fatalities Over Time</div>
        <div className="graph_container">
          <div
            style={{
              position: "absolute",
              top: "12px",
              bottom: "12px",
              left: "12px",
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
        </div>
      </GridBox>

      <GridBox id="global_graph_cases" isLoading={props.isLoading}>
        <div className="graph_heading">Global New Cases Over Time</div>
        <div className="graph_container">
          <div
            style={{
              position: "absolute",
              top: "12px",
              bottom: "12px",
              left: "12px",
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
        </div>
      </GridBox>

      {/*  */}

      <CountryTimeLineHOC
        countryCode={props.countryData?.countryInfo.iso2 ?? "PK"}
      >
        {({ country, error, isLoading }) => {
          if (error) {
            return (
              <div
                style={{
                  textAlign: "center",
                  padding: "10px",
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  justifyContent: "center",
                }}
              >
                <span>Error</span>
              </div>
            );
          }

          return (
            <GridBox id="local_graph_recovery" isLoading={props.isLoading}>
            <div className="graph_heading">
              Recovery Over Time for {props.countryData?.country ?? "N/A"}{" "}
            </div>
    
            <div className="graph_container">
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  bottom: "12px",
                  left: "12px",
                  right: "12px",
                }}
              >
         
                <HM
                xAxisValue="date"
                yAxisValue="recovered"
                say="recovered"
                timeline={country?.timeline ?? []}
              />
              </div>
            </div>
          </GridBox>
          );
        }}
      </CountryTimeLineHOC>
      
      

      <CountryTimeLineHOC
        countryCode={props.countryData?.countryInfo.iso2 ?? "PK"}
      >
        {({ country, error, isLoading }) => {
          if (error) {
            return (
              <div
                style={{
                  textAlign: "center",
                  padding: "10px",
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  justifyContent: "center",
                }}
              >
                <span>Error</span>
              </div>
            );
          }

          return (
            <GridBox id="local_graph_fatality" isLoading={props.isLoading}>
        <div className="graph_heading">
          Fatalities Over Time for {props.countryData?.country ?? "N/A"}{" "}
        </div>
        <div className="graph_container">
          <div
            style={{
              position: "absolute",
              top: "12px",
              bottom: "12px",
              left: "12px",
              right: "12px",
            }}
          >
  
            <HM
            say="dead"
            xAxisValue="date"
            yAxisValue="deaths"
            timeline={country?.timeline ?? []}
          />
          </div>
        </div>
      </GridBox>
          );
        }}
      </CountryTimeLineHOC>
     

      <CountryTimeLineHOC
        countryCode={props.countryData?.countryInfo.iso2 ?? "PK"}
      >
        {({ country, error, isLoading }) => {
          if (error) {
            return (
              <div
                style={{
                  textAlign: "center",
                  padding: "10px",
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  justifyContent: "center",
                }}
              >
                <span>Error</span>
              </div>
            );
          }

          return (
            <GridBox id="local_graph_cases" isLoading={props.isLoading}>
            <div className="graph_heading">
              New Cases Over Time for {props.countryData?.country ?? "N/A"}{" "}
            </div>
            <div className="graph_container">
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  bottom: "12px",
                  left: "12px",
                  right: "12px",
                }}
              >
      
    
                <HM
                  say="new cases"
                  xAxisValue="date"
                  yAxisValue="new_confirmed"
                  timeline={country?.timeline ?? []}
                />
              </div>
            </div>
          </GridBox>
          );
        }}
      </CountryTimeLineHOC>
     

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
          <CountryTable data={props.allCountriesData?.data ?? []} />
        </div>
      </GridBox>
    </div>
  );
}
