import { createSlice } from "@reduxjs/toolkit";

 const appSlice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
    },
    reducers:{
        toggleState: (state)=>{
            state.isMenuOpen=!state.isMenuOpen

        }
    }
})
export default appSlice.reducer
export const {toggleState}=appSlice.actions;
