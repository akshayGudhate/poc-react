import './NewExpense.css';                      // specific component css
import React, { useState } from 'react';        // react package
// components
import ExpenseForm from './Form/ExpenseForm';   // component - form


////////////////////////
//    new expenses    //
////////////////////////

const NewExpense = (props) => {
    // state
    const [isEditing, setIsEditing] = useState(false);

    // handlers
    const saveExpenseDataHandler = (newExpenseData) => {
        props.onNewExpenseData({
            ...newExpenseData,
            id: Math.random().toString()
        });
        setIsEditing(false);
    };
    const startEditingHandler = () => setIsEditing(true);
    const stopEditingHandler = () => setIsEditing(false);

    // component
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}> Add Expense </button>}

            {
                isEditing && <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopEditingHandler}
                />
            }
        </div>
    );
};



export default NewExpense;