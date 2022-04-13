import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

// email reducer
const emailReducer = (state, action) => {
	if (action.type === 'USER_INPUT') {
		return { value: action.val, isValid: action.val.includes('@') };
	};

	if (action.type === 'INPUT_BLUR') {
		return { value: state.value, isValid: state.isValid };
	};

	return { value: '', isValid: false };
};

// password reducer
const passwordReducer = (state, action) => {
	if (action.type === 'USER_INPUT') {
		return { value: action.val, isValid: action.val.trim().length > 6 };
	};

	if (action.type === 'INPUT_BLUR') {
		return { value: state.value, isValid: state.isValid };
	};

	return { value: '', isValid: false };
};

const Login = (props) => {
	// const [enteredEmail, setEnteredEmail] = useState('');
	// const [emailIsValid, setEmailIsValid] = useState();
	// const [enteredPassword, setEnteredPassword] = useState('');
	// const [passwordIsValid, setPasswordIsValid] = useState();
	const [formIsValid, setFormIsValid] = useState(false);
	const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null });
	const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: null });

	const { isValid: isValidEmail } = emailState;
	const { isValid: isValidPassword } = passwordState;


	useEffect(() => {
		// check if value is changing
		// as checking validity on every key stoke is a side effect
		// we can handle setFormIs valid via hook useEffect

		// debouncing -->
		// on every key stroke we need not to change to state
		// its additional work to the react so reduce it by debouncing
		// using set timeout of certain time

		const identifier = setTimeout(() => {
			setFormIsValid(isValidEmail && isValidPassword);
		}, 500);

		return () => {
			// it will clean previous data (unmount) the every time side effect occur
			// console.log("clean-up");
			// it will clear the last timer before new execution or (new component mount)
			clearTimeout(identifier);
		};
	}, [isValidEmail, isValidPassword]);



	const emailChangeHandler = (event) => {
		dispatchEmail({ type: 'USER_INPUT', val: event.target.value });

		// setEnteredEmail(event.target.value);

		// setFormIsValid(
		// 	event.target.value.includes('@') && passwordState.isValid
		// );
	};

	const passwordChangeHandler = (event) => {
		dispatchPassword({ type: 'USER_INPUT', val: event.target.value });

		// setEnteredPassword(event.target.value);

		// setFormIsValid(
		// 	event.target.value.trim().length > 6 && emailState.isValid
		// );
	};

	const validateEmailHandler = () => {
		dispatchEmail({ type: 'INPUT_BLUR' });

		// setEmailIsValid(enteredEmail.includes('@'));
	};

	const validatePasswordHandler = () => {
		dispatchPassword({ type: 'INPUT_BLUR' });

		// setPasswordIsValid(enteredPassword.trim().length > 6);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		props.onLogin(emailState.value, passwordState.value);
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<div className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''}`}>
					<label htmlFor="email">E-Mail</label>
					<input
						id="email"
						type="email"
						value={emailState.value}
						onChange={emailChangeHandler}
						onBlur={validateEmailHandler}
					/>
				</div>
				<div className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''}`}>
					<label htmlFor="password">Password</label>
					<input
						id="password"
						type="password"
						value={passwordState.value}
						onChange={passwordChangeHandler}
						onBlur={validatePasswordHandler}
					/>
				</div>
				<div className={classes.actions}>
					<Button type="submit" className={classes.btn} disabled={!formIsValid}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
