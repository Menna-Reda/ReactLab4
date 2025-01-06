import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter";
import wishListSlice from "./slices/wishList"
export default configureStore({
    reducer: {
        counter: counterSlice,
        favourites: wishListSlice

    }
})