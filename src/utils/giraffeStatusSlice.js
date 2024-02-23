import {createSlice} from "@reduxjs/toolkit";

const giraffeStatusSlice = createSlice({
    name : "giraffeStatusSlice",
    initialState : {
        giraffesStatus : [{status : "Healthy"},{status : "Healthy"},
        {status : "Healthy"},{status : "Healthy"},{status : "Healthy"}]
    },
    reducers : {
        setGiraffeStatus : (state, action) => {
            const {health, index} = action.payload;
            if(state.giraffesStatus[index].status !== "Dead")
            state.giraffesStatus[index].status = health < 30 ?  "Dead" : "Healthy";
        }
    }
})

export const {setGiraffeStatus} = giraffeStatusSlice.actions;

export default giraffeStatusSlice.reducer;