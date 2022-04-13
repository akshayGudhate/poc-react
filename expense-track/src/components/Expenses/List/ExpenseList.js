import './ExpenseList.css';                     // specific component css
import React from 'react';                      // react package
// components
import ExpenseItem from "../Item/ExpenseItem";  // component - item


////////////////////////
//    expense list    //
////////////////////////

const ExpensesList = (props) => {
    // if no data
    if (props.expenses.length === 0) {
        return <h2 className='expenses-list__fallback'>No expenses found!</h2>;
    };

    // if data found
    return (
        <ul className="expenses-list">
            {props.expenses.map(expense => (
                <ExpenseItem
                    key={expense.id}
                    date={expense.date}
                    title={expense.title}
                    amount={expense.amount}
                />
            ))}
        </ul>
    );
};



export default ExpensesList;