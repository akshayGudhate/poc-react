import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialAuthState = { isAuthenticated: false };


// state slice auth
const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            // here we are mutating state but redux-toolkit internally makes copy and give the new state
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});



// action identifier
export const authActions = authSlice.actions;
export default authSlice.reducer;