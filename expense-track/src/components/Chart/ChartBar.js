import "./ChartBar.css";    // specific component css
import React from 'react';  // react package


///////////////////////
//     chart bar     //
///////////////////////

const ChartBar = (props) => {
    // component specific logic
    let barFillHeight = '0%';

    if (props.maxValue > 0) {
        barFillHeight = Math.round(props.value / props.maxValue * 100) + '%';
    };

    // component
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{ height: barFillHeight }}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
};



export default ChartBar;