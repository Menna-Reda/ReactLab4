import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],

}
const wishListSlice = createSlice(
    {
        name: "wishList",
        initialState,
        reducers: {
            toggleWishList: (state,action) =>{
                if(!state.value.includes(action.payload))
                    state.value.push(action.payload);
                else
                state.value = state.value.filter((val)=>{return val != action.payload})

            },
                  
        }
    }
)
export const {
    toggleWishList,
} = wishListSlice.actions;

export default wishListSlice.reducer;