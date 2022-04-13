import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialCounterState = { counter: 0, showCounter: true };

// state slice (act like as a reducer)
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            // here we are mutating state but redux-toolkit internally makes copy and give the new state
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

// action identifier
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;