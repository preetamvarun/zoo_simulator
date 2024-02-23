import {createSlice} from "@reduxjs/toolkit";

const monkeyStatusSlice = createSlice({
    name : "monkeyStatusSlice",
    initialState : {
        monkeysStatus : [{status : "Healthy"},{status : "Healthy"},
        {status : "Healthy"},{status : "Healthy"},{status : "Healthy"}]
    },
    reducers : {
        setMonkeyStatus : (state, action) => {
            const {health, index} = action.payload;
            if(state.monkeysStatus[index].status !== "Dead")
            state.monkeysStatus[index].status = health < 30 ?  "Dead" : "Healthy";
        }
    }
})

export const {setMonkeyStatus} = monkeyStatusSlice.actions;

export default monkeyStatusSlice.reducer;