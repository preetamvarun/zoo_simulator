import { createSlice } from "@reduxjs/toolkit";


const elephantStatusSlice = createSlice ({
    name : "elephantStatusSlice",
    initialState : {
        elephantsStatus : [
        {
            isConditionCritical : false, 
            status : "Healthy"
        },
        {
            isConditionCritical : false,
            status : "Healthy"
        },
        {
            isConditionCritical : false,
            status : "Healthy"
        },
        {
            isConditionCritical : false, 
            status : "Healthy"
        },
        {
            isConditionCritical : false, 
            status : "Healthy"
        }]
    },
    reducers : {
        setElephantStatus : (state, action) => {
            const { health, index } = action.payload;

            if(state.elephantsStatus[index].status !== "Dead") {
                if(health > 70){
                    state.elephantsStatus[index].isConditionCritical = false;
                    state.elephantsStatus[index].status = "Healthy"
                }
                else if(health < 70 && !state.elephantsStatus[index].isConditionCritical){
                    state.elephantsStatus[index].isConditionCritical = true;
                    state.elephantsStatus[index].status = "Can't walk";
                }
                else if(health < 70 && state.elephantsStatus[index].isConditionCritical){
                    state.elephantsStatus[index].status = "Dead";
                }
            }
            
        }
    }
});

export const {setElephantStatus} = elephantStatusSlice.actions;

export default elephantStatusSlice.reducer;