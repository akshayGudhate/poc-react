// import { createStore } from "redux";


// // initial state
// const initialState = { counter: 0, showCounter: true };

// // reducer
// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'INCREMENT') {
//    // here we cant mutate the state as it might leads to bugs
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         };
//     };
//     if (action.type === 'INCREASE') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         };
//     };
//     if (action.type === 'DECREMENT') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         };
//     };
//     if (action.type === 'TOGGLE') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         };
//     };

//     return state;
// };

// // store
// const store = createStore(counterReducer);


// export default store;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import { configureStore, createSlice } from "@reduxjs/toolkit";

// initial states
const initialCounterState = { counter: 0, showCounter: true };
const initialAuthState = { isAuthenticated: false };


// state slice (act like as a reducer)
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        // here we are mutating state but redux-toolkit internally makes copy and give the new state
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        // we can use action also
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

// state slice auth
const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        },
    }
});


// store
// const store = createStore(counterSlice.reducer); // can handle only single reducer

// can handle multiple reducers
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});


// action identifiers
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;