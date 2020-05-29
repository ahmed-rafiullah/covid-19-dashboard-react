import React, { PureComponent, useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Cell,
  ComposedChart,
  Bar,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import dataFormatted from "../../utils/rechartDataFormatter";



function ToolTip(say) {
 return ({ active, payload, label }) => {
    if (active) {
      const date = new Date(payload[0].payload.fulldate);
      const month = date.toLocaleString("default", { month: "short" });
      const dayOfMonth = date.toLocaleString("default", { day: "numeric" });
  
      return (
        <div className="grid_box" style={{ padding: "10px" }}>
          <h4 style={{ margin: "0px" }}>{month + " " + dayOfMonth}</h4>
          <p style={{ margin: "0px" }}>
            {payload[0].payload.value.toLocaleString()} {say ?? ''} 
          </p>
        </div>
      );
    }
  
    return null;
  };
}



export function HM(props) {
  const data = {
    xAxisValue: props.xAxisValue,
    yAxisValue: props.yAxisValue,
    data: props.timeline,
  };

  const formattedData = dataFormatted(data);
  console.log(formattedData);
  console.log("rendered");

  if (props.simple) {
    return (
      <ResponsiveContainer  width="100%" height="100%">
        <AreaChart data={formattedData} width="100%" height="100%"
         margin={{
          top: 0, right: 0, left: 0, bottom: 0,
        }}>
          
          
          <Area
            strokeWidth={2.5}
            isAnimationActive={false}
            animationEasing='linear'
            animationDuration={400}
            type="natural"
            dataKey="value"
            stroke="#A5CFE3"
            fill="rgba(166, 206, 227, 0.2)"
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart data={formattedData}>
        <CartesianGrid vertical={false} stroke="#666666" strokeDasharray="7" />
        <XAxis dataKey="name" tickLine={false} ticks={['Jan','Feb','Mar', 'Apr','May']} />
        <YAxis tickLine={false} />
        <Tooltip
          cursor={true}
          content={ToolTip(props.say)}
          isAnimationActive={false}
        />
        {/* <Area type="monotone" dataKey="value" fill="#8884d8" stroke="#8884d8" /> */}
        <Bar dataKey="value" fill="rgba(166, 206, 227, 0.34)" barGap={3}  isAnimationActive={false} />

        <Line
         isAnimationActive={false}
          activeDot={false}
          dot={false}
          type="linear"
          dataKey="movingAvg"
          stroke="#A5CFE3"
          strokeWidth={2.5}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
