import { Country, Timeline } from "../DataInterfaces/allCountriesDataInterface";

export default function format( 
    {
        xAxisValue,
        yAxisValue, 
        data} : {
            xAxisValue: string
            yAxisValue: string
            data: Timeline[] | undefined | null
        }
        
        
    ) {


    if(!data) {
        return null
    }
    
    return data?.map(x => {
        return {
            id:  x[xAxisValue],
            value:  x[yAxisValue]
        }
    }).reverse()

    

   
  
}