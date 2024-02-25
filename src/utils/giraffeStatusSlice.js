import {createSlice} from "@reduxjs/toolkit";

/* This slice keeps track of the status of every giraffe */

const giraffeStatusSlice = createSlice({
    
    name : "giraffeStatusSlice",

    /* Initially, all the giraffes will be healthy. */
    initialState : {
        giraffesStatus : [{status : "HEALTHY"},{status : "HEALTHY"},
        {status : "HEALTHY"},{status : "HEALTHY"},{status : "HEALTHY"}]
    },

    reducers : {
        setGiraffeStatus : (state, action) => {

            /* Get the health of the current giraffe */
            const {health, index} = action.payload;

            /* update the status of the giraffe only if it is alive */
            if(state.giraffesStatus[index].status !== "DEAD")
            state.giraffesStatus[index].status = health < 30 ?  "DEAD" : "HEALTHY";
        }
    }

})

export const {setGiraffeStatus} = giraffeStatusSlice.actions;

export default giraffeStatusSlice.reducer;