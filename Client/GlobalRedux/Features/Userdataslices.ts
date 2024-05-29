"use client"
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userData:[],
    clicktrack:0,
    cardData:[]
};

const UserDataSlice = createSlice({
    name: 'userDataSlice',
    initialState,
    reducers: {
        updateUserDataSlice: (state, action) => {
            state.userData= action.payload
        },
        updateclicktrack: (state, action) => {
            state.clicktrack= action.payload
        },
        updatecardData: (state, action) => {
            state.cardData= action.payload
        },
        
    }
});

export const  { updateUserDataSlice,updateclicktrack,updatecardData} = UserDataSlice.actions;
export default UserDataSlice.reducer;