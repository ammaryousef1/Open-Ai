import { createSlice,  } from "@reduxjs/toolkit";





const UserSlice =  createSlice({
    name: 'user',
    initialState: { user : null , token: null } , 
    reducers: {
        setCredentials: (state , action) => {
            const { user , accessToken } = action.payload
            state.user = user 
            state.token = accessToken
        },
        logOut: (state , action) => {
            state.user = null
            state.token = null
        }
    }
})

export const {  setCredentials , logOut  } =  UserSlice.actions;





export default UserSlice.reducer

export const selectCurrentUser = (state) => state.UserState.user
