import {createSlice} from "@reduxjs/toolkit";


const animalsHealthSlice =  createSlice({
    name : "animalHealthSlice",
    /* Initially, healths of each animal will be at 100% */
    /* Each 1D array belongs to a particular type of animal */
    initialState : {
        animalsHealth : [[100,100,100,100,100], [100,100,100,100,100], [100,100,100,100,100]],
        areAnimalsFed : false,
    },
    reducers : {
        updateAnimalsHealth : (state, action) => {
            /* we will get an updated 2D array from action.payload. Afterwards, update the state so that
            It will be reflected in the browser */
            state.animalsHealth = action.payload
        },
        updateFeedStatus : (state, action) => {
            /* We will get a boolean value from action.payload */
            state.areAnimalsFed = action.payload
        }
    }
});

export const {updateAnimalsHealth, updateFeedStatus} = animalsHealthSlice.actions;

export default animalsHealthSlice.reducer;