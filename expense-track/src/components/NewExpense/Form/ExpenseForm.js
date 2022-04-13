import './ExpenseForm.css';     // specific component css
import React, { useState } from 'react';      // react package


////////////////////////
//    expense form    //
////////////////////////

const ExpenseForm = (props) => {

    ////////////////////////////
    //  alternative approach  //
    ////////////////////////////

    // // state
    // const [enteredInput, setEnteredInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    // // handlers
    // const titleChangeHandler = event => {
    //     setEnteredInput((prevState) => {
    //         return { ...prevState, enteredTitle: event.target.value };
    //     });
    // };
    // const amountChangeHandler = event => {
    //     setEnteredInput((prevState) => {
    //         return { ...prevState, enteredAmount: event.target.value };
    //     });
    // };
    // const dateChangeHandler = event => {
    //     setEnteredInput((prevState) => {
    //         return { ...prevState, enteredDate: event.target.value };
    //     });
    // };
    // const submitHandler = event => {
    //     event.preventDefault();

    //     const newExpenseData = {
    //         title: enteredInput.enteredTitle,
    //         amount: enteredInput.enteredAmount,
    //         date: new Date(enteredInput.enteredDate)
    //     };

    //     props.onSaveExpenseData(newExpenseData);

    //     // clear previous data
    //     setEnteredInput({
    //         enteredTitle: '',
    //         enteredAmount: '',
    //         enteredDate: ''
    //     });
    // };


    ////////////////////////////
    //   preferred approach   //
    ////////////////////////////

    // state
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // handlers
    const titleChangeHandler = event => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = event => {
        setEnteredDate(event.target.value);
    };
    const submitHandler = event => {
        event.preventDefault();

        const newExpenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(newExpenseData);

        // clear previous data
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    // component
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type="number"
                        min="1"
                        step="1"
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type="date"
                        min="2022-01-01"
                        max="2024-12-31"
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}> Cancel </button>
                <button type='submit'> Submit </button>
            </div>
        </form>
    );
};



export default ExpenseForm;