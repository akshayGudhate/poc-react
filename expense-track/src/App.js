import React, { useState } from 'react';						// react package
import sampleData from "./sampleData";							// sample data
// components
import Expenses from "./components/Expenses/Expenses";			// component - expense
import NewExpense from './components/NewExpense/NewExpense'; 	// component - new expense


///////////////////////
//    application    //
///////////////////////

const App = () => {
	// state
	const [expenses, setExpenses] = useState(sampleData);

	// handler
	const newExpenseDataHandler = (newExpense) => {
		setExpenses((prevExpenses) => {
			return [newExpense, ...prevExpenses];
		});
	};

	// component
	return (
		<div>
			<NewExpense onNewExpenseData={newExpenseDataHandler} />
			<Expenses items={expenses} />
		</div>
	);
};



export default App;