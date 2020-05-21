import React from "react";
import { delay } from "../utils/artificialDelay";
import { captureException } from "@sentry/browser";
import { AllCountriesDataInterface, Country } from "../DataInterfaces/allCountriesDataInterface";
import { GlobalTimelineInterface } from "../DataInterfaces/globalTimelineInterface";

interface COVIDDataProps {
  children: any;
  startingCountry: string
 
}

interface COVIDDataState {
  allCountriesData: AllCountriesDataInterface |  null | undefined
  countryData: Country | null | undefined
  globalTimeline: GlobalTimelineInterface | null | undefined
  isLoading: boolean;
  error: string | null | undefined
}


export interface COVIDDataCallback extends COVIDDataState {
    retry: () => void,
    changeCountry: (event: React.SyntheticEvent) => void
}

export default class COVIDData extends React.Component<
  COVIDDataProps,
  COVIDDataState
> {
  state = {

    globalTimeline: null,
    isLoading: true,
    error: null,
    countryData: null,
    allCountriesData: null,

  }

  componentDidMount() {
    this.setState({
      isLoading: true,
    });

    Promise.all([
      fetch(`https://corona-api.com/countries?include=timeline`).then((res) =>
        res.json()
      ),
      fetch(`https://corona-api.com/timeline`).then((res) => res.json()),
    ])
      .finally(() => delay(500))
      .then((res) => {
        const allCountries: AllCountriesDataInterface = res[0]
        const countryData = allCountries.data.find(x => {
            return x.code === this.props.startingCountry
        })
        
        

        this.setState({
          allCountriesData: allCountries,
          globalTimeline: res[1],
          countryData: countryData,
          isLoading: false,
        });
        
      })
      .catch((err: Error) => {
        console.log(err);
        // sends error to sentry
        captureException(err);
        this.setState({
          error: err.message,
          isLoading: false
        });
      });
  }

  changeCountry = (event) => {
    const { value: currentCountry } = event.target;
    // const country = this.state.summary.data.find(x => x.code)

    this.setState(prev => {
      // find country from array
      const countryData = prev.allCountriesData?.data.find(
        x => x.name === currentCountry
      );

      // split and set current country
      return {

        countryData: countryData,

      };
    });
  };

  retry = () => {
    
    this.setState({
      error: null,
      isLoading: true,
    });

    Promise.all([
      fetch(`https://corona-api.com/countries?include=timeline`).then((res) =>
        res.json()
      ),
      fetch(`https://corona-api.com/timeline`).then((res) => res.json()),
    ])
      .finally(() => delay(800))
      .then((res) => {

        const allCountries: AllCountriesDataInterface = res[0]
        const countryData = allCountries.data.find(x => {
            return x.code === this.props.startingCountry
        })

        this.setState({
            
          allCountriesData: allCountries,
          globalTimeline: res[1],
          countryData: countryData,
          isLoading: false,
        });
      })
      .catch((err: Error) => {
        console.log(err);
        captureException(err);
        this.setState({
          error: err.message,
          isLoading: false
        });
      });
  };

  render() {
    const data: COVIDDataCallback = {
      allCountriesData: this.state.allCountriesData,
      globalTimeline: this.state.globalTimeline,
      isLoading: this.state.isLoading,
      changeCountry: this.changeCountry,
      countryData: this.state.countryData,
      error: this.state.error,
      retry: this.retry,
    };
    return (
      //   <h1>hehe</h1>
      this.props.children(data)
    );
  }
}
