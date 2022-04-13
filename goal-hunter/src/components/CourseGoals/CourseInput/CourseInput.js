import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

// import styled from 'styled-components';
// const FormControl = styled.div`
//   	margin: 0.5rem 0;

// 	& label {
// 		font-weight: bold;
// 		display: block;
// 		margin-bottom: 0.5rem;
// 	}

// 	& input {
// 		display: block;
// 		width: 100%;
// 		border: 1px solid #ccc;
// 		font: inherit;
// 		line-height: 1.5rem;
// 		padding: 0 0.25rem;
// 	}

// 	& input:focus {
// 		outline: none;
// 		background: #fad0ec;
// 		border-color: #8b005d;
// 	}


// 	&.invalid label {
// 		color: rgb(248, 5, 5);
// 	}

// 	&.invalid input {
// 		border-color: rgb(248, 5, 5);
// 		background: #ffc7c7;
// 	}
// `;


const CourseInput = props => {
	const [enteredValue, setEnteredValue] = useState('');
	const [isValid, setIsValid] = useState(true);

	const goalInputChangeHandler = event => {
		if (event.target.value.trim().length > 0) {
			setIsValid(true);
		};

		setEnteredValue(event.target.value);
	};

	const formSubmitHandler = event => {
		event.preventDefault();

		if (enteredValue.trim().length === 0) {
			setIsValid(false);
			return;
		};

		props.onAddGoal(enteredValue);
	};

	// return (
	// 	<form onSubmit={formSubmitHandler}>
	// 		{/** styling with styled component passing props**/}
	// 		<FormControl invalid={!isValid}>
	// 			<label>Course Goal</label>
	// 			<input type="text" onChange={goalInputChangeHandler} />
	// 		</FormControl>
	// 		<Button type="submit">Add Goal</Button>
	// 	</form>
	// );

	// return (
	// 	<form onSubmit={formSubmitHandler}>
	// 		{/** styling with styled component **/}
	// 		<FormControl className={!isValid && 'invalid'}>
	// 			<label>Course Goal</label>
	// 			<input type="text" onChange={goalInputChangeHandler} />
	// 		</FormControl>
	// 		<Button type="submit">Add Goal</Button>
	// 	</form>
	// );

	// return (
	// 	<form onSubmit={formSubmitHandler}>
	// 		{/** dynamic styling example **/}
	// 		<div className={`form-control ${!isValid ? 'invalid' : ''}`}>
	// 			<label>Course Goal</label>
	// 			<input type="text" onChange={goalInputChangeHandler} />
	// 		</div>
	// 		<Button type="submit">Add Goal</Button>
	// 	</form>
	// );

	return (
		<form onSubmit={formSubmitHandler}>
			{/** styling with react module **/}
			<div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
				<label>Course Goal</label>
				<input type="text" onChange={goalInputChangeHandler} />
			</div>
			<Button type="submit">Add Goal</Button>
		</form>
	);
};



export default CourseInput;