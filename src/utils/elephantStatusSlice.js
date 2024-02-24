import { createSlice } from "@reduxjs/toolkit";

/* This slice keeps track of status of every elephant*/

/* Initially, all the elephants will be healthy. They will not be in critical condition */
const elephantStatusSlice = createSlice ({
    name : "elephantStatusSlice",
    initialState : {
        elephantsStatus : [
        {
            isConditionCritical : false, 
            status : "HEALTHY"
        },
        {
            isConditionCritical : false,
            status : "HEALTHY"
        },
        {
            isConditionCritical : false,
            status : "HEALTHY"
        },
        {
            isConditionCritical : false, 
            status : "HEALTHY"
        },
        {
            isConditionCritical : false, 
            status : "HEALTHY"
        }]
    },
    reducers : {

        setElephantStatus : (state, action) => {

            /* Get the health of the current elephant */
            const { health, index } = action.payload;

            /* Update the health of the anims only if it is alive*/
            if(state.elephantsStatus[index].status !== "DEAD") {

                /* If health is > 70 then it is healthy */
                if(health > 70){
                    state.elephantsStatus[index].isConditionCritical = false;
                    state.elephantsStatus[index].status = "HEALTHY"
                }

                /* When health falls below 70 when it is healthy It can't walk */
                else if(health < 70 && !state.elephantsStatus[index].isConditionCritical){
                    state.elephantsStatus[index].isConditionCritical = true;
                    state.elephantsStatus[index].status = "CAN'T WALK";
                }

                /*when health falls below 70 when it's status is already can't walk then it is dead*/
                else if(health < 70 && state.elephantsStatus[index].isConditionCritical){
                    state.elephantsStatus[index].status = "DEAD";
                }
            }
            
        }
    }
});

export const {setElephantStatus} = elephantStatusSlice.actions;

export default elephantStatusSlice.reducer;