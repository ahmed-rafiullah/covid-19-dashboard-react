import { ResponsiveLine } from '@nivo/line'
import React from 'react'
import { Country, Timeline } from '../../DataInterfaces/allCountriesDataInterface'
import dataFormatted from '../../utils/lineChartDataFormatter'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
interface LineChartProps {
    timeline: Timeline[] | null | undefined
    xAxisValue: string,
    yAxisValue:string
}
 function LineChart(props: LineChartProps){
    
    const data = {
       xAxisValue: props.xAxisValue,
       yAxisValue: props.yAxisValue,
       data: props.timeline
    }
    const formattedData = dataFormatted(data)
    console.log(formattedData)
    if(!formattedData){
        return <div></div>
    } else {
        return (
            <ResponsiveLine
            
                data={formattedData}
                yScale={{ type: 'linear'}}
                axisTop={null}
                axisRight={null}
                axisBottom={null}
                axisLeft={null}
                enablePoints={false}
                enableGridX={false}
                enableGridY={false}
                enableArea={true}
                xScale={{
                    type: 'time',
                    format: '%Y-%m-%d',
                    precision: 'day',
                }}
                colors={{ scheme: 'paired' }}
                isInteractive={false}
                curve='natural'
                animate={true}
                motionStiffness={95}
                motionDamping={16}
                legends={[]}
            />
        )
    
    }

   

    // return <div>1</div>

   
 } 

export default LineChart