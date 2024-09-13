import { configureStore } from "@reduxjs/toolkit"
import timerReducer from "./Features/timerSlice"
import playCardReducer from "./Features/playCardSlice"


export  const store = configureStore({
    reducer:{
        timer: timerReducer,
        play: playCardReducer,
    },

    devTools:process.env.NODE_ENV !== "production",
});