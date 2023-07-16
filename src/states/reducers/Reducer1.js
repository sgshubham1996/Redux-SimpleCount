import {createSlice} from "@reduxjs/toolkit";

export const incdecSlice = createSlice({
    name:"incdec",
    initialState:100,
    reducers:{
        Inc : (state,action)=>{
           return state +=1;
        },
        Dec: (state,action)=>{
            return state -=1;
        },
        Inc1 : (state,action)=>{
            return state +=action.payload;
         },
         Dec1: (state,action)=>{
             return state -=action.payload;
        }
    }
})

export const {Inc,Dec,Inc1,Dec1}= incdecSlice.actions;
export default incdecSlice.reducer;