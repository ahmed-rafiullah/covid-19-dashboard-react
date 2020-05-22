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
    
    const dataMapped =  data?.map(x => {
        return {
            x:  x[xAxisValue],
            y:  x[yAxisValue]
        }
    })

    

    return [{
        id: '1',
        data: dataMapped
    }]
  
}