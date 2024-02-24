import {createSlice} from "@reduxjs/toolkit";


const animalsHealthSlice =  createSlice({
    name : "animalHealthSlice",
    /* Initially, healths of each animal will be at 100% */
    initialState : {
        animalsHealth : [[100,100,100,100,100], [100,100,100,100,100], [100,100,100,100,100]],
        areAnimalsFed : false,
    },
    reducers : {
        updateAnimalsHealth : (state, action) => {
            /* we will get an updated 2D array from action.payload */
            state.animalsHealth = action.payload
        },
        updateFeedStatus : (state, action) => {
            state.areAnimalsFed = action.payload
        }
    }
});

export const {updateAnimalsHealth, updateFeedStatus} = animalsHealthSlice.actions;

export default animalsHealthSlice.reducer;