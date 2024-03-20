// Step 2 : Create a user Slice

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({

    name: 'user',
    initialState : null,
    reducers:{
        addUser: (state,action) => {
            return action.payload
        },
        removeUser : (state, action) => {
            return null;
        }
    }
})

// Step 3 : export all actions
export const {addUser,removeUser} = userSlice.actions;

export default userSlice.reducer;