import {createSlice} from "@reduxjs/toolkit";

/* This slice keeps track of status of every monkey */


/* Initially, all the monkeys will be healthy. */
const monkeyStatusSlice = createSlice({
    name : "monkeyStatusSlice",
    initialState : {
        monkeysStatus : [{status : "HEALTHY"},{status : "HEALTHY"},
        {status : "HEALTHY"},{status : "HEALTHY"},{status : "HEALTHY"}]
    },
    reducers : {
        setMonkeyStatus : (state, action) => {

            /* Get the health of the current monkey */
            const {health, index} = action.payload;

            /* update the status of the monkey only if it is alive */
            if(state.monkeysStatus[index].status !== "DEAD")
            state.monkeysStatus[index].status = health < 30 ?  "DEAD" : "HEALTHY";
        }
    }
})

export const {setMonkeyStatus} = monkeyStatusSlice.actions;

export default monkeyStatusSlice.reducer;