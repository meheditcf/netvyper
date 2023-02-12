import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {login, register} from "../api";

const initialState = {
    userDetails: [],
    loading: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserDetails: (state, action) => {
            state.userDetails = action.payload;
        }
    }
})

export const loginUser = (userDetails, history) => {
    return async (dispatch) => {
        const res = await login(userDetails);
        if (res.error) {
            console.log('user login error')
        } else {
            const {userDetails} = res.data;
            localStorage.setItem('user', JSON.stringify(userDetails))
            dispatch(setUserDetails(userDetails))
            history.push('/dashboard')
        }
    }
}

export const registerUser = (userDetails, history) => {
    return async (dispatch) => {
        const res = await register(userDetails);
        if (res.error) {
            console.log('user register error')
        } else {
            const {userDetails} = res?.data;
            localStorage.setItem('user', JSON.stringify(userDetails))
            dispatch(setUserDetails(userDetails))
            history.push('/dashboard')
        }
    }
}


export const {setUserDetails} = authSlice.actions
export default authSlice.reducer