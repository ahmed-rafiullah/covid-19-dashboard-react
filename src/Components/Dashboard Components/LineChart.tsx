import { ResponsiveLine } from '@nivo/line'
import React from 'react'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
 const MyResponsiveLine = ({ data /* see data tab */ }) => (
    <ResponsiveLine
    
        data={data}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        enablePoints={false}
        enableGridX={false}
        enableGridY={false}
        enableArea={true}
        colors={{ scheme: 'paired' }}
        isInteractive={false}
        animate={false}
        legends={[]}
    />
)

export default MyResponsiveLine