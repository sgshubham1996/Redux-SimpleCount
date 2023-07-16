import { configureStore } from "@reduxjs/toolkit";
import  incdecSlice  from "./reducers/Reducer1";


export default configureStore({
    reducer:{
        number : incdecSlice
    }
})