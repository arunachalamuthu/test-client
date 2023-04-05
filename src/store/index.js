import { configureStore } from "@reduxjs/toolkit";
import chatDetails from './chatDetails'

const store =configureStore({
    reducer:{
        user:chatDetails.reducer
    }
})

export default store;