import { counter } from "@fortawesome/fontawesome-svg-core";
import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    value: 0
};
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increaseCounter: (state,action) => {
            state.value = action.payload;
        },
        decreaseCounter:(state, action) => {
            state.value = action.payload;
            if(state.value<0)
                state.value=0;
        }
    }

});
export const {
    increaseCounter,
    decreaseCounter
} = counterSlice.actions;

export default counterSlice.reducer;