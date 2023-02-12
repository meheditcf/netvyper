import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {}
})


export const {} = authSlice.actions
export default authSlice.reducer