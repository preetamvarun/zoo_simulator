import {createSlice} from "@reduxjs/toolkit";


const animalsHealthSlice =  createSlice({
    name : "animalHealthSlice",
    initialState : {
        animalsHealth : [[100,100,100,100,100], [100,100,100,100,100], [100,100,100,100,100]],
    },
    reducers : {
        updateAnimalsHealth : (state, action) => {
            state.animalsHealth = action.payload
        }
    }
});

export const {updateAnimalsHealth} = animalsHealthSlice.actions;

export default animalsHealthSlice.reducer;