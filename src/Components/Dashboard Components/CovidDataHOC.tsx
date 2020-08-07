import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { delay } from "../../utils/artificialDelay";
import { captureException } from "@sentry/browser";
import {
  AllCountriesDataInterface,
  Country,
} from "../../DataInterfaces/allCountriesDataInterface";
import { NewCountryData } from "../../DataInterfaces/novelGetAllCountries";
import { GlobalTimelineInterface } from "../../DataInterfaces/globalTimelineInterface";

interface COVIDDataProps {
  startingCountry: string;
}

interface COVIDDataState {
  allCountriesData: AllCountriesDataInterface | null | undefined;
  countryData: NewCountryData | null | undefined;
  globalTimeline: GlobalTimelineInterface | null | undefined;
}


export interface UseCovidDataReturns  extends COVIDDataState{
  retry: any
  changeCountry: (event: React.SyntheticEvent) => void;
  isLoading: boolean,
  error: Error | null
}

// export default class COVIDData extends React.Component<
//   COVIDDataProps,
//   COVIDDataState
// > {

//   private readonly storageKey = 'covid'
//   state = {

//     globalTimeline: null,
//     isLoading: true,
//     error: null,
//     countryData: null,
//     allCountriesData: null,

//   }

//   componentDidMount() {
//     this.setState({
//       error: null,
//       isLoading: true,
//     });

//     if(!window.sessionStorage.hasOwnProperty('covid')) {
//       Promise.all([
//         fetch(`https://corona-api.com/countries?include=timeline`).then((res) =>
//           res.json()
//         ),
//         fetch(`https://corona-api.com/timeline`).then((res) => res.json()),
//       ])
//         .finally(() => delay(400))
//         .then((res) => {
//           const allCountries: AllCountriesDataInterface = res[0]

//           //TODO: Fix countries having no lat or long ?

//           const validCountries = allCountries.data.filter(x => {
//             return x.countryInfo.lat !== 0 && x.countryInfo.long !== 0
//            })

//           const countryData = validCountries.find(x => {
//               return x.country === this.props.startingCountry
//           })

//           allCountries.data = validCountries

//           this.setState(prev => {

//             const state =  {
//               allCountriesData: allCountries,
//               globalTimeline: res[1],
//               countryData: countryData,
//               isLoading: false,
//             }

//             window.sessionStorage.setItem(this.storageKey, JSON.stringify(state))

//             return state

//           });

//         })
//         .catch((err: Error) => {
//           console.log(err);
//           // sends error to sentry
//           captureException(err);
//           this.setState({
//             error: err.message,
//             isLoading: false
//           });
//         });
//     } else {
//       this.setState({isLoading: true, error: null})
//       console.log('isloading called on cache hit')

//       // the synchronous call to parse and getItem blocks the component from rendering
//       // useEffect may help here since the effects are scheduled after rendering i guess
//       delay(100).then(() => {
//         console.log('waiting')
//          //@ts-ignore
//         const state: COVIDDataState  =  JSON.parse(window.sessionStorage.getItem(this.storageKey))
//         this.setState(state)
//       })

//     }

//   }

//   changeCountry = (event) => {
//     console.log('changed event')
//     const { value: currentCountry } = event.target;
//     // const country = this.state.summary.data.find(x => x.code)

//     this.setState(prev => {
//       // find country from array
//       var t0 = performance.now()
//       const countryData = prev.allCountriesData?.data.find(
//         x => x.name === currentCountry
//       );

//       var t1 = performance.now()
//       // split and set current country

//       console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
//       return {

//         countryData: countryData,

//       };
//     });

//   };

//   retry = () => {

//     this.setState({
//       error: null,
//       isLoading: true,
//     });

//     Promise.all([
//       fetch(`https://corona-api.com/countries?include=timeline`).then((res) =>
//         res.json()
//       ),
//       fetch(`https://corona-api.com/timeline`).then((res) => res.json()),
//     ])
//       .finally(() => delay(800))
//       .then((res) => {

//         const allCountries: AllCountriesDataInterface = res[0]

//         const validCountries = allCountries.data.filter(x => {
//           return x.coordinates.latitude !== 0 && x.coordinates.longitude !== 0
//          })

//         const countryData = validCountries.find(x => {
//             return x.code === this.props.startingCountry
//         })

//         allCountries.data = validCountries

//         this.setState({

//           allCountriesData: allCountries ,
//           globalTimeline: res[1],
//           countryData: countryData,
//           isLoading: false,
//         });
//       })
//       .catch((err: Error) => {
//         console.log(err);
//         captureException(err);
//         this.setState({
//           error: err.message,
//           isLoading: false
//         });
//       });
//   };

//   render() {
//     const data: COVIDDataCallback = {
//       allCountriesData: this.state.allCountriesData,
//       globalTimeline: this.state.globalTimeline,
//       isLoading: this.state.isLoading,
//       changeCountry: this.changeCountry,
//       countryData: this.state.countryData,
//       error: this.state.error,
//       retry: this.retry,
//     };
//     return (

//       this.props.children(data)
//     );
//   }
// }

function getAllData(query) {
  console.log(query);
  return Promise.all([
    fetch(`https://corona.lmao.ninja/v3/covid-19/countries`).then((res) =>
      res.json()
    ),
    fetch(`https://corona-api.com/timeline`).then((res) => res.json()),
  ]);
}

export default function useCovidData(props: COVIDDataProps): UseCovidDataReturns  {
  const { refetch, isLoading, error, data } = useQuery(
    [
      `https://corona.lmao.ninja/v3/covid-19/countries`,
      `https://corona-api.com/timeline`,
    ],
    getAllData
  );

  const [state, setState] = useState<COVIDDataState>({
    globalTimeline: null,
    countryData: null,
    allCountriesData: null,
  });

  const [startingCountry, setStartingCountry] = useState<string>(
    props.startingCountry
  );

  useEffect(() => {
      if(data && data[0] && data[1]) {
        const allCountries: AllCountriesDataInterface = { data: data[0]}

                const validCountries = allCountries.data.filter(x => {
                  return x.countryInfo.lat !== 0 && x.countryInfo.long !== 0
                 })
        
                const countryData = validCountries.find(x => {
                    return x.country === startingCountry
                })

                const workaroundData =  {
                  data: validCountries
                }

                setState({
                  ...state,
                  allCountriesData: workaroundData ,
                  globalTimeline: data[1],
                  countryData: countryData,
                })
      }

  }, [data]);

  const changeCountry = (event) => {
    const { value: currentCountry} = event.target
    let countryData = state.allCountriesData?.data.find(
      (x) => x.country === currentCountry
    );



    if (countryData)
      setState((prev) => {
        return {
          ...prev,
          countryData: countryData,
        };
      });

      setStartingCountry(currentCountry)
  };

  return {
    allCountriesData: state.allCountriesData,
    globalTimeline: state.globalTimeline,
    isLoading: isLoading,
    changeCountry,
    countryData: state.countryData,
    error: error,
    retry: refetch,
  };
}
