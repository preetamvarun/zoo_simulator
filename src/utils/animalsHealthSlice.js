import {createSlice} from "@reduxjs/toolkit";


const animalsHealthSlice =  createSlice({
    name : "animalHealthSlice",
    /* Initially, healths of each animal will be at 100% */
    initialState : {
        animalsHealth : [[100,100,100,100,100], [100,100,100,100,100], [100,100,100,100,100]],
    },
    reducers : {
        updateAnimalsHealth : (state, action) => {
            /* we will get an updated 2D array from action.payload */
            state.animalsHealth = action.payload
        }
    }
});

export const {updateAnimalsHealth} = animalsHealthSlice.actions;

export default animalsHealthSlice.reducer;