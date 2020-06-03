import React from "react";
import { AllCountriesDataInterface } from "../../DataInterfaces/allCountriesDataInterface";
import countryCodeEmoji from "../../utils/countryCodeToEmoji";
import truncate from "lodash.truncate";

type CountryTableProps = Partial<Pick<AllCountriesDataInterface, "data">>;

function CountryTable(props: CountryTableProps) {
  console.log('dobara')
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
            <tr key={x.name}>
              <td>
                {countryCodeEmoji(x.code)} &nbsp;
                {truncate(x.name, {
                  length: 15,
                })}
              </td>
              <td>{x.latest_data.confirmed.toLocaleString()}</td>
              <td>{x.latest_data.recovered.toLocaleString()}</td>
              <td>{x.latest_data.deaths.toLocaleString()}</td>
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
