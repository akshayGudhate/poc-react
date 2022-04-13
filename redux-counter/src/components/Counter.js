import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter-slice';


const Counter = () => {
	// const dispatch = useDispatch();
	// const counter = useSelector(state => state.counter);
	// const showCounter = useSelector(state => state.showCounter);

	////////////////////////////////
	//     using normal redux     //
	////////////////////////////////

	// // increment
	// const incrementHandler = () => {
	// 	dispatch({ type: 'INCREMENT' });
	// };
	// // increase by
	// const increaseHandler = () => {
	// 	dispatch({ type: 'INCREASE', amount: 5 });
	// };
	// // decrement
	// const decrementHandler = () => {
	// 	dispatch({ type: 'DECREMENT' });
	// };
	// const toggleCounterHandler = () => {
	// 	dispatch({ type: 'TOGGLE' });
	// };


	////////////////////////////////
	//    using reduxjs/toolkit   //
	////////////////////////////////

	const dispatch = useDispatch();
	const counter = useSelector(state => state.counter.counter);
	const showCounter = useSelector(state => state.counter.showCounter);

	// increment
	const incrementHandler = () => {
		dispatch(counterActions.increment());
	};
	// increase by
	const increaseHandler = () => {
		dispatch(counterActions.increase(5));
	};
	// decrement
	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	};
	const toggleCounterHandler = () => {
		dispatch(counterActions.toggleCounter());
	};


	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{showCounter && <div className={classes.value}>{counter}</div>}
			{!showCounter && <div className={classes.value}>-- HIDDEN COUNTER --</div>}
			<div>
				<button onClick={incrementHandler}>INCREMENT</button>
				<button onClick={increaseHandler}>INCREASE BY 5</button>
				<button onClick={decrementHandler}>DECREMENT</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};



export default Counter;