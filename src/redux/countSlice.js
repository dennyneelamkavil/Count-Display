import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

const countSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        countIncrement: (state, action) => {
            
            state.value += 1;
        },
        
        countDecrement : (state, action) => {

            state.value -= 1;
        }
    }

});

export const { countIncrement, countDecrement } = countSlice.actions;

export default countSlice.reducer;