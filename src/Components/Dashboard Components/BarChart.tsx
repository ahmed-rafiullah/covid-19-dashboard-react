import { ResponsiveBar } from "@nivo/bar";
import React from "react";
import dataFormatted from "../../utils/lineChartDataFormatter";


function BarChart(props) {
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
        <ResponsiveBar
          data={formattedData}
          axisBottom={{
            orient: "top",
            tickSize: 0,
            tickPadding: 0,
            tickRotation: 0,
            legend: "days",
            legendOffset: 25,
            legendPosition: "middle",
  
          }}
          margin={{ top: 20, right: 30, bottom: 40, left: 60 }}
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
    }
  
    // return <div>1</div>
  }
  
  export default BarChart;