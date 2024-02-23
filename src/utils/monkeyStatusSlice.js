import {createSlice} from "@reduxjs/toolkit";

/* This slice keeps track of status of every monkey */


/* Initially, all the monkeys will be healthy. */
const monkeyStatusSlice = createSlice({
    name : "monkeyStatusSlice",
    initialState : {
        monkeysStatus : [{status : "Healthy"},{status : "Healthy"},
        {status : "Healthy"},{status : "Healthy"},{status : "Healthy"}]
    },
    reducers : {
        setMonkeyStatus : (state, action) => {

            /* Get the health of the current monkey */
            const {health, index} = action.payload;

            /* update the status of the monkey only if it is alive */
            if(state.monkeysStatus[index].status !== "Dead")
            state.monkeysStatus[index].status = health < 30 ?  "Dead" : "Healthy";
        }
    }
})

export const {setMonkeyStatus} = monkeyStatusSlice.actions;

export default monkeyStatusSlice.reducer;