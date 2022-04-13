import "./Chart.css";               // specific component css
import React from 'react';          // react package
// components
import ChartBar from "./ChartBar";  // component - chart bar


///////////////////////
//       chart       //
///////////////////////

const Chart = (props) => {
    // component specific logic
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    // component
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
};



export default Chart;