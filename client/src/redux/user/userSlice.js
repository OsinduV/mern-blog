import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers : {
        signInStart: (state) => {
            state.loading = true;
            state.error = null; // clear previous(may be) errors
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload; //user data from respose is payload
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
});

export const {signInStart, signInSuccess, signInFailure} = userSlice.actions;

export default userSlice.reducer;