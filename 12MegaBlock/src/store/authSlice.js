import { createSlice } from "@reduxjs/toolkit";

// user authentiacated hai ya nahi hai ye me store se puchuga
const initialState = {
    status: false,
    userData: null
}


const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {

        login: (state, action)=> {
            state.status = true;
            state.userData = action.payload.userData
        },

        logout: (state, action)=> {
            state.status = false;
            state.userData = null
        }
    }
    
})

export const {login, logout} = authSlice.actions
export default authSlice.reducer