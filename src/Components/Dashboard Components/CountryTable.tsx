import React from "react";
import { AllCountriesDataInterface } from "../../DataInterfaces/allCountriesDataInterface";
import countryCodeEmoji from "../../utils/countryCodeToEmoji";
import truncate from "lodash.truncate";

type CountryTableProps = AllCountriesDataInterface

function CountryTable(props: CountryTableProps) {
  return (
    <table className='table_content'>
      <thead >
        <tr>
          <th>Country</th>
          <th>Cases</th>
          <th>Recoveries</th>
          <th>Fatal</th>
        </tr>
      </thead>
      <tbody>
        {props.data?.map((x) => {
          return (
            <tr key={x.country}>
              <td>
                {countryCodeEmoji(x.countryInfo.iso2)} &nbsp;
                {truncate(x.country, {
                  length: 15,
                })}
              </td>
              <td>{x.cases.toLocaleString()}</td>
              <td>{x.recovered.toLocaleString()}</td>
              <td>{x.deaths.toLocaleString()}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}


const memoizedCountryTable =  React.memo(CountryTable) 

export {
  memoizedCountryTable as CountryTable
}
