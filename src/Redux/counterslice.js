import { createSlice } from "@reduxjs/toolkit";


export const counterslice = createSlice({
    name:'counter-app',
    initialState:{
        value:0
    },
    //actions are created inside reducers key as objects
    reducers:{
        //logics to update state

        //function to increase number
         increment:(state,action)=>{
            state.value += action.payload
         },
         //function to decrease number
         decrement:(state,action)=>{
            state.value -= action.payload
         },
         //function to reset 
         reset:(state)=>{
            state.value = 0
         }
    }
})

//action is required by component inoreder to update state
export const {increment , decrement ,reset} = counterslice.actions

//reducer is required at store to change the state value
export default counterslice.reducer