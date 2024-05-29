"use client"
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userData:[],
    clicktrack:0,
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
        
    }
});

export const  { updateUserDataSlice,updateclicktrack} = UserDataSlice.actions;
export default UserDataSlice.reducer;