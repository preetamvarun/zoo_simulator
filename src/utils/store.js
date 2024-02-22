import {configureStore} from "@reduxjs/toolkit";

import animalsHealthSlice from "./animalsHealthSlice";


export const store = configureStore({
    reducer : {
        animalsHealth : animalsHealthSlice 
    }
});