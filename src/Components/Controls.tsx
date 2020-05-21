import React, { ReactNode } from "react";
import countryCodeToEmoji from "../utils/countryCodeToEmoji";
import { AllCountriesDataInterface, Country } from "../DataInterfaces/allCountriesDataInterface";
import { COVIDDataCallback } from "./CovidData";



// interface ControlFormProps {
 
//   isLoading: boolean;
//   changeCountry: any
//   allCountriesData: AllCountriesDataInterface | null | undefined
//   countryData: Country | null | undefined
  


// }

// create type from existing type !
type ControlFormProps = Pick<COVIDDataCallback, 'changeCountry' | 'isLoading' | 'allCountriesData' | 'countryData'>

function ControlForm(props: ControlFormProps) {
  if (props.isLoading) {
    return (
      <div className="controls">
       
        <span>Updated {new Date().toDateString()}</span>
        <h3>Realtime stats for</h3>
        <form>
          <select>
            <option>Loading ...</option>
          </select>
        </form>
      </div>
    );
  }

  const countries = props.allCountriesData?.data.map((country) => [
    country.code,
    country.name,
  ]);

  return (
    <div className="controls">
      <span>Updated {new Date().toDateString()}</span>
      <h3>Realtime stats for</h3>
      <form>
        <select
          name="currentCountry"
          value={props.countryData?.name}
          onChange={props.changeCountry}
        >
          <option value={"GLOBAL"}> 🌎 &nbsp; Global</option>
          {countries?.map(([countryCode, countryName]) => {
            return (
              <option key={countryCode} value={countryName}>
                {" "}
                {countryCodeToEmoji(countryCode)} &nbsp; {countryName}
              </option>
            );
          })}
        </select>
      </form>
    </div>
  );
}

export default React.memo(ControlForm);
