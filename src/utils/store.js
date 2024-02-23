import {configureStore} from "@reduxjs/toolkit";

import animalsHealthSlice from "./animalsHealthSlice";
import elephantStatusSlice from "./elephantStatusSlice";
import monkeyStatusSlice from "./monkeyStatusSlice";
import giraffeStatusSlice from "./giraffeStatusSlice";


export const store = configureStore({
    reducer : {
        animalsHealth : animalsHealthSlice,
        elephantStatus : elephantStatusSlice,
        monkeyStatus : monkeyStatusSlice,
        giraffeStatus : giraffeStatusSlice
    }
});