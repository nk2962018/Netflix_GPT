// step 1 : create store

//step 4 : import reducerin the store
import userReducer from './userSlice';

import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
    reducer : {
        user : userReducer,
    },
})

export default appStore;