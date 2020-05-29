import { ResponsiveLine } from "@nivo/line";
import React from "react";
import {
  Country,
  Timeline,
} from "../../DataInterfaces/allCountriesDataInterface";
import dataFormatted from "../../utils/lineChartDataFormatter";
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
  const formattedData = dataFormatted(data);
  console.log(formattedData);
  if (!formattedData) {
    return <div></div>;
  } else {
    return (
      <ResponsiveLine
        data={formattedData}
        yScale={{ type: "linear", min: 'auto', max: 'auto' }}
        axisBottom={{
          format: '%m',
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
        enableCrosshair={true}
        enablePoints={props.options?.enablePoints ?? false}
        enableGridX={false}
        enableGridY={props.options?.enableGrid ?? false}
        enableArea={true}
        xScale={{
          type: "time",
          format: "%Y-%m-%d",
          precision: "day",
        }}
        colors={{ scheme: "paired" }}
        isInteractive={props.options?.isInteractive ?? false}
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
        animate={false}
        // motionStiffness={95}
        // motionDamping={16}
        legends={[]}
      />
    );
  }

  // return <div>1</div>
}

export default LineChart;
