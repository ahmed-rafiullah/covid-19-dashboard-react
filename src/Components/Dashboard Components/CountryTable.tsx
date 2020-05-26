import React from "react";
import { AllCountriesDataInterface } from "../../DataInterfaces/allCountriesDataInterface";
import countryCodeEmoji from "../../utils/countryCodeToEmoji";
import truncate from "lodash.truncate";

type CountryTableProps = Partial<Pick<AllCountriesDataInterface, "data">>;

export function CountryTable(props: CountryTableProps) {
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
            <tr>
              <td>
                {countryCodeEmoji(x.code)} &nbsp;
                {truncate(x.name, {
                  length: 15,
                })}
              </td>
              <td>{x.latest_data.confirmed}</td>
              <td>{x.latest_data.recovered}</td>
              <td>{x.latest_data.deaths}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
