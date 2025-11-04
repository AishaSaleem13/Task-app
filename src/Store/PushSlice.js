import { createSlice } from "@reduxjs/toolkit";

const UserSlice =createSlice({
    name:"User",
    initialState:{
        Username:null
    },
    reducers:{
      setReduxUsername:(state,action)=>{
state.Username=action.payload

        }
    }
})

export const { setReduxUsername } = UserSlice.actions;
export default UserSlice;