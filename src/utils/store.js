import {configureStore} from "@reduxjs/toolkit";

import animalsHealthSlice from "./animalsHealthSlice";
import elephantStatusSlice from "./elephantStatusSlice";


export const store = configureStore({
    reducer : {
        animalsHealth : animalsHealthSlice,
        elephantStatus : elephantStatusSlice
    }
});