import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./redux/countSlice";

const store = configureStore({
    reducer:{
        count:countSlice

    }
});


export default store;