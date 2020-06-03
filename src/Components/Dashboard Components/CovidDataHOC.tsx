import React from "react";
import { delay } from "../../utils/artificialDelay";
import { captureException } from "@sentry/browser";
import { AllCountriesDataInterface, Country } from "../../DataInterfaces/allCountriesDataInterface";
import { GlobalTimelineInterface } from "../../DataInterfaces/globalTimelineInterface";

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


  private readonly storageKey = 'covid'
  state = {

    globalTimeline: null,
    isLoading: true,
    error: null,
    countryData: null,
    allCountriesData: null,

  }

  componentDidMount() {
    this.setState({
      error: null,
      isLoading: true,
    });

    if(!window.sessionStorage.hasOwnProperty('covid')) {
      Promise.all([
        fetch(`https://corona-api.com/countries?include=timeline`).then((res) =>
          res.json()
        ),
        fetch(`https://corona-api.com/timeline`).then((res) => res.json()),
      ])
        .finally(() => delay(400))
        .then((res) => {
          const allCountries: AllCountriesDataInterface = res[0]
  
         
          //TODO: Fix countries having no lat or long ?
          const hmm = allCountries.data.filter(x => {
            return x.coordinates.latitude === 0 && x.coordinates.longitude === 0
           })
           console.log(hmm)
  
         
          const validCountries = allCountries.data.filter(x => {
            return x.coordinates.latitude !== 0 && x.coordinates.longitude !== 0
           })
  
          const countryData = validCountries.find(x => {
              return x.code === this.props.startingCountry
          })
  
          allCountries.data = validCountries
          
  
          this.setState(prev => {
  
           
  
            const state =  {
              allCountriesData: allCountries,
              globalTimeline: res[1],
              countryData: countryData,
              isLoading: false,
            }
  
            window.sessionStorage.setItem(this.storageKey, JSON.stringify(state))
  
            return state
           
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
    } else {
      this.setState({isLoading: true, error: null})
      console.log('isloading called on cache hit')
      
  
   
      // the synchronous call to parse and getItem blocks the component from rendering
      // useEffect may help here since the effects are scheduled after rendering i guess
      delay(100).then(() => {
        console.log('waiting')
         //@ts-ignore
        const state: COVIDDataState  =  JSON.parse(window.sessionStorage.getItem(this.storageKey))
        this.setState(state)
      })

    }
      

   
  }

  changeCountry = (event) => {
    console.log('changed event')
    const { value: currentCountry } = event.target;
    // const country = this.state.summary.data.find(x => x.code)

  
    this.setState(prev => {
      // find country from array
      var t0 = performance.now()
      const countryData = prev.allCountriesData?.data.find(
        x => x.name === currentCountry
      );

      var t1 = performance.now()
      // split and set current country

      console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
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

        const validCountries = allCountries.data.filter(x => {
          return x.coordinates.latitude !== 0 && x.coordinates.longitude !== 0
         })

        const countryData = validCountries.find(x => {
            return x.code === this.props.startingCountry
        })

        allCountries.data = validCountries

        

        this.setState({
            
          allCountriesData: allCountries ,
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

      this.props.children(data)
    );
  }
}
