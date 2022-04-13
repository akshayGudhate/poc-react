import './index.css';               // specific component css
import React from 'react';          // react package
import ReactDOM from 'react-dom';   // react-dom package
// components
import App from './App';            // component - app


/////////////////////////
//   render main app   //
/////////////////////////

ReactDOM.render(
    <App />,
    document.getElementById('root')
);