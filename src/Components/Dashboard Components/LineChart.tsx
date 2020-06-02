import { ResponsiveLine } from "@nivo/line";
import React from "react";
import {
  Country,
  Timeline,
} from "../../DataInterfaces/allCountriesDataInterface";
import lineChartDataFormatter from "../../utils/lineChartDataFormatter";
import barChartDataFormatter from "../../utils//barChartDataFormatter";
import { ResponsiveBar } from "@nivo/bar";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
interface LineChartProps {
  timeline: Timeline[] | null | undefined;
  xAxisValue: string;
  yAxisValue: string;
  options?: ChartOptions;
  simple?: boolean
}

interface ChartOptions {
  enablePoints: boolean;
  enableAxis: boolean;
  enableGrid: boolean;
  isInteractive: boolean;
  margin?: Margin
}

interface Margin {
    top: number
    bottom: number
    left: number
    right: number
}

function LineChart(props: LineChartProps) {
  const data = {
    xAxisValue: props.xAxisValue,
    yAxisValue: props.yAxisValue,
    data: props.timeline,
  };
 

  

 
  if (!props.timeline) {
    return <div></div>;
  } 
  
  


  
    if(props.simple){
      const formattedLineData = lineChartDataFormatter(data);
     

      return (
        <ResponsiveLine
      
        //@ts-ignore
        data={formattedLineData}
        yScale={{ type: "linear", min: 'auto', max: 'auto' }}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        axisLeft={null}
        axisRight={null}
        axisBottom={null}
        axisTop={null}
        enableCrosshair={false}
        enablePoints={false}
        enableGridX={false}
        enableGridY={false}
        enableArea={true}
        xScale={{
          type: "time",
          format: "%Y-%m-%d",
          precision: "day",
        }}
        
        colors={{ scheme: "paired" }}
        isInteractive={false}
        curve="natural"
        theme={{
            axis: {
                ticks: {
                    text :{
                        
                        fill: 'white'
                    }

                },
                legend: {
                    text: {
                        fill: 'white'
                    }
                }

            },
            grid: {
                line: {
                    stroke: '#363636'
                }
            }
        }}
        animate={true}
        // motionStiffness={95}
        // motionDamping={16}
        legends={[]}
        />
      )
    }

    const formattedBarData = barChartDataFormatter(data);

    return (
      <ResponsiveBar

        
        //@ts-ignore
        data={formattedBarData}
        enableLabel={false}
        axisBottom={{
          
          format: (value) => { 
            return new Date(value).toLocaleString('default',{month: 'short'})
          },
          orient: "top",
          tickSize: 0,
          tickPadding: 0,
          tickRotation: 0,
          legend: "days",
          legendOffset: 25,
          legendPosition: "middle",

        }}
        
     

       
        
        margin={{ top: 0, right: 0, bottom: 40, left: 60 }}
        // axisLeft={{
        //     orient: 'left',
        //     tickSize: 1000,
        //     tickPadding: 5,
        //     tickRotation: 0,
        //     legend: 'count',
        //     legendOffset: 30,
        //     legendPosition: 'middle'
        // }}
       
        
        enableGridX={false}
        enableGridY={props.options?.enableGrid ?? false}
      
      
        colors={{ scheme: "paired" }}
        isInteractive={props.options?.isInteractive ?? false}
      
        theme={{
            axis: {
                ticks: {
                    text :{
                        
                        fill: 'white'
                    }

                },
                legend: {
                    text: {
                        fill: 'white'
                    }
                }

            },
            grid: {
                line: {
                    stroke: '#363636'
                }
            }
        }}
        animate={false}
        // motionStiffness={95}
        // motionDamping={16}
        legends={[]}
      />
    );
  

  // return <div>1</div>
}

export default LineChart;
