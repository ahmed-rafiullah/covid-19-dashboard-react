import React from "react";
import Dashboard from "./Dashboard";
import ControlForm from "./Controls";
import COVIDData, { COVIDDataCallback } from "./CovidData";

function RenderMain(props: COVIDDataCallback) {
  if (!props.error) {
    return (
      <>
        <ControlForm
          isLoading={props.isLoading}
          allCountriesData={props.allCountriesData}
          changeCountry={props.changeCountry}
          countryData={props.countryData}
        />
        <Dashboard
          allCountriesData={props.allCountriesData}
          isLoading={props.isLoading}
          globalTimeline={props.globalTimeline}
          countryData={props.countryData}
        />
      </>
    );
  } else {
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h4>An Error Occurred</h4>
          <p>Please Try Again Later</p>
          <p style={{ width: "240px" }}>
            But don't worry it has been automatically reported
          </p>
          <br></br>
          <button
            onClick={props.retry}
            style={{
              borderRadius: "2px",
              color: "white",
              background: "#1f78b4",
              outline: "none",
              border: "0px",
              fontSize: "15px",
              height: "40px",
              display: "block",
              width: "200px",
            }}
          >
            Retry
          </button>
        </div>
      </>
    );
  }
}

export default function Main(props) {
  return (
    <main>
      <div className="main_content">
        <COVIDData startingCountry="PK">{RenderMain}</COVIDData>
      </div>
    </main>
  );
}
