import './ExpenseFilter.css';   // specific component css
import React from 'react';      // react package


////////////////////////
//   expense filter   //
////////////////////////

const ExpenseFilter = (props) => {
    // handler
    const filterChangeHandler = event => {
        props.onFilterChange(event.target.value);
    };

    // component
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by Year</label>
                <select value={props.selectedYear} onChange={filterChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                </select>
            </div>
        </div>
    );
};



export default ExpenseFilter;