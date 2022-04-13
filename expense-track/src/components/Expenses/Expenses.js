import './Expenses.css';                                // specific component css
import React, { useState } from 'react';                // react package
// components
import Card from "../CoreUI/Card";                      // component - card
import ExpenseList from "./List/ExpenseList";           // component - list
import ExpenseFilter from './Filter/ExpenseFilter';     // component - filter
import ExpenseChart from './ExpenseChart';              // component - chart


////////////////////////
//    all expenses    //
////////////////////////

const Expenses = (props) => {
    // state
    const [filteredYear, setFilteredYear] = useState('2022');

    // handle change
    const filterValueChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    // component specific logic
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    // component
    return (
        <Card className="expenses">
            <ExpenseFilter
                selectedYear={filteredYear}
                onFilterChange={filterValueChangeHandler}
            />

            <ExpenseChart expenses={filteredExpenses} />

            <ExpenseList expenses={filteredExpenses} />
        </Card>
    );
};



export default Expenses;