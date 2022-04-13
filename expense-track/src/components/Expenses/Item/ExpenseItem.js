import './ExpenseItem.css';                     // specific component css
import React from 'react';                      // react package
// components
import Card from '../../CoreUI/Card';           // component - card
import ExpenseDate from '../Date/ExpenseDate';  // component - date


////////////////////////
//    expense item    //
////////////////////////

const ExpenseItem = (props) => {
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__amount">{props.amount}</div>
                </div>
            </Card>
        </li>
    );
};



export default ExpenseItem;