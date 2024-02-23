import { createSlice } from "@reduxjs/toolkit";

/* This slice keeps track of status of every elephats*/

/* Initially, all the elephants will be healthy. They will not be in critical condition */
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

            /* Get the health of the current elephant */
            const { health, index } = action.payload;

            /* Update the health of the anims only if it is alive*/
            if(state.elephantsStatus[index].status !== "Dead") {

                /* If health is > 70 then it is healthy */
                if(health > 70){
                    state.elephantsStatus[index].isConditionCritical = false;
                    state.elephantsStatus[index].status = "Healthy"
                }

                /* When health falls below 70 when it is healthy It can't walk */
                else if(health < 70 && !state.elephantsStatus[index].isConditionCritical){
                    state.elephantsStatus[index].isConditionCritical = true;
                    state.elephantsStatus[index].status = "Can't walk";
                }

                /*when health falls below 70 when it's status is already can't walk then it is dead*/
                else if(health < 70 && state.elephantsStatus[index].isConditionCritical){
                    state.elephantsStatus[index].status = "Dead";
                }
            }
            
        }
    }
});

export const {setElephantStatus} = elephantStatusSlice.actions;

export default elephantStatusSlice.reducer;