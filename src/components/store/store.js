import { configureStore } from "@reduxjs/toolkit";
import textSlice from "../slice/textSlice";

export const Store = configureStore({
    reducer :{
        text : textSlice
    }
})

