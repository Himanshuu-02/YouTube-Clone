import { createSlice } from "@reduxjs/toolkit";

 const appSlice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
    },
    reducers:{
        toggleState: (state)=>{
            state.isMenuOpen=!state.isMenuOpen

        },
        closeState:(state)=>{
            state.isMenuOpen=false
        }
    }
})
export default appSlice.reducer
export const {toggleState,closeState}=appSlice.actions;
