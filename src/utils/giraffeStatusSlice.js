import {createSlice} from "@reduxjs/toolkit";

/* This slice keeps track of status of every giraffe */


const giraffeStatusSlice = createSlice({
    
    name : "giraffeStatusSlice",

    /* Initially, all the giraffe will be healthy. */
    initialState : {
        giraffesStatus : [{status : "Healthy"},{status : "Healthy"},
        {status : "Healthy"},{status : "Healthy"},{status : "Healthy"}]
    },

    reducers : {
        setGiraffeStatus : (state, action) => {

            /* Get the health of the current giraffe */
            const {health, index} = action.payload;

            /* update the status of the giraffe only if it is alive */
            if(state.giraffesStatus[index].status !== "Dead")
            state.giraffesStatus[index].status = health < 30 ?  "Dead" : "Healthy";
        }
    }

})

export const {setGiraffeStatus} = giraffeStatusSlice.actions;

export default giraffeStatusSlice.reducer;