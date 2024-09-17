import { configureStore } from "@reduxjs/toolkit"
import timerReducer from "./Features/timerSlice"
import playCardReducer from "./Features/playCardSlice"
import statusCheckReducer from "./Features/statusCheck"


export  const store = configureStore({
    reducer:{
        timer: timerReducer,
        play: playCardReducer,
        status: statusCheckReducer
    },

    devTools:process.env.NODE_ENV !== "production",
});