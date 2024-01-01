import { configureStore } from "@reduxjs/toolkit";
import counterslice from "./counterslice";

//first import configurestore from react toolkit to be recognized as a store
 export const store = configureStore({
    //reducer can only update value of state in store
    // reducer key is predefined (it is an object hold more than one reducer)
    reducer:{
        //reducer is coming from counterslice since we export reducer as export default in counterslice.js
      counter:counterslice
    }
})